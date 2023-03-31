import { useState } from "react";
import { useNavigate, Link } from "@shopify/hydrogen/client";
import { getInputStyleClasses } from "../../../lib/styleUtils";

interface FormElements {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export function AccountLoginForm({ shopName }: { shopName: string }) {
  const navigate = useNavigate();

  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [showEmailField, setShowEmailField] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<null | string>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<null | string>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement & FormElements>) {
    event.preventDefault();

    setEmailError(null);
    setHasSubmitError(false);
    setPasswordError(null);

    if (showEmailField) {
      checkEmail(event);
    } else {
      checkPassword(event);
    }
  }

  function checkEmail(event: React.FormEvent<HTMLFormElement & FormElements>) {
    if (event.currentTarget.email.validity.valid) {
      setShowEmailField(false);
    } else {
      setEmailError("Please enter a valid email");
    }
  }

  async function checkPassword(
    event: React.FormEvent<HTMLFormElement & FormElements>
  ) {
    const validity = event.currentTarget.password.validity;
    if (validity.valid) {
      const response = await callLoginApi({
        email,
        password,
      });

      if (response.error) {
        setHasSubmitError(true);
        resetForm();
      } else {
        navigate("/account");
      }
    } else {
      setPasswordError(
        validity.valueMissing
          ? "Please enter a password"
          : "Passwords must be at least 6 characters"
      );
    }
  }

  function resetForm() {
    setShowEmailField(true);
    setEmail("");
    setEmailError(null);
    setPassword("");
    setPasswordError(null);
  }

  return (
    <div
      className="flex flex-col justify-center md:items-center py-[20px] px-4 min-h-[750px] text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(/cloudinary/fast/01.jpeg)",
      }}
    >
      <div className="flex flex-col gap-[20px] bg-white rounded-[15px] mx-auto px-[20px] md:px-[56px] py-[50px] w-full md:w-[500px]">
        <h1 className="text-[32px] md:text-[48px] font-[700] text-black">
          Login
        </h1>
        <form noValidate className=" w-full" onSubmit={onSubmit}>
          {hasSubmitError && (
            <div className="flex items-center justify-center  bg-zinc-500">
              <p className="m-4 text-s text-contrast">
                Sorry we did not recognize either your email or password. Please
                try to sign in again or create a new account.
              </p>
            </div>
          )}
          {showEmailField && (
            <>
              <EmailField
                shopName={shopName}
                email={email}
                setEmail={setEmail}
                emailError={emailError}
              />
            </>
          )}
          {!showEmailField && (
            <ValidEmail email={email} resetForm={resetForm} />
          )}
          {!showEmailField && (
            <PasswordField
              password={password}
              setPassword={setPassword}
              passwordError={passwordError}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export async function callLoginApi({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const res = await fetch(`/account/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      return {};
    } else {
      return res.json();
    }
  } catch (error: any) {
    return {
      error: error.toString(),
    };
  }
}

function EmailField({
  email,
  setEmail,
  emailError,
  shopName,
}: {
  email: string;
  setEmail: (email: string) => void;
  emailError: null | string;
  shopName: string;
}) {
  return (
    <>
      <div className="mb-3">
        <input
          className={`mb-1 input-border text-[12px] md:text-[18px] font-[600] text-black ${getInputStyleClasses(
            emailError
          )}`}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          // autoFocus
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {!emailError ? (
          ""
        ) : (
          <p className={`text-red-500 text-xs`}>{emailError} &nbsp;</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          className="h-[58px] flex w-full items-center justify-center font-[600] border-[1px] border-black border-solid 
          text-[12px] md:text-[18px] text-black bg-transparent focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[80px] mt-[10px]"
          type="submit"
        >
          Next
        </button>
      </div>
      <div className="flex items-center mt-8 border-t  border-gray-300">
        <p className="align-baseline text-sm mt-6 text-black">
          New to {shopName}? &nbsp;
          <Link className="inline underline" to="/account/register">
            Create an account
          </Link>
        </p>
      </div>
    </>
  );
}

function ValidEmail({
  email,
  resetForm,
}: {
  email: string;
  resetForm: () => void;
}) {
  return (
    <div className="mb-3 flex items-center justify-between input-border">
      <div>
        <p className="text-black">{email}</p>
        <input
          className="hidden border-black"
          type="text"
          autoComplete="username"
          value={email}
          readOnly
        ></input>
      </div>
      <div>
        <button
          className="inline-block align-baseline text-sm underline text-black mb-[5px]"
          type="button"
          onClick={resetForm}
        >
          Change email
        </button>
      </div>
    </div>
  );
}

function PasswordField({
  password,
  setPassword,
  passwordError,
}: {
  password: string;
  setPassword: (password: string) => void;
  passwordError: null | string;
}) {
  return (
    <>
      <div className="mb-3">
        <input
          className={`mb-1 text-[12px] md:text-[18px] font-[600] text-black input-border ${getInputStyleClasses(
            passwordError
          )}`}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          aria-label="Password"
          value={password}
          minLength={8}
          required
          // eslint-disable-next-line jsx-a11y/no-autofocus
          // autoFocus
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {!passwordError ? (
          ""
        ) : (
          <p className={`text-red-500 text-xs`}> {passwordError} &nbsp;</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="h-[58px] flex w-full items-center justify-center font-[600] border-[1px] border-black border-solid 
          text-[12px] md:text-[18px] text-black bg-transparent focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[80px] mt-[10px]"
          type="submit"
        >
          Sign in
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex-1"></div>
        <Link
          className="inline-block align-baseline text-sm text-black"
          to="/account/recover"
        >
          Forgot password
        </Link>
      </div>
    </>
  );
}

import { useState } from "react";
import { useNavigate, Link } from "@shopify/hydrogen/client";

import { emailValidation, passwordValidation } from "../../../lib/utils";

import { callLoginApi } from "./AccountLoginForm.client";
import { getInputStyleClasses } from "../../../lib/styleUtils";

interface FormElements {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export function AccountCreateForm() {
  const navigate = useNavigate();

  const [submitError, setSubmitError] = useState<null | string>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState<null | string>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<null | string>(null);

  async function onSubmit(
    event: React.FormEvent<HTMLFormElement & FormElements>
  ) {
    event.preventDefault();

    setEmailError(null);
    setPasswordError(null);
    setSubmitError(null);

    const newEmailError = emailValidation(event.currentTarget.email);
    if (newEmailError) {
      setEmailError(newEmailError);
    }

    const newPasswordError = passwordValidation(event.currentTarget.password);
    if (newPasswordError) {
      setPasswordError(newPasswordError);
    }

    if (newEmailError || newPasswordError) {
      return;
    }

    const accountCreateResponse = await callAccountCreateApi({
      email,
      password,
    });

    if (accountCreateResponse.error) {
      setSubmitError(accountCreateResponse.error);
      return;
    }

    // this can be avoided if customerCreate mutation returns customerAccessToken
    await callLoginApi({
      email,
      password,
    });

    navigate("/account");
  }

  return (
    <div
      className="flex flex-col justify-center items-center py-[20px] px-4 min-h-[750px] text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/samtufail726/image/upload/v1678719431/kodiak/signup.png)",
      }}
    >
      <div className="flex flex-col gap-[20px] bg-white rounded-[15px] mx-auto px-[56px] py-[50px] w-[500px]">
        <h1 className="text-4xl text-black">Sign-Up</h1>
        <form
          noValidate
          className="flex flex-col gap-[20px]"
          onSubmit={onSubmit}
        >
          {submitError && (
            <div className="flex items-center justify-center mb-6 bg-zinc-500">
              <p className="m-4 text-s text-contrast">{submitError}</p>
            </div>
          )}
          <div className="mb-3">
            <input
              className={`mb-1 border-b-[1px] border-solid border-black text-[18px] font-[600] text-black input-border ${getInputStyleClasses()}`}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Name"
              aria-label="Name"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            {!emailError ? (
              ""
            ) : (
              <p className={`text-red-500 text-xs`}>{emailError} &nbsp;</p>
            )}
          </div>
          <div className="mb-3">
            <input
              className={`mb-1 border-b-[1px] border-solid border-black text-[18px] font-[600] text-black input-border ${getInputStyleClasses(
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
              autoFocus
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
          <div className="mb-3">
            <input
              className={`mb-1 border-b-[1px] border-solid border-black text-[18px] font-[600] text-black input-border ${getInputStyleClasses(
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
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            {!passwordError ? (
              ""
            ) : (
              <p className={`text-red-500 text-xs`}>{passwordError} &nbsp;</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`h-[58px] flex w-full items-center justify-center font-[600] border-[1px] border-black border-solid 
          text-[18px] text-black bg-transparent focus:bg-[rgba(255,255,255,0.8)]
          hover:bg-[rgba(255,255,255,0.8)] transition-all rounded-[80px] `}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center mt-4">
        <p className="align-baseline text-[18px] font-[600] text-white">
          Already a memeber? &nbsp;
          <Link className="inline underline" to="/account">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export async function callAccountCreateApi({
  email,
  password,
  firstName,
  lastName,
}: {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}) {
  try {
    const res = await fetch(`/account/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    });
    if (res.status === 200) {
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

import { axios } from ".";

export const newsLetterSignup = async ({ email = "" }) => {
  try {
    const contact = await axios.post("/contacts/", {
      email,
      tags: ["news-letter"],
      source: "news-letter",
    });
    return contact;
  } catch (error) {
    console.log(error);
  }
};

export const subscribe = async ({
  setLoading,
  email,
  setEmail,
  message,
}: any) => {
  setLoading(true);
  if (!email) {
    message.error("Please enter email to continue");
  } else {
    await newsLetterSignup({ email });
    setEmail("");
    message.success(
      "Congratulations! You are successfully subscribed to our newsletter. We'll keep you in loop about new products."
    );
  }
  setLoading(false);
};

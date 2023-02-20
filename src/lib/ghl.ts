import { axios } from ".";

export const newsLetterSignup = async ({
  email = "",
  tags = ["news-letter"],
}) => {
  try {
    const contact = await axios.post("/contacts/", {
      email,
      tags,
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
  tags,
}: any) => {
  setLoading(true);
  if (!email) {
    message.error("Please enter email to continue");
  } else {
    await newsLetterSignup({ email, tags });
    setEmail("");
    message.success(
      "Congratulations! You are successfully subscribed to our newsletter. We'll keep you in loop about new products."
    );
  }
  setLoading(false);
};

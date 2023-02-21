import { useEffect } from "react";

export const Chat = () => {
  useEffect(() => {
    if (document.body) {
      const element = document.createElement("chat-widget");
      // @ts-ignore
      element.setAttribute(
        "style",
        "--chat-widget-primary-color: #188bf6; --chat-widget-active-color:#188bf6 ;--chat-widget-bubble-color: #188bf6"
      );
      element.setAttribute("location-id", "lxKfNBygoWq9xHd8m3Ui");
      element.setAttribute(
        "prompt-avatar",
        "https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png"
      );
      document.body.appendChild(element);
    }
  }, []);
  return <></>;
};

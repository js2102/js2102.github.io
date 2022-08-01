import { css } from "@emotion/css";

export const Footer = ({ footerName }) => {
  const footerStyle = css({
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f8fa",
  });

  return (
    <div className={footerStyle}>
      © Developer {footerName}, Powered By Gatsby.
    </div>
  );
};

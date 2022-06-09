import { css } from "@emotion/css";

export const Header = () => {
  const headerStyle = css({
    height: "50px",
    backgroundColor: "#f6f8fa",
  });

  return <div className={headerStyle}>Header</div>;
};

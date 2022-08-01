import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/css";

export const Header = ({ headerName }) => {
  const headerStyle = css({
    height: "60px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f6f8fa",
    padding: "0 6%",

    ".contents": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",

      ".headerName": {
        color: "inherit",
        fontSize: "32px",
        textDecoration: "none",
      },
    },
  });

  return (
    <div className={headerStyle}>
      <div className="contents">
        <a className="headerName" href="/">
          {headerName}
        </a>
        <div className="logo">
          <StaticImage
            className="image"
            src="../../images/github.png"
            alt="github"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

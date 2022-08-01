import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/css";

export const Introduction = () => {
  const introductionWrapper = css({
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#525E75",
  });

  const introduction = css({
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    ".image": {
      width: 150,
      height: 150,
      borderRadius: "50%",
    },

    ".message": {
      margin: "36px 0 0 24px",

      ".prime": {
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
      },
      ".sub": {
        color: "white",
        fontSize: "32px",
        paddingTop: "8px",
      },
    },

    "@media only screen and (max-width: 768px)": {
      width: "75%",

      ".message": {
        margin: "36px 0 0 24px",

        ".prime": {
          fontSize: "20px",
        },
        ".sub": {
          fontSize: "24px",
        },
      },
    },
  });

  return (
    <div className={introductionWrapper}>
      <div className={introduction}>
        <StaticImage
          className="image"
          src="../../images/introduction_image.jpg"
          alt="introduction-image"
        />
        <div className="message">
          <div className="prime">안녕하세요!</div>
          <div className="sub">
            JavaScript로 개발을 즐겨하는 개발자 JS입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

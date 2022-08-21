import { css } from "@emotion/css";

export const Image = ({ src, alt = "이미지", width = "100%" }) => (
  <div className={ImageStyle}>
    <img src={src} alt={alt} width={width} />
  </div>
);

const ImageStyle = css({
  margin: "16px 0",

  "> img": {
    maxWidth: "70%",
  },

  "@media only screen and (max-width: 768px)": {
    "> img": {
      width: "100%",
      maxWidth: "500px",
    },
  },
});

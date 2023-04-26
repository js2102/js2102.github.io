import { css } from "@emotion/css";

export const SubIndex = ({ title, children }) => (
  <div className={SubIndexStyle}>
    <div className="title">{title}</div>
    <div className="body">{children}</div>
  </div>
);

const SubIndexStyle = css({
  margin: "20px",
  ".title": {
    fontSize: "18px",
    fontWeight: 500,
  },
  ".body": {
    margin: "12px 24px",
  },
});

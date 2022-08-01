import { css } from "@emotion/css";
import { Link } from "./Link";

export const Source = ({ lists }) => (
  <div className={SourceStyle}>
    <h2>출처</h2>
    <ul>
      {lists.map((list, index) => (
        <li key={index}>
          <Link link={list[1]}>{list[0]}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const SourceStyle = css({
  borderTop: "4px solid #646fd4",
  padding: "24px 0",
  margin: "64px 0",
});

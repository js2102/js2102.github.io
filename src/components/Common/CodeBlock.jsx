import { css } from "@emotion/css";

export function CodeBlock({ children }) {
  return (
    <pre className={CodeBlockStyle}>
      <code>{children}</code>
    </pre>
  );
}

const CodeBlockStyle = css({
  width: "fit-content",
  fontSize: "16px",
  background: "#F8F9FA",
  borderRadius: "3px",
  marginLeft: "16px",
  padding: "8px",

  "@media only screen and (max-width: 768px)": {
    maxWidth: "400px",
    whiteSpace: "pre-wrap",
  },
});

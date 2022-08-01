export const Highlight = ({ color = "#E9ECEF", children }) => (
  <span
    style={{
      background: color,
      lineHeight: "28px",
      borderRadius: "3px",
      padding: "2px 4px",
    }}>
    {children}
  </span>
);

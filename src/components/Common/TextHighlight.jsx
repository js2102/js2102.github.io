export const TextHighlight = ({
  color,
  paddingX = 0,
  fontWeight = 400,
  children,
}) => (
  <span
    style={{
      color: color,
      fontWeight: fontWeight,
      borderRadius: "2px",
      paddingLeft: `${paddingX}px`,
    }}>
    {children}
  </span>
);

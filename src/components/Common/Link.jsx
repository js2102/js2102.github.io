export const Link = ({ link, target = "_blank", children }) => (
  <a
    href={link}
    target={target}
    style={{
      color: "#646FD4",
      fontWeight: "700",
      textDecoration: "none",
      padding: "0 8px",
    }}>
    {children}
  </a>
);

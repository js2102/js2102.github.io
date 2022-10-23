export const Title = ({ id, title }) => (
  <h2 id={id} style={{ marginTop: "84px" }}>
    {title}
  </h2>
);

export const Subtitle = ({ id, title }) => (
  <h3 id={id} style={{ marginTop: "64px" }}>
    {title}
  </h3>
);

export const ThirdTitle = ({ title }) => (
  <h4 style={{ marginTop: "48px" }}>{title}</h4>
);

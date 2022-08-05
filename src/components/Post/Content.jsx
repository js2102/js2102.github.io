import { css } from "@emotion/css";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const Wrapper = ({ children }) => {
  const postWrapperStyle = css({
    margin: "48px 0",
  });

  return <div className={postWrapperStyle}>{children}</div>;
};

export const Header = ({ image, imageAlt, title, keywords, date }) => {
  const headerStyle = css({
    width: "70%",
    position: "relative",
    margin: "0 auto",

    ".imageWrapper": {
      width: "100%",
      height: "275px",
      overflow: "hidden",
      filter: "brightness(0.25)",

      ".image": {
        width: "inherit",
        height: "inherit",
      },
    },

    ".header": {
      position: "absolute",
      top: 0,
      padding: "64px",

      ".title": {
        color: "white",
        fontSize: "52px",
        fontWeight: 700,
      },

      ".keyword-wrapper": {
        display: "flex",
        margin: "8px -5px 24px -5px",

        ".keyword": {
          backgroundColor: "#EEEEEE",
          color: "#646FD4",
          fontSize: "16px",
          fontWeight: 700,
          padding: "3px 5px",
          borderRadius: "3px",
          margin: "2.5px 5px",
        },
      },

      ".date": {
        color: "white",
        fontSize: "20px",
      },
    },

    "@media only screen and (max-width: 1444px)": {
      ".header": { padding: "40px" },
    },

    "@media only screen and (max-width: 768px)": {
      width: "100%",

      ".imageWrapper": {
        height: "250px",

        ".image": {
          width: "inherit",
          height: "inherit",
        },
      },

      ".header": {
        padding: "32px",

        ".title": {
          fontSize: "36px",
        },
      },
    },
  });

  return (
    <div className={headerStyle}>
      <div className="imageWrapper">
        <GatsbyImage className="image" image={image} alt={imageAlt} />
      </div>
      <div className="header">
        <div className="title">{title}</div>
        <div className="keyword-wrapper">
          {keywords.map((keyword) => (
            <div className="keyword" key={keyword}>
              {keyword}
            </div>
          ))}
        </div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

export const Body = ({ body }) => {
  const bodyWrapper = css({
    width: "70%",
    margin: "64px auto",

    ul: {
      paddingLeft: "20px",
    },
    li: {
      marginTop: "8px",
    },
    pre: {
      width: "fit-content",
      background: "#F8F9FA",
      marginLeft: "16px",
      padding: "8px 12px",
    },
    code: {
      fontSize: "16px",
    },

    "@media only screen and (max-width: 768px)": {
      width: "90%",
    },
  });

  return (
    <div className={bodyWrapper}>
      <MDXRenderer className="body">{body}</MDXRenderer>
    </div>
  );
};

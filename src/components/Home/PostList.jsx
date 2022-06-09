import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { css } from "@emotion/css";

export const Wrapper = ({ children }) => {
  const WrapperStyle = css({
    width: "50%",
    margin: "64px auto 0 auto",
  });

  return <div className={WrapperStyle}>{children}</div>;
};

export const Keyword = ({ keywordCount, keywords }) => {
  const keywordWrapperStyle = css({
    display: "flex",
  });

  const keywordStyle = css({
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    color: "#646FD4",
    fontWeight: "bold",
    borderRadius: "1rem",
    padding: "6px 10px",

    "&:not(:first-child)": {
      marginLeft: "8px",
    },
  });

  return (
    <div className={keywordWrapperStyle}>
      <div className={keywordStyle}>All ({keywordCount})</div>
      {keywords.map((keyword) => (
        <div className={keywordStyle} key={keyword[0]}>
          {keyword[0]} ({keyword[1]})
        </div>
      ))}
    </div>
  );
};

export const Post = ({ mdx }) => {
  const postWrapper = css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    margin: "48px 0 64px 0",
  });

  const postItemWrapper = css({
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.15)",
    transition: "0.3s box-shadow",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    },

    ".image": {
      width: "100%",
      height: "200px",
      borderRadius: "10px 10px 0 0",
    },

    ".content": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "15px",

      ".title": {
        fontSize: "20px",
        fontWeight: 700,
      },

      ".date": {
        fontSize: "14px",
        fontWeight: 400,
        opacity: 0.5,
      },

      ".keyword-wrapper": {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "10px",
        margin: "10px -5px",

        ".keyword": {
          backgroundColor: "#EEEEEE",
          color: "#646FD4",
          fontSize: "14px",
          fontWeight: 700,
          margin: "2.5px 5px",
          borderRadius: "3px",
          padding: "3px 5px",
        },
      },

      ".summary": {
        display: "-webkit-box",
        overflow: "hidden",
        marginTop: "auto",
        textOverflow: "ellipsis",
        whiteSpace: "normal",
        overflowWrap: "break-word",
        fontSize: "16px",
        opacity: 0.8,
      },
    },
  });

  return (
    <div className={postWrapper}>
      {mdx.map((node) => (
        <div className={postItemWrapper} key={node.id}>
          <GatsbyImage
            className="image"
            image={getImage(node.frontmatter.hero_image.childrenImageSharp[0])}
            alt={node.frontmatter.hero_image_alt}
          />
          <div className="content">
            <div className="title">{node.frontmatter.title}</div>
            <div className="date">{node.frontmatter.date}</div>
            <div className="keyword-wrapper">
              {node.frontmatter.tags.map((tag) => (
                <div className="keyword" key={tag}>
                  {tag}
                </div>
              ))}
            </div>
            <div className="summary">{node.frontmatter.summary}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

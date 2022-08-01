import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { css, cx } from "@emotion/css";

export const Wrapper = ({ children }) => {
  const WrapperStyle = css({
    width: "50%",
    minWidth: "700px",
    minHeight: `calc(${window.innerHeight}px - 520px)`,
    margin: "64px auto",

    "@media only screen and (max-width: 768px)": {
      width: "70%",
      minWidth: 0,
    },
  });
  return <div className={WrapperStyle}>{children}</div>;
};

export const Keyword = ({ keywordCount, keywords, query }) => {
  const keywordWrapperStyle = css({
    display: "flex",
    listStyle: "none",
    height: "30px",
    lineHeight: "19px",
    padding: 0,

    overflow: "auto",
    whiteSpace: "nowrap",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  });

  const keywordStyle = css({
    backgroundColor: "#EEEEEE",
    color: "#646FD4",
    fontWeight: "bold",
    borderRadius: "1rem",
    padding: "6px 10px",

    "&:not(:first-child)": {
      marginLeft: "8px",
    },
  });

  const activeKeywordStyle = css({
    backgroundColor: "#646FD4",
    color: "#EEEEEE",
  });

  const keywordLinkStyle = css({
    color: "inherit",
    textDecoration: "none",
  });

  return (
    <ul className={keywordWrapperStyle}>
      <li
        className={cx(
          keywordStyle,
          (!query || query === "All") && activeKeywordStyle
        )}>
        <a className={keywordLinkStyle} href={`?keyword=All`}>
          All({keywordCount})
        </a>
      </li>
      {keywords.map((keyword) => (
        <li
          className={cx(
            keywordStyle,
            query === keyword[0] && activeKeywordStyle
          )}
          key={keyword[0]}>
          <a className={keywordLinkStyle} href={`?keyword=${keyword[0]}`}>
            {keyword[0]}({keyword[1]})
          </a>
        </li>
      ))}
    </ul>
  );
};

export const Post = ({ posts }) => {
  const postWrapper = css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    margin: "48px 0 64px 0",

    "@media only screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
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

    ".link": {
      textDecoration: "none",
      color: "inherit",
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
      padding: "10px 15px",

      ".title": {
        fontSize: "20px",
        fontWeight: 700,
        margin: "5px 0",
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
        margin: "5px -5px",

        ".keyword": {
          backgroundColor: "#EEEEEE",
          color: "#646FD4",
          fontSize: "14px",
          fontWeight: 700,
          margin: "3px 5px",
          borderRadius: "3px",
          padding: "3px 5px",
        },
      },

      ".summary": {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "normal",
        overflowWrap: "break-word",
        fontSize: "16px",
        opacity: 0.8,
        marginBottom: "8px",
      },
    },
  });

  return (
    <div className={postWrapper}>
      {posts.map((post) => (
        <div className={postItemWrapper} key={post.id}>
          <Link className="link" to={`/post/${post.slug}`}>
            <GatsbyImage
              className="image"
              image={getImage(post.frontmatter.thumbnail.childrenImageSharp[0])}
              alt={post.frontmatter.thumbnail_alt}
            />
            <div className="content">
              <div className="keyword-wrapper">
                {post.frontmatter.keywords.map((keyword) => (
                  <div className="keyword" key={keyword}>
                    {keyword}
                  </div>
                ))}
              </div>
              <div className="title">{post.frontmatter.title}</div>
              <div className="summary">{post.frontmatter.summary}</div>
              <div className="date">{post.frontmatter.date}</div>
              {/* <div className="summary">{post.frontmatter.summary}</div> */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

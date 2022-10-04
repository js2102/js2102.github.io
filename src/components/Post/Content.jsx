import React, {useState} from "react";

import { css, cx } from "@emotion/css";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import useIntersectionObservation from "../../hooks/useIntersectionObservation";

export const Wrapper = ({ children }) => {
  const postWrapperStyle = css({
    margin: "48px 0",
  });

  return <div className={postWrapperStyle}>{children}</div>;
};

export const Header = ({ image, imageAlt, title, keywords, date }) => {
  const headerStyle = css({
    width: "80%",
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

export const BodyAndTocWrapper = ({children}) => {
  const bodyAndTocWrapperStyle = css({
    display: "flex",
    width: "80%",
    margin: "64px auto",
  });

  return <div className={bodyAndTocWrapperStyle}>{children}</div>
};

export const Body = ({ body }) => {
  const bodyWrapper = css({
    flex: "0 0 70%",
    ul: {
      paddingLeft: "20px",
    },
    li: {
      marginTop: "8px",
    },
    pre: {
      width: "fit-content",
      whiteSpace: "pre-wrap",
      background: "#F8F9FA",
      marginLeft: "16px",
      padding: "8px 12px",
    },
    code: {
      fontSize: "16px",
    },

    "@media only screen and (max-width: 768px)": {
      width: "90%",
      flexBasis: "100%",
    },
  });

  return (
    <div className={bodyWrapper}>
      <MDXRenderer className="body">{body}</MDXRenderer>
    </div>
  );
};

export const Toc = ({ toc }) => {
  const [activeId, setActiveId] = useState("content1");
  useIntersectionObservation(setActiveId);

  const TocWrapperStyle = css({
    flex: "0 0 30%",

    ".tocStyle": {
      position: "sticky",
      top: "48px",
      paddingLeft: "24px",
      borderLeft: "2px solid #646FD4",
      margin: "32px 0 0 64px",

      ".contentWrapper": {
        lineHeight: "28px",

        ".contentMain, .contentSub": {
          display: "block",
          color: "black",
          textDecoration: "none",
        },

        ".contentMain": {
          fontSize: "16px",
          fontWeight: 600,
        },
        
        ".contentSub": {
          fontSize: "15px",
          paddingLeft: "16px",
        },

        ".tocActive": {
          color: "#646FD4"
        }
      },

      "@media only screen and (max-width: 768px)": {
        display: "none",
      },
    }
  });

  const tocDatas = toc.map((content) => {
    const contentDatas = content.split("*");
    const data = {main: "", sub: []};
    contentDatas.forEach((contentData, idx) => {
      if (idx === 0) data.main = contentData.trim();
      else data.sub.push(contentData.trim());
    })
    return data;
  })

  return (
    <div className={TocWrapperStyle}>
      <div className="tocStyle">
        {tocDatas.map((toc, mainIdx) => (
          <div className="contentWrapper" key={mainIdx}>
            <a 
              className={cx("contentMain", activeId === `${mainIdx + 1}` && "tocActive")}
              href={`#${mainIdx + 1}`}
              id={`#${mainIdx + 1}`}
            >
              {toc.main}
            </a>
            {toc.sub.map((sub, subIdx) => (
              <a 
                className={cx("contentSub", activeId === `${mainIdx + 1}.${subIdx + 1}` && "tocActive")}
                href={`#${mainIdx + 1}.${subIdx + 1}`}
                id={`#${mainIdx + 1}`}
                key={subIdx}
              >
                {sub}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
};
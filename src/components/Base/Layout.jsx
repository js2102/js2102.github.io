import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/css";

import { Meta } from "./Meta";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ pageTitle, children }) => {
  const globalCSS = css({
    fontFamily:
      "Fira Mono, source-code-pro, Menlo, Monaco, Consolas, Courier New",
  });

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={globalCSS}>
      <Meta pageTitle={`${pageTitle} | ${data.site.siteMetadata.title}`}></Meta>
      <Header headerName={data.site.siteMetadata.title} />
      {children}
      <Footer footerName={data.site.siteMetadata.title} />
    </div>
  );
};

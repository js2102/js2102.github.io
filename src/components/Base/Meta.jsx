import { useStaticQuery, graphql } from "gatsby";
import { HelmetProvider, Helmet } from "react-helmet-async";

export const Meta = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta
          name="google-site-verification"
          content="76no5Snw6K61dmZcApdTpK0_JI64Uj53fO4FKNm1ETw"
        />

        <html lang="ko" />
      </Helmet>
    </HelmetProvider>
  );
};

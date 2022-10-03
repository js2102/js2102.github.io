import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout } from "../../components/Base/Layout";
import * as Content from "../../components/Post/Content";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Content.Wrapper>
        <Content.Header
          image={getImage(data.mdx.frontmatter.thumbnail)}
          imageAlt={data.mdx.frontmatter.thumbnail_alt}
          title={data.mdx.frontmatter.title}
          keywords={data.mdx.frontmatter.keywords}
          date={data.mdx.frontmatter.date}
        />
        <Content.BodyAndTocWrapper>
          <Content.Body body={data.mdx.body} />
          <Content.Toc toc={data.mdx.frontmatter.toc} />
        </Content.BodyAndTocWrapper>
      </Content.Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        keywords
        toc
        thumbnail_alt
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout } from "../components/Base/Layout";
import { Header } from "../components/Base/Header";
import { Footer } from "../components/Base/Footer";
import { Introduction } from "../components/Home/Introduction";
import * as PostList from "../components/Home/PostList";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            date
            tags
            summary
            hero_image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            hero_image_alt
          }
        }
        pageInfo {
          totalCount
        }
      }
    }
  `);

  const keywordCount = data.allMdx.pageInfo.totalCount;
  const allMdxNodes = data.allMdx.nodes;
  const keywordRawData = allMdxNodes
    .map((mdx) => mdx.frontmatter.tags.map((tag) => tag))
    .flat();
  const keywordData = {};
  keywordRawData.forEach((data) => {
    keywordData[data] = (keywordData[data] || 0) + 1;
  });
  const keywords = Object.entries(keywordData);

  return (
    <>
      <Layout pageTitle="Home">
        <Header />
        <Introduction />
        <PostList.Wrapper>
          <PostList.Keyword keywordCount={keywordCount} keywords={keywords} />
          <PostList.Post mdx={allMdxNodes} />
        </PostList.Wrapper>
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;

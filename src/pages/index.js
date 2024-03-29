import { graphql } from "gatsby";
import React, { useState } from "react";

import { Layout } from "../components/Base/Layout";
import { Introduction } from "../components/Home/Introduction";
import * as PostList from "../components/Home/PostList";

import useResizeObserver from "../hooks/useResizeObserver";

const IndexPage = ({ data }) => {
  const PAGE_PER_POST = 4;

  const [isMobile] = useResizeObserver(false);

  const keywordCount = data.allMdx.pageInfo.totalCount;
  const allMdxNodes = data.allMdx.nodes;
  const keywordRawData = allMdxNodes
    .map((mdx) => mdx.frontmatter.keywords.map((keyword) => keyword))
    .flat();
  const keywordData = {};
  keywordRawData.forEach((data) => {
    keywordData[data] = (keywordData[data] || 0) + 1;
  });
  const keywords = Object.entries(keywordData);
  keywords.sort((a, b) => b[1] - a[1]);

  const [selectKeyword, setSelectKeyword] = useState("All");

  const filteredPosts =
    !selectKeyword || selectKeyword === "All"
      ? allMdxNodes
      : allMdxNodes.filter((mdx) =>
          mdx.frontmatter.keywords.includes(selectKeyword)
        );

  const [showMoreCount, setShowMoreCount] = useState(0);
  const visibleResult = filteredPosts.slice(
    0,
    PAGE_PER_POST * (showMoreCount + 1)
  );

  return (
    <Layout pageTitle="Home">
      <Introduction />
      <PostList.Wrapper>
        <PostList.Keyword
          keywordCount={keywordCount}
          keywords={keywords}
          selectKeyword={selectKeyword}
          setSelectKeyword={setSelectKeyword}
        />
        <PostList.Post posts={visibleResult} />
        {isMobile
          ? null
          : filteredPosts.length > (showMoreCount + 1) * PAGE_PER_POST && (
              <PostList.MoreButton
                onClick={() => setShowMoreCount(showMoreCount + 1)}
              />
            )}
      </PostList.Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___modified_date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          initial_date
          modified_date
          keywords
          summary
          deploy
          thumbnail {
            childrenImageSharp {
              gatsbyImageData
            }
          }
          thumbnail_alt
        }
      }
      pageInfo {
        totalCount
      }
    }
  }
`;

export default IndexPage;

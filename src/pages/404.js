import React from "react";
import { css } from "@emotion/css";

import { Layout } from "../components/Base/Layout";

const NotFoundPage = () => {
  const Wrapper = css({
    height: `calc(${window.innerHeight}px - 120px)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "> div": {
      fontSize: "24px",

      "&:first-child": {
        marginBottom: "24px",
      },
    },
  });

  return (
    <Layout pageTitle="Not Found">
      <div className={Wrapper}>
        <div>Not Found.</div>
        <div>페이지를 찾을 수 없습니다.</div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

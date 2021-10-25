import { APP_DESCRIPTION, APP_NAME } from "configs/appConfig";
import NextHead from "next/head";
import * as React from "react";

export const PageHead: React.FC = () => {
  return (
    <NextHead>
      <title>{APP_NAME}</title>
      <meta name="description" content={APP_DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

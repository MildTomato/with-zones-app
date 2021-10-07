// @flow strict

import type { ConfigType } from "../ConfigType.flow";

module.exports = ({
  getStaticConfig() {
    return {
      repository: "git@github.com:mildtomato/with-zones-blog-mirror.git",
    };
  },
  getPathMappings() {
    return new Map([
      ["blog/__github__/oss.jsconfig.json", "oss.jsconfig.json"],
      ["blog/", ""],
      ["common/", "common/"],
    ]);
  },
  getStrippedFiles() {
    return new Set([
      /^\jsconfig\.json$/, // replaced by `__github__/oss.jsconfig.json` for OSS
      /__github__/,
    ]);
  },
  getBranchConfig() {
    return {
      source: "main",
      destination: "main",
    };
  },
}: ConfigType);

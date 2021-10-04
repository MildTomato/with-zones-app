// @flow strict

import type { ConfigType } from "../ConfigType.flow";

module.exports = ({
  getStaticConfig() {
    return {
      repository: "git@github.com:phamhieu/with-zones-blog-mirror.git",
    };
  },
  getPathMappings() {
    return new Map([
      ["blog/__github__/oss.jsconfig.json", "jsconfig.json"],
      ["blog/", ""],
      ["common/", "common/"],
    ]);
  },
  getStrippedFiles() {
    return new Set([/__github__/]);
  },
  getBranchConfig() {
    return {
      source: "main",
      destination: "main",
    };
  },
}: ConfigType);

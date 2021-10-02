// @flow strict

import type { ConfigType } from "../ConfigType.flow";

module.exports = ({
  getStaticConfig() {
    return {
      repository: "git@github.com:phamhieu/with-zones-blog-mirror.git",
    };
  },
  getPathMappings() {
    return new Map([["src/blog/", ""]]);
  },
}: ConfigType);

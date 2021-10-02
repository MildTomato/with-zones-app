// @flow strict-local

import path from "path";

import testExportedPaths from "./testExportedPaths";

testExportedPaths(path.join(__dirname, "..", "blog.js"), [
  ["src/blog/package.json", "package.json"],
  ["src/blog/pages/index.js", "pages/index.js"],
  ["src/blog/public/static/nextjs.png", "public/static/nextjs.png"],

  // invalid cases:
  ["src/home/package.json", undefined], // correctly deleted
  ["package.json", undefined], // correctly deleted
]);

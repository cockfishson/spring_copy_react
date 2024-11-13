export default {
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$",
  transform: {
    "^.+\\.js$": ["babel-jest", { rootMode: "upward" }],
  },
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
};

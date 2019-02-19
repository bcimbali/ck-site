const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/BrettCimbalik/code/ck-site/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-components-portfolio-layout-js": hot(preferDefault(require("/Users/BrettCimbalik/code/ck-site/src/components/portfolioLayout.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/BrettCimbalik/code/ck-site/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/BrettCimbalik/code/ck-site/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/BrettCimbalik/code/ck-site/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/BrettCimbalik/code/ck-site/src/pages/portfolio.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/BrettCimbalik/code/ck-site/src/pages/resume.js")))
}


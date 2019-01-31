// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/BrettCimbalik/code/ck-site/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/BrettCimbalik/code/ck-site/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/BrettCimbalik/code/ck-site/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-about-js": () => import("/Users/BrettCimbalik/code/ck-site/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/BrettCimbalik/code/ck-site/.cache/data.json")


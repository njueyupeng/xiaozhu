const utils = require("./utils")

module.exports = {
  title: "frontend-bookmarks",
  description: "个人前端收藏夹",
  base: "/frontend-bookmarks/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "库",
        link: "/repository/"
      },
      {
        text: "文章",
        link: "/article/"
      },
      // { text: '工具', link: 'https://google.com' },
      {
        text: "网站",
        link: "/website/"
      },
      {
        text: "面试",
        link: "/interview/"
      },
      {
        text: "Blog",
        link: "/blog/"
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: "上次更新",
    repo: "njueyupeng/frontend-bookmarks",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public"
      }
    }
  },
  ga: "UA-109340118-1",
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-include"))
    }
  }
}
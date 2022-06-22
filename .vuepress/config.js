//.vuepress/config.js
const fs = require("fs");
const path = require("path");

module.exports = {
  // ベースURL
  base: "/blog/",
  // 多言語対応
  locales: {
    "/": {
      lang: "ja-JP",
    },
  },
  // タイトル
  title: "VanillaNote",
  // 説明
  description: "Information is not knowledge.",

  // HEAD
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],

  // 開発用サーバー
  host: "0.0.0.0",
  port: "8080",
  // クライアントの一時ディレクトリ
  //temp: "/path/to/@vuepress/core/.temp",
  // 出力ディレクトリ
  dest: ".vuepress/dist",
  // 不明の設定
  shouldPrefetch: () => true,
  // キャッシュ(webpack高速化)
  //cache: true,
  // 監視ファイル(vuepress再構築,リアルタイム更新)
  extraWatchFiles: [".*.md"],
  // ファイルが見つからないとき探しに行くパターン
  pattern: ["**/*.md", "**/*.vue"],
  plugins: [
    [
      "reading-progress",
      {
        readingDir: ["docs"],
      },
    ],
    [
      "vuepress-plugin-code-copy",
      {
        backgroundTransition: true,
        successText: "コピー完了!",
        staticIcon: false,
      },
    ],
  ],
  markdown: {
    //extractHeaders: ["h2", "h3", "h4"],
    lineNumbers: true,
    toc: { includeLevel: [2, 3, 4, 5, 6] },
    anchor: {
      permalink: true,
      permalinkSymbol: "#",
    },
    linkify: true,
    externalLinks: { target: "_blank", rel: "noopener noreferrer" },
    config: (md) => {
      md.use(require("markdown-it-mark"));
    },
    plugins: [
      // 語彙説明
      // *[説明したい語彙]:ホバー表示文
      "markdown-it-abbr",
      // マーカー
      // ==マークしたい文章==
      // インライン<mark>マークしたい文章</mark>
      "markdown-it-mark",
      // CodePenとJSFiddleの埋め込み対応
      // @[codepen](iframe src)
      // @[jsfiddle](iframe src)
      "markdown-it-playground",
      // YouTubeとVimeoの埋め込み対応
      // @[youtube](movie id)
      // @[vimeo](movie id)
      "markdown-it-video",
    ],
  },
  theme: "reco",
  themeConfig: {
    type: "blog",
    mode: "dark",
    modePicker: false,
    repo: 'https://github.com/imuradevelopment/blog',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'このページを編集する',
    nav: [
      { text: "ホーム", link: "/", icon: "reco-home" },
      {
        text: "記事一覧",
        icon: "reco-message",
        link: "/docs/",
      },
    ],
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
    searchMaxSuggestions: 10,
    subSidebar: "auto",
    // ブログ設定
    blogConfig: {
      category: {
        location: 2,
        text: "カテゴリー",
      },
      tag: {
        location: 3,
        text: "タグ",
      },
    },
    friendLink: [
    ],
    search: true,
    lastUpdated: "最終更新",
    // 作者
    // author: "Miyaura",
    // 作者アバター
    // authorAvatar: "/avatar.jpg",
    startYear: "2020",
    sidebar: {
      "/docs/": getSidebar("./docs", ".md", ".vue"),
    },
  },
};

// sidebar 自動化
function getSidebar(parentDir, ...extens) {
  var startNodeDir = parentDir;
  var getInDirsArray = function(parentDir) {
    let inDirs = fs.readdirSync(parentDir).filter((f) => {
      if (
        fs.existsSync(parentDir + "/" + f) &&
        fs.statSync(parentDir + "/" + f).isDirectory()
      ) {
        return f;
      }
    });
    return inDirs;
  };
  var getInFilesArray = function(parentDir, extens) {
    let inFiles = fs.readdirSync(parentDir).filter((f) => {
      if (
        fs.existsSync(parentDir + "/" + f) &&
        fs.statSync(parentDir + "/" + f).isFile() &&
        extens.includes(path.extname(f))
      ) {
        return f;
      }
    });
    return inFiles;
  };
  var replaceParentDir = function(parentDir, childFile) {
    let extname = "." + path.extname(childFile);
    childFile = childFile.replace(extname, "");
    if (parentDir == startNodeDir) {
      if (childFile.toLowerCase() == "readme.md") {
        return "";
      } else {
        return childFile;
      }
    } else {
      if (childFile.toLowerCase() == "readme.md") {
        return parentDir.replace(startNodeDir + "/", "") + "/";
      } else {
        return parentDir.replace(startNodeDir + "/", "") + "/" + childFile;
      }
    }
  };
  let getSidebarRecurse = function(
    parentDir,
    extens,
    callBackGetSidebarRecurse
  ) {
    let sidebarRecurse = [];
    let childDirsArray = getInDirsArray(parentDir);
    let childFilesArray = getInFilesArray(parentDir, extens);
    let replacedChildFilesArray = childFilesArray.map((childFile) => {
      return replaceParentDir(parentDir, childFile);
    });
    // ファイルの配列結合
    sidebarRecurse = sidebarRecurse.concat(replacedChildFilesArray);

    let replacedChildDirsArray = childDirsArray.map((childDir) => {
      let unitSideBar = {
        title: childDir,
        collapsable: true,
        sidebarDepth: 1,
        children: callBackGetSidebarRecurse(
          parentDir + "/" + childDir,
          extens,
          callBackGetSidebarRecurse
        ),
      };
      return unitSideBar;
    });
    replacedChildDirsArray = replacedChildDirsArray.filter(
      (unitSideBar) => unitSideBar.children.length != 0
    );
    sidebarRecurse = sidebarRecurse.concat(replacedChildDirsArray);
    return sidebarRecurse;
  };
  let sidebar = getSidebarRecurse(parentDir, extens, getSidebarRecurse);
  console.log(...extens);
  console.dir(sidebar);
  // READMEに書き出して記事一覧
  return sidebar;
}
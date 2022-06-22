# vuepressについて（本リポジトリについて）

マークダウン形式のファイルをhtmlに変換してくれる。  俗にいう静的サイトジェネレーターというやつ。  
vue.jsで開発されているのでvuepressといい、○○.mdだけでなく○○.vueも扱える。  
詳しくは[公式サイト](https://vuepress.vuejs.org/guide/getting-started.html)参照  

本リポジトリは上記のvuepressをすぐに運用できるようにしたもの、  
要するに、

> markdownで書いたメモ、今すぐブログにして公開しちゃおうぜ  

と言うことである。

GithubPagesを使用して公開すると。  
[こんな感じ](https://imuradevelopment.github.io/blog/)  
[![Build and Deploy](https://github.com/imuradevelopment/blog/actions/workflows/vuepress-deploy.yml/badge.svg)](https://github.com/imuradevelopment/blog/actions/workflows/vuepress-deploy.yml)  

## 目次
[1. リポジトリのコピーと初期設定を行う](#リポジトリのコピーと初期設定を行う)  
[2. WorkFlowの設定](#workflowの設定)  
[3. 自動デプロイの実行と確認](#自動デプロイの実行と確認)  
-- ここまでやればmainにpushするたびに自動でビルドしてページ公開してくれるゾ--  
[4. 本リポジトリの構成とか、記事の追加方法とか](#本リポジトリの構成とか、記事の追加方法とか)  

## リポジトリのコピーと初期設定を行う

1. リポジトリをForkする  
    1.1. このページの右上にあるForkボタンを押下する  
    自分のGitHubにvuepressリポジトリがコピーされる  
    ※以降は自分のGitHubにコピーされたvuepressリポジトリについて作業を行う  

2. 個人設定を行う  
    2.1. vuepressリポジトリのmainをローカルPCにCloneする  
    2.2. 下記のファイルについて変更を加える  
    - .github/workflows/vuepress-deploy.yml   
    ```yml
    # 変更前
    name: Build and Deploy
    on: [push]
    jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout
        uses: actions/checkout@master

        - name: vuepress-deploy
        uses: jenkey2011/vuepress-deploy@master
        env:
            ACCESS_TOKEN: ${{ secrets.TOKEN }}
            TARGET_REPO: imuradevelopment/blog
            TARGET_BRANCH: gh-pages
            BUILD_SCRIPT: yarn && yarn build
            BUILD_DIR: .vuepress/dist
            COMMIT_MESSAGE: Github Actionsからの自動デプロイ
    ```
    ```yml
    # 変更後
    name: Build and Deploy
    on: [push]
    jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout
        uses: actions/checkout@master

        - name: vuepress-deploy
        uses: jenkey2011/vuepress-deploy@master
        env:
            ACCESS_TOKEN: ${{ secrets.TOKEN }}
            TARGET_REPO: 自分のGitHub名/blog   ←ココのimuradevelopment/blogを自分のGitHub名に書き換える
            TARGET_BRANCH: gh-pages
            BUILD_SCRIPT: yarn && yarn build
            BUILD_DIR: .vuepress/dist
            COMMIT_MESSAGE: Github Actionsからの自動デプロイ
    ```
    - .vuepress/config.js
    ```js
    // 変更前（一部抜粋）
    mode: "dark",
    modePicker: false,
    repo: 'https://github.com/imuradevelopment/blog',
    editLinks: true,
    editLinkText: 'このページを編集する',
    ```
    ```js
    // 変更後（一部抜粋）
    mode: "dark",
    modePicker: false,
    repo: 'https://github.com/自分のGitHub名/blog', imuradevelopmentを自分のGitHub名に書き換える
    editLinks: true,
    editLinkText: 'このページを編集する',
    ```
    - README.markdown
    ```md
    <!-- 変更前（一部抜粋） -->
    GithubPagesを使用して公開すると。
    [こんな感じ](https://imuradevelopment.github.io/blog/)  
    ```
    ```md
    <!-- 変更後（一部抜粋） -->
    GithubPagesを使用して公開すると。
    [こんな感じ](https://imuradevelopment.github.io/blog/)  imuradevelopment
    ```
    2.3. 最後にコミットは忘れずにしてください！  
    以上で初期設定は完了、GitHubPagesに自動デプロイ（公開）できる設定になっているはず  

## WorkFlowの設定

1. 新しいトークンを作成する  
    1.1. 下記リンクを開く  
    https://github.com/settings/tokens/new  
    1.2. Note(名称はなんでも)  
    1.3. Expirationは「No expiration」  
    1.4. Select scopesは「workflow」にチェックを入れる（WorkFlowの実行権限をリポジトリに設定するため）  
    1.5. Generate tokenボタンを押下する  
    1.6. 画面遷移が実行されるので、背景色が「薄緑」で表示されている文字列をすべてコピーする  

2. 作成したトークンをリポジトリに設定する  
    2.1. Github上でForkしたリポジトリを開き、Settingsタブに移動する  
    2.2. Settings > Secrets > Actionsを押下する(左側のメニュー欄)  
    2.3. New repository secretボタンを押下する  
    2.4. Nameに「TOKEN」、Valueに「コピーした文字列」を入力する  
    2.5. Add secretボタンを押下する  


## 自動デプロイの実行と確認

1. Githubにpushする  
2. ブラウザで[GitHub](https://github.com/)を開いて、Forkでコピーしたblogリポジトリを開く  
3. Actionsタブに移動すると、GitHubActionsが実行されていることが確認できる（2個走るので3分ぐらい待ってください）  
1個目のActionには、自分のコミットメッセージが表示される  
2個目のActionには、「pages build and deployment」という文字列が表示される  
4. Actionが2つ成功したら、GithubPagesに公開されているので、vuepressリポジトリのCodeタブを開く  
5. 「こんな感じ⇒」に記載されているURLを押下するとトップページに遷移する  
※自分のGitHub名のURLになっていること  

## 本リポジトリの構成とか、記事の追加方法とか

- vuepressテーマ:[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)  
- .vuepress/config.js（設定ファイル）にvuepressとテーマの設定が両方あるので適宜確認  
- .vuepress/config.js（設定ファイル）にある、getSidebar関数は設定自動化のために書いたのでバグってたらすまん  
- 記事の追加方法（自動デプロイができるようになったら実際試した方が早いので下記を実行して見るのがおすすめ）
    1. mainをpullしてチェックアウト  
    2. docsフォルダの下に適当にディレクトリを作成  
    3. 2で作成したディレクトリ直下にマークダウンファイルを作成（テンプレートフォルダ配下のREADME.mdを参考に）  
    4. コミットしてpush  
    5. 公開されたサイトに接続して、記事一覧を表示  
    6. 左のサイドバーに2で作成したディレクトリ名が表示されているはず  
    7. 6のサイドバーを開くとhtmlに変換されたマークダウンファイルが確認できる  




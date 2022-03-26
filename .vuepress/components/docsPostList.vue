// PostList.vue
<template>
    <div>
        <div style="margin-bottom:1.5rem" v-for="post in posts" v-bind:key="post.id">
            <h2 style="margin-bottom:0"><a v-bind:href="post.path">{{post.title}}</a></h2>
            <p style="margin:0 0 0 0.5rem; line-height: 1.5em;">{{post.frontmatter.description}}</p>
            <a style="display:inline-block; margin-top:0.5rem;" v-bind:href="post.path">続きを読む</a>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    rootDir: String
  },
  computed: {
    posts() {
      return (this.$site.pages)
        // blogディレクトリ以下を投稿記事一覧表示の対象とする
        .filter(post => post.path.startsWith('/docs/'))
        .filter(post => post.title != "記事一覧")
        // dateに設定した日付の降順にソートする
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  }
}
</script>

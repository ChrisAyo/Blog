<template>
  <div display="flex">
    <h1>Hi Hello</h1>
    <p>
      Blog Vs Portfolio Why blog I want to use the platform to show my inner
      creativity and tap into my inner genius, the part of me where time just
      goes and I have so much fun. I want to share my Writings and thoughts,
      Goals/Bucket list, Travel journeys experiences and tips. And some outfits
      that I think are cool and fun. “A blog to express my creativity, discover
      grow and play” There is a lot above and with time I may narrow it down
      however at the moment this is what I want to achieve and accomplish, I
      will be building the blog using Vue, Nuxt.js and hosting it using github.
    </p>
    <img class="aboutPic" src="~/static/heat.jpg" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only(["title", "img", "description", "slug", "p"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>

<style>
.aboutPic {
  max-height: 400px;
  max-width: 400px;
  min-width: 100px;
  min-height: 100px;
}
</style>
<template>
  <div display="flex">
    <div class="header">
      <h1>Hello</h1>
    </div>
    <div class="landing">
      <div class="mainPic">
        <img class="aboutPic" src="~/static/Norfolk.jpeg" />
      </div>
      <div class="main-text flex-item">
        <p>
          <b
            >Welcome to my Blog, I am using this platform to showcase my
            projects, interests share my hobbies and document my growth. At the
            core of it all I want to have fun and learn, while simultaneously
            using this platform to push myself outside of my comfort zone. I
            want to share my writings and thoughts, Goals/Bucket list, Travel
            journeys experiences and tips. And some outfits that I think are
            cool and fun. “A blog to express my creativity, discover grow and
            play”.
          </b>
        </p>
      </div>
    </div>
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
.landing {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
@media (max-width: 700px) {
  .landing {
    flex-direction: column;
    align-items: center;
  }
}

.header {
  padding: 20px;
}
.aboutPic {
  max-height: 400px;
  max-width: 400px;
  min-width: 100px;
  min-height: 100px;
}
</style>
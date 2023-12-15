<template>
  <article>
    <div class="myArticle">
      <div class="nuxt-content">
        <h1>{{ article.title }}</h1>
      </div>
      <p>{{ article.dog }}</p>

      <img class="blogPics" :src="article.img" :alt="article.alt" />

      <nuxt-content class="nuxt-content" :document="article" />

      <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
      <!-- <p>{{ article.description }}</p> -->
      <prev-next class="buttonSpace" :prev="prev" :next="next" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    console.log(prev);
    return {
      article,
      prev,
      next,
    };
  },

  methods: {
    formatDate(date) {
      const options = { day: "numeric", month: "long", year: "numeric" };
      return new Date(date).toLocaleDateString("en-GB", options);
    },
  },
};
</script>

<style>
.articleImage {
  width: 100%;
}

.buttonSpace {
  display: flex;
  justify-content: space-around;
  text-decoration: none;
}
.buttonSpace a {
  border-radius: 25px;
  text-decoration: none;
  background-color: #06b6d9;
  color: white;
  padding: 15px 25px;
}
.buttonSpace a:hover {
  background-color: #77787d;
}

.buttonLink {
  text-decoration: none;
}
.blogPics {
  max-width: 100px;
  padding-bottom: 25px;
}
.myArticle {
  display: flex;
  flex-direction: column;
  max-width: 800px;
}
/* article {
  display: flex;
  justify-content: center;
} */
h1 {
  font-family: "Lato", sans-serif;
  font-size: 2em;
  /* display: flex; */
}
.font-display {
  font-family: "Open Sans", sans-serif;
  font-size: 1.5em;
}
.nuxt-content h1 {
  font-weight: 500em;
  font-size: 3em;
  font-family: "Open Sans", sans-serif;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
}
.nuxt-content p {
  margin-bottom: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
}

/* img {
    
  } */

/*
    doesnt load 
.icon.icon-link { 
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
} */
</style>
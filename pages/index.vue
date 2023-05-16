<template>
  <div display="flex">
    <!-- <v-row display="flex"> -->
    <div id="header">
      <h1 id="headerContent">Ola's Blog</h1>
    </div>
    <!-- <v-col cols="12" sm="8" md="6"> -->
    <!-- <v-card-title class="headline"> -->

    <!-- </v-card-title> -->
    <div class="landing">
      <div class="mainPic">
        <img class="imageJump" src="~/static/heatC.png" />
      </div>
      <div class="main-text flex-item">
        <p>
          Blog Vs Portfolio Why blog I want to use the platform to show my inner
          creativity and tap into my inner genius, the part of me where time
          just goes and I have so much fun. I want to share my Writings and
          thoughts, Goals/Bucket list, Travel journeys experiences and tips. And
          some outfits that I think are cool and fun. “A blog to express my
          creativity, discover grow and play” There is a lot above and with time
          I may narrow it down however at the moment this is what I want to
          achieve and accomplish, I will be building the blog using Vue, Nuxt.js
          and hosting it using github.
        </p>
      </div>
    </div>

    <h1>Blog Posts</h1>

    <div class="article-block">
      <v-card
        class="mx-auto article-card"
        v-for="article in firstList"
        :key="article.slug"
      >
        <NuxtLink
          class="cardLink"
          :to="{ name: 'slug', params: { slug: article.slug } }"
        >
          <v-img class="black--text align-end article-image" :src="article.img">
          </v-img>
          <v-card-title
            ><strong>{{ article.title }}</strong></v-card-title
          >
          <v-card-text class="text--primary">
            {{ article.description }}
          </v-card-text>
        </NuxtLink>
        <v-card-actions>
          <v-card-text class="text--primary">
            {{ article.date }}
          </v-card-text>
        </v-card-actions>

        <!-- <h2>{{ article.title }}</h2>

          <img :src="article.img" />
          <p>{{ article.description }}</p>
          <p>{{ article.dog }}</p> -->
      </v-card>
    </div>
    <!-- <v-container class="my-5">
     <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="blog in posts" :key= "blog.Title">
        <v-card flat class="text-xs-center ma-3">  
          <v-responsive>
            Image is here
          </v-responsive>
      <v-card-text>
          <div class="Subheading">{{blog.Title}}</div>
          <div class="grey--text">{{blog.Author}}</div>
      </v-card-text>
          </v-card>
         </v-flex>
       </v-layout>
      </v-container> -->
  </div>
  <!-- </v-row> -->
</template>
<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only(["title", "img", "description", "slug", "date"])
      .sortBy("createdAt", "asc")
      .fetch();

    let firstList = articles.slice(0, 3);

    return {
      firstList,
    };
  },
  // methods() {
  //   const hamburger = this.$el.querySelector(".hamburger");
  //   const navMenu = this.$el.querySelector(".navbar-section");
  //   hamburger.addEventListener("click", () => {
  //     hamburger.classList.toggle("active");
  //     navMenu.classList.toggle("active");
  //   });
  //   this.$el.querySelectorAll(".navbar-links").forEach((n) =>
  //     n.addEventListener("click", () => {
  //       hamburger.classList.remove("active");
  //       navMenu.classList.remove("active");
  //     })
  //   );
  // },
};
</script>

<style scoped>
.cardLink {
  text-decoration: none;
}
.article-block {
  display: flex;
}
.article-card {
  /* flex-basis: auto; */
  width: 32%;
  /* min-width: 200px; */
  /* box-sizing: border-box;
  width: 100%; */
  border: solid #5b6dcd 10px;
  margin: 1em;
  padding: 5px;
  /* border-color: blueviolet; */
  border-width: thick;
}
.article-image {
  height: 200px;
}
.date {
  color: blue;
}

@media (max-width: 800px) {
  .article-block {
    flex-direction: column;
    align-items: center;
  }

  .article-card {
    width: 90%;
  }
}
#header {
  width: 100;
  display: flex;
  padding: 5px;
}
#headerContent {
  margin: 0 auto;
  width: 1000px;
  padding: 20px;
}
.container {
  background-color: rgb(228, 235, 234);
}
.landing {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
@media (max-width: 800px) {
  .landing {
    flex-direction: column;
    align-items: center;
  }
  .mainPic {
    /* padding-top: 100%; */
    max-height: 400px;
    max-width: 400px;
    min-width: 100px;
    min-height: 100px;
  }
}
.mainPic {
  min-height: 400px;
  min-width: 400px;
  /* flex-shrink: 0;  */
  /* flex-basis: 200px; */
}
.imageJump {
  width: 100%;
  height: 100%;
}

/* .main-text { */
/* flex-grow: 0; */
/* justify-content: center;
  align-content: center; */
/* } */
.flex-item {
  margin: 5px;
}
h1 {
  font-family: "Lato", sans-serif;
  font-size: 2em;
  display: flex;
  justify-content: center;
}

p {
  font-family: "Lato", sans-serif;
  font-size: 1em;
  width: 100%;
  height: 100%;
  /* padding: 30px; */
  padding-top: 80px;
}
</style>
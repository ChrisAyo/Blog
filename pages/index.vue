<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
    
      <v-container>
        <v-card-title class="headline">
         
          Welcome to Ola's Blog
         
        </v-card-title>

        
          
          <img class="mainPic" src="~/assets/jump.jpg"/>
          
  <v-card class="logo py-4 d-flex justify-center">
       <v-card-text>
         
        <p>Blog Vs Portfolio 

        Why blog 

        I want to use the platform to show my inner creativity and tap into my inner genius, the part of me where time just goes and I have so much fun. I want to share my Writings and thoughts, Goals/Bucket list, Travel journeys experiences and tips. And some outfits that I think are cool and fun. 

        “A blog to express my creativity, discover grow and play” 

        There is a lot above and with time I may narrow it down however at the moment this is what I want to achieve and accomplish, I will be building the blog using Vue, Nuxt.js and hosting it using github.
        </p>
       </v-card-text>
       
      </v-card>
     </v-container>
     
<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>So you want to change Careers!</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

  
      <h1>Blog Posts</h1>
    
      <v-card class="display-flex" v-for="article in firstList" :key="article.slug">
        <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">
          
            <h2>{{ article.title }}</h2>
          
            <img :src="article.img" />
             <p>{{ article.description }}</p>
            <p>{{ article.dog }}</p>
          
        </NuxtLink>
      </v-card>
    
  <v-container class="my-5">
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
  </v-container>
    </v-col>
  </v-row>
  
</template>
<script>
export default {
  async asyncData({ $content}) {
   
      const articles = await $content('articles')
        .only(['title','img','description','slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      
      let firstList = articles.slice(0,3)

      console.log(firstList)
    
      return {
        firstList
      }

    },
 data(){

    return {
      posts: [
        {Title:['article.title'], Author:'Bishops gate', Date:Date.now()},
        {Title:'Corn', Author:'Star gate', Date:Date.now()},
        {Title:'Tatoes', Author:'Northern gate', Date:Date.now()},
        {Title:'Bread', Author:'Party gate', Date:Date.now()}
      ]
    }
  },
  
}
</script>

<style scoped>
.mainPic {
   width:100%; 
   height:100%;
}
</style>
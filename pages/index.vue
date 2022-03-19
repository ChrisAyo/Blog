<template>
<div display="flex">
  <!-- <v-row display="flex"> -->
    <div id="header">
      <h1 id="headerContent">
          Welcome to Ola's Blog
         </h1>
    </div>
    <!-- <v-col cols="12" sm="8" md="6"> -->
        <!-- <v-card-title class="headline"> -->
         
        <!-- </v-card-title> -->        
        <div class="landing">
          <div class="mainPic">
            <img  src="~/assets/jump.jpg"/>
          </div>
        
             <div class="main-text">
           
             <p>Blog Vs Portfolio 

              Why blog 

              I want to use the platform to show my inner creativity and tap into my inner genius, the part of me where time just goes and I have so much fun. I want to share my Writings and thoughts, Goals/Bucket list, Travel journeys experiences and tips. And some outfits that I think are cool and fun. 

              “A blog to express my creativity, discover grow and play” 

              There is a lot above and with time I may narrow it down however at the moment this is what I want to achieve and accomplish, I will be building the blog using Vue, Nuxt.js and hosting it using github.
            </p>
          
            </div>
    
       </div>
       
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
    
      <v-card class="display-flex" v-for="article in firstList" :key="article.slug" >
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
   
    </div>
  <!-- </v-row> -->
  
</template>
<script>
export default {
  
  async asyncData({ $content}) {
   
      const articles = await $content('articles')
        .only(['title','img','description','slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      
        
        let firstList = articles.slice(0,3)

        console.log(articles[0])
    
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

#header{
width: 100;
}
#headerContent{
margin:0 auto; width: 1000px;
}
.container {
  background-color:rgb(228, 235, 234)
}
.landing {
  display:flex;
}
.mainPic {
   width:700px;
   height:400px;
}
img {
  width: 100%;
  height:100%;
}
.main-text {
  flex-grow:3;
}
h1 {
  font-family: 'Kalam', sans-serif;
  font-size: 2em;
  display:flex;
  justify-content:center;
}

p {
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  width:100%;
}


</style>
<template>

  <article>
    <!-- <pre>{{article.body}}</pre> -->
    <div class="nuxt-content">
    <h1>{{ article.title }}</h1>
    </div>
    <p>{{ article.dog }}</p>
    <img :src="article.img" :alt="article.alt" />
    

    <nuxt-content class="nuxt-content" :document="article" />
    
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <prev-next :prev="prev" :next="next" />
    
  </article>

</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

      return { 
        article,
        prev,
        next
       }
    },

    methods: {
        formatDate(date){
          const options = { day:'numeric', month: 'long', year:'numeric' }
          return new Date(date).toLocaleDateString('en-GB', options)
        }
    }

  }

</script>

<style>
 h1 {
  font-family: 'Lato', sans-serif;
  font-size: 5em;
  }
  .font-display {
    font-family: 'Lato';
    font-size: 1.5em
  }
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 4em;
    font-family: 'Kalam';
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
    font-family: 'Ubuntu', 
  }
  .nuxt-content p {
    margin-bottom: 20px;
    font-family: 'Kalam';
    font-size: 3em,
  } 
 
  img {
    width: 120px;
    height: 120px;
  }
  

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
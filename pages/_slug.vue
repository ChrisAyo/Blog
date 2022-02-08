<template>

  <article>
    <!-- <pre>{{article.body}}</pre> -->
    <h1>{{ article.title }}</h1>
    <p>{{ article.dog }}</p>
    <img :src="article.img" :alt="article.alt" />
    

    <nuxt-content :document="article" />
    
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
  .font-display {
    font-family: 'Kalam';
    font-size: 2em
  }
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 28px;
    font-family: 'Ubuntu',
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
    font-family: 'Ubuntu', 
  }
  .nuxt-content p {
    margin-bottom: 20px;
    font-family: 'Ubuntu', 
  }
  h1 {
  font-family: 'Kalam', sans-serif;
  font-size: 2em;
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
<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    > -->
    <nav class="navbar">
      <div class="brand-title"> Chris Creates </div>
      <div class="navbar-links">
        <ul>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <NuxtLink to="/">
          <v-toolbar-title>Home</v-toolbar-title>
          </NuxtLink>
          <NuxtLink to="/">
          <v-toolbar-title>About</v-toolbar-title>
          </NuxtLink>
          <NuxtLink to="/my-first-blog-post">
          <v-toolbar-title>Explore</v-toolbar-title>
          </NuxtLink>
        </ul>
      </div>
    </nav>
    <!-- </v-app-bar> -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
    
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <p>
        twitter
        Github
        </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Blog',
          to: '/my-first-blog-post'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About us',
          to: '/about'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      home:'Home'
    }
  }
}
</script>

<style>
.v-toolbar__content {
background-color: rgb(255, 255, 254);
}
</style>
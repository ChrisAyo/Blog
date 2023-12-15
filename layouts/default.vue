<template>
  <v-app dark>
    <nav class="navbar v-application indigo lighten-1">
      <div class="hover-effect">
        <NuxtLink class="no-text-decoration" to="/">
          <div class="brand-title">Chris Creates</div>
        </NuxtLink>
      </div>
      <div class="navbar-links">
        <ul class="navbar-section" @click="closeNavMenu()">
          <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
          <NuxtLink to="/">
            <v-toolbar-title class="red--text">Home</v-toolbar-title>
          </NuxtLink>
          <NuxtLink to="/about">
            <v-toolbar-title class="red--text">About</v-toolbar-title>
          </NuxtLink>
          <NuxtLink to="/my-first-blog-post">
            <v-toolbar-title class="red--text">Explore</v-toolbar-title>
          </NuxtLink>
        </ul>
        <div class="hamburger" @click="burgerOnClick()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
    <!-- </v-app-bar> -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer :absolute="!fixed" app> -->
    <!-- <div class="stretch"> -->
    <v-footer light padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <div class="footer-links">
          <v-card-text class="white--text pt-0 space">
            <NuxtLink to="/about">
              <v-toolbar-title>About</v-toolbar-title>
            </NuxtLink>
            <NuxtLink to="/my-first-blog-post">
              <v-toolbar-title>Explore</v-toolbar-title>
            </NuxtLink>
          </v-card-text>
        </div>
        <div class="space">
          <v-btn
            v-for="footerLink in footerLinks"
            :key="footerLink"
            class="mx-4 white--text"
            :href="footerLink.to"
            icon
            target="_blank"
          >
            <v-icon size="24px">
              {{ footerLink.icon }}
            </v-icon>
          </v-btn>
        </div>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Chris Ayo Creates</strong>
        </v-card-text>
      </v-card>
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span>
      <p>twitter Github</p> -->
    </v-footer>
    <!-- </div> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      footerLinks: [
        { icon: "mdi-github", to: "https://github.com/ChrisAyo" },
        { icon: "mdi-twitter", to: "https://twitter.com" },
        {
          icon: "mdi-linkedin",
          to: "https://www.linkedin.com/in/christopherayodele/",
        },
        // { icon: "mdi-instagram", to: "instagram.com" },
      ],
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Blog",
          to: "/my-first-blog-post",
        },
        {
          icon: "mdi-chart-bubble",
          title: "About us",
          to: "/about",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      home: "Home",
    };
  },

  methods: {
    burgerOnClick() {
      const hamburger = this.$el.querySelector(".hamburger");
      const navMenu = this.$el.querySelector(".navbar-section");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      //  hamburger.addEventListener("click", () => {

      //   });
      // this.$el.querySelectorAll(".navbar-links").forEach((n) =>
      //   n.addEventListener("click", () => {
      //     hamburger.classList.remove("active");
      //     navMenu.classList.remove("active");
      //   })
      // );
    },
    closeNavMenu() {
      const hamburger = this.$el.querySelector(".hamburger");
      const navMenu = this.$el.querySelector(".navbar-section");
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    },
  },
};
</script>

<style>
.v-toolbar__content {
  background-color: rgb(255, 255, 254);
}
/* .navbar {
  position: sticky;
  top: 0px;
  background-color: #3a24f0;
  overflow: hidden;
} */

.v-footer {
  flex-direction: column;
  align-items: normal;
}
/* .navbar-links {
  font-weight: bold;
} */

.brand-title {
  font-size: 2rem;
  font-weight: bold;
}

.stretch {
  display: block;
}
</style>
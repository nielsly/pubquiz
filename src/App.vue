<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Quize Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.svg"
          transition="scale-transition"
          width="80"
        />
      </div>
      <v-toolbar-title
        class="headline text-uppercase"
        style="cursor:pointer"
        @click="navigateHome"
      >
        <span>Quize</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn href="https://github.com/nielsly/pubquiz" target="_blank" text>
        <span class="mr-2">Source Code</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fill-height fluid>
      <v-row>
        <v-col cols="12">
          <v-content>
            <transition name="fade" mode="out-in">
              <router-view />
            </transition>
          </v-content>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    navigateHome: function() {
      this.$router.push("/");
    }
  }
};
</script>

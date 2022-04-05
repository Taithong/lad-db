<template>
<!-- It must cover by 1 componance -->
  <div>
    <v-app-bar app color="primary" dense dark>

      <v-toolbar-title>Organization</v-toolbar-title>

      <v-spacer></v-spacer>
      <span>{{$store.getters["username"] | capitalize}}</span>
      <v-btn icon @click="onClickLogOff">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLogOff(){
      this.$router.push("/")
      this.$store.dispatch('doLogout')
    }
  },
};
</script>

<style></style>

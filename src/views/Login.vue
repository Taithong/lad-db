<template>
  <v-container>
    <v-row class="justify-center" style="margin-top: 5%">
      <v-card style="width: 400px">
        <v-img
          class="white--text align-end"
          src="@/assets/LAD Name Card_Front.png"
        >
          <v-card-title primary-title> Login </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- Username -->
            <v-text-field
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
            />

            <!-- Password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="account.password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              counter
            />

            <!-- Login button -->
            <v-row class="justify-center" style="padding: 5%">
              <!-- <v-btn @click="$store.state.isLogged = !$store.state.isLogged" round color="primary" dark>Login</v-btn> -->
              <v-btn type="submit" round color="primary" dark>Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isShowPassword: false,
      account:{
        username:"",
        password:""
      }
    };
  },
  methods: {
    submit(){
      this.$router.push("/about")
      this.$store.dispatch({
        type:"doLogin",
        username: this.account.username,
        password: this.account.password
      })
    }
  },
};
</script>

<style></style>

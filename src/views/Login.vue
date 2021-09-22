<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card elevation="0">
            <v-img
              src="https://avatars.dicebear.com/api/male/john.svg"
              alt="Fedorae Education Log"
              contain
              height="200"
            ></v-img>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Enter your Username"
                  name="username"
                  prepend-inner-icon="mdi-account"
                  type="text"
                  class="rounded-0"
                  outlined
                  v-model="username"
                  autoComplete="username"
                ></v-text-field>
                <v-text-field
                  label="Enter your password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  class="rounded-0"
                  outlined
                  v-model="password"
                  autoComplete="current-password"
                ></v-text-field>
                <v-btn
                  class="rounded-0"
                  color="#000000"
                  x-large
                  block
                  dark
                  @click="handleSubmit"
                >
                  Login</v-btn
                >
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import APIService from "../services/APIService";
const api = new APIService();
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const login = await api.loginIntoApp(this.username, this.password);
      console.log(login);
      this.$router.push("/dashboard");
    },
  },
};
</script>

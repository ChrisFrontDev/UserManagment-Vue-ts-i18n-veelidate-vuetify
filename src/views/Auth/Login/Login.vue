/* eslint-disable vue/no-unused-vars */ /* eslint-disable vue/no-unused-vars */
<template>
  <v-main>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ $t('login.page_title') }}</v-toolbar-title>
            </v-toolbar>
            <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
              <v-form @submit.prevent="handleSubmit(handleLogin)">
                <v-card-text>
                  <ValidationProvider
                    v-slot="{ errors }"
                    :name="$t('login.label_email')"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="loginForm.email"
                      prepend-icon="mdi-email"
                      :name="$t('login.label_email')"
                      :label="$t('login.label_email')"
                      type="text"
                      required
                      :error-messages="errors"
                    ></v-text-field>
                  </ValidationProvider>
                  <ValidationProvider
                    v-slot="{ errors }"
                    :name="$t('login.label_password')"
                    rules="required"
                  >
                    <v-text-field
                      prepend-icon="mdi-lock"
                      v-model="loginForm.password"
                      id="password"
                      :name="$t('login.label_password')"
                      :label="$t('login.label_password')"
                      type="password"
                      required
                      :error-messages="errors"
                    ></v-text-field>
                  </ValidationProvider>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit" :loading="loading"
                    >Login</v-btn
                  >
                </v-card-actions>
              </v-form>
            </ValidationObserver>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar v-model="snackbar" :timeout="snackBarTimeout">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="error" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate';

interface LoginForm {
  email: string;
  password: string;
}

const Auth = namespace('Auth');

setInteractionMode('eager');

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})
export default class Login extends Vue {
  errors: string[] = [];
  loading = false;
  message = '';
  snackBarTimeout = 5000;
  snackbar = false;

  loginForm: LoginForm = {
    email: '',
    password: '',
  };

  @Auth.Getter
  private isLoggedIn!: boolean;

  @Auth.Action
  private login!: (data: any) => Promise<any>;

  created(): void {
    if (this.isLoggedIn) {
      this.$router.push('/');
    }
  }

  handleLogin(): void {
    this.loading = true;

    if (this.loginForm.email && this.loginForm.password) {
      this.login(this.loginForm).then(
        data => {
          this.$router.push('/');
        },
        error => {
          this.loading = false;
          this.message = error;
          this.snackbar = true;
        },
      );
    }
  }
}
</script>

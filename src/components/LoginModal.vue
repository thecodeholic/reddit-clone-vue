<template>
  <b-modal ref="modal" id="login-modal" hide-footer title="Log in" size="lg">
    <div class="p-5">
      <b-row>
        <b-col md="6" offset-md="3">
          <b-alert variant="danger" :show="!!error">
            {{error}}
          </b-alert>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group>
              <b-form-input v-model="form.username" required placeholder="Username"/>
            </b-form-group>
            <b-form-group>
              <b-form-input type="password" v-model="form.password" required placeholder="Password"/>
            </b-form-group>

            <b-button type="submit" variant="primary" block>LOG IN</b-button>
          </b-form>
        </b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';

const {mapActions} = createNamespacedHelpers('user');

export default {
  name: "LoginModal",
  data() {
    return {
      error: null,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    async onSubmit(ev) {
      ev.preventDefault();
      const {status, data} = await this.login(this.form);
      if (status === 200) {
        this.$refs.modal.hide();
      } else {
        this.error = data.message;
      }
    },
    onReset() {

    }
  }
}
</script>

<style scoped>

</style>
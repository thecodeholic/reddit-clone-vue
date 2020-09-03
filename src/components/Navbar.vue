<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand :to="{name: 'Home'}">
        reddit
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-input-group class="navbar-search px-5" size="sm">
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input placeholder="Search"></b-form-input>
        </b-input-group>
        <b-navbar-nav class="ml-auto">

          <b-nav-form v-if="!user.id">
            <b-button size="sm" variant="outline-primary mr-3" v-b-modal.login-modal>LOG IN</b-button>
            <b-button size="sm" variant="primary mr-3">SIGN UP</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right v-if="!user.id">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-icon icon="person-fill"></b-icon>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right v-if="user.id">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-icon icon="person-fill"></b-icon>
              {{user.username}}
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <login-modal/>
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal";

import {createNamespacedHelpers} from 'vuex';

const {mapState} = createNamespacedHelpers('user');

export default {
  name: "Navbar",
  components: {LoginModal},
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scoped>
.navbar-search {
  width: auto;
  flex: 1;
}

button {
  width: 100px;
}
</style>
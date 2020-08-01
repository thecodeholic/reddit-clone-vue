<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">
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

          <b-nav-form>
            <b-button size="sm" variant="outline-primary mr-3">LOG IN</b-button>
            <b-button size="sm" variant="primary mr-3">SIGN UP</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-icon icon="person-fill"></b-icon>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>
  .navbar-search {
    width: auto;
    flex: 1;
  }

  button {
    width: 100px;
  }
</style>
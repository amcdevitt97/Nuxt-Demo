<template>
  <header role="banner" class="banner">
    <div class="masthead grid-col-2">
      <div class="title-container">
        <div class="title-element">
          <citizenship-portal-icon class="icon" />
        </div>
        <div class="title-element">
          <b class="website-title">Citizenship Portal</b>
        </div>
      </div>
      <div class="title-element user-account-dropdown-container">
        <user-account-dropdown class="user-account-dropdown" />
      </div>
    </div>
    <nav class="navbar grid-col-auto-fill dropdown-container" role="navigation">
      <li v-for="i in 6" :key="i" class="dropdown-entry">
        Dropdown {{ i }}
        <img class="dropdown-caret" src="../../assets/images/icons/caret.svg" />
      </li>
      <!-- <search-bar></search-bar> -->
    </nav>
  </header>
</template>
<script>
import CitizenshipPortalIcon from '../brand/CitizenshipPortalIcon.vue'
import UserAccountDropdown from './UserAccountDropdown/UserAccountDropdown.vue'
export default {
  name: 'DashboardHeader',
  components: {
    CitizenshipPortalIcon,
    UserAccountDropdown
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.banner {
  padding: 2em 2em 0 2em;
}
.icon {
  width: 2em;
}
.title-container {
  padding-bottom: 1em;
}
.title-element {
  display: inline-block;
  vertical-align: middle;
}
.website-title {
  font-size: 1.5em;
}
.dropdown-container {
  padding: space-between;
  margin-left: 8em;
}
.user-account-dropdown {
  width: 2em;
}
.user-account-dropdown-container {
  margin-left: auto;
  margin-right: 4em;
  display: inline-block;
}
li {
  display: inline-block;
  text-justify: auto;
  color: #565c65;
  padding: 1em 1em 2em;
  display: flex;
  flex-direction: row;
}
li:hover {
  background-color: #162d51;
  color: #ffffff;
}
.dropdown-caret {
  width: 5%;
  display: inline-block;
  margin-left: auto;
  margin-right: 0;
}
</style>

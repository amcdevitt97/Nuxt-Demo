<template>
  <header role="banner" class="banner">
    <div class="masthead grid-col-2">
      <div class="title-container">
        <div class="title-container-element">
          <citizenship-portal-icon />
        </div>
        <div class="title-container-element">
          <b class="website-portal-title">Citizenship Portal</b>
        </div>
      </div>
      <div>
        {{ 'User icon and dropdown here ' }}
        <!-- <user-dropdown></user-dropdown> -->
      </div>
    </div>
    <nav class="navbar grid-col-auto-fill dropdown-container" role="navigation">
      <li v-for="i in 5" :key="i">Dropdown {{ i }}</li>

      <!-- <search-bar></search-bar> -->
    </nav>
  </header>
</template>
<script>
import CitizenshipPortalIcon from './CitizenshipPortalIcon.vue'
export default {
  name: 'DashboardHeader',
  components: {
    CitizenshipPortalIcon
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
.title-container{

}
.title-container-element{
  display: inline-block;
  vertical-align: middle;
}
.website-portal-title {
  font-size: 1.5em;
}
.dropdown-container {
  padding: space-between;
}
li {
  display: inline-block;
  text-align: center;
  text-justify: auto;
  color: #565c65;
  padding-top: 1em;
  padding-bottom: 2em;
}

li:hover {
  background-color: #162d51;
  color: #ffffff;
}
</style>

<template>
  <header role="banner" class="banner">
    <div class="masthead grid-col-2">
      <div class="title-container">
        <!-- <logo /> -->
        <p class="website-portal-title">Citizenship Portal</p>
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
export default {
  name: 'DashboardHeader',
  data() {
    return {}
  }
}
</script>

<style scoped>
.banner {
  padding: 2em 2em 0 2em;
}
.website-portal-title {
  font-size: 2em
}
.dropdown-container {
  padding: space-between;
}
li {
  display: inline-block;
  text-align: center;
  text-justify: auto;
  color: #565C65;
  padding-top: 1em;
  padding-bottom: 2em;
}

li:hover {
  background-color: #162D51
}
</style>

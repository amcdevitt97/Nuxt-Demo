<template>
  <header role="banner" class="banner">
    <div class="masthead grid-col-2">
      <div>
        {{ 'Insert Icon and Website Name here Use are' }}
        <!-- <logo></logo>
        <p>Citizenship Portal</p>-->
      </div>
      <div>
        {{ 'User icon and dropdown here ' }}
        <!-- <user-dropdown></user-dropdown> -->
      </div>
    </div>
    <nav class="navbar grid-col-auto-fill" role="navigation">
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

<style lang="scss" scoped></style>

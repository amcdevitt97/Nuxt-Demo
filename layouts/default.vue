<template>
  <div>
    <dashboard-header></dashboard-header>
    <nuxt />
  </div>
</template>

<script>
import DashboardHeader from '~/components/nav/DashboardHeader.vue'
export default {
  components: {
    DashboardHeader
  }
}
</script>

<style></style>

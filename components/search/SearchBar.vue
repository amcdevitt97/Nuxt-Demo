<template>
  <form class="usa-search usa-search--small " role="search">
    <label class="usa-sr-only" for="search-field-small">Search small</label>
    <input
      id="search-field-small"
      class="usa-input"
      type="search"
      name="search"
    />
    <button class="usa-button" type="submit">
      <span class="usa-sr-only">Search</span>
    </button>
  </form>
</template>
<script>
export default {
  name: 'SearchBar',
  components: {},
  data() {
    return {}
  }
}
</script>
<style>
@import '../../node_modules/uswds/dist/css/uswds.css';
</style>

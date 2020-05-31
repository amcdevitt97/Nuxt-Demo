<!--
  CitizenshipPortalIcon.vue

  Exports us-flag-minimal.svg as Vue component
-->
<template>
  <img :src="USFlagMinimal" />
</template>

<script>
export default {
  name: 'USFlagMinimal',
  data() {
    return {
      USFlagMinimal: require('~/assets/images/us-flag-minimal.png')
    }
  }
}
</script>

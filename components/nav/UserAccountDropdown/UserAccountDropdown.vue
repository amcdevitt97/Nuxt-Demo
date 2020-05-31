<!--
  UserAccountDropdown.vue

  Mock dropdown used in DashboardHeader.vue
-->
<template>
  <div class="user-dropdown-container">
    <img class="profile" src="../../../assets/images/icons/default-pfp.svg" />
    <img class="caret" src="../../../assets/images/icons/caret.svg" />
  </div>
</template>

<style>
.user-dropdown-container {
  display: flex;
  flex-direction: row;
}
.profile {
  width: 100%;
  margin-right: 1em;
}
.caret {
  width: 60%;
}
</style>

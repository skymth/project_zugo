<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">ZUGO</span>
      </md-app-toolbar>

      <md-app-content>
      </md-app-content>
    </md-app>
      <bottom-bar></bottom-bar>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
     height: 100vh;
    border: 1px solid rgba(#000, .12);
  }
</style>

<script>
import BottomBarComponent from '~/components/bottomBarComponent.vue'
export default {
  components: {
    'bottom-bar': BottomBarComponent
  }
}
</script>

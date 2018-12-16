<template>
  <div class="flex-container">
    <div class="phone-viewport">
      <md-bottom-bar md-type="shift">
        <md-bottom-bar-item id="bottom-bar-item-home" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-pages" md-label="Pages" md-icon="pages"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-posts" md-label="map" md-icon="map"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangingThemes',
  data: () => ({
    theme: 'teal'
  })
}
</script>
0
<style lang="scss" scoped>

.flex-container {
	display: flex;
	flex-direction: column-reverse;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;
}
.phone-viewport {
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(#000, .26);
  background: rgba(#000, .06);
}
</style>

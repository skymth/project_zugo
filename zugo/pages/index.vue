<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="fixed">
            <md-app-toolbar class="md-primary">
                <span class="md-title">ZUGO</span>
            </md-app-toolbar>

            <md-app-content>

                <a-scene>
                    <a-assets>
                        <audio id="click-sound" src="audio/click.ogg"></audio>
                        <!-- Images. -->
                        <img id="city" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg">
                        <img id="city-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg">
                        <img id="cubes" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg">
                        <img id="cubes-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg">
                        <img id="sechelt" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg">
                        <img id="sechelt-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg">
                    </a-assets>
                    <!-- 360-degree image. -->
                    <a-sky id="image-360" radius="10" src="#city"></a-sky>
                    <!-- Link we will build. -->
                    <a-entity class="link" geometry="primitive: plane; height: 1; width: 1"
                                           material="shader: flat; src: #cubes-thumb"
                                           position="0 0 -5"></a-entity>
                    <!-- Camera + Cursor. -->
                    <a-camera>
                        <a-cursor id="cursor">
                            <a-animation begin="click" easing="ease-in" attribute="scale"
                                                                        fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
                            <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
                                                                                from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
                        </a-cursor>
                    </a-camera>
                </a-scene>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
import BottomBarComponent from '~/components/bottomBarComponent.vue'
if (process.browser) {
  require('aframe')
}
export default {
  components: {
    'bottom-bar': BottomBarComponent
  }
}
</script>
<style lang="scss" scoped>
  .md-app {
     height: 100vh;
    border: 1px solid rgba(#000, .12);
  }
</style>


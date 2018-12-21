<template>
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
</template>
<script>
if (process.browser) {
  require('aframe')
}
export default {
  data () {
    return {
      thumbs: [
        'city-thumb',
        'cubes-thumb',
        'sechelt-thumb'
      ]
    }
  },
  head () {
    return {
      script: [
        { src: 'https://aframe.io/releases/0.8.0/aframe.min.js' },
        { src: 'https://npmcdn.com/aframe-animation-component@3.0.1' },
        { src: 'https://npmcdn.com/aframe-event-set-component@3.0.1' },
        { src: 'https://npmcdn.com/aframe-layout-component@3.0.1' },
        { src: 'https://npmcdn.com/aframe-template-component@3.1.1' }
      ]
    }
  },
  components: {
  },

  mounted: function () {
  }
}
</script>

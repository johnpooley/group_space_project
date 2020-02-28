<template>
  <div id="app">
  <h1>Space App: From Testosterone Driven Development</h1>
<button class="w3-button w3-khaki">Sun</button>
<button class="w3-button w3-khaki">Mercury</button>
<button class="w3-button w3-khaki">Venus</button>
<div class="earth">
  <div class="wrap">
     <div class="background"></div>
     <div class="clouds"></div>
  </div>
  <div class="mask"></div>
</div>
<button class="w3-button w3-red">Mars</button>
<button class="w3-button w3-purple">Jupiter</button>
<button class="w3-button w3-yellow">Uranus</button>
<button class="w3-button w3-black">Neptune</button>
  </div>
</template>

<script>

import { eventBus } from './main.js';

export default {
  name: 'App',
  data(){
    return{
      planets:[],
      selectedPlanet: null
    };
  },

mounted(){
  fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Earth&origin=*')
  .then(res => res.json())
  .then(planets => this.planets = planets)

  eventBus.$on('planet-selected', (planet) => {
      this.selectedPlanet = planet;
    })
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

body{
  background:url(http://artem.anmedio.ru/dev/planet/space.jpg) repeat;
}

.earth{
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
  overflow:hidden;
  box-shadow: 0 0 60px -20px rgba(255, 189, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23);
  left:50%;
  top:50%;
  margin:-150px;
}
.earth .mask{
  width:100%;
  height:100%;
  position: absolute;
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(255, 204, 159, 0.6);
  border-radius:50%;
}
.earth .background{
  animation: translateBackground 40s infinite linear;
  background:url('./assets/earth.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}

.earth .clouds{
  background:url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}

.earth .wrap{
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
  animation: rotatePlanet 150s infinite linear;
}
@keyframes translateBackground{
  0%{
    background-position-x:0;
  }
  100%{
    background-position-x:-600px;
  }
}
@keyframes rotatePlanet{
  0%{
    transform:rotateZ(0);
  }
  100%{
    transform:rotateZ(-360deg);
  }
}
</style>

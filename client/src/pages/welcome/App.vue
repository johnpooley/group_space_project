<template>
  <div id="app">
  <h1>Space App</h1>

<section class="planets">
<!-- <img src="./assets/sun.png" alt="sun" width="800" height="800"> -->
<figure><img src="./assets/mercury.png" alt="mercury" width="50" height="50"><figcaption>Mercury</figcaption></figure>
<figure><img src="./assets/venus.png" alt="venus" width="145" height="145"><figcaption>Venus</figcaption></figure>
<figure><img src="./assets/earth.png" alt="earth" width="150" height="150"><figcaption>Earth</figcaption></figure>
<figure><img src="./assets/mars.png" alt="mars" width="60" height="60"><figcaption>Mars</figcaption></figure>
<figure><img src="./assets/jupiter.png" alt="jupiter" width="300" height="300"><figcaption>Jupiter</figcaption></figure>
<figure><img src="./assets/saturn.png" alt="saturn" width="280" height="280"><figcaption>Saturn</figcaption></figure>
<figure><img src="./assets/uranus.png" alt="uranus" width="250" height="250"><figcaption>Uranus</figcaption></figure>
<figure><img src="./assets/neptune.png" alt="neptune" width="250" height="250"><figcaption>Neptune</figcaption></figure>
</section>
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

.planets{
  display: inline-block;
  overflow: scroll;
}

img:hover{
  transform: scale(1.5);
}
figure{
  display:inline-block;
}
figcaption{
    transform: rotate(90deg);
}
</style>

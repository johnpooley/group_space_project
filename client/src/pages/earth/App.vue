<template lang="html">
  <div id="earth" v-if="frenchEarth">
    <h1>{{ frenchEarth.englishName }}</h1>
    <section class ="blurb">
    <p v-if="wikiEarth">{{ wikiEarth.query.pages[9228].extract }}</p>
  </section>
  <!-- <div class="earth">
  <div class="wrap">
     <div class="background"></div>
     <div class="clouds"></div>
  </div>
  <div class="mask"></div>
</div> -->
  <div class ="facts">
    <h2>Moons</h2> <p>{{ frenchEarth.moons[0].moon }}</p>
    <h2>Moons</h2> {{ frenchEarth.moons[0].rel }}</p>
    <h2>Distance from Sun</h2> {{ frenchEarth.perihelion }}</p>
    <h2>Mass</h2> {{ frenchEarth.mass.massValue }}</p>
    <h2>Gravity</h2> {{ frenchEarth.gravity }}</p>
    <h2>Radius</h2> {{ frenchEarth.meanRadius }}</p>
</div>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'Earth',
  data(){
    return{
      frenchEarth:null,
      wikiEarth: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/{earth}')
    .then(res => res.json())
    .then(frenchEarth => this.frenchEarth = frenchEarth);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Earth&origin=*')
    .then(res => res.json())
    .then(wikiEarth => this.wikiEarth = wikiEarth)
  }
}
</script>

<style lang="css" scoped>


#earth {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: white;
  margin-left: 20px;
  padding: 10px;
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
  background:url('../../assets/planet_masks/earth.jpg') repeat-x;
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

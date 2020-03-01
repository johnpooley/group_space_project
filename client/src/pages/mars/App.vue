<template lang="html">
  <div id="mars" v-if="frenchMars">
    <h1>{{ frenchMars.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiMars">{{ wikiMars.query.pages[14640471].extract }}</p></section>
    <!-- need to loop through this moon array -->
      <div class ="facts"></section>
    <h2>Moons: {{ frenchMars.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchMars.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchMars.perihelion }}</h2>
    <h2>Mass: {{ frenchMars.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchMars.gravity }}</h2>
    <h2>Radius: {{ frenchMars.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchMars.discoveredBy }} N/A </h2>
  </div>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'mars',
  data(){
    return{
      frenchMars:null,
      wikiMars: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
    .then(res => res.json())
    .then(frenchMars => this.frenchMars = frenchMars);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Mars&origin=*')
    .then(res => res.json())
    .then(wikiMars => this.wikiMars = wikiMars)
  }
}
</script>

<style lang="css" scoped>
#mars {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: white;
  margin-left: 20px;
  padding: 10px;
}
</style>

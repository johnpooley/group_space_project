<template lang="html">
  <div id="earth">
    <h1>{{ frenchEarth.englishName }}</h1>
    <!-- wikidata API data seems to kill Vue...sometimes-->
    <p>{{ wikiEarth.query.pages[9228].extract }}</p>
    <h2>Moons: {{ frenchEarth.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchEarth.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchEarth.perihelion }}</h2>
    <h2>Mass: {{ frenchEarth.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchEarth.gravity }}</h2>
    <h2>Radius: {{ frenchEarth.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchEarth.discoveredBy }} N/A </h2>


  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'Earth',
  data(){
    return{
      frenchEarth:[],
      wikiEarth: []

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
</style>

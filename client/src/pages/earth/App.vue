<template lang="html">
  <div id="earth" v-if="frenchEarth">
    <h1>{{ frenchEarth.englishName }}</h1>
    <p v-if="wikiEarth">{{ wikiEarth.query.pages[9228].extract }}</p>
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
</style>

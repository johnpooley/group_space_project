<template lang="html">
  <div id="mercury" v-if="frenchMercury">
    <h1>{{ frenchMercury.englishName }}</h1>
    <p v-if="wikiMercury">{{ wikiMercury.query.pages[19694].extract }}</p>
    <h2>Distance from Sun: {{ frenchMercury.perihelion }}</h2>
    <h2>Mass: {{ frenchMercury.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchMercury.gravity }}</h2>
    <h2>Radius: {{ frenchMercury.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchMercury.discoveredBy }} N/A </h2>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'mercury',
  data(){
    return{
      frenchMercury:null,
      wikiMercury: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/mercury')
    .then(res => res.json())
    .then(frenchMercury => this.frenchMercury = frenchMercury);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Mercury_(planet)&origin=*')
    .then(res => res.json())
    .then(wikiMercury => this.wikiMercury = wikiMercury)
  }
}
</script>

<style lang="css" scoped>
</style>

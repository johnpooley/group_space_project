<template lang="html">
  <div id="mercury">
    <h1>{{ frenchMercury }}</h1>
    <h1>{{ wikiMercury }}</h1>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'mercury',
  data(){
    return{
      frenchMercury:[],
      wikiMercury: []

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    frenchFetch('https://api.le-systeme-solaire.net/rest/bodies/{mercury}')
    .then(res => res.json())
    .then(frenchMercury => this.frenchMercury = frenchMercury);

    // how do we arrange multiple API fetch requests?

    wikiFetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Mercury_(planet)&origin=*')
    .then(res => res.json())
    .then(wikiMercury => this.wikiMercury = wikiMercury)
  }
</script>

<style lang="css" scoped>
</style>

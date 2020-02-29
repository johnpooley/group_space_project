<template lang="html">
  <div id="saturn">
    <h1>{{ frenchSaturn }}</h1>
    <h1>{{ wikiSaturn }}</h1>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'saturn',
  data(){
    return{
      frenchSaturn:[],
      wikiSaturn: []

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    frenchFetch('https://api.le-systeme-solaire.net/rest/bodies/{saturn}')
    .then(res => res.json())
    .then(frenchSaturn => this.frenchSaturn = frenchSaturn);

    // how do we arrange multiple API fetch requests?

    wikiFetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Saturn&origin=*')
    .then(res => res.json())
    .then(wikiSaturn => this.wikiSaturn = wikiSaturn)
  }
</script>

<style lang="css" scoped>
</style>

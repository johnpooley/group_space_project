<template lang="html">
  <div id="mars">
    <h1>{{ frenchMars }}</h1>
    <h1>{{ wikiMars }}</h1>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'mars',
  data(){
    return{
      frenchMars:[],
      wikiMars: []

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    frenchFetch('https://api.le-systeme-solaire.net/rest/bodies/{mars}')
    .then(res => res.json())
    .then(frenchMars => this.frenchMars = frenchMars);

    // how do we arrange multiple API fetch requests?

    wikiFetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Mars&origin=*')
    .then(res => res.json())
    .then(wikiMars => this.wikiMars = wikiMars)
  }
</script>

<style lang="css" scoped>
</style>

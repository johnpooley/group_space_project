<template lang="html">
  <div id="earth">
    <h1>{{ frenchEarth }}</h1>
    <h1>{{ wikiEarth }}</h1>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'earth',
  data(){
    return{
      frenchEarth:[],
      wikiEarth: []

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    frenchFetch('https://api.le-systeme-solaire.net/rest/bodies/{earth}')
    .then(res => res.json())
    .then(frenchEarth => this.frenchEarth = frenchEarth);

    // how do we arrange multiple API fetch requests?

    wikiFetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Earth&origin=*')
    .then(res => res.json())
    .then(wikiEarth => this.wikiEarth = wikiEarth)
  }
</script>

<style lang="css" scoped>
</style>

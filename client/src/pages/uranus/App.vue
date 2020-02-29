<template lang="html">
  <div id="uranus">
    <h1>{{ frenchUranus }}</h1>
    <h1>{{ wikiUranus }}</h1>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'uranus',
  data(){
    return{
      frenchUranus:[],
      wikiUranus: []

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    frenchFetch('https://api.le-systeme-solaire.net/rest/bodies/{uranus}')
    .then(res => res.json())
    .then(frenchUranus => this.frenchUranus = frenchUranus);

    // how do we arrange multiple API fetch requests?

    wikiFetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Uranus&origin=*')
    .then(res => res.json())
    .then(wikiUranus => this.wikiUranus = wikiUranus)
  }
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div id="neptune">
    <h1>{{ frenchNeptune }}</h1>
    <h1>{{ wikiNeptune }}</h1>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'neptune',
  data(){
    return{
      frenchNeptune:[],
      wikiNeptune: []

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    frenchFetch('https://api.le-systeme-solaire.net/rest/bodies/{neptune}')
    .then(res => res.json())
    .then(frenchNeptune => this.frenchNeptune = frenchNeptune);

    // how do we arrange multiple API fetch requests?

    wikiFetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Neptune&origin=*')
    .then(res => res.json())
    .then(wikiNeptune => this.wikiNeptune = wikiNeptune)
  }
</script>

<style lang="css" scoped>
</style>

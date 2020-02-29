<template lang="html">
  <div id="venus">
    <h1>{{ frenchVenus }}</h1>
    <h1>{{ wikiVenus }}</h1>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'venus',
  data(){
    return{
      frenchVenus:[],
      wikiVenus: []

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    frenchFetch('https://api.le-systeme-solaire.net/rest/bodies/{venus}')
    .then(res => res.json())
    .then(frenchVenus => this.frenchVenus = frenchVenus);

    // how do we arrange multiple API fetch requests?

    wikiFetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Venus&origin=*')
    .then(res => res.json())
    .then(wikiVenus => this.wikiVenus = wikiVenus)
  }
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div id="jupiter">
    <h1>{{ frenchJupiter }}</h1>
    <h1>{{ wikiJupiter }}</h1>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'jupiter',
  data(){
    return{
      frenchJupiter:[],
      wikiJupiter: []

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    frenchFetch('https://api.le-systeme-solaire.net/rest/bodies/{jupiter}')
    .then(res => res.json())
    .then(frenchJupiter => this.frenchJupiter = frenchJupiter);

    wikiFetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Jupiter&origin=*')
    .then(res => res.json())
    .then(wikiJupiter => this.wikiJupiter = wikiJupiter)
  }
</script>

<style lang="css" scoped>
</style>

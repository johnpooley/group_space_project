<template lang="html">
  <div id="jupiter" v-if="frenchJupiter">
    <h1>{{ frenchJupiter.englishName }}</h1>
    <p v-if="wikiJupiter">{{ wikiJupiter.query.pages[38930].extract }}</p>
    <!-- need to loop through this moon array -->
    <h2>Moons: {{ frenchJupiter.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchJupiter.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchJupiter.perihelion }}</h2>
    <h2>Mass: {{ frenchJupiter.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchJupiter.gravity }}</h2>
    <h2>Radius: {{ frenchJupiter.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchJupiter.discoveredBy }} N/A </h2>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'jupiter',
  data(){
    return{
      frenchJupiter:null,
      wikiJupiter: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/jupiter')
    .then(res => res.json())
    .then(frenchJupiter => this.frenchJupiter = frenchJupiter);

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Jupiter&origin=*')
    .then(res => res.json())
    .then(wikiJupiter => this.wikiJupiter = wikiJupiter)
  }
}
</script>

<style lang="css" scoped>
</style>

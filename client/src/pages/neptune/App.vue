<template lang="html">
  <div id="neptune" v-if="frenchNeptune">
    <h1>{{ frenchNeptune.englishName }}</h1>
    <p v-if="wikiNeptune">{{ wikiNeptune.query.pages[19003265].extract }}</p>
    <!-- need to loop through this moon array -->
    <h2>Moons: {{ frenchNeptune.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchNeptune.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchNeptune.perihelion }}</h2>
    <h2>Mass: {{ frenchNeptune.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchNeptune.gravity }}</h2>
    <h2>Radius: {{ frenchNeptune.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchNeptune.discoveredBy }} N/A </h2>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'neptune',
  data(){
    return{
      frenchNeptune:null,
      wikiNeptune: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/neptune')
    .then(res => res.json())
    .then(frenchNeptune => this.frenchNeptune = frenchNeptune);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Neptune&origin=*')
    .then(res => res.json())
    .then(wikiNeptune => this.wikiNeptune = wikiNeptune)
  }
}
</script>

<style lang="css" scoped>
</style>

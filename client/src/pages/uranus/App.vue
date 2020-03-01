<template lang="html">
  <div id="uranus">
    <h1>{{ frenchUranus.englishName }}</h1>
    <!-- wikidata API data seems to kill Vue...sometimes-->
    <p>{{ wikiUranus.query.pages[44475].extract }}</p>
    <h2>Moons: {{ frenchUranus.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchUranus.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchUranus.perihelion }}</h2>
    <h2>Mass: {{ frenchUranus.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchUranus.gravity }}</h2>
    <h2>Radius: {{ frenchUranus.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchUranus.discoveredBy }} </h2>

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
    fetch('https://api.le-systeme-solaire.net/rest/bodies/uranus')
    .then(res => res.json())
    .then(frenchUranus => this.frenchUranus = frenchUranus);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Uranus&origin=*')
    .then(res => res.json())
    .then(wikiUranus => this.wikiUranus = wikiUranus)
  }
}
</script>

<style lang="css" scoped>
</style>

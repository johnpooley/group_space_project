<template lang="html">
  <div id="venus">
    <!-- <h1>{{ frenchVenus }}</h1>
    <h1>{{ wikiVenus }}</h1> -->

    <h1>{{ frenchVenus.englishName }}</h1>
    <!-- wikidata API data seems to kill Vue...sometimes-->
    <!-- <p>{{ wikiVenus.query.pages[32745].extract }}</p> -->
    <h2>Moons: {{ frenchVenus.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchVenus.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchVenus.perihelion }}</h2>
    <h2>Mass: {{ frenchVenus.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchVenus.gravity }}</h2>
    <h2>Radius: {{ frenchVenus.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchVenus.discoveredBy }} </h2>

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
    fetch('https://api.le-systeme-solaire.net/rest/bodies/venus')
    .then(res => res.json())
    .then(frenchVenus => this.frenchVenus = frenchVenus);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Venus&origin=*')
    .then(res => res.json())
    .then(wikiVenus => this.wikiVenus = wikiVenus)
  }
}
</script>

<style lang="css" scoped>
</style>

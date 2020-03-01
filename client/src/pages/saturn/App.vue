<template lang="html">
  <div id="saturn" v-if="frenchSaturn">
    <h1>{{ frenchSaturn.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiSaturn">{{ wikiSaturn.query.pages[44474].extract }}</p></section>
      <div class ="facts">
    <h2>Moons: {{ frenchSaturn.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchSaturn.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchSaturn.perihelion }}</h2>
    <h2>Mass: {{ frenchSaturn.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchSaturn.gravity }}</h2>
    <h2>Radius: {{ frenchSaturn.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchSaturn.discoveredBy }} N/A </h2>
  </div>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'saturn',
  data(){
    return{
      frenchSaturn:null,
      wikiSaturn: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/saturn')
    .then(res => res.json())
    .then(frenchSaturn => this.frenchSaturn = frenchSaturn);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Saturn&origin=*')
    .then(res => res.json())
    .then(wikiSaturn => this.wikiSaturn = wikiSaturn)
  }
}
</script>

<style lang="css" scoped>
#saturn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: white;
  margin-left: 20px;
  padding: 10px;
}
</style>

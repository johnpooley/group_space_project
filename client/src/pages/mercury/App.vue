<template lang="html">
  <div id="mercury" v-if="frenchMercury">
    <nav>
      <ul>
  <li><a href="/welcome">Home</a></li>
</ul>
</nav>
    <h1>{{ frenchMercury.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiMercury">{{ wikiMercury.query.pages[19694].extract }}</p></section>
      <div class ="facts">
        <div class="earth">
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>
        </div>
        <div class="mask"></div>
      </div>
      <audio id="testAudio" hidden src="https://drive.google.com/uc?export=download&id=1H_YX4ky4YMSNalDycbkwy8S2xEEJTR79" type="audio/mpeg">
      </audio>
      <button v-on:click="playAudio">Play Planet Sound</button>
    <h2>Distance from Sun</h2><p> {{ frenchMercury.perihelion }}</p>
    <h2>Mass</h2> <p>{{ frenchMercury.mass.massValue }}</p>
    <h2>Gravity</h2><p> {{ frenchMercury.gravity }}</p>
    <h2>Radius</h2><p> {{ frenchMercury.meanRadius }}</p>
    <h2>Discovered by</h2><p> {{ frenchMercury.discoveredBy }} N/A </p>
  </div>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'mercury',
  data(){
    return{
      frenchMercury:null,
      wikiMercury: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/mercury')
    .then(res => res.json())
    .then(frenchMercury => this.frenchMercury = frenchMercury);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Mercury_(planet)&origin=*')
    .then(res => res.json())
    .then(wikiMercury => this.wikiMercury = wikiMercury)
  },
  methods: {
    playAudio: function(event){
      let audio = document.getElementById('testAudio');
      if(audio.className == 'is-playing'){
        audio.className = "";
        event.target.innerHTML = "Play Planet Sound"
        audio.pause();
      }else{
        audio.className = "is-playing";
        event.target.innerHTML = "Pause";
        audio.play();
      }

    }
  }
  }
</script>

<style lang="css" scoped>
#mercury {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: white;
  margin-left: 20px;
  padding: 10px;
}
.earth .background{
  animation: translateBackground 40s infinite linear;
  background:url('../../assets/planet_masks/mercury.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
</style>

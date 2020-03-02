<template lang="html">
  <div id="neptune" v-if="frenchNeptune">
    <nav>
      <ul>
  <li><a href="/welcome">Home</a></li>
</ul>
</nav>
    <h1>{{ frenchNeptune.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiNeptune">{{ wikiNeptune.query.pages[19003265].extract }}</p></section>
    <!-- need to loop through this moon array -->
      <div class ="facts">
        <div class="earth">
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>
        </div>
        <div class="mask"></div>
      </div>
      <audio id="testAudio" hidden src="https://drive.google.com/uc?export=download&id=1tHpDu8pk6NC-vOUaz_SXhKjucHFQtmq0" type="audio/mpeg">
      </audio>
      <button v-on:click="playAudio">Play Planet Sound</button>
    <h2>Moons</h2><p> {{ frenchNeptune.moons[0].moon }}</p>
    <h2>Distance from Sun</h2><p> {{ frenchNeptune.perihelion }}</p>
    <h2>Mass</h2><p> {{ frenchNeptune.mass.massValue }}</p>
    <h2>Gravity</h2><p> {{ frenchNeptune.gravity }}</p>
    <h2>Radius</h2><p> {{ frenchNeptune.meanRadius }}</p>
    <h2>Discovered by</h2><p> {{ frenchNeptune.discoveredBy }} N/A </p>
  </div>
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
#neptune {
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
  background:url('../../assets/planet_masks/neptune.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
.facts{
  top: -1500px
}
</style>

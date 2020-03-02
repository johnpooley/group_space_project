<template lang="html">
  <div id="jupiter" v-if="frenchJupiter">
    <nav>
      <ul>
  <li><a href="/welcome">Home</a></li>
</ul>
</nav>
    <h1>{{ frenchJupiter.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiJupiter">{{ wikiJupiter.query.pages[38930].extract }}</p>
  </section>
    <!-- need to loop through this moon array -->
      <div class ="facts">
        <div class="earth">
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>
        </div>
        <div class="mask"></div>
      </div>
      <audio id="testAudio" hidden src="https://drive.google.com/uc?export=download&id=1AnWUlF77c7AePjXXaDMC357r8aZW4Ggl" type="audio/wav">
      </audio>
      <button v-on:click="playAudio">Play Planet Sound</button>
    <h2>Moons</h2><p> {{ frenchJupiter.moons[0].moon }}</p>
    <h2>Distance from Sun</h2><p> {{ frenchJupiter.perihelion }}</p>
    <h2>Mass</h2><p> {{ frenchJupiter.mass.massValue }}</p>
    <h2>Gravity</h2><p> {{ frenchJupiter.gravity }}</p>
    <h2>Radius</h2><p> {{ frenchJupiter.meanRadius }}</p>
    <h2>Discovered by</h2><p> {{ frenchJupiter.discoveredBy }} N/A </p>
  </div>
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
#jupiter {
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
  background:url('../../assets/planet_masks/jupiter.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
</style>

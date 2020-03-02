<template lang="html">
  <div id="uranus" v-if="frenchUranus">
    <nav>
      <ul>
  <li><a href="/welcome">Home</a></li>
</ul>
</nav>
    <h1>{{ frenchUranus.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiUranus">{{ wikiUranus.query.pages[44475].extract }}</p>
  </section>
      <div class ="facts">
        <div class="earth">
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>
        </div>
        <div class="mask"></div>
      </div>
      <audio id="testAudio" hidden src="https://drive.google.com/uc?export=download&id=1JVdBcYNAI3GA7VV99FrlkTx_3DTevoKI" type="audio/mpeg">
      </audio>
      <button v-on:click="playAudio">Play Planet Sound</button>
    <h2>Moons</h2> <p>{{ frenchUranus.moons[0].moon }}</p>
    <h2>Distance from Sun</h2> <p>{{ frenchUranus.perihelion }}</p>
    <h2>Mass</h2> <p>{{ frenchUranus.mass.massValue }}</p>
    <h2>Gravity</h2> <p>{{ frenchUranus.gravity }}</p>
    <h2>Radius</h2> <p>{{ frenchUranus.meanRadius }}</p>
    <h2>Discovered by</h2> <p>{{ frenchUranus.discoveredBy }} </p>
  </div>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'uranus',
  data(){
    return{
      frenchUranus:null,
      wikiUranus: null

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
#uranus {
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
  background:url('../../assets/planet_masks/uranus.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}

.facts
{top:-800px}

</style>

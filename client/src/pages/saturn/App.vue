<template lang="html">
  <div id="saturn" v-if="frenchSaturn">
    <nav>
      <ul>
  <li><a href="/welcome">Home</a></li>
</ul>
</nav>
    <h1>{{ frenchSaturn.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiSaturn">{{ wikiSaturn.query.pages[44474].extract }}</p></section>
      <div class ="facts">
        <div class="earth">
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>
        </div>
        <div class="mask"></div>
      </div>
      <audio id="testAudio" hidden src="https://drive.google.com/uc?export=download&id=1tnyEFqZXGMRkT7DIybDsuzgXUwT2XyYD" type="audio/mpeg">
      </audio>
      <button v-on:click="playAudio">Play Planet Sound</button>
    <h2>Moons</h2><p> {{ frenchSaturn.moons[0].moon }}</p>
    <h2>Distance from Sun</h2> {{ frenchSaturn.perihelion }}</p>
    <h2>Mass</h2> {{ frenchSaturn.mass.massValue }}</p>
    <h2>Gravity</h2> {{ frenchSaturn.gravity }}</p>
    <h2>Radius</h2> {{ frenchSaturn.meanRadius }}</p>
    <h2>Discovered by</h2> {{ frenchSaturn.discoveredBy }} N/A </p>
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
#saturn {
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
  background:url('../../assets/planet_masks/saturn.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}

.facts{
  top:-900px;
}
</style>

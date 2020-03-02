<template lang="html">
  <div id="mars" v-if="frenchMars">
    <nav>
      <ul>
  <li><a href="/welcome">Home</a></li>
</ul>
</nav>
    <h1>{{ frenchMars.englishName }}</h1>
    <section class = "blurb">
      <p v-if="wikiMars">{{ wikiMars.query.pages[14640471].extract }}</p></section>
      <!-- need to loop through this moon array -->
      <div class ="facts"></section>
        <div class="earth">
          <div class="wrap">
            <div class="background"></div>
            <div class="clouds"></div>
          </div>
          <div class="mask"></div>
        </div>
        <audio id="testAudio" hidden src="https://drive.google.com/uc?export=download&id=1t_YLXHzoosGu6dI3MpHovS8rkLSFKDf9" type="audio/mpeg">
        </audio>
        <button v-on:click="playAudio">Play Planet Sound</button>
        <h2>Moons</h2><p> {{ frenchMars.moons[0].moon }}</p>
        <h2>Distance from Sun</h2><p> {{ frenchMars.perihelion }}</p>
        <h2>Mass</h2><p> {{ frenchMars.mass.massValue }}</p>
        <h2>Gravity</h2><p> {{ frenchMars.gravity }}</p>
        <h2>Radius</h2><p> {{ frenchMars.meanRadius }}</p>
        <h2>Discovered by</h2><p> {{ frenchMars.discoveredBy }} N/A </p>
      </div>

    </div>

  </template>

  <script>
  // import { eventBus } from ''
  export default {
    name: 'mars',
    data(){
      return{
        frenchMars:null,
        wikiMars: null
      };
      //fetch from wikidata API and French API
    },
    mounted(){

      fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
      .then(res => res.json())
      .then(frenchMars => this.frenchMars = frenchMars);

      fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Mars&origin=*')
      .then(res => res.json())
      .then(wikiMars => this.wikiMars = wikiMars);
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
    #mars {
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
      background:url('../../assets/planet_masks/mars.jpg') repeat-x;
      width:300px;
      height:300px;
      position:absolute;
      border-radius:50%;
    }
    .facts{
      top: -1700px
    }
  </style>

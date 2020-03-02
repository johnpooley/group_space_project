<template lang="html">
  <div id="iss">
    <nav>
      <ul>
  <li><a href="/welcome">Home</a></li>
</ul>
</nav>
    <h1>The International Space Station</h1>
    <section class ="blurb">
    <p v-if="wikiIss">{{wikiIss.query.pages[15043].extract}}
    </p></section>
  <div class ="facts">
    <div class="map">
      <h2>Where is the ISS now?</h2>
    <iframe
      :src="results.map_url"
      width="300"
      height="300"
      id="gmap_canvas"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      zoom=".00001"

    ></iframe>
    </div>
    <h2>Deployed</h2> <p>1998</p>
    <h2>Call Sign</h2><p>Alpha</p>
    <h2>Orbital Speed</h2> <p>7.66 km/s</p>
    <h2>Length</h2> <p>73 m</p>
    <h2>Width</h2> <p>109 m</p>
    <h2>Mass</h2> <p>419, 725 kg</p>
  </div>
  </div>
</template>

<script>
export default {
  name: "iss",
  data() {
    return {
      issStats:null,
      wikiISS:null,

      results: {
        map_url: "",
        google_url: "",
      }
    };
  },
   mounted:function() {

     fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=International_Space_Station&origin=*')
     .then(res => res.json())
     .then(wikiIss => this.wikiIss = wikiIss);

     this.getData();

     window.setInterval(this.getData, 10000);
    },
    methods: {
      getData() {
        console.log("here");
        fetch("http://api.open-notify.org/iss-now", {})
        .then(res => res.json())
        .then(issStats => this.issStats = issStats)
        .then(response => {
          this.results.map_url =`https://maps.google.com/maps?q=${response.iss_position.latitude},${response.iss_position.longitude}&t=&z=3&ie=UTF8&iwloc=&output=embed&maptype=satellite`
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
};
</script>

<style lang="css" scoped>

#iss {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  padding: 10px;
  vertical-align: middle;
}

iframe {
  font-size: 1.4rem;
  background-color: rgba(136, 135, 156, 0.3);
  line-height: 1.5;
  border: 10 px solid #42b983;
  border-radius: 25px;
   border-style: solid;
    border-color:  #000000;
  border-width: 1px;
}
.map {
  text-align: center;
  position: absolute;
  top: -400px;
  right: -70px;
}

.facts {
  top: -1550px
}
</style>

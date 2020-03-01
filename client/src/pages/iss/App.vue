<template lang="html">
  <div id="iss">
    <h1>The International Space Station</h1>
    <section class ="blurb">
    <p v-if="wikiIss">{{wikiIss.query.pages[15043].extract}}
    </p></section>
    <div class="map">
      <h2>Where is the ISS now?</h2>
    <iframe
      :src="results.map_url"
      width="600"
      height="400"
      id="gmap_canvas"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      zoom=".00001"

    ></iframe>
  </div>
  </div>
</template>

<script>
// setTimeout(function(){
// window.location.reload(1);
// }, 5000)
export default {
  name: "iss",
  data() {
    return {
      issStats:null,
      wikiISS:null,
      getData: null,
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

      fetch("http://api.open-notify.org/iss-now", {})
      .then(res => res.json())
      .then(issStats => this.issStats = issStats)
      .then(response => {
        this.results.map_url =`https://maps.google.com/maps?q=${response.iss_position.latitude},${response.iss_position.longitude}&t=&z=3&ie=UTF8&iwloc=&output=embed&maptype=satellite`
        console.log("here")
        // .then(setInterval(getData, 5000));
      })
      .catch(error => {
        console.log(error);
      });
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

p.iss{
  font-size: 3em;
  background-color:rgba(51,51,51,0.5);
  padding: 20px;
  border-radius:10%;
  text-align: center
}

iframe {
  font-size: 1.4rem;
  background-color: rgba(136, 135, 156, 0.3);
  line-height: 1.5;
  vertical-align: middle;
  border: 10 px solid #42b983;
  border-radius: 25px;
   border-style: solid;
    border-color:  #000000;
  border-width: 1px;
}
.map {
  text-align: center;
  position: absolute;
  top: 200px;
  right: 0px;
}
</style>

module.exports={
  pages: {
    'welcome':{
      entry: './src/pages/welcome/main.js',
      template: './public/index.html',
      title:'welcome',
      chunks:['chunk-vendors', 'chunk-common','welcome']
    },

    'mercury':{
      entry: './src/pages/mercury/main.js',
      template: './public/index.html',
      title:'mercury',
      chunks:['chunk-vendors', 'chunk-common','mercury']
    },

    'venus':{
      entry: './src/pages/venus/main.js',
      template: './public/index.html',
      title:'venus',
      chunks:['chunk-vendors', 'chunk-common', 'venus']
    },

    'earth':{
      entry: './src/pages/earth/main.js',
      template: './public/index.html',
      title:'earth',
      chunk:['chunk-vendors', 'chunk-common', 'earth']
    },

    'mars':{
      entry: './src/pages/mars/main.js',
      template: './public/index.html',
      title:'mars',
      chunk:['chunk-vendors', 'chunk-common', 'mars']
    },
    //
    // 'jupiter':{
    //   entry: './src/pages/jupiter/main.js',
    //   template: './public/index.html',
    //   title:'jupiter',
    //   chunk:['chunk-vendors', 'chunk-common', 'jupiter']
    // },
    //
    // 'saturn':{
    //   entry: './src/pages/saturn/main.js',
    //   template: './public/index.html',
    //   title:'saturn',
    //   chunk:['chunk-vendors', 'chunk-common', 'saturn']
    // },
    //
    // 'uranus':{
    //   entry: './src/pages/uranus/main.js',
    //   template: './public/index.html',
    //   title:'uranus',
    //   chunk:['chunk-vendors', 'chunk-common', 'uranus']
    // },
    // 'neptune':{
    //   entry: './src/pages/neptune/main.js',
    //   template: './public/index.html',
    //   title:'pluto',
    //   chunk:['chunk-vendors', 'chunk-common', 'neptune']
    // }
  }
}

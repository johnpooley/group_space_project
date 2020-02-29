module.exports={
  pages: {
    'welcome':{
      entry: './src/pages/welcome/main.js',
      template: './public/index.html',
      title:'welcome',
      chunks:['chunk-vendors', 'chunk-common','welcome']
    },
    'earth':{
      entry: './src/pages/earth/main.js',
      template: './public/index.html',
      title:'earth',
      chunks:['chunk-vendors', 'chunk-common','earth']
​
    },
​
    'mars':{
      entry: './src/pages/mars/main.js',
      template: './public/index.html',
      title:'mars',
      chunks:['chunk-vendors', 'chunk-common','mars']
​
    }
  }
}

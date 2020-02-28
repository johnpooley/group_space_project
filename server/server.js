const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(parser.json());

  app.listen(3000, function () {
      console.log(`Listening on port ${ this.address().port }`);
  });

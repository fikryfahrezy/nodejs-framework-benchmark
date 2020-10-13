const express = require('express');
const app = express();

function expressStart() {
  app.disable('etag');
  app.disable('x-powered-by');

  app.get('/api', (req, res) => {
    res.setHeader('content-type', 'text/plain');
    res.send(`Hi ${req.query.name} express`);
  });

  app.listen(5000, () => console.log('express running in 5000'));
}

export default expressStart;

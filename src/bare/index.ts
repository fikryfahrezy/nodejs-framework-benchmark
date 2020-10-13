const http = require('http');
const url = require('url');

function bareNodeStart() {
  const app = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    if (parsedURL.pathname === '/api') {
      res.setHeader('content-type', 'text/plain; charset=utf-8');
      res.end(`Hi ${parsedURL.query.name} from bare-node`);
    }
  });

  app.listen(5000, () => console.log('bare-node running in 5000'));
}

export default bareNodeStart;

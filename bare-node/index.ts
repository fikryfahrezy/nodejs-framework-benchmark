import http from 'http';
import url from 'url';

const PORT = 5000;

const app = http.createServer(async (req, res) => {
  const parsedURL = url.parse(req.url, true);
  if (parsedURL.pathname === '/api') {
    const data = { message: `Hi ${parsedURL.query.name} from bare-node` };
    const response = JSON.stringify(data);

    res.setHeader('Content-Type', 'application/json');
    return res.end(response);
  }
});

app.listen(PORT, () =>
  console.log(`bare-node server running on http://localhost:${PORT}`)
);

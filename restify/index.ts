import restify, { plugins } from 'restify';

const server = restify.createServer();
const PORT = 5000;

server.use(plugins.queryParser());
server.get('/api', async (req, res, next) => {
  const response = { message: `Hi ${req.query.name} from restify` };
  res.send(response);
  next();
});

server.listen(PORT, function () {
  console.log(`restify server running on http://localhost:${PORT}`);
});

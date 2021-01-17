import Hapi from '@hapi/hapi';

const PORT = 5000;
const server = Hapi.server({
  port: PORT,
  host: '::',
});

server.route({
  method: 'GET',
  path: '/api',
  handler: (req, res) => {
    const response = { message: `Hi ${req.query.name} from hapi` };
    return res.response(response);
  },
});

(async () => {
  await server.start();
  console.log(`hapi server running on http://localhost:${PORT}`);
})();

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

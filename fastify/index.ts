import fastify from 'fastify';

const app = fastify();
const PORT = 5000;

app.get('/api', async (req, res) => {
  const query = req.query as any;
  const response = { message: `Hi ${query.name} from fastify` };
  return res.send(response);
});

app.listen(PORT, '::', () =>
  console.log(`fastify server running on http://localhost:${PORT}`)
);

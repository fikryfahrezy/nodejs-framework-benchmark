import fastify from 'fastify';

const app = fastify();

function fasitfyStart() {
  app.get('/api', (req: any, res) => {
    res.send(`Hi ${req.query.name} from fastify`);
  });

  app.listen(5000, () => console.log('fastify running in 5000'));
}

export default fasitfyStart;

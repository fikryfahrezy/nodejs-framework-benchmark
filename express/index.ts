import express from 'express';

const app = express();
const PORT = 5000;

app.get('/api', async (req, res) => {
  const response = { message: `Hi ${req.query.name} from express` };
  return res.json(response);
});

app.listen(PORT, () => {
  console.log(`express server running on http://localhost:${PORT}`);
});

import express from 'express';
import locationRoutes from './routes/locationRoutes';

const app = express();

app.use(express.json());

app.use('/api', locationRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

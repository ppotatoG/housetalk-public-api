import dotenv from 'dotenv';
import express from 'express';

import locationRoutes from './routes/locationRoutes';

dotenv.config({ path: './env.local' });

const app = express();

app.use(express.json());

app.use('/api', locationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

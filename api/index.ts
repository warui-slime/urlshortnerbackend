import app from './app.js';
import dbConnect from './lib/dbConnect.js';

async function startServer() {
  await dbConnect();

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

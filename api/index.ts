import app from './app';
import dbConnect from './lib/dbConnect';

async function startServer() {
  await dbConnect();

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

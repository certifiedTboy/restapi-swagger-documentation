import { createServer } from "http";
import app from "#/app.js";
import { connectDb } from "#/helpers/db-config.js";
import { PORT } from "#/lib/index.js";
const httpServer = createServer(app);

const startServer = async () => {
  await connectDb();
  httpServer.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();

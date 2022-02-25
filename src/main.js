const express = require("express");
const app = express();
const mongoose = require("mongoose");

const router = require("./routes");

const errorHandler = require("./error/handler");

app.use(express.json());
app.use(router);
app.use(errorHandler);

const PORT = process.env.NODE_PORT ?? 3000;

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB: connected");
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}

main().catch((err) => console.log(err));

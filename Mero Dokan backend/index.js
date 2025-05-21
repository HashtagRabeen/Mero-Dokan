const express = require("express");

const app = express();
const PORT = process.env.PORT || 9000;
const cors = require("cors");

const connectDb = require("./src/db/connection");
connectDb();
const userRouter = require("./src/Routes/userRoutes");
const productRouter = require("./src/Routes/productRoutes");
app.use(express.json());
app.use(cors());
app.use("/upload", express.static("./public/images"));

app.use("/api", userRouter);
app.use("/api", productRouter);

app.listen(PORT, () => {
  console.log(`The server is working on port ${PORT}`);
});

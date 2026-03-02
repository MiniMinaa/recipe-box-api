import express from "express";

const app = express();

app.use(express.json());

const PORT = 300;

app.listen(PORT, () => {
  console.log(`Server is running in https://localhost:${PORT}`);
});

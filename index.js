import dotenv from "dotenv";
import app from "./app.js";

// dotEnv config {to access the variables}
dotenv.config();

// env variables
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
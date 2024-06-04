const express = require("express");
const routes = require("./api/routes/routes");
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.join(__dirname, './.env') })

const app = express();

app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 40");
});

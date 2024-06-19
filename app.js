const express = require("express");
const routes = require("./api/routes/routes");
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({ path: path.join(__dirname, './.env') });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

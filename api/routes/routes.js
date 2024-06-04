const express = require("express");
const router = express.Router();
const user_model = require("../models/user_model");
const admin_model = require("../models/admin_model")

router.get("/", async (req, res) => {
  user_model.getAll(req, res);
});

router.post('/login', async (req, res) => {
  admin_model.login(req, res)
})

module.exports = router;

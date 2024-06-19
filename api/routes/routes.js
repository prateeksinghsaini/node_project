const express = require("express");
const router = express.Router();
const user_model = require("../models/user_model");
const admin_model = require("../models/admin_model");
const { authenticateToken } = require("../middleware/auth");

router.post("/register", async (req, res) => {
  user_model.register(req, res);
});

router.post("/login", async (req, res) => {
  admin_model.login(req, res);
});

router.get("/", authenticateToken, async (req, res) => {
  user_model.getAll(req, res);
});

module.exports = router;

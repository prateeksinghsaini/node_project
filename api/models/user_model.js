const { connection } = require("../config/mysql_config");
const queries = require("../queries");
const bcrypt = require("bcryptjs");

const getAll = (req, res) => {
  try {
    const q = queries.getAll;
    connection.query(q, (err, result) => {
      if (err) {
        return res.json({ error: err });
      }
      if (result.length > 0) {
        res.json({
          status: "success",
          message: "Data found",
          data: result,
        });
      } else {
        res.json({
          status: "failed",
          message: "No data found",
        });
      }
    });
  } catch (error) {
    res.json({ error: error });
  }
};

const register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const q = queries.register
    .replace("<<username>>", connection.escape(req.body.username))
    .replace("<<password>>", connection.escape(hashedPassword));
  connection.query(q, (err, result) => {
    try {
      if (err) {
        return res.json({ error: err });
      }
      res.json({
        status: "success",
        message: "User registered successfully",
      });
    } catch (error) {
      res.json({ error: error });
    }
  });
};

module.exports = {
  getAll,
  register,
};

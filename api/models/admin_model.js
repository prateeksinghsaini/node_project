const { connection } = require("../config/mysql_config");
const queries = require("../queries");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = (req, res) => {
  const q = queries.login.replace(
    "<<username>>",
    connection.escape(req.body.username)
  );

  connection.query(q, async (err, result) => {
    try {
      if (err) {
        return res.json({ error: err });
      }

      if (result.length > 0) {
        const user = result[0];

        // Compare the provided password with the hashed password in the database
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );

        if (!validPassword) {
          return res.json({ status: "failed", message: "Invalid Password" });
        }

        // Generate a JWT token if the password is valid
        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        // Send a success response with the token
        res.json({
          status: "success",
          message: "Login Successful",
          token: token,
        });
      } else {
        // If no user was found
        res.json({
          status: "failed",
          message: "User not found",
        });
      }
    } catch (error) {
      res.json({ error: error });
    }
  });
};

module.exports = { login };

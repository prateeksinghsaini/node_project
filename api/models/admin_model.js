const { connection } = require("../config/mysql_config");
const queries = require("../quries");

const login = (req, res) => {
  const q = queries.login;
  q = q.replace("<<username>>", sql.escape());
  connection.query(q, (err, result) => {
    try {
      if (err) {
        res.json({
            error: err
        })
      } else {
        if (result.length > 0) {
            res.json({
                status: "success",
                message: "Login Successful",
                data: result
            })
        } else {
            res.json({
                status: "failed",
                message: "Failed to Login",
                data: result
            })
        }
      }
    } catch (error) {
      res.json({
        error: error,
      });
    }
  });
};

module.exports = {
  login,
};

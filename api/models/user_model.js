const { connection } = require("../config/mysql_config");
const queries = require("../quries");

const getAll = (req, res) => {
  try {
    const q = queries.getAll;
    connection.query(q, (err, result) => {
      if (err) {
        res.json({
          error: err,
        });
      } else {
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
      }
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

module.exports = {
  getAll,
};

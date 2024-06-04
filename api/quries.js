let getAll = "SELECT * FROM customers;";
let login = "SELECT * FROM admin_master WHERE username = <<username>> AND password = <<password>>"

module.exports = {
  getAll,
  login,
};

let getAll = "SELECT * FROM customers;";
let login = "SELECT * FROM admin_master WHERE username = <<username>>";
let register =
  "INSERT INTO admin_master (username, password) VALUES (<<username>>, <<password>>)";

module.exports = {
  getAll,
  login,
  register,
};

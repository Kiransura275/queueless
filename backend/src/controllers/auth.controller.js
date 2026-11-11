const authService = require("../services/auth.service");

async function login(req, res) {
  const { username, password } = req.body;
  console.log(username, password);
  const result = await authService.login(username, password);
  res.json(result);
}

module.exports = { login };

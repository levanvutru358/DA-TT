const authService = require("./auth.service");

exports.register = async (req, res) => {
  await authService.register(req.body);
  res.json({ message: "Register success" });
};

exports.login = async (req, res) => {
  const data = await authService.login(req.body);
  res.json(data);
};

exports.refresh = async (req, res) => {
  const data = await authService.refresh(req.body.refreshToken);
  res.json(data);
};

exports.forgotPassword = async (req, res) => {
  const token = await authService.forgotPassword(req.body.email);
  res.json({ resetToken: token });
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const result = await authService.resetPassword(email, newPassword);

    return res.json(result);
  } catch (err) {
    return res.status(400).json({
      message: err.message
    });
  }
};
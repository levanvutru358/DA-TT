const userService = require("./user.service");

const getProfile = async (req, res) => {
  const user = await userService.getProfile(req.user.id);
  res.json(user);
};

const updateProfile = async (req, res) => {
  const { name, phone } = req.body;

  const user = await userService.updateProfile(req.user.id, {
    name,
    phone,
  });

  res.json({ message: "Updated", user });
};

module.exports = {
  getProfile,
  updateProfile,
};
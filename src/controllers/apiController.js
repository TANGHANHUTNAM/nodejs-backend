const User = require("../models/user");

const getUserAPI = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    EC: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  let user = await User.create({ email, name, city });

  return res.status(200).json({
    EC: 0,
    data: user,
  });
};

module.exports = {
  getUserAPI,
  postCreateUserAPI,
};

const UserModel = require("../models/UserModel");

// signup controller
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.signup(email, password);
    // create a token
    //   const token = createToken(user._id);

    res.status(200).json({ user });
  } catch (error) {
    // console.log(error)
    res.status(400).json({ error: error.message });
  }
};

//login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);

    // create a token
//     const token = createToken(user._id);

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
};

const { User } = require("../models/model");
const { createJwt } = require("../utils/jwt");

async function createUser(userOpts) {
  if (!userOpts.username) throw new Error("Did not supply username");
  if (!userOpts.email) throw new Error("Did not supply email");
  if (!userOpts.password) throw new Error("Did not supply password");

  const user = await User.create(userOpts);
  if (!user) throw new Error("User can't created");
  else console.log("User created successfully");

  const createdUser = await User.findOne({
    attributes: ["email", "username", "bio", "image", "password"],
    where: {
      username: user.username,
    },
  });

  const token = await createJwt(createdUser.get());

  return { ...createdUser.get(), token };
}

async function verifyUser(userOpts) {
  if (!userOpts.email) throw new Error("Did not supply email");
  if (!userOpts.password) throw new Error("Did not supply password");

  const user = await User.findOne({
    attributes: ["email", "username", "bio", "image", "password"],
    where: { email: userOpts.email },
  });
  if (!user) throw new Error("No user Found !");

  if (user.password !== userOpts.password)
    throw new Error("Password does not match");

  const token = await createJwt(user.get());
  const response = {
    ...user.get(),
    token,
  };

  delete response.password;
  return response;
}

module.exports = {
  createUser,
  verifyUser,
};

const jwt = require("jsonwebtoken");
const schemaModel = require("../model/Model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "token does not exist" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  //!'Bearer' word replace with empty string and remove space with trim() function
  console.log("token from auth middleware", jwtToken);

  try {
    const isVarified = jwt.verify(jwtToken, process.env.SECRET);

    const userInfo = await schemaModel
      .findOne({ email: isVarified.email })
      .select({
        password: 0,
      });
    console.log(userInfo);

    req.unique_user = userInfo;
    req.token = token;
    req.userId = userInfo._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;

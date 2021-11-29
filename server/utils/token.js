import jwt from "jsonwebtoken";

export default function generateToken(user) {
  // generate token (sign) we can pass user or id or anything
  return jwt.sign(
    {
      name: user.name,
      email: user.email,
      id: user._id,
    },
    "MYSECRET"
  );
}

export const verifyAccessToken = (req, res, next) => {
  // console.log(req.headers)
  const authHeader = req.headers["authorization"];
  let token;
  if (!authHeader) {
    return;
  }

  token = authHeader

  if (token) {
    // decode
    try {
      jwt.verify(token, "MYSECRET", (err, decoded) => {
        if (err) throw new Error(err);
        req.userId = decoded;
        next();
      });
    } catch (err) {
      console.log(err);
    }
  }
};

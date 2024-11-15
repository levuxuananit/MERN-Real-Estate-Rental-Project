import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    return res.status(401).json({
      err: 1,
      msg: "Missing access token",
    });
  }

  jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({
          err: 1,
          msg: "Access token expired",
        });
      } else {
        return res.status(403).json({
          err: 1,
          msg: "Invalid access token",
        });
      }
    }

    req.user = user;
    next();
  });
};

export default verifyToken;

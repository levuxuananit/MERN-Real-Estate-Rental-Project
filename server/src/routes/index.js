import authRouter from "./auth.js";
import insertRouter from "./insert.js";
import categoryRouter from "./category.js";
import postRouter from "./post.js";
import priceRouter from "./price.js";
import areaRouter from "./area.js";
import provinceRouter from "./province.js";
import userRouter from "./user.js";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/categories", categoryRouter);
  app.use("/api/v1/posts", postRouter);
  app.use("/api/v1/prices", priceRouter);
  app.use("/api/v1/areas", areaRouter);
  app.use("/api/v1/provinces", provinceRouter);
  app.use("/api/v1/users", userRouter);

  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;

const router = require("express").Router();

const imageRoutes = require("./image-upload");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/image-upload", imageRoutes);

module.exports = router;

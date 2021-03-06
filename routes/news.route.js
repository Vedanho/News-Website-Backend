const { Router } = require("express");
const { newControllers } = require("../controllers/news.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const pictureMiddleware = require("../middlewares/picture.middleware");

const router = Router();

router.post("/news", pictureMiddleware.single("image"),newControllers.createNew);
router.get("/new", newControllers.getNews);
router.patch("/new/:id", authMiddleware, newControllers.updateNew);
router.delete("/new/:id", authMiddleware, newControllers.deleteNew);
router.get("/new/:id", newControllers.getNewsById)

module.exports = router

const express = require("express");

const { ItemController, DishListController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/dishlist", DishListController.browse);
router.get("/dishlist/:id", DishListController.read);
router.get("/dishlistf", DishListController.readLast);
router.put("/dishlist/:id", DishListController.edit);
router.post("/dishlist", DishListController.add);
router.delete("/dishlist/:id", DishListController.delete);

module.exports = router;

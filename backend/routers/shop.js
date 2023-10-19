const express = require("express");
const router = express.Router();
const productsController = require("../controllers/ProductCt");

router.get("/", productsController.getProducts);
router.get("/edit-product/:productId", productsController.getEditProduct);
router.post("/edit-product", productsController.postEditProduct);

module.exports = router;

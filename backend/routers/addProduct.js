const express = require("express");
const router = express.Router();
const productsController = require("../controllers/ProductCt");

router.post("/add-product", productsController.postAddProduct);

module.exports = router;

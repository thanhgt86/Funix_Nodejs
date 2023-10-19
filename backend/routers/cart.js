const express = require("express");
const router = express.Router();
const cartController = require("../controllers/CartCt");

router.post("/cart", cartController.cartProduct);

module.exports = router;

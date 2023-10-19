const Cart = require("../models/Cart");

exports.cartProduct = (req, res, next) => {
  Cart.addProduct(req.body.productId, req.body.productPrice); // controller sẽ đọc body của request để lấy productId và productPrice
  res.redirect("http://localhost:3000/");
};

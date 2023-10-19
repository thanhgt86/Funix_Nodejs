const Product = require("../models/Product");
// các controller bản chất là tách các middlware ra các file  xử lý riêng, trong controller sẽ gọi các method được khai trong model
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.json(products);
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(
    null,
    req.body.title,
    req.body.imageUrl,
    req.body.price,
    req.body.description
  );
  product.save();
  res.redirect("http://localhost:3000/");
};

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.json("Something went wrong!");
    }
    res.json(product);
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.id;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;
  console.log(req.body);
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedPrice,
    updatedDesc
  );
  console.log(updatedProduct);
  updatedProduct.save();
};

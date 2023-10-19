const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const shopRouters = require("./routers/shop");
const addProductRouter = require("./routers/addProduct");
const cartProductRouter = require("./routers/cart");
app.use(shopRouters);
app.use(addProductRouter);
app.use(cartProductRouter);

app.listen(5000);

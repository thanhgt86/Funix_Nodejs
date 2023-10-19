const fs = require("fs");
const path = require("path");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    const p = path.join(
      path.dirname(require.main.filename),
      "datas",
      "cart.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let cart = {
        products: [],
        totalPrice: 0,
      };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const productList = cart.products;
      const totalPriceItem = cart.totalPrice;
      // Tìm index của object mà có id trùng với id của request
      const prodIndex = productList.findIndex((p) => p.id === id);
      // Tìm object tương ứng với index đó trong mảng products
      const existingProduct = productList[prodIndex];
      let totalPrice;
      let updatedProductList;

      // Trường hợp trong mảng không tồn tại object nào có index đó
      if (!existingProduct) {
        productList.push({ id: id, qty: 1 }); //tạo object với id là id của request và qty là 1 và đưa vào array
        totalPrice = totalPriceItem + +productPrice; // tổng giá sẽ là giá cũ + giá mới (ở request đến)
        cart = { products: productList, totalPrice: totalPrice }; // gán lại giá trị cho cart
        fs.writeFile(p, JSON.stringify(cart), (err) => console.log(err)); // ghi vào file với đường dẫn p
      } else {
        // trường hợp đã có object với index thỏa mãn trong array thì cập nhật tăng 1 cho qty còn id thì giữ nguyên
        const updatedItem = {
          ...existingProduct,
          qty: existingProduct.qty + 1,
        };
        // sao chép các object trong mảng vào 1 biến mới là updatedProductList
        updatedProductList = [...productList];
        // thay thế object có vị trí (index) ở prodIndex thành object updatedItem mà ta đã cập nhật qty ở trên
        updatedProductList[prodIndex] = updatedItem;
        // tổng giá sẽ là giá cũ + giá mới (ở request đến)
        totalPrice = totalPriceItem + +productPrice;
        // gán lại giá trị cho cart
        cart = { products: updatedProductList, totalPrice: totalPrice };
        // ghi vào file với đường dẫn p
        fs.writeFile(p, JSON.stringify(cart), (err) => console.log(err));
      }
    });
  }
};

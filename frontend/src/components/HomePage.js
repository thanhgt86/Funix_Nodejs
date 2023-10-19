import React from "react";
import { useState, useEffect } from "react";

import "./product.css";
const HomePage = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    console.log("homepage get by fetch data");
    const productArr = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    productArr();
  }, []);
  return (
    <main>
      <div className="grid">
        {product.map((prod, i) => {
          return (
            <article className="card product-item" key={i}>
              <header className="card__header">
                <h1 className="product__title">{prod.title}</h1>
              </header>
              <div className="card__image">
                <img src={prod.imageUrl} alt="A Book" />
              </div>

              <div className="card__content">
                <h2 className="product__price">${prod.price}</h2>
                <p className="product__description">{prod.description}</p>
              </div>
              <div className="card__actions">
                <form action="http://localhost:5000/cart" method="POST">
                  <button className="btn">Add to Cart</button>
                  <input type="hidden" name="productId" value={prod.id} />

                  <input type="hidden" name="productPrice" value={prod.price} />
                </form>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;

import React from "react";
// import { useState, useEffect } from "react";
import "./forms.css";

const AddProduct = () => {
  return (
    <main>
      <form
        className="product-form"
        action="http://localhost:5000/add-product"
        method="POST"
      >
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>

        <div className="form-control">
          <label htmlFor="imageUrl">Image Url</label>
          <input type="text" name="imageUrl" id="imageUrl" />
        </div>

        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input type="text" name="price" id="price" />
        </div>

        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" id="description" />
        </div>

        <button className="btn" type="submit">
          Add Product
        </button>
      </form>
    </main>
  );
};

export default AddProduct;

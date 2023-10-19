import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./forms.css";

const EditProduct = () => {
  const [data, setData] = useState({
    id: null,
    title: "",
    imageUrl: "",
    price: "",
    description: "",
  });
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("edit product");
    const productEdit = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/edit-product/${param.prodId}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const product = await response.json();

        setData(product);
      } catch (err) {
        console.log(err);
      }
    };
    productEdit();
  }, [param]);

  const handleChange = (event) => {
    // event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setData({ ...data, [name]: value });

    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/edit-product", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      });
      console.log(data);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  return (
    <main>
      <form className="product-form">
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={data.imageUrl}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={data.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={data.description}
            onChange={handleChange}
          />
        </div>

        <button className="btn" type="submit" onClick={handleSubmit}>
          Update Product
        </button>
      </form>
    </main>
  );
};

export default EditProduct;

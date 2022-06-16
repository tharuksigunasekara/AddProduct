import React from "react";
import "./css/addProduct.css";
import { useState } from "react";
import Axios from "axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("other");

  const checkUserInputs = () => {
    if (name == "" || price == "" || description == "" || url == "") {
      alert("All items must be filled");
    } else if (price < 0) {
      alert("Quantuty/Price must be grater than 0");
    } else {
      setTimeout(sendProduct, 2000);
    }
  };
  // ====================

  const sendProduct = () => {
    Axios.post("http://localhost:5000/new", {
      name: name,
      description: description,

      price: price,
      url: url,
      category: category,
    }).then(() => {
      alert("Item Added");
      window.location.reload(false);
    });
  };

  return (
    <div>
      <div className='list'>
        <div>
          <h1 className='name'>Add Product</h1>
        </div>

        <div className='information'>
          <label>Name</label>
          <input
            type='text'
            required
            onChange={(event) => setName(event.target.value)}
          />
          <label>Description</label>
          <input
            type='text'
            required
            onChange={(event) => setDescription(event.target.value)}
          />
          <label>Price </label>
          <input
            type='text'
            required
            onChange={(event) => setPrice(event.target.value)}
          />
          <label>Enter image url </label>
          <input
            type='text'
            required
            onChange={(event) => setUrl(event.target.value)}
          />

          <label>Category</label>
          <select onChange={(event) => setCategory(event.target.value)}>
            <option value='other'>Other</option>
            <option value='frock'>Frock</option>
            <option value='skirt'>Skirt</option>
            <option value='blouse'>Blouse</option>
          </select>

          {/* <button onClick={sendProduct}> Add Product </button> */}
          <button onClick={checkUserInputs}> Add Product </button>
        </div>
      </div>
    </div>
  );
}

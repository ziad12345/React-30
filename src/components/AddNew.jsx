import axios from "axios";
import React, { useState, useEffect } from "react";

function Add() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [H, setH] = useState("");
  const [W, setW] = useState("");
  const [L, setL] = useState("");
  const [productData, setProductData] = useState();
  const [name, setName] = useState("");
  const [SKU, setSKU] = useState("");
  const [price, setPrice] = useState("");
  const [special, setSpecial] = useState("");
  const [value, setValue] = useState("");
  const [myLink, setMyLink] = useState("#");

  useEffect(() => {
    axios
      .get("https://jealousleaks.000webhostapp.com/products/get")
      .then((json) => setProductData(json));
  }, []);
  if (!productData) {
    return "loading...";
  }

  const handleSubmit = () => {
    const currentData = productData.data;
    var done = false;
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 5000);

    if (name.length === 0) {
      alert("Name has left Blank!");
    } else if (SKU.length === 0) {
      alert("SKU has left Blank!");
    } else if (price.length === 0) {
      alert("price has left Blank!");
    } else if (special.length < 3) {
      alert("switcher has left Blank!");
    } else if (
      special === "Dimensions" &&
      (H.length < 1 || W.length < 1 || L.length < 1)
    ) {
      alert("Please don't leave any Blanks");
    } else if (value.length === 0) {
      alert("Please make sure you didn't leave any Blanks");
    } else if (currentData.length >= 1) {
      currentData.forEach((cData) => {
        if (cData.SKU === SKU) {
          done = true;
          alert("This SKU already exits, Please enter a different one");
        }
      });
      if (done === false) {
        setMyLink("/");
        const url = "https://jealousleaks.000webhostapp.com/products/add";
        let fData = new FormData();
        fData.append("name", name);
        fData.append("SKU", SKU);
        fData.append("price", price);
        fData.append("special", special);
        fData.append("value", value);
        fData.append("H", H);
        fData.append("L", L);
        fData.append("W", W);
        axios
          .post(url, fData)
          .then((response) => alert(response.data))
          .catch((error) => alert(error));
      }
    } else {
      setMyLink("/");
      const url = "https://jealousleaks.000webhostapp.com/products/add";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("SKU", SKU);
      fData.append("price", price);
      fData.append("special", special);
      fData.append("value", value);
      fData.append("H", H);
      fData.append("L", L);
      fData.append("W", W);

      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <form id="product_form">
      <div>
        <h1 className="pageTitle">Products Add</h1>
        <a href={myLink} name="submit" id="submit">
          <button
            className="btn btn-primary add-btn"
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            Save
          </button>
        </a>

        <a href="/" className="btn btn-primary add-btn">
          Cancel
        </a>
        <hr></hr>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="newinputs"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            name="sku"
            className="newinputs"
            id="sku"
            value={SKU}
            onChange={(e) => setSKU(e.target.value)}
          />

          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            name="price"
            className="newinputs"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="switcher">Type Switcher</label>
          <select
            name="switcher"
            id="productType"
            onChange={(e) => {
              setSpecial(e.target.value);
              {
                setValue(" ");
              }
            }}
          >
            <option defaultValue={null}>Type Switcher</option>
            <option value="Size">DVD</option>
            <option value="Weight">Book</option>
            <option value="Dimensions">Furniture</option>
          </select>

          {special === "Size" ? (
            <div className="col-4 itemDiv">
              <div className="card ">
                <div className="card-body">
                  <label htmlFor="size">Size (MB)</label>
                  <input
                    className="card-text specialInput"
                    type="text"
                    name="size"
                    id="size"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                  <p>Please provide the size in MegaBites</p>
                </div>
              </div>
            </div>
          ) : null}
          {special === "Weight" ? (
            <div className="col-4 itemDiv">
              <div className="card ">
                <div className="card-body">
                  <label htmlFor="weight">Weight (kg)</label>
                  <input
                    className="card-text specialInput"
                    type="text"
                    name="weight"
                    id="weight"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                  <p>Please provide the weight in kilograms</p>
                </div>
              </div>
            </div>
          ) : null}
          {special === "Dimensions" ? (
            <div className="col-4 itemDiv">
              <div className="card ">
                <div className="card-body">
                  <label htmlFor="height">Height (CM)</label>
                  <input
                    className=" specialInput"
                    type="number"
                    name="height"
                    id="height"
                    value={H}
                    onChange={(e) => {
                      setH(e.target.value);
                    }}
                  />
                  <label htmlFor="width">Width (CM)</label>
                  <input
                    className=" specialInput"
                    type="number"
                    name="width"
                    id="width"
                    value={W}
                    onChange={(e) => {
                      setW(e.target.value);
                    }}
                  />
                  <label htmlFor="length">Length (CM)</label>
                  <input
                    className=" specialInput"
                    type="number"
                    name="length"
                    id="length"
                    value={L}
                    onChange={(e) => {
                      setL(e.target.value);
                    }}
                  />
                  <p>Please provide dimensions in HxWxL formate</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <hr></hr>
    </form>
  );
}

export default Add;

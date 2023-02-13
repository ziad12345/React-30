import axios from "axios";
import React,{ useState, useEffect } from "react";

function Add() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [selected, setSelected] = useState("");
  const [H, setH] = useState("");
  const [W, setW] = useState("");
  const [L, setL] = useState("");
  const [productData, setProductData] = useState();
  const [name, setName] = useState("");
  const [SKU, setSKU] = useState("");
  const [price, setPrice] = useState("");
  const [special, setSpecial] = useState("");
  const [value, setValue] = useState("");
  const [mass, setMass] = useState("");
  const [myLink, setMyLink] = useState("#");

  useEffect(() => {
    axios.get("https://jealous-leaks.000webhostapp.com/RenderData.php").then((json) => setProductData(json));                 
  }, []);
  if (!productData) {
    return "loading..."
  }     


  const currentData = productData.data;

  const handleSubmit = () => {
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
    } else if (special === "Furniture") {
        if (H.length < 1 || W.length < 1 || L.length < 1) {
            alert("Please don't leave any Blanks")}             
    } else if (special.length < 3) {     
      alert("switcher has left Blank!");
    } else if (value.length === 0) {
      alert("Please make sure you didn't leave any Blanks");     
    } else if (currentData.length >= 1) {
      currentData.forEach(cData => {
        if (cData.SKU === SKU) {
          done = true;
          alert("This SKU already exits, Please enter a different one");}});
        if (done ===false) {
          setMyLink("/");      
          const url = "https://jealous-leaks.000webhostapp.com/Save.php";
          let fData = new FormData();
          fData.append("name", name);
          fData.append("SKU", SKU);
          fData.append("price", price);
          fData.append("special", special);
          fData.append("value", value);
          fData.append("mass", mass);
    
          axios
            .post(url, fData)
            .then((response) => alert(response.data))
            .catch((error) => alert(error));
        }  
    } else {  
      setMyLink("/");            
      const url = "https://jealous-leaks.000webhostapp.com/Save.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("SKU", SKU);
      fData.append("price", price);
      fData.append("special", special);
      fData.append("value", value);
      fData.append("mass", mass);

      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
    
  };
  
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <form id="product_form">
      <div>
        <h1 className="pageTitle">Products Add</h1>
        <a          
          href={myLink}
          
          name="submit"
          id="submit"
          
        ><button className="btn btn-primary add-btn" disabled={isDisabled} onClick={handleSubmit}>Save</button></a>
        
        <a href="/" className="btn btn-primary add-btn">Cancel</a>
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
          <select name="switcher" id="productType" onChange={handleChange}>
            <option defaultValue={null}>Type Switcher</option>
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
          

          {selected === "DVD" ? (
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
                      setSpecial("Size");
                      setMass("MB");
                    }}
                  />
                  <p>Please provide the size in MegaBites</p>
                </div>
              </div>
            </div>
          ) : null}
          {selected === "Book" ? (
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
                      setSpecial("Weight");
                      setMass("KG");
                    }}
                  />
                  <p>Please provide the weight in kilograms</p>
                </div>
              </div>
            </div>
          ) : null}
          {selected === "Furniture" ? (
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
                      {
                        var itall =  e.target.value + "x" + W + "x" + L;
                        setValue(itall);
                        setSpecial("Dimensions");
                      }
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
                      {
                        var itall =  H + "x" + e.target.value + "x" + L;
                        setValue(itall);
                      }
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
                      {
                        var itall = H + "x" + W + "x" + e.target.value;
                        setValue(itall);
                      }
                    }}
                  />
                  <p>Please provide dimensions in HxWxL formate</p>
                </div>
              </div>
            </div>
          ) : null}

          {/* <input type="button" name="submit" id="submit" value="SEND" onClick={handleSubmit} /> */}
        </div>
      </div>
      <hr></hr>
    </form>
  );
}

export default Add;
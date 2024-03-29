import axios from "axios";
import React from "react";
import SingleProduct from "./singleProduct";

function Card() {
  const [productData, setProductData] = React.useState();
  const url = "https://jealousleaks.000webhostapp.com/products/get";
  const idArray = [];
  React.useEffect(() => {
    axios.get(url).then((json) => setProductData(json));
  }, []);

  if (!productData) {
    return "loading...";
  }
  var myData = productData.data;
  const massDelete = () => {
    let res = new FormData();
    for (let index = 0; index < idArray.length; index++) {
      res.append("idArray", idArray[index]);
      axios
        .post("https://jealousleaks.000webhostapp.com/products/delete", res, {
          headers: {
            "Access-Control-Allow-Origin": true
          }
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    idArray.length = 0;
    window.location.reload();
  };
  return (
    <div>
      <h1 className="pageTitle">Products List</h1>
      <a href="/addproduct" className="btn btn-primary add-btn">
        ADD
      </a>
      <button
        type="button"
        className="btn btn-primary"
        onClick={massDelete}
        id="delete-product-btn"
      >
        MASS DELETE
      </button>
      <hr></hr>
      <div className="container">
        <div className="row">
          {myData.map((report) => {
            return (
              <SingleProduct
                idArray={idArray}
                key={report.id}
                id={report.id}
                name={report.name}
                SKU={report.SKU}
                price={report.price}
                special={report.special}
                value={report.value}
              />
            );
          })}
        </div>
      </div>
      <footer>
        <hr></hr>
      </footer>
    </div>
  );
}

export default Card;

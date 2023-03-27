import React from "react";

function SingleProduct(props) {
  const getID = () => {
    if (props.idArray.includes(props.id)) {
      const index = props.idArray.indexOf(props.id);
      delete props.idArray[index];
    } else {
      props.idArray.push(props.id);
    }
  };

  return (
    <div className="col-3">
      <div className="card text-center text-white bg-info mb-3">
        <div className="card-body">
          <input type="checkbox" onClick={getID} className="delete-checkbox" />
          <h3 className="card-title">{props.name}</h3>
          <h5 className="card-text">{props.SKU}</h5>
          <h5 className="card-text">{props.price}$</h5>
          <h5 className="card-text">
            {props.special}: {props.value}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

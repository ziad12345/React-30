import React, {useState} from "react";

function SingleProduct(props) {
    const [myArray, setMyArray] = useState([]);
    const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  const getID = event => {
    if (props.idArray.includes(props.id)) {
        const index = props.idArray.indexOf(props.id)
        delete props.idArray[index];
    } else {
    props.idArray.push(props.id)}
    setMyArray(prevItems => {
        return [...prevItems, props.id];
      });
  }  

    return (
        <div className="col-3">     
            <div className="card text-center text-white bg-info mb-3">
                <div className="card-body">
                    <input type="checkbox" onClick={getID}  className="delete-checkbox" />                                        
                    <h3 className="card-title">{props.name}</h3>
                    <h5 className="card-text">{props.SKU}</h5>
                    <h5 className="card-text">{props.price}$</h5>
                    <h5 className="card-text">{props.special}: {props.value} {props.mass}</h5>  
                </div>
            </div>
        </div>)
    
}

export default SingleProduct;
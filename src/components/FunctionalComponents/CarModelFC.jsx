import React from "react";
import useCounter from "../../hook/useCounter";

function CarModelFC() {
  const { models, handleMinus, handlePlus } = useCounter();
  return (
    <div className="container">
      <h3>Car Model Counter</h3>
      <div className="flex">
        {Object.entries(models).map(([key, value]) => {
          return (
            <div key={key} className="models">
              <div>
                <button onClick={() => handleMinus(key)}>-</button>
                <div>{key}</div>
                <button onClick={() => handlePlus(key)}>+</button>
              </div>
              <p>clicked: {value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarModelFC;

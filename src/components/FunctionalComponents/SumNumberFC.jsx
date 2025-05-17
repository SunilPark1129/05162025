import React, { useRef } from "react";
import useSum from "../../hook/useSum";

function SumNumberFC() {
  const inputRef = useRef(null);
  const { sums, total, addSums } = useSum();

  function handleAdd() {
    const { value } = inputRef.current;
    if (Number.isNaN(Number(value)) || value === "") return;
    addSums(Number(value));
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div className="container">
      <h3>Add Numbers</h3>
      <div className="flex">
        <input type="text" ref={inputRef} className="input" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {sums.join("+") || 0} = <b>{total}</b>
      </div>
    </div>
  );
}

export default SumNumberFC;

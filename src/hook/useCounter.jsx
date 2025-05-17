import React, { useState } from "react";

function useCounter() {
  const [models, setModels] = useState({ tesla: 0, bmw: 0, kia: 0 });

  function handlePlus(model) {
    setModels((prev) => ({ ...prev, [model]: prev[model] + 1 }));
  }

  function handleMinus(model) {
    setModels((prev) => ({ ...prev, [model]: prev[model] - 1 }));
  }

  return { models, handlePlus, handleMinus };
}

export default useCounter;

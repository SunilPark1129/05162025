import React, { useEffect, useState } from "react";

function useSum() {
  const [sums, setSums] = useState([]);
  const [total, setTotal] = useState(0);

  function addSums(value) {
    setSums((prev) => [...prev, value]);
  }

  useEffect(() => {
    if (sums.length !== 0) {
      const temp = sums.reduce((a, b) => a + b);
      setTotal(temp);
    }
  }, [sums]);

  return { sums, total, addSums };
}

export default useSum;

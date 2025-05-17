import React, { useEffect, useState } from "react";

function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return { loading };
}

export default useLoading;

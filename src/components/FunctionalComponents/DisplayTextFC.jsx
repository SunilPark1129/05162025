import React from "react";
import useLoading from "../../hook/useLoading";

function DisplayTextFC() {
  const { loading } = useLoading();
  return (
    <div className="container">
      <h3>Loading</h3>
      {loading ? (
        <div>Loading for 5 seconds...</div>
      ) : (
        <div>This text shows up after loading is complete</div>
      )}
    </div>
  );
}

export default DisplayTextFC;

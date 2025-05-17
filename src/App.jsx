import { useState } from "react";
import "./App.css";
import SumNumber from "./components/ClassComponents/SumNumber";
import DisplayText from "./components/ClassComponents/DisplayText";
import CarModel from "./components/ClassComponents/CarModel";
import CarModelFC from "./components/FunctionalComponents/CarModelFC";
import SumNumberFC from "./components/FunctionalComponents/SumNumberFC";
import DisplayTextFC from "./components/FunctionalComponents/DisplayTextFC";

function App() {
  return (
    <main>
      <div>
        <h2>hoc</h2>
        <CarModel />
        <SumNumber />
        <DisplayText />
      </div>
      <div>
        <h2>hook</h2>
        <CarModelFC />
        <SumNumberFC />
        <DisplayTextFC />
      </div>
    </main>
  );
}

export default App;

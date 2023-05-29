import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { filterData, apiUrl } from "./data";

const App = () => {
  return (
    <div>
      <Navbar />

      <Filter filterData={filterData} />

      <Cards />
    </div>
  );
};

export default App;

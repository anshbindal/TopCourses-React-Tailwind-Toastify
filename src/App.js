import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const output = await fetch(apiUrl);
      const res = await output.json();
      setCourses(res);
    } catch (error) {
      toast.error("Network Error");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
};

export default App;

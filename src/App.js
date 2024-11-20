import React, { useState } from "react";
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import SelectedFilters from "./components/SelectedFilters";
import Table from "./components/Table";

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const addFilter = (filter) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <Header />
      <FilterSection addFilter={addFilter} />
      <SelectedFilters selectedFilters={selectedFilters} removeFilter={removeFilter} />
      <Table />
    </div>
  );
};

export default App;

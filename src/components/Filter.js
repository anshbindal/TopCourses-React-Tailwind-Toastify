import React from "react";

function Filter({ filterData }) {
  return (
    <div>
      {filterData.map((item) => {
        return <button key={item.id}>{item.title}</button>;
      })}
    </div>
  );
}

export default Filter;

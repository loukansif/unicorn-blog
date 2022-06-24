import React from "react";

function Filter(props) {
  const toSearch = (e) => {
    props.parentCallback(e.target.search.value);
    e.preventDefault();
  };
  
  return (
    <div>
      <form onSubmit={toSearch}>
        <input type="text" name="search" placeholder="Enter Name" />
        <input type="submit" value="Filtrer" />
      </form>
    </div>
  );
}

export default Filter;

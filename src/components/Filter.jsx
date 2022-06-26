import React from "react";

function Filter(props) {
  const toSearch = (e) => {
    props.parentCallback(e.target.search.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={toSearch}>
        <input type="text" class="filterInput" name="search" placeholder="Filtre" />
        <input type="submit" class="filter-btn" value="Filtrer" />
      </form>
    </div>
  );
}

export default Filter;

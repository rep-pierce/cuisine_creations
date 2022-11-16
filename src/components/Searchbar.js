import React from 'react';

function SearchBar ({search, setSearch, filterState, setFilterState}) {

    return(
    <div className = "searchContainer">
        <label>
            <strong className = "filterText">Filter By:</strong>
            <select onChange={(e)=> setFilterState(e.target.value)} value={filterState} className="filter">
                <option value="None">None</option>
                <option value="Rating">Best Star Rating</option>
            </select>
        </label>
        <input 
            value = {search}
            type ="text"
            placeholder = "Search Recipes"
            onChange={(e)=> setSearch(e.target.value)}
            className="searchBar"
        />

    </div>
    )
}

export default SearchBar
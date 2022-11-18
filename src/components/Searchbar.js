import React from 'react';

function SearchBar ({search, setSearch, filterState, setFilterState}) {

    return(
    <div className = "Search-div">
        <label>
            <strong className = "Search-strong">Filter By:</strong>
            <select onChange={(e)=> setFilterState(e.target.value)  } value={filterState} className="Search-select">
                <option value="None">None</option>
                <option value="Rating">Best Star Rating</option>
            </select>
        </label>
        <input 
            value = {search}
            type ="text"
            placeholder = "Search Recipes"
            onChange={(e)=> setSearch(e.target.value)}
            className="Search-input"
        />

    </div>
    )
}

export default SearchBar
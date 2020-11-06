import React from "react";

const Search = ({ searchResult }) => {
    return (
        <input
            onChange={event => searchResult(event)}
            placeholder="What emoji are you looking for ?"
        />
    )
}
export default Search
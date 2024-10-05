"client side"
import React from 'react'

const SearchButton = (query) => {
  return (
    <button type="submit" onClick={searchQuery(query.data)}>Search</button>
  )
}

export default SearchButton
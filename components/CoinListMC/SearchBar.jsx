import React from 'react';

const SearchBar = ({ ...rest }) => {
  return (
    <div className="coin_search">
      <input className="coin_input" {...rest} />
    </div>
  );
};

export default SearchBar;

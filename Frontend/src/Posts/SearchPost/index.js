import React, { useState } from 'react';
import SearchIcon from '../assets/search-icon.svg';
import './search.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const SearchPost = ({ setSearchType, onClickSearch, setSearchValueParent }) => {
  const [searchValue, setSearchValue] = useState('');
  const [title, setTitle] = useState('Search By')
  
  const searchByAuthor = () => {
    setSearchType('Author');
    setTitle('Search By: Author');
  }

  const searchByContent = () => {
    setSearchType('Content');
    setTitle('Search By: Content');
  }

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
    setSearchValueParent(e.target.value);
  }

  const onSearch = () => {
    onClickSearch();
  }

  return (
    <div className="search-container">
      <div className="search-options">
        <DropdownButton id="dropdown-basic-button" title={title}>
          <Dropdown.Item onClick={searchByAuthor}>Author</Dropdown.Item>
          <Dropdown.Item onClick={searchByContent}>Content</Dropdown.Item>
        </DropdownButton>
      </div>
      <input
        className="search-box"
        value={searchValue}
        onChange={onChangeSearchValue}
        placeholder="Search for a post..."
      />

      <img
        className="search-icon"
        src={SearchIcon}
        alt="Search Icon"
        onClick={onSearch}
      />
    </div>
  )
}

export default SearchPost;

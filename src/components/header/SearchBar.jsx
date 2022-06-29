import React from 'react'
import styled from 'styled-components'
import searchIcon from '../../assetss/images/search.png'
import { Link } from 'react-router-dom'

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  margin: 0 5px;
  min-width: 0;
  width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid orange;
`
const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`

function SearchBar() {
  const [searchText, setSearchText] = React.useState('')
  const onSearchValueChange = (event) => {
    setSearchText(event.target.value)
  }
  return (
    <Wrapper>
      <SearchInput
        placeholder="Type here..."
        value={searchText}
        type="text"
        onChange={onSearchValueChange}
      />
      <Link to={`/search?q=${searchText}`}>
        <Icon src={searchIcon} alt="Search Icon" />
      </Link>
    </Wrapper>
  )
}

export default SearchBar

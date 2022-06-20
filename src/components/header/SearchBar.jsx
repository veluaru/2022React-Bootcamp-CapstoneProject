import React from 'react'
import styled from 'styled-components'
import searchIcon from '../../assetss/images/search.png'

const SearchInput = styled.input`
  border: none;
  border-bottom: 2px solid orange;
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
`
const Icon = styled.img`
  width: 25px;
  height: 25px;
`

function SearchBar() {
  const [searchText, setSearchText] = React.useState('')
  const onSearchValueChange = (event) => {
    setSearchText(event.target.value)
  }
  return (
    <Wrapper>
      <Icon src={searchIcon} alt="Search Icon" />
      <SearchInput
        disabled
        placeholder="Search here..."
        value={searchText}
        type="text"
        onChange={onSearchValueChange}
      />
    </Wrapper>
  )
}

export default SearchBar

import styled from 'styled-components'
import React from 'react'
import Products from '../components/products/Products.jsx'
import Spinner from '../components/Spinner.jsx'
import { useLocation } from 'react-router-dom'
import { useSearchTerm } from '../utils/hooks/useSearchTerm'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 2% 5% 0 5%;
  margin-bottom: 30px;
`
const WrapperProductList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  width: 100%;
`
const AllProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
`
const Pagination = styled.div`
  font-weight: bold;
  button {
    font-size: 16px;
    font-weight: bold;
    border: 1px solid rgb(227, 230, 230);
    background-color: rgb(227, 230, 230);
    border-radius: 5px;
    color: black;
    margin: 5px 20px;
    padding: 6px 12px;
    cursor: pointer;
  }
`
const Empty = styled.span`
  font-family: 'Arista-Light';
  font-size: 20px;
  color: orange;
`
const productsLoaded = {
  backgroundColor: 'rgba(255, 233, 219, 0.637)',
  borderRadius: '10px',
}

function ProductList() {
  const [page, setPage] = React.useState(1)
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const searchTerm = searchParams.get('q')
  const { dataSearchTerm, isLoadingSearchTerm } = useSearchTerm(searchTerm, page)
  const [filteredSearchTerm, setFilteredSearchTerm] = React.useState([])
  const [emptyProducts, setEmptyProducts] = React.useState(false)

  const clickPages = (type) => {
    if (type) {
      if (dataSearchTerm.results.length === 5) {
        setPage(page + 1);
      }
    } else {
      if (page > 1) {
        setPage(page - 1);
      }
    }
  }
  React.useEffect(() => {
    if (dataSearchTerm.results && dataSearchTerm.results === 0) {
      setEmptyProducts(true);
      return
    }
    setFilteredSearchTerm(dataSearchTerm.results || [])
    setEmptyProducts(false);
  }, [dataSearchTerm])

  return (
    <Wrapper>
      <WrapperProductList>
        <AllProducts
          style={
            !isLoadingSearchTerm &&
            dataSearchTerm.results &&
            dataSearchTerm.results.length > 0
              ? productsLoaded
              : {}
          }
        >
          {isLoadingSearchTerm && <Spinner />}
          {!isLoadingSearchTerm &&
          dataSearchTerm.results &&
          dataSearchTerm.results.length > 0 && (
            <Products products={filteredSearchTerm} />
          )}
          {!isLoadingSearchTerm && 
          dataSearchTerm.results && 
          dataSearchTerm.results.length === 0 && (
            <Empty>There are no matching products :c</Empty>
          )}
        </AllProducts>
      </WrapperProductList>
      <Pagination>
        {!isLoadingSearchTerm && dataSearchTerm.results &&
          <div>
            <button
              onClick={() => clickPages(false)}
              style={page <= 1 ? { cursor: 'unset' } : {}}
              disabled={page <= 1} >&laquo;</button>
            <span>{page}</span>
            <button
              onClick={() => clickPages(true)}
              style={filteredSearchTerm.length < 5 || emptyProducts ? { cursor: 'unset' } : {}}
              disabled={filteredSearchTerm.length < 5 || emptyProducts}>&raquo;</button>
          </div>
        }
      </Pagination>
    </Wrapper>
  )
}

export default ProductList

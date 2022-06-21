import styled from 'styled-components'
import React from 'react'
// import dataProducts from '../assetss/mocks/en-us/products.json'
import Products from '../components/products/Products.jsx'
import Spinner from '../components/Spinner.jsx'
import { useLocation } from 'react-router-dom'
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories'
import { useProducts } from '../utils/hooks/useProducts'
import { MainButton } from '../components/MainButton'

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
const CategorySidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 15px;
`
const Category = styled.div`
  padding: 10px 5px;
  cursor: pointer;
  border-bottom: 1px solid rgb(207, 207, 207);
  padding-right: 10px;
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
const Title = styled.h1`
  font-family: 'Arista-Light';
  color: Orange;
  font-size: 24px;
`
const AllProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
`
const Pagination = styled.div`
  button {
    font-size: 16px;
    font-weight: bold;
    border: 1px solid rgb(227, 230, 230);
    background-color: rgb(227, 230, 230);
    border-radius: 5px;
    color: black;
    margin 5px;
    padding: 6px 12px;
    cursor: pointer;
  }
`
const Empty = styled.span`
  font-family: 'Arista-Light';
  font-size: 20px;
  color: orange;
`

const selectedCategoryStyle = {
  color: 'black',
  backgroundColor: 'rgb(171, 240, 245)',
}
const defaultCategoryStyle = {
  color: 'black',
  backgroundColor: 'white',
}
// const activePagingStyle = {
//   border: '1px solid rgb(171, 240, 245)',
//   backgroundColor: 'rgb(171, 240, 245)',
//   cursor: 'auto',
// }
const productsLoaded = {
  backgroundColor: 'rgba(255, 233, 219, 0.637)',
  borderRadius: '10px',
}

function ProductList() {
  const { dataCategories, isLoadingCategories } = useFeaturedCategories()
  let { dataProducts, isLoadingProducts } = useProducts(1)
  const [filteredProducts, setFilteredProducts] = React.useState([])
  const [filterSelected, setFilterSelected] = React.useState([])
  const [page, setPage] = React.useState(1)
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const category = searchParams.get('category')

  const onFilterClick = (category) => {
    if (filterSelected.includes(category)) {
      setFilterSelected((array) =>
        array.filter((prevCategory) => prevCategory !== category)
      )
    } else {
      setFilterSelected([...filterSelected, category])
    }
  }
  const clearFilters = () => {
    setFilterSelected([])
  }

  const clickPages = (type) => {
      if (type === 'next') {
        if (dataCategories.results === 12) {
          setPage(page + 1);
          // [ dataProducts, isLoadingProducts ] = useProducts(page + 1)
          // clearFilters()
        }
      } else {
        if (page > 1) {
          setPage(page - 1);
          // [ dataProducts, isLoadingProducts ] = useProducts(page - 1)
          // clearFilters()
        }
      }
  }

  React.useEffect(() => {
    if (category) {
      setFilterSelected([category])
    }
  }, [category])

  React.useEffect(() => {
    setFilteredProducts(dataProducts.results || [])
  }, [dataProducts])

  React.useEffect(() => {
    if (dataProducts.results) {
      let defaultArray = dataProducts.results
      let newFilterArray = defaultArray.filter((product) => {
        let categoryString = product.data.category.slug.replace(/\w\S*/g, (w) =>
          w.replace(/^\w/, (c) => c.toUpperCase())
        )
        return (
          filterSelected.includes(categoryString) || filterSelected.length === 0
        )
      })
      setFilteredProducts(newFilterArray)
    }
  }, [filterSelected, dataProducts])

  return (
    <Wrapper>
      <WrapperProductList>
        <CategorySidebar>
          <Title>Categories</Title>
          {isLoadingCategories || isLoadingProducts ? (
            <Spinner />
          ) : (
            <List>
              {dataCategories.results.map(({ id, data: { name } }) => (
                <Category
                  style={
                    filterSelected.includes(name)
                      ? selectedCategoryStyle
                      : defaultCategoryStyle
                  }
                  key={id}
                  onClick={() => onFilterClick(name)}
                >
                  {name}
                </Category>
              ))}
              {filterSelected.length > 0 && (
                <MainButton onClick={clearFilters}>Clear</MainButton>
              )}
            </List>
          )}
        </CategorySidebar>
        <AllProducts
          style={
            !isLoadingProducts && filteredProducts.length > 0
              ? productsLoaded
              : {}
          }
        >
          {isLoadingProducts && <Spinner />}
          {!isLoadingProducts && filteredProducts.length > 0 && (
            <Products products={filteredProducts} />
          )}
          {!isLoadingProducts && filteredProducts.length === 0 && (
            <Empty>There are no products :c</Empty>
          )}
        </AllProducts>
      </WrapperProductList>
      <Pagination>
        <div>
          <button onClick={() => clickPages('prev')}>&laquo;</button>
          <span>{page}</span>
          <button onClick={() => clickPages('next')}>&raquo;</button>
        </div>
      </Pagination>
    </Wrapper>
  )
}

export default ProductList

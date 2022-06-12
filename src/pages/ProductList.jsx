import styled from 'styled-components'
import React from 'react'
import dataCategories from '../mocks/en-us/product-categories.json'
import dataProducts from '../mocks/en-us/products.json'
import Products from '../components/Products.jsx'
import Spinner from '../components/Spinner.jsx'

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
  margin-right: 10px;
`
const Category = styled.div`
  max-width: 160px;
  width: 100%;
  padding: 10px 5px;
  cursor: pointer;
  border-bottom: 1px solid rgb(207, 207, 207);
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

const selectedCategoryStyle = {
  color: 'black',
  backgroundColor: 'rgb(171, 240, 245)',
}
const defaultCategoryStyle = {
  color: 'black',
  backgroundColor: 'white',
}
const activePagingStyle = {
  border: '1px solid rgb(171, 240, 245)',
  backgroundColor: 'rgb(171, 240, 245)',
  cursor: 'auto',
}

function ProductList() {
  const [filteredProducts, setFilteredProducts] = React.useState(
    dataProducts.results
  )
  const [filterSelected, setFilterSelected] = React.useState([])
  const [dataLoaded, setDataLoaded] = React.useState(false)

  const onFilterClick = (category) => {
    if (filterSelected.includes(category)) {
      let previousArray = filterSelected
      const index = previousArray.indexOf(category)
      if (index > -1) {
        previousArray.splice(index, 1)
      }
      let newArray = previousArray
      setFilterSelected(newArray)
      if (filterSelected.length === 0) {
        setFilteredProducts(dataProducts.results)
        return
      }
      updateProductsArray()
    } else {
      let newCategorySelected = filterSelected
      newCategorySelected.push(category)
      setFilterSelected(newCategorySelected)
      updateProductsArray()
    }
  }
  const updateProductsArray = () => {
    let defaultArray = dataProducts.results
    let newFilterArray = defaultArray.filter((product) => {
      let categoryString = product.data.category.slug.replace(/\w\S*/g, (w) =>
        w.replace(/^\w/, (c) => c.toUpperCase())
      )
      return filterSelected.includes(categoryString)
    })
    setFilteredProducts(newFilterArray)
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoaded(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Wrapper>
      <WrapperProductList>
        <CategorySidebar>
          <Title>Categories</Title>
          <List>
            {dataCategories.results.map(({ id, data: { name } }) => (
              <Category
                style={
                  filterSelected.includes(name)
                    ? selectedCategoryStyle
                    : defaultCategoryStyle
                }
                key={id.toString()}
                onClick={() => onFilterClick(name)}
              >
                {name}
              </Category>
            ))}
          </List>
        </CategorySidebar>
        <AllProducts>
          {dataLoaded ? <Products products={filteredProducts} /> : <Spinner />}
        </AllProducts>
      </WrapperProductList>
      <Pagination>
        <div>
          <button>&laquo;</button>
          <button style={activePagingStyle}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&raquo;</button>
        </div>
      </Pagination>
    </Wrapper>
  )
}

export default ProductList

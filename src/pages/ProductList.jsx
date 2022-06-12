import styled from 'styled-components'
import React from 'react'
import dataCategories from '../mocks/en-us/product-categories.json'
import dataProducts from '../mocks/en-us/products.json'
import Products from '../components/Products.jsx'

const WrapperProductList = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2% 5% 0 5%;
`
const CategorySidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
`
const selectedCategoryStyle = {
  color: 'black',
  backgroundColor: 'rgb(171, 240, 245)',
}
const defaultCategoryStyle = {
  color: 'black',
  backgroundColor: 'white',
}

function ProductList() {
  const [filteredProducts, setFilteredProducts] = React.useState(dataProducts.results)
  const [filterSelected, setFilterSelected] = React.useState([])
  console.log(filteredProducts)

  const onFilterClick = (category) => {
    if (filterSelected.includes(category)) {
      let previousArray = filterSelected;
      const index = previousArray.indexOf(category);
      if (index > -1) {
        previousArray.splice(index, 1);
      }
      let newArray = previousArray;
      setFilterSelected(newArray);
      if (filterSelected.length === 0) {
        setFilteredProducts(dataProducts.results);
        return;
      }
      updateProductsArray();
    } else {
      let newCategorySelected = filterSelected;
      newCategorySelected.push(category);
      setFilterSelected(newCategorySelected);
      updateProductsArray();
    }
  }
  const updateProductsArray = () => {
    let defaultArray = dataProducts.results;
    let newFilterArray =
      defaultArray.filter((product) => {
        let categoryString = 
        product.data.category.slug.replace(/\w\S*/g, (w) => 
        (w.replace(/^\w/, (c) => c.toUpperCase())));
        return filterSelected.includes(categoryString)
      })
    setFilteredProducts(newFilterArray);
  }

  return (
    <WrapperProductList>
      <CategorySidebar>
        <Title>Categories</Title>
        <List>
          {dataCategories.results.map(({ id, data: { name } }) => (
            <Category
              style={filterSelected.includes(name) ? selectedCategoryStyle : defaultCategoryStyle}
              key={id.toString()}
              onClick={() => onFilterClick(name)}>
              {name}
            </Category>
          ))}
        </List>
      </CategorySidebar>
      <AllProducts>
        <Products products={filteredProducts} />
      </AllProducts>
    </WrapperProductList>
  )
}

export default ProductList

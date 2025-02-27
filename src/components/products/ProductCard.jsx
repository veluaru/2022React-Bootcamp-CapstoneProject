import styled from 'styled-components'
import cartPlusIcon from '../../assetss/images/cart-plus.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slices/productsCartSlice'

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px -3px rgba(110,110,110,0.53);
  border-radius: 10px;
  height: 100%
  max-height: 300px;
  width: 100%;
  max-width: 200px;
  margin: 2% 1%;
  background-color: white;
  :hover {
      box-shadow: 0px 0px 5px 1px rgba(110,110,110,0.53);
      transform: scale(1.01)
  }
`
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  cursor: pointer;
`
const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  height: 45px;
`
const Category = styled.span`
  text-transform: capitalize;
  margin-bottom: 8px;
  border: 1px solid rgb(90, 222, 231);
  background-color: rgba(144, 238, 245, 0.521);
  border-radius: 5px;
  width: min-content;
  padding: 2px 7px;
  font-size: 14px;
  width: max-content;
`
const Price = styled.span`
  color: orange;
  font-weight: bold;
`
const Wrapper = styled.div`
  max-height: 30%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 16px;
  padding: 10px;
`
const Icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 11px 11px 0;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
`
const NoStock = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 11px 11px 0;
  cursor: none;
  font-size: 12px;
  font-style: italic;
`

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const addToCart = () => {
    const newProduct = {
      quantity: 1,
      product: product,
    }
    dispatch(addProduct(newProduct))
  }

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <Image
          src={product.data.mainimage.url}
          alt={product.data.mainimage.alt}
        />
      </Link>
      <Wrapper>
        <Name>{product.data.name}</Name>
        <Category>{product.data.category.slug}</Category>
        <Price>${product.data.price}</Price>
      </Wrapper>
      {product.data.stock > 0 ? (
        <Icon onClick={addToCart}>
          <img src={cartPlusIcon} alt="Cart Plus Icon" />
        </Icon>
      ) : (
        <NoStock>Out of stock</NoStock>
      )}
    </Card>
  )
}

export default ProductCard

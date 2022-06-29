import styled from 'styled-components'

const Name = styled.label`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
`
const Price = styled.label`
  font-size: 24px;
  margin-bottom: 15px;
`
const Category = styled.label`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: orange;
`
const Tags = styled.label`
  margin-right: 8px;
  border: 1px solid rgb(90, 222, 231);
  background-color: rgba(144, 238, 245, 0.521);
  border-radius: 5px;
  padding: 2px 7px;
  font-size: 14px;
  width: max-content;
`
const TagsWrapper = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;
`
const Sku = styled.label`
  font-size: 16px;
  margin-bottom: 15px;
`


function ProductText({ dataProduct }) {
  return (
    <>
      <Name>{dataProduct.data.name}</Name>
      <Price>{dataProduct.data.price} $USD</Price>
      <Sku>SKU: {dataProduct.data.sku}</Sku>
      <Category>Category: {dataProduct.data.category.slug}</Category>
      <TagsWrapper>
        {dataProduct.tags.map((tag, index) =>
          <Tags key={index}>{tag}</Tags>
        )}
      </TagsWrapper>
      <p>{dataProduct.data.short_description}</p>
    </>
  )
}

export default ProductText
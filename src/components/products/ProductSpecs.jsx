import styled from 'styled-components'

const ColumnSpecs = styled.div`
  padding: 0 7%;
  display: flex;
  flex-direction: column !important;
  margin-bottom: 20px;
  border-top: 1px solid rgb(201, 200, 199);
  @media (max-width: 750px) {
    padding: 0 3%;
    align-items: flex-start !important;
  }
`
const SpecInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start !important;
  span {
    color: orange;
    font-weight: bold;
    margin-right: 10px;
  }
  p {
    margin: 5px 0;
  }
  @media (max-width: 750px) {
    padding: 0px;
    display: flex;
    flex-direction: row !important;
    align-items: flex-start !important;
  }
`

function ProductSpecs({ dataProduct }) {
  return (
    <ColumnSpecs>
      <h1>Specifications</h1>
      {dataProduct.map((spec, index) => (
        <SpecInfo key={index}>
          <span>{spec.spec_name}:</span>
          <p>{spec.spec_value}</p>
        </SpecInfo>
      ))}
    </ColumnSpecs>
  )
}

export default ProductSpecs

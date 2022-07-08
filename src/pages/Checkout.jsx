import styled from 'styled-components'
import CustomerInfo from '../components/checkout/CustomerInfo.jsx'
import SummaryTable from '../components/checkout/SummaryTable.jsx'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start
  justify-content: center;
  padding: 0 5%;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center
  }
`

function Checkout() {
  return (
    <Wrapper>
      <CustomerInfo />
      <SummaryTable />
    </Wrapper>
  )
}

export default Checkout

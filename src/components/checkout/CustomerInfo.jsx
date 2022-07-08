import React from 'react'
import styled from 'styled-components'
import { MainButton } from '../MainButton'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    input {
      border: 1px solid grey;
      border-radius: 5px;
      height: 25px;
      padding: 0 0 0 5px;
    }
    label {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 15px;
    }
    button {
      padding: 8px 5px;
      max-width: 200px;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between !important;
    }
  }
`
const ErrorSpan = styled.span`
  color: red;
  font-size: 12px;
`

function SummaryTable() {
  const [custumerInfo, setCustumerInfo] = React.useState({
    name: '',
    email: '',
    zipCode: 0,
    orderNote: '',
  })
  const [custumerInfoErrors, setCustumerInfoErrors] = React.useState({
    name: false,
    email: false,
    zipCode: false,
    orderNote: false,
  })

  const onChangeValue = (event) => {
    setCustumerInfo((custumerInfo) => ({
      ...custumerInfo,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (validateFields()) {
      console.log('Proceed to pay')
      return
    }
  }

  const validateFields = () => {
    const newErrors = {
      name: custumerInfo.name ? false : true,
      email: custumerInfo.email ? false : true,
      zipCode: custumerInfo.zipCode ? false : true,
      orderNote: custumerInfo.orderNote ? false : true,
    }
    setCustumerInfoErrors((custumerInfoErrors) => ({ ...newErrors }))
    let isValidData = true
    const items = ['name', 'email', 'zipCode', 'orderNote']
    for (let i = 0; i < Object.keys(custumerInfo).length; i++) {
      if (!custumerInfo[items[i]]) {
        isValidData = false
      }
    }
    return isValidData
  }

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" onChange={onChangeValue} />
        {custumerInfoErrors.name && <ErrorSpan>Field Required</ErrorSpan>}
        <label htmlFor="email">Email:</label>
        <input name="email" type="text" onChange={onChangeValue} />
        {custumerInfoErrors.email && <ErrorSpan>Field Required</ErrorSpan>}
        <label htmlFor="zipCode">Zip Code:</label>
        <input name="zipCode" type="number" onChange={onChangeValue} />
        {custumerInfoErrors.zipCode && <ErrorSpan>Field Required</ErrorSpan>}
        <label htmlFor="orderNote">Order Notes:</label>
        <input name="orderNote" type="text" onChange={onChangeValue} />
        {custumerInfoErrors.orderNote && <ErrorSpan>Field Required</ErrorSpan>}
        <div>
          <MainButton type="submit">Place order</MainButton>
          <Link to={`/cart`} style={{ width: '200px' }}>
            <MainButton
              style={{ backgroundColor: 'orange', borderColor: 'orange' }}
            >
              Go back to cart
            </MainButton>
          </Link>
        </div>
      </form>
    </Wrapper>
  )
}

export default SummaryTable

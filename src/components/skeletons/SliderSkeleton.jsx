import styled from 'styled-components'
import Spinner from '../Spinner.jsx'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  height: 100% !important;
  width: 100%;
  background-color: rgb(227, 227, 227);
  border-radius: 5px;
  margin: 1% 0;
  padding: 15% 0;
`

function SliderSkeleton() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default SliderSkeleton

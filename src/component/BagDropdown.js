import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { selectBagTotal } from '../redux/bag/bag.selectors'

import { BagItem } from './BagItem'

const Container = styled.div`
  position: absolute;
  width: 230px;
  height: 330px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  top: 110px;
  right: 200px;
  z-index: 5;
`

const BagItemsContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

const EmptyCart = styled.span`
  font-size: 1em;
  margin: 50px auto;
`

const Total = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;

  span {
    font-size: 1.2em;
    font-weight: 600;
  }
`

export const BagDropdown = () => {
  const bagItems = useSelector(state => state.bag.bagItems)
  const total = useSelector(selectBagTotal)

  return (
    <Container>
      <BagItemsContainer>
        {bagItems.length ? (
          bagItems.map(bagItem => (
            <BagItem key={bagItem.productId} item={bagItem} />
          ))
        ) : (
          <EmptyCart>Your bag is empty</EmptyCart>
        )}
      </BagItemsContainer>
      <Total>
        <span>Total: £{total.toFixed(2)}</span>
      </Total>
    </Container>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { clearBag, toggleBagHidden } from '../redux/bag/bag.actions'

import { selectBagTotal } from '../redux/bag/bag.selectors'

import { BagItem } from './BagItem'
import { CustomButton } from './CustomButton'

const Container = styled.div`
  position: absolute;
  width: 230px;
  height: 400px;
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
  justify-content: space-between;
  padding: 10px 0;

  span {
    font-size: 1.2em;
    font-weight: 600;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
`

const PlaceOrder = styled(CustomButton)`
  margin-top: 10px;
`

const ClearBagButton = styled(CustomButton)`
  margin-top: 10px;
`

export const BagDropdown = () => {
  const bagItems = useSelector(state => state.bag.bagItems)
  const total = useSelector(selectBagTotal)
  const dispatch = useDispatch()

  function handleOrder () {
    alert('Order Submitted! Thank you for shopping at Kelisto.es')
    dispatch(clearBag())
    dispatch(toggleBagHidden())
  }

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
        <span>Total:</span>
        <span>£{total.toFixed(2)}</span>
      </Total>
      <ButtonsContainer>
        <PlaceOrder onClick={() => handleOrder()}>place order</PlaceOrder>
        <ClearBagButton
          onClick={() => dispatch(clearBag())}
          clearBagButtonStyles
        >
          clear bag
        </ClearBagButton>
      </ButtonsContainer>
    </Container>
  )
}

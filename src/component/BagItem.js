import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { removeItem } from '../redux/bag/bag.actions'

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  margin-bottom: 15px;
  align-items: center;

  span {
    font-size: 0.8em;
    font-weight: 400;
    margin-bottom: 10px;
  }
`

const BagItemImage = styled.img`
  width: 30%;
  height: 90%;
`

const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`

const RemoveButton = styled.div`
  padding-right: 10px;
  cursor: pointer;
`

export const BagItem = ({ item }) => {
  const { title, price, image, quantity } = item

  const dispatch = useDispatch()

  return (
    <Container>
      <BagItemImage src={image} alt='item' />
      <ItemDetailsContainer>
        <span>{title}</span>
        <span>
          {quantity} x £{price}
        </span>
      </ItemDetailsContainer>
      <RemoveButton onClick={() => dispatch(removeItem(item))}>
        &#10005;
      </RemoveButton>
    </Container>
  )
}

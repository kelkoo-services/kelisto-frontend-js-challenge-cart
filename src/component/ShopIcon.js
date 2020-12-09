import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { selectBagItemsCount } from '../redux/bag/bag.selectors'

import { ReactComponent as ShoppingIconSVG } from '../data/assets/shopping-bag.svg'

const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`

const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 400;
  bottom: 12px;
`

export const ShopIcon = () => {
  const itemCount = useSelector(selectBagItemsCount)

  return (
    <Container>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </Container>
  )
}

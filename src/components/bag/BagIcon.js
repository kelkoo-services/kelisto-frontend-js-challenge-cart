import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { selectBagItemsCount } from '../redux/bag/bag.selectors'

import { ReactComponent as BagIconSVG } from '../data/icon/shopping-bag.svg'

const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ShoppingIcon = styled(BagIconSVG)`
  width: 24px;
  height: 24px;
`

const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 400;
  bottom: 12px;
`

export const BagIcon = () => {
  const itemCount = useSelector(selectBagItemsCount)

  return (
    <Container>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </Container>
  )
}

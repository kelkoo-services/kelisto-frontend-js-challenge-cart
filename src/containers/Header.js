import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { toggleBagHidden } from '../redux/bag/bag.actions'

import { BagDropdown } from '../component/BagDropdown'
import { ShopIcon } from '../component/ShopIcon'

import logo from '../data/assets/kelisto-logo.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
`

const Logo = styled.img`
  width: 200px;
  height: 40px;
`

const LogoTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  color: rgb(126, 75, 133);
`

const ShopContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ShoppingTitle = styled.span`
  margin-top: 5px;
  font-size: 0.9em;
`

export const Header = () => {
  const hidden = useSelector(state => state.bag.hidden)
  const dispatch = useDispatch()

  return (
    <Container>
      <LogoContainer>
        <LogoTitle>Shop</LogoTitle>
        <Logo src={logo} alt='logo' />
      </LogoContainer>
      <ShopContainer onClick={() => dispatch(toggleBagHidden())}>
        <ShopIcon />
        <ShoppingTitle>Shopping bag</ShoppingTitle>
      </ShopContainer>
      {hidden ? null : <BagDropdown />}
    </Container>
  )
}

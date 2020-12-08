import styled from 'styled-components'

import { CartIcon } from '../component/CartIcon'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`

const Title = styled.h1`
  font-size: 2em;
  font-weight: 300;
`

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`

const ShoppingBag = styled.span`
  font-weight: 300;
  margin-top: 5px;
  font-size: 0.9em;
`

export const Header = () => (
  <Container>
    <Title>Kelisto Shop</Title>
    <CartContainer>
      <CartIcon />
      <ShoppingBag>Shopping bag</ShoppingBag>
    </CartContainer>
  </Container>
)

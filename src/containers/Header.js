import styled from 'styled-components'

import { ShopIcon } from '../component/ShopIcon'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px;
`

const Title = styled.h1`
  font-size: 2em;
  font-weight: 400;
`

const ShopContainer = styled.div`
  display: flex;
  align-items: center;
`

const ShoppingTitle = styled.span`
  font-weight: 300;
  margin-top: 5px;
  font-size: 0.9em;
`

export const Header = () => (
  <Container>
    <Title>Kelisto Shop</Title>
    <ShopContainer>
      <ShopIcon />
      <ShoppingTitle>Shopping bag</ShoppingTitle>
    </ShopContainer>
  </Container>
)

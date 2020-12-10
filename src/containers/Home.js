import styled from 'styled-components'

import { Header } from './Header'
import { ShopList } from './ShopList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
  background-color: white;
  padding-bottom: 10px;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Home = () => (
  <Container>
    <Header />
    <ShopList />
  </Container>
)

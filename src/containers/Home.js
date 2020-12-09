import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import { ShopList } from './ShopList'

import products from '../data/products.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
  background-color: white;
  padding-bottom: 10px;
`

export const Home = () => {
  const [shopData, setShopData] = useState([])

  useEffect(() => {
    setShopData(products)
  }, [])

  return (
    <Container>
      <Header />
      <ShopList list={shopData} />
    </Container>
  )
}

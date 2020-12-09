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
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
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

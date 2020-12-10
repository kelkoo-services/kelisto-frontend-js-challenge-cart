import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { selectProductsData } from '../redux/products/products.selectors'

import { ShopItem } from '../component/ShopItem'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const ShopList = () => {
  const products = useSelector(selectProductsData)

  return (
    <Container>
      {products.map(item => (
        <ShopItem key={item.productId} item={item} />
      ))}
    </Container>
  )
}

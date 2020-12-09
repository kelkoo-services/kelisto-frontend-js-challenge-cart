import styled from 'styled-components'

import { ShopItem } from '../component/ShopItem'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const ShopList = ({ list }) => {
  return (
    <Container>
      {list.map(item => (
        <ShopItem key={item.productId} item={item} />
      ))}
    </Container>
  )
}

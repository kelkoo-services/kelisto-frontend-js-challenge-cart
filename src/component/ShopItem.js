import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { addItem } from '../redux/bag/bag.actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: white;
`

const ImageContainer = styled.div`
  border: 1px solid #d6d6d6;
  width: 230px;
  height: 230px;
  box-shadow: 5px 5px 5px 0px rgba(176, 176, 176, 0.25);
  position: relative;
  display: flex;
  justify-content: center;

  :hover {
    opacity: 0.7;

    button {
      display: flex;
    }
  }
`

const BackgroundImage = styled.img`
  width: 130px;
  height: 150px;
  margin: auto;
`

const FooterContainer = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  font-size: 1em;
`

const Title = styled.span`
  margin: 10px 0 5px 0;
  font-weight: 400;
`

const Sku = styled.span`
  display: flex;
  align-items: center;
  font-weight: 300;

  p {
    font-weight: 600;
    margin: 5px 5px 5px 0;
  }
`

const Price = styled.span`
  font-size: 1.2em;
  margin-top: 5px;
  font-weight: 600;
`

const AddButton = styled.button`
  width: 60%;
  position: absolute;
  top: 170px;
  height: 2.5rem;
  font-size: 0.8em;
  text-transform: uppercase;
  border: 1px solid black;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  outline: none;

  :hover {
    background-color: black;
    color: white;
    opacity: 0.85;
  }
`

export const ShopItem = ({ item }) => {
  const { title, sku, price, image } = item
  const dispatch = useDispatch()

  return (
    <Container>
      <ImageContainer>
        <BackgroundImage src={image} alt='product-image' />
        <AddButton onClick={() => dispatch(addItem(item))}>
          add to bag
        </AddButton>
      </ImageContainer>
      <FooterContainer>
        <Title>{title}</Title>
        <Sku>
          <p>SKU:</p> {sku}
        </Sku>
        <Price>£{price}</Price>
      </FooterContainer>
    </Container>
  )
}

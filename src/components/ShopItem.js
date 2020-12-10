import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { addItem } from '../redux/bag/bag.actions'

import { CustomButton } from './CustomButton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: white;
`

const BackgroundImage = styled.img`
  width: 130px;
  height: 150px;
  margin: auto;
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
    ${BackgroundImage} {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.85;
    }
  }
`

const FooterContainer = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  font-size: 1em;
`

const Title = styled.span`
  margin: 10px 0 5px 0;
  font-weight: 500;
`

const Sku = styled.span`
  font-weight: 300;
  font-style: italic;
  margin: 5px 5px 5px 0;
`

const Price = styled.span`
  font-size: 1.2em;
  margin-top: 5px;
  font-weight: 600;
`

const AddButton = styled(CustomButton)`
  position: absolute;
  top: 170px;
  width: 60%;
  height: 2.5rem;
  display: none;
  opacity: 0.7;
`

export const ShopItem = ({ item }) => {
  const { title, sku, price, image } = item
  const dispatch = useDispatch()

  return (
    <Container>
      <ImageContainer>
        <BackgroundImage src={image} alt='product-image' />
        <AddButton onClick={() => dispatch(addItem(item))} inverted>
          add to bag
        </AddButton>
      </ImageContainer>
      <FooterContainer>
        <Title>{title}</Title>
        <Sku>SKU: {sku}</Sku>
        <Price>£{price}</Price>
      </FooterContainer>
    </Container>
  )
}

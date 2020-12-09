import styled from 'styled-components'

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
    opacity: 0.8;

    button {
      display: flex;
    }
  }
`

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img});
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

  p {
    font-weight: 500;
    margin: 5px 5px 5px 0;
  }
`

const Price = styled.span`
  font-size: 1.2em;
  margin-top: 5px;
`

const AddButton = styled.button`
  width: 60%;
  opacity: 0.8;
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

  :hover {
    background-color: black;
    color: white;
  }
`

export const ShopItem = ({ item }) => {
  const { title, sku, price, image } = item

  return (
    <Container>
      <ImageContainer>
        <BackgroundImage img={image} />
        <AddButton>add to bag</AddButton>
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

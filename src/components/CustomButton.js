import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const clearBagButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #ff414d;
    border: none;
    color: white;
  }
`

const getButtonStyles = props => {
  if (props.clearBagButtonStyles) {
    return clearBagButtonStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles
}

const Container = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  font-size: 0.8em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  ${getButtonStyles}
`

export const CustomButton = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
)

import styled, {css} from 'styled-components'

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    
     &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`

const invertedButtonStyles = css`
  &.inverted {
      background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
      }
    }
`

const isSignInStyles = css`
      background-color: #4285f4;
      color: white;
      &:hover {
        background-color: #357ae8;
      }
`

const getButtonStyles = ({isSignIn, inverted}) => {
  if (isSignIn) {
    return isSignInStyles
  }
  return inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    margin: 2px;
    border: none;
    justify-content: center;
    ${getButtonStyles}
`

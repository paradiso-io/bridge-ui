import { createGlobalStyle } from 'styled-components'
import theme from './index'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;

    #root {
      overflow-x: hidden;
    }
  }

  .euiModalHeader__title {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .euiButton {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;

    &:hover,
    &:focus {
      transform: none !important;
      text-decoration: none !important;
    }

    &.euiButton--primary {
      color: ${theme.primary};
      border-color: ${theme.primary};

      &:hover,
      &:focus {
        border-color: ${theme.secondary};
        background-color: ${theme.secondary}1a;
      }
    }

    &.euiButton--fill {
      color: #fff;
      background-color: ${theme.primary};


      &:not([class*='isDisabled']):hover,
      &:not([class*='isDisabled']):focus,
      &:not([class*='isDisabled']):focus-within {
        background-color: ${theme.secondary};
        border-color: ${theme.secondary};
      }
    }
  }

  .euiFieldText:focus,
  .euiFieldNumber:focus,
  .euiFieldSearch:focus {
    background-image: linear-gradient(to top, ${theme.primary}, ${theme.primary} 2px, #0000 2px, #0000 100%);
  }
`

export default GlobalStyle

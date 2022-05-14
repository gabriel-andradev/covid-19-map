import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 24px;
  }

  .pt-2 {
    padding-top: 24px;
    align-items: center;
  }

  .cursor {
    cursor: pointer;
  }

  .MuiTypography-colorPrimary {
    margin: 5px;
  }

  .MuiSkeleton-text {
    height: auto;
    transform: none;
    margin-top: 0;
    border-radius: 4px;
    margin-bottom: 0;
    transform-origin: 0 60%;
    font-size: 2.5rem;
  }
`

export default globalStyle

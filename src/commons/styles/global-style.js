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
    background:rgba(0, 0, 0, 0.2) url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-blend-mode: darken;
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
    margin-bottom: 0;
    transform-origin: 0 60%;
    font-size: 2.0rem;
  }

  .MuiSelect-select {
    height: 30px;
  }

  .MuiCard-root {
    height: 130px;
    box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
    border-radius: 0px;
  }


  .MuiCardContent-root {
    height: 100%;
    padding: 5px 16px !important;
  }

  #share {
    display: flex;
    height: 100%;
    justify-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  #share-bottom {
    display: flex;
    align-self: center;
    margin-top: 30px;
  }

  .MuiTypography-body2{
    margin-top: 20px;
  }


`

export default globalStyle

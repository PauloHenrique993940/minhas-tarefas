import styled, { createGlobalStyle } from 'styled-components'

const EStiloGlobal = createGlobalStyle`
  *  { 
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    listy-style:none;

  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EStiloGlobal

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'),
      
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-500.woff2') format('woff2'), 
       
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-600.woff2') format('woff2'), 
     
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2'), 
  
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-800.woff2') format('woff2'), 

}   


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
 
  body {
    font-family:  'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #ccf2f4;
    
  }
`

export default GlobalStyles

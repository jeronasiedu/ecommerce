import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/poppins'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
const theme = extendTheme({
  fonts: {
    body: 'poppins',
    heading: 'poppins',
  },
})
ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

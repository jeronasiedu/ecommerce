import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Home from './components/Home'
import { Container } from '@chakra-ui/react'
import Categories from './components/Categories'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from '../Pages/ProductDetails'
function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Categories />
                <Home />
              </>
            }
          />
          <Route path="product/:name" element={<ProductDetails />} />
        </Routes>
      </Container>
    </>
  )
}

export default App

import { Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
import Category from './Pages/Category'
import Sell from './Pages/Sell'
import Profile from './Pages/Profile'
import Protect from './utils/Protect'
import {
  Navigation,
  Adverts,
  Banner,
  Saved,
  Categories,
  Home,
} from './components'
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Container maxW="container.lg">
                <Banner />
                <Categories />
                <Home />
              </Container>
            </>
          }
        />
        <Route
          path="product/:name"
          element={
            <>
              <Navigation />
              <ProductDetails />
            </>
          }
        />
        <Route
          path="category/:name"
          element={
            <>
              <Navigation type="category" />
              <Category />
            </>
          }
        />
        <Route path="sell" element={<Protect target={<Sell />} />} />
        <Route path="saved" element={<Protect target={<Saved />} />} />
        <Route path="profile" element={<Protect target={<Profile />} />} />
        <Route path="adverts" element={<Protect target={<Adverts />} />} />
      </Routes>
    </>
  )
}

export default App

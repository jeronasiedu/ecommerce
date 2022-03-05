import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Home from './components/Home'
import { Container } from '@chakra-ui/react'
import Categories from './components/Categories'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
import Category from './Pages/Category'
import Sell from './Pages/Sell'
import Profile from './Pages/Profile'
import Saved from './components/Saved'
import Messages from './components/Messages'
import Adverts from './components/Adverts'
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
          <Route path="category/:name" element={<Category />} />
          <Route path="sell" element={<Sell />} />
          <Route path="saved" element={<Saved />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="adverts" element={<Adverts />} />
        </Routes>
      </Container>
    </>
  )
}

export default App

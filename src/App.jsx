import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Home from './components/Home'
import { Container } from '@chakra-ui/react'
import Categories from './components/Categories'
function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Banner />
        <Categories />
        <Home />
      </Container>
    </>
  )
}

export default App

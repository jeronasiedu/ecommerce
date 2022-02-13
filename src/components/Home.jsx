import React from 'react'
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import SingleProduct from './SingleProduct'
import { BiChevronRight, BiChevronLeft } from 'react-icons/all'
const Home = () => {
  const products = [
    {
      name: 'Random Product',
      image: '/images/review5.jpg',
      price: 10,
      rating: 5,
      totalRating: 45,
    },
    {
      name: 'Random Product',
      image: '/images/review6.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
    },

    {
      name: 'Random Product',
      image: '/images/review8.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
    },
    {
      name: 'Random Product',
      image: '/images/review9.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
    },
    {
      name: 'Random Product',
      image: '/images/review10.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
    },
  ]
  return (
    <Box my="3">
      <Heading
        bgGradient="linear(to-l,red.300,orange.200,blue.300)"
        bgClip="text"
        mb="2"
        size="lg"
      >
        Featured Products
      </Heading>
      <SimpleGrid minChildWidth={['150px', '200px']} spacing={3} mb="2">
        {products.map((product, idx) => (
          <SingleProduct {...product} key={idx} />
        ))}
      </SimpleGrid>
      <Flex justify="space-between" align="center" mb="2">
        <Heading
          bgGradient="linear(to-l,red.300,orange.200,blue.300)"
          bgClip="text"
          mb="2"
          size="lg"
        >
          Flash Sales
        </Heading>
        <Heading
          bgGradient="linear(to-r,violet,orange.200,blue.300)"
          bgClip="text"
          mb="2"
          size="md"
        >
          Ends in 12:45:04
        </Heading>
      </Flex>
      <SimpleGrid minChildWidth={['150px', '200px']} spacing={3}>
        {products.map((product, idx) => (
          <SingleProduct {...product} key={idx} flashSale={true} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home

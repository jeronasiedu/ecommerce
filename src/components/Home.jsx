import React from 'react'
import { Box, Heading, HStack, SimpleGrid } from '@chakra-ui/react'
import SingleProduct from './SingleProduct'
const Home = () => {
  const products = [
    {
      name: 'BirkenStock Arizona Sandals',
      image: '/images/review11.jpg',
      price: 10,
      rating: 5,
      totalRating: 45,
      id: 54,
    },
    {
      name: 'Labucq X Arrivals Irving Boot',
      image: '/images/review5.jpg',
      price: 10,
      rating: 5,
      totalRating: 45,
      id: 92,
    },
    {
      name: "Men's Canvas Sneakers ",
      image: '/images/review6.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
      id: 49,
    },

    {
      name: 'Camp Boot Chromexcel',
      image: '/images/review8.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
      id: 77,
    },
    {
      name: 'Nike - Air Max 270 Sneakers',
      image: '/images/review9.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
      id: 35,
    },
    {
      name: 'Unisex Canvas',
      image: '/images/review10.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
      id: 17,
    },
  ]
  return (
    <Box my="7">
      {/* <HStack>
        <Heading mb="2" size="md" textTransform="uppercase">
          Just For You
        </Heading>
        <Box
          color="gray.400"
          rounded="md"
          className="line"
          d={['none', 'inline-flex']}
         />
      </HStack> */}
      {/* <SimpleGrid minChildWidth={['150px', '200px']} spacing={3} mb="2">
        {products.map((product, idx) => (
          <SingleProduct {...product} key={idx} />
        ))}
      </SimpleGrid> */}
      <HStack mt="5">
        <Heading mb="2" size="md" textTransform="uppercase">
          Trending Ads
        </Heading>
        <Box
          color="gray.400"
          rounded="md"
          className="line"
          d={['none', 'inline-flex']}
        />
      </HStack>
      <SimpleGrid minChildWidth={['150px', '200px']} spacing={3} mb="2">
        {products.map((product, idx) => (
          <SingleProduct {...product} key={idx} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home

import { Box, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Categories = () => {
  const categories = [
    {
      title: 'New Arrivals',
      icon: 'images/newArrival.png',
      products: [
        {
          name: 'Great Product',
          price: 180,
          imageUrl: 'images/review2.jpg',
          tag: 'Trending Now',
        },
        {
          name: 'Great Product',
          price: 290,
          imageUrl: 'images/review4.jpg',
          tag: 'Limited',
        },
      ],
    },
    {
      title: 'Weekly deals',
      icon: 'images/newArrival.png',

      products: [
        {
          name: 'Great Product',
          price: 80,
          imageUrl: 'images/review6.jpg',
          tag: 'Free delivery',
        },
        {
          name: 'Great Product',
          price: 90,
          imageUrl: 'images/review5.jpg',
          tag: 'New',
        },
      ],
    },
    {
      title: 'Ready to ship',
      icon: 'images/shipping.jpg',

      products: [
        {
          name: 'Great Product',
          price: 100,
          imageUrl: 'images/review9.jpg',
          tag: 'Limited',
        },
        {
          name: 'Great Product',
          price: 60,
          imageUrl: 'images/review7.jpg',
          tag: 'Trending Now',
        },
      ],
    },
    {
      title: 'New Arrivals',
      icon: 'images/newArrival.png',

      products: [
        {
          name: 'Great Product',
          price: 10,
          imageUrl: 'images/review8.jpg',
          tag: 'Limited',
        },
        {
          name: 'Great Product',
          price: 40,
          imageUrl: 'images/review4.jpg',
          tag: 'trending now',
        },
      ],
    },
  ]
  const mobileCategories = [
    { name: 'Apparel', imageUrl: 'images/fashion-mb.jpg' },
    { name: 'Electronics', imageUrl: 'images/electronics-mb.jpg' },
    { name: 'Smart Phones', imageUrl: 'images/mobile.jpg' },
    { name: 'Services', imageUrl: 'images/services.jpg' },
  ]
  return (
    <>
      <HStack
        h="10rem"
        d={['flex', 'flex', 'none']}
        overflowX="auto"
        overflowY={'hidden'}
        mb="3"
        p="2"
        scrollSnapType="x mandatory"
        scrollPaddingLeft={2}
        border="1px"
        rounded="sm"
        borderColor="gray.300"
      >
        {mobileCategories.map((category, idx) => (
          <Box
            key={idx}
            w={['9rem', '10rem']}
            flexShrink={0}
            h="100%"
            roundedTop="sm"
            overflow="hidden"
            scrollSnapAlign="start"
            as={Link}
            to={`category/${category.name.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <Text
              textAlign="center"
              fontSize="lg"
              textTransform="uppercase"
              fontWeight="600"
              bg="blue.300"
            >
              {category.name}
            </Text>

            <Image
              src={category.imageUrl}
              objectFit="cover"
              boxSize="100%"
              alt={category.name}
            />
          </Box>
        ))}
      </HStack>
      <SimpleGrid columns={[2, 2, 3]} spacing={3} className="no-display">
        {categories.map((category, idx) => (
          <Box
            key={idx}
            shadow="sm"
            px={1}
            rounded="sm"
            h={['6.5rem', '11rem']}
            border="1px"
            borderColor="gray.300"
          >
            <HStack w="100%" key={idx} mb="1">
              <Image src={category.icon} d={['none', 'inline-flex']} w="1rem" />
              <Text fontWeight="600" fontSize="xs">
                {category.title}
              </Text>
            </HStack>
            <HStack w="100%" h="90%">
              {category.products.map((product, idx) => (
                <Box
                  w="100%"
                  h="100%"
                  key={idx}
                  cursor="pointer"
                  as={Link}
                  to={`product/${product.name.replace(/\s+/g, '-')}`}
                >
                  <Image
                    src={product.imageUrl}
                    alt="image"
                    boxSize="100%"
                    objectFit="cover"
                    w="100%"
                    h={['58%', '65%']}
                    rounded="sm"
                    transition="0.5s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />

                  <VStack spacing="-1" mt="1">
                    <Text
                      fontSize={['0.65rem', 'sm']}
                      fontWeight={['400', '500']}
                      color={['gray.500', 'gray.600']}
                    >
                      GH₵
                      {product.price}
                    </Text>
                    {product.tag && (
                      <Text
                        fontSize={['0.7rem', 'xs']}
                        color="gray.500"
                        d={['none', 'inline-flex']}
                      >
                        {product.tag}
                      </Text>
                    )}
                  </VStack>
                </Box>
              ))}
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}

export default Categories

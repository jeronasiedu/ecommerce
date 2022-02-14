import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

const Categories = () => {
  const categories = [
    {
      title: 'New Arrivals',
      icon: 'images/newArrival.png',
      products: [
        {
          name: 'Great Product',
          price: 10,
          imageUrl: 'images/review2.jpg',
          tag: 'Trending Now',
        },
        {
          name: 'Great Product',
          price: 20,
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
          price: 10,
          imageUrl: 'images/review6.jpg',
          tag: 'Free delivery',
        },
        {
          name: 'Great Product',
          price: 20,
          imageUrl: 'images/review5.jpg',
          tag: 'New',
        },
      ],
    },
    {
      title: 'Ready to ship',
      icon: 'images/newArrival.png',

      products: [
        {
          name: 'Great Product',
          price: 10,
          imageUrl: 'images/review9.jpg',
          tag: 'Limited',
        },
        {
          name: 'Great Product',
          price: 20,
          imageUrl: 'images/review7.jpg',
          tag: 'Trending Now',
        },
      ],
    },
    {
      title: 'New Arrivals',
      icon: 'images/newArrival.png',

      products: [
        { name: 'Great Product', price: 10, imageUrl: 'images/review8.jpg' },
        {
          name: 'Great Product',
          price: 20,
          imageUrl: 'images/review4.jpg',
          tag: 'trending now',
        },
      ],
    },
  ]
  return (
    <>
      {/* <HStack bg="yellow" h="10rem" d={['flex', 'none']} mb="3">
        Top Ranking
      </HStack> */}
      <SimpleGrid columns={[2, 2, 3]} spacing={3} className="no-display">
        {categories.map((category, idx) => (
          <Box
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
                <Box w="100%" h="100%" key={idx} cursor="pointer">
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

                  <VStack spacing="-1">
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

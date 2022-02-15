import { Badge, Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const SingleProduct = ({ image, name, price, flashSale, id }) => {
  let url = `product/${name.replace(/\s+/g, '-')}?id=${id}`
  return (
    <Link to={url}>
      <Box
        maxW="20rem"
        p={2}
        shadow="sm"
        border="1px"
        borderColor="gray.300"
        rounded="md"
        cursor="pointer"
        transition="0.5s ease"
        h={['12rem', '14rem']}
        _hover={{
          shadow: 'md',
        }}
        pos="relative"
      >
        <Box w="100%" h="70%" mb="2" overflow="hidden" pos="relative">
          {flashSale && (
            <Tooltip label="Discount">
              <Badge
                pos="absolute"
                top="2"
                variant="subtle"
                left="2"
                colorScheme="blue"
              >
                <Text>-44%</Text>
              </Badge>
            </Tooltip>
          )}

          <Image
            src={image}
            alt={name}
            boxSize="100%"
            objectFit="cover"
            rounded="sm"
            transition="0.5s ease"
          />
        </Box>
        <Flex direction="column">
          <Text isTruncated>{name}</Text>
          <Text colorScheme="blue" color="Background" alignSelf="flex-start">
            GH₵{price}
          </Text>
        </Flex>
      </Box>
    </Link>
  )
}

export default SingleProduct

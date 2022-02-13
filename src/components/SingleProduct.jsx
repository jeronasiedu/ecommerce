import {
  Badge,
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { BsCartCheck } from 'react-icons/all'

const SingleProduct = ({ image, name, price, flashSale }) => {
  return (
    <Box
      maxW="20rem"
      p={2}
      shadow="sm"
      border="1px"
      borderColor="gray.300"
      rounded="md"
      cursor="pointer"
      transition="0.5s ease"
      h={['13rem', '15rem']}
      _hover={{
        shadow: 'md',
      }}
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
        <Flex justify="space-between" align="center">
          <Text fontWeight="600" fontSize={['sm', 'md']}>
            {name}
          </Text>
          <Badge
            colorScheme="cyan"
            d="flex"
            alignItems="center"
            justifyContent="center"
            p={['0.2', '0.5']}
          >
            <Text fontSize={['xs', 'md']}>${price}</Text>
          </Badge>
        </Flex>
        <IconButton icon={<BsCartCheck />} alignSelf="flex-start" size="sm" />
      </Flex>
    </Box>
  )
}

export default SingleProduct

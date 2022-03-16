import {
  Badge,
  Box,
  Flex,
  Image,
  Text,
  Tooltip,
  IconButton,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { BsBookmark } from 'react-icons/all'
import { useState } from 'react'
import useStore from '../utils/store'
const SingleProduct = ({ image, name, price, flashSale, id }) => {
  let url = `/product/${name.replace(/\s+/g, '-')}?id=${id}`
  const [bookMark, setBookMark] = useState(false)
  const navigate = useNavigate()
  const saveItem = useStore((state) => state.saveItem)

  const handleBookmark = () => {
    saveItem({ image, name, id, price })
    setBookMark((value) => !value)
  }
  return (
    <Box
      maxW="20rem"
      p={2}
      shadow="sm"
      border="1px"
      borderColor="gray.300"
      rounded="md"
      transition="0.5s ease"
      h={['12rem', '14rem']}
      _hover={{
        shadow: 'md',
      }}
      pos="relative"
    >
      <Box
        w="100%"
        h="70%"
        mb="2"
        overflow="hidden"
        pos="relative"
        onClick={() => navigate(url)}
        cursor="pointer"
      >
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
      <Flex direction="column" as={Link} to={url}>
        <Text isTruncated>{name}</Text>
        <Text color="blue.400" alignSelf="flex-start">
          GH₵{price}
        </Text>
      </Flex>
      <IconButton
        icon={<BsBookmark />}
        size="sm"
        colorScheme="linkedin"
        pos="absolute"
        variant={bookMark ? 'solid' : 'outline'}
        bottom="26%"
        right="3"
        isRound
        onClick={handleBookmark}
      />
    </Box>
  )
}

export default SingleProduct

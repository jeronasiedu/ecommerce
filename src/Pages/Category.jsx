import {
  Box,
  HStack,
  Text,
  VStack,
  Flex,
  IconButton,
  Input,
  Divider,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom'
import { IoIosArrowDown, BiChevronLeft } from 'react-icons/all'
import Select from 'react-select'
import { useState } from 'react'
import SingleProduct from '../components/SingleProduct'
const Category = () => {
  const navigate = useNavigate()
  let { name } = useParams()
  name = name.replace(/-/g, ' ').toUpperCase()
  const options = [
    { value: 'recommended', label: 'Recommended First' },
    { value: 'newest', label: 'Newest First' },
    { value: 'lowest price', label: 'Lowest Price First' },
    { value: 'highest price', label: 'Highest Price First' },
  ]
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
      name: 'Unisex Canvas',
      image: '/images/review10.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
      id: 17,
    },
    {
      name: 'Outdoor Sweater',
      image: '/images/review13.jpg',
      price: 45,
      rating: 3,
      totalRating: 69,
      id: 43,
    },
  ]
  const [selectedFilter, setSelectedFilter] = useState('Recommended')
  const emptyArray = new Array(10).fill('*')
  const [expand, setExpand] = useState(false)
  return (
    <VStack w="100%" alignItems="flex-start">
      <HStack justifyContent="space-between" w="full">
        <IconButton
          icon={<BiChevronLeft size={20} />}
          size="sm"
          variant="outline"
          d={['inline-flex', 'inline-flex', 'none']}
          onClick={() => navigate(-1)}
        />
        <Box rounded="md" border="1px" borderColor="gray.300" px="2">
          <Text color="gray.600">
            344 results for {''}
            <span
              style={{
                fontWeight: '600',
              }}
            >
              {name}
            </span>
          </Text>
        </Box>
      </HStack>
      <Flex w="full" flexDirection={['column', 'row']} gap="2">
        <VStack
          w="full"
          flex="0.4"
          p="1"
          alignItems="flex-start"
          shadow="sm"
          border="1px"
          borderColor="gray.300"
        >
          <HStack wrap="wrap" spacing={['2', '1', '2']}>
            <Text fontSize="sm">Sort by:</Text>
            <Box fontSize={['xs', 'sm']}>
              <Select
                options={options}
                defaultValue={selectedFilter}
                onChange={setSelectedFilter}
                aria-label="Select filter for category"
                placeholder="Recommended"
              />
            </Box>
          </HStack>
          <VStack
            p="2"
            w="full"
            rounded="md"
            shadow="sm"
            border="1px"
            borderColor="gray.300"
            alignItems="flex-start"
          >
            <Flex
              justify="space-between"
              onClick={() => setExpand(!expand)}
              cursor="pointer"
              w="full"
            >
              <Text
                fontSize="sm"
                transition="0.5s ease"
                fontWeight={expand ? '600' : '500'}
              >
                Price, GH₵
              </Text>
              <IconButton
                icon={
                  <IoIosArrowDown
                    style={{
                      transform: `rotate(${expand ? '180deg' : '0deg'})`,
                    }}
                  />
                }
                size="xs"
                variant="ghost"
                mt="-1"
              />
            </Flex>
            <VStack
              w="full"
              h={expand ? '4.5rem' : '0rem'}
              transition="0.4s cubic-bezier(.785,.135,.15,.86)"
              overflow="hidden"
            >
              <HStack>
                <Input type="number" placeholder="min" size="sm" />
                <Divider w="2rem" />
                <Input type="number" placeholder="max" size="sm" />
              </HStack>
              <HStack justifyContent="space-between" w="full" px="2">
                <Button size="xs" variant="ghost" colorScheme="red">
                  Clear
                </Button>
                <Button size="xs" variant="ghost" colorScheme="blue">
                  Save
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
        <Box w="full" flex="1" p="2" shadow="md">
          <SimpleGrid minChildWidth={['150px', '200px']} spacing={3} mb="2">
            {products.map((product, idx) => (
              <SingleProduct {...product} key={idx} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </VStack>
  )
}

export default Category

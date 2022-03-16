import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Divider,
  Spacer,
  IconButton,
} from '@chakra-ui/react'
import { BsBookmarks } from 'react-icons/all'
import useStore from '../utils/store'
const Saved = () => {
  const savedProducts = useStore((state) => state.savedProducts)
  const removeItem = useStore((state) => state.removeItem)
  return (
    <Box w="full" p={[2, 3]}>
      <VStack alignItems="flex-start" w="full">
        <Divider />
        {savedProducts.map((item, idx) => (
          <VStack w="full" key={idx}>
            <HStack h="full" w="full">
              <Box
                h="full"
                maxH="9rem"
                w="30%"
                maxW="14rem"
                rounded="sm"
                overflow="hidden"
                minW="5rem"
              >
                <Image
                  src={item.image}
                  alt="something"
                  objectFit="cover"
                  boxSize="full"
                />
              </Box>
              <VStack alignItems="flex-start" spacing="0">
                <Text fontSize={['sm', 'md', 'xl']} color="gray.600">
                  Evelyn Garza
                </Text>
                <Text fontSize={['md', 'xl', '2xl']} color="">
                  {item.name}
                </Text>
                <Text
                  fontWeight="bold"
                  color="blue.300"
                  fontSize={['md', 'xl', '2xl']}
                >
                  GH₵ {item.price}
                </Text>
              </VStack>
              <Spacer />
              <IconButton
                icon={<BsBookmarks />}
                isRound
                colorScheme="linkedin"
                onClick={() => removeItem(item.id)}
              />
            </HStack>
            <Divider />
          </VStack>
        ))}
      </VStack>
    </Box>
  )
}

export default Saved

import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Divider,
  Spacer,
  IconButton,
  Heading,
} from '@chakra-ui/react'
import { BsTrash } from 'react-icons/all'
import useStore from '../utils/store'
import { AnimatePresence, motion } from 'framer-motion'
const Saved = () => {
  const savedProducts = useStore((state) => state.savedProducts)
  const removeItem = useStore((state) => state.removeItem)
  return (
    <Box w="full" p={[2, 3]}>
      {savedProducts.length > 0 ? (
        <VStack alignItems="flex-start" w="full">
          <Divider />
          <AnimatePresence>
            {savedProducts.map((item, idx) => (
              <HStack
                h="full"
                w="full"
                key={idx}
                borderBottom="1px"
                borderColor="gray.400"
                pb={2}
                as={motion.div}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  rotateZ: -10,
                  transformOrigin: 'right',
                }}
              >
                <Box
                  w={['8rem', '9rem', '11rem']}
                  h={['6rem', '7rem', '10rem']}
                  rounded="sm"
                  overflow="hidden"
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
                  icon={<BsTrash size={20} />}
                  colorScheme="orange"
                  onClick={() => removeItem(item.id)}
                />
              </HStack>
            ))}
          </AnimatePresence>
        </VStack>
      ) : (
        <VStack>
          <Image
            src="/images/emptycart.svg"
            alt="empty cart"
            w={['full', '80%', '60%', '30rem']}
            as={motion.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <Heading
            textAlign="center"
            size="md"
            bgClip="text"
            bgGradient="linear(to-r, #0055ff, #ab1766)"
            as={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Products you save will appear here
          </Heading>
        </VStack>
      )}
    </Box>
  )
}

export default Saved

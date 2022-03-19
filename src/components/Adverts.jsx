import {
  Text,
  Box,
  ButtonGroup,
  Button,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  useMediaQuery,
  VStack,
  Image,
} from '@chakra-ui/react'
import {
  BsCheck2Circle,
  BsCheck2All,
  GoStop,
  BsHandThumbsDown,
  CgTimelapse,
} from 'react-icons/all'
const Adverts = () => {
  const [mobile] = useMediaQuery('(max-width: 768px)')
  return (
    <HStack w={['full', '80%']} mx="auto">
      <Tabs
        w="full"
        size={mobile ? 'sm' : 'md'}
        variant="enclosed-colored"
        isFitted
      >
        <TabList
          overflowX="auto"
          overflowY="hidden"
          scrollPadding="2rem"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
              scrollbarWidth: 'none',
            },
          }}
          p={1}
          pb={0}
        >
          <Tab color="green">
            <HStack spacing="1">
              <BsCheck2Circle />
              <Text>Active</Text>
            </HStack>
          </Tab>
          <Tab color="yellow.600">
            <HStack spacing="1">
              <CgTimelapse />
              <Text>Reviewing</Text>
            </HStack>
          </Tab>
          <Tab color="red">
            <HStack spacing="1">
              <BsHandThumbsDown />
              <Text>Declined</Text>
            </HStack>
          </Tab>
          <Tab color="gray.500">
            <HStack spacing="1">
              <GoStop />
              <Text>Closed</Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack spacing="1">
              <BsCheck2All />
              <Text>All</Text>
            </HStack>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack>
              <Image
                src="/images/advert.svg"
                alt="review svg"
                w={['full', '80%', '60%', '30rem']}
              />
              <Text textAlign="center" fontSize={['md', 'lg']}>
                There are no adverts yet
              </Text>
              <Text textAlign="center" fontSize={['md', 'lg']}>
                Create a new one now!
              </Text>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Image
                src="/images/review.svg"
                alt="review svg"
                w={['full', '80%', '60%', '30rem']}
              />
              <Text textAlign="center" fontSize={['md', 'lg']}>
                J Mart checks every advert to make sure everything is correct
              </Text>
              <Text textAlign="center" fontSize={['md', 'lg']}>
                Your new ads will be displayed here while we check them
              </Text>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Image
                src="/images/decline.svg"
                alt="decline svg"
                w={['full', '80%', '60%', '30rem']}
              />
              <Text textAlign="center" fontSize={['md', 'lg']}>
                If we find any issues in your new adverts - we will let you know
              </Text>
              <Text textAlign="center" fontSize={['md', 'lg']}>
                Declined adverts will be displayed here for you to fix them
              </Text>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Image
                src="/images/delete.svg"
                alt="decline svg"
                w={['full', '80%', '60%', '30rem']}
              />
              <Text textAlign="center" fontSize={['md', 'lg']}>
                If you close your advert, we'll save it here safe and sound
              </Text>
              <Text textAlign="center" fontSize={['md', 'lg']}>
                You can publish it again, edit or delete completely anytime
              </Text>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Image
                src="/images/emptycart.svg"
                alt="review svg"
                w={['full', '80%', '60%', '30rem']}
              />
              <Text textAlign="center" fontSize={['md', 'lg']}>
                There are no adverts yet
              </Text>
              <Text textAlign="center" fontSize={['md', 'lg']}>
                Create a new one now!
              </Text>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </HStack>
  )
}

export default Adverts

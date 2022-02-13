import { HStack, Badge } from '@chakra-ui/react'

const Categories = () => {
  const categories = [
    'Electronics',
    'clothes',
    'fashion',
    'Phone',
    'Accessories',
  ]
  return (
    <HStack w="100%" overflowX="auto" p="2" d={['flex', 'none']}>
      {categories.map((item, i) => (
        <Badge
          key={i}
          variant="outline"
          px="2"
          rounded="full"
          colorScheme="blue"
        >
          {item}
        </Badge>
      ))}
    </HStack>
  )
}

export default Categories

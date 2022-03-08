import useStore from './store'
import { Navigate } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
const Protect = ({ target }) => {
  const user = useStore((state) => state.user)
  const onOpen = useStore((state) => state.onOpen)
  if (!user) {
    Navigate({ to: '/', replace: true })
    onOpen()
    return null
  }
  return <Container maxW="container.lg">{target}</Container>
}

export default Protect

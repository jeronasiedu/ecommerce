import useStore from './store'
import { Navigate } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import CustomNav from '../components/CustomNav'
const Protect = ({ target }) => {
  const user = useStore((state) => state.user)
  const onOpen = useStore((state) => state.onOpen)
  if (!user) {
    Navigate({ to: '/', replace: true })
    onOpen()
    return null
  }
  return (
    <>
      <CustomNav />
      <Container maxW="container.lg">{target}</Container>
    </>
  )
}

export default Protect

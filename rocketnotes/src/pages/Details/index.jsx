import { Container } from './styles'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <h1>Olá mundo!</h1>
      <span>Manoel Vieira</span>
      <Button title="Entrar" loading />
    </Container>
  )
}
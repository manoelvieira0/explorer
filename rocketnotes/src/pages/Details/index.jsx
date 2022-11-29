import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <Header/>
      <h1>Olá mundo!</h1>
      <span>Manoel Vieira</span>
      <Button title="Voltar" />
    </Container>
  )
}
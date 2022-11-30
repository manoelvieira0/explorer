import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>O React é uma biblioteca front-end e tem como um de seus objetivos facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes.</p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/explorer</a></li>
              <li><a href="#">https://www.rocketseat.com.br/explorer</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}
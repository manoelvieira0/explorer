import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota"/>
      <Section title="Links úteis">
        <Links>
          <li><a href="https://www.rocketseat.com.br/explorer">https://www.rocketseat.com.br/explorer</a></li>
          <li><a href="https://www.rocketseat.com.br/explorer">https://www.rocketseat.com.br/explorer</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express" />
        <Tag title="Node" />
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}
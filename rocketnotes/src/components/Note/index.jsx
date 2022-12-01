import { Container } from "./styles";
import { Tag } from '../Tag'

export function Note({ data, ...rest }) { // Criação do objeto data para armazenar várias propriedades
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}
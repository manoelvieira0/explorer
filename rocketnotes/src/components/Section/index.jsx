import { Container } from "./styles"; // Children usado para indicar propriedade que varia

export function Section({title, children}){
  return (
    <Container> 
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
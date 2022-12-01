import { Container } from "./styles";

export function Input({icon: Icon, ...rest}){ // {Icon && <Icon/>} Só vai mostrar o ícone se ele existir
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input {...rest}/>
    </Container>
  );
}
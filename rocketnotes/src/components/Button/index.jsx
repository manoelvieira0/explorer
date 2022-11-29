import { Container } from "./styles";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading} // Para desabilitar o botão
      {...rest} // Qualquer outra propriedade que não estiver inserida explicitamente
    >
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
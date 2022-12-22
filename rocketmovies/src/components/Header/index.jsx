import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Profile>
        <div>
          <strong>Manoel Vieira</strong>
          <Logout>Sair</Logout>
        </div>
        <img src="https://github.com/manoelvieira0.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}
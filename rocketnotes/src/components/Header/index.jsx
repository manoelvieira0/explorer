import {Container, Profile} from './styles'

export function Header(){
  return (
    <Container>
      <Profile>
        <img src="https://github.com/manoelvieira0.png" alt="GitHub Profile Picture" />
        <div>
          <span>Bem-Vindo,</span>
          <strong>Manoel Vieira</strong>
        </div>
      </Profile>
    </Container>
  );
}
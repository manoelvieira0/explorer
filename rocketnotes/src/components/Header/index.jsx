import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout} from './styles'

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/manoelvieira0.png" alt="GitHub Profile Picture" />
        <div>
          <span>Bem-Vindo,</span>
          <strong>Manoel Vieira</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
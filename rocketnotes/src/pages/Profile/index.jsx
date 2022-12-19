import { Container, Form, Avatar } from "./styles";

import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile() {
  const {user, updatedProfile} = useAuth()
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate(){
    const user = {
      name, 
      email, 
      password: passwordNew,
      old_password: passwordOld
      
    }

    await updatedProfile({user})
  }


  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/manoelvieira0.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />
        <Input placeholder="E-mail" type="email" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e => setPasswordOld(e.target.value)}/>
        <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/>

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  );
}
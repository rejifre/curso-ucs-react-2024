import { Email, InfoOutlined, Key, Password } from "@mui/icons-material";
import { Container, FormHelperText, Input } from "@mui/joy";
import React, { useState } from "react";

const UserRegister = () => {
  /** Apenas para exemplo. */
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(userName, email, password);
    console.log(state);
  };

  const handleValidatePassword = (value: string) => {
    setState({ ...state, passwordConfirm: value });
    setErrorPassword(value !== state.password);
  };

  return (
    <main>
      <Container>
        <h1>Criar Conta</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome completo"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          ></Input>
          <Input
            type="email"
            placeholder="Digite o email do usuário"
            value={state.email}
            startDecorator={<Email />}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          ></Input>
          <Input
            type="password"
            placeholder="Digitre a senha"
            value={state.password}
            startDecorator={<Key />}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          ></Input>
          <Input
            type="password"
            placeholder="Confirme a senha"
            value={state.passwordConfirm}
            startDecorator={<Key />}
            error={errorPassword}
            onChange={(e) => handleValidatePassword(e.target.value)}
          ></Input>
          {errorPassword ?
          <span style={{ color: "red" }}> As senhas não são iguais. </span> : null }

          

          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </main>
  );
};

export default UserRegister;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@mui/joy/Input";
import { Box, Button, Container } from "@mui/joy";
import { Email, Key } from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredencial) => {
        const user = userCredencial.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <Container>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Box component="section" sx={{ p: 2 }}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              startDecorator={<Email />}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>

            <Input
              type="password"
              placeholder="Senha"
              value={password}
              startDecorator={<Key />}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>

            <Button type="submit">Entrar</Button>
          </Box>
        </form>
      </Container>
      <Link to="/cadastro-usuario" className="createAccount">
        Criar Conta
      </Link>
    </main>
  );
};

export default LoginPage;

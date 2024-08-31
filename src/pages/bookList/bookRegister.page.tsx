import { Container } from "@mui/joy";
import React, { useState } from "react";

export const BookRegister = () => {
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Id: ${bookId}, Título: ${title}, Autor: ${author}`);
  };

  return (
    <main>
      <Container>
        <h1>Cadastro de livros</h1>
        <form onSubmit={handleSubmit}>
          {/**provisorio */}
          <input
            type="text"
            placeholder="ID"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </main>
  );
};

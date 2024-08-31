import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/home.page";
import { BookList } from "./pages/bookList/bookList.page";
import IBook from "./interfaces/book.interface";
import Login from "./pages/login/login.page";
import { BookRegister } from "./pages/bookList/bookRegister.page";

function App() {
  
  const books: Array<IBook> = [
    {id: '1', title: 'React: aprenda praticando', author:"Mauricio Mujor Samy Silva"},
    {id: '2', title: 'livro 2', author:"autor 2"},
  ]
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista-livros" element={<BookList books={books} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro-livros" element={<BookRegister/>} />
      </Routes>
    </Router>
  );
}

export default App;

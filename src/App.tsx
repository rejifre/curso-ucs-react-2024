import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/home.page";
import LoginPage from "./pages/Login/Login.page";
import { UserRegister } from "./pages/UserRegister/UserRegister.page";
import 'firebase/firestore'
import { BookRegister } from "./pages/bookList/BookRegister.page";
import { BookList } from "./pages/bookList/BookList.page";


function App() {

  // const books: Array<IBook> = useMemo(
  //   () => [
  //     {
  //       id: "1",
  //       title: "React: aprenda praticando",
  //       author: "Mauricio Mujor Samy Silva",
  //     },
  //     { id: "2", title: "livro 2", author: "autor 2" },
  //   ],
  //   []
  // );
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista-livros" element={<BookList/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro-livros" element={<BookRegister />} />
        <Route path="/cadastro-usuario" element={<UserRegister />} />
      </Routes>
    </Router>
  );
}

export default App;

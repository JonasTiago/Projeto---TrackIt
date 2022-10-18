import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header userImg={'https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg'}/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

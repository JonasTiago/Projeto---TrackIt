import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

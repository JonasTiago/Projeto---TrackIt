import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyles";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

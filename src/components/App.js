import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../GlobalStyles/Reset";
import HabitPage from "../pages/HabitPage/HabitPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignInPage from "../pages/LoginPage/SignInPage";
import TodayPage from "../pages/TodayPage/TodayPage";
import Context from "./Context/Context";


function App() {
  const [resLogin, setResLogin] = useState({});

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={resLogin} >
        <Routes>
          <Route path="/" element={<LoginPage setResLogin={setResLogin} />} />
          <Route path="/cadastro" element={<SignInPage />} />
          <Route path="/habitos" element={<HabitPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
          <Route path="*" element={"Erro, caminho errado"} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;

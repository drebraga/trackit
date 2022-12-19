import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import GlobalStyle from "../GlobalStyles/Reset";
import HabitPage from "../pages/HabitPage/HabitPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignInPage from "../pages/LoginPage/SignInPage";
import TodayPage from "../pages/TodayPage/TodayPage";
import Context from "./Context/Context";


function Main() {
  const [resLogin, setResLogin] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{resLogin, setResLogin}} >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignInPage />} />
          <Route path="/habitos" element={<HabitPage />} />
          <Route path="/hoje" element={
            <TodayPage />
          }
          />
          <Route path="/historico" element={<HistoryPage />} />
          <Route path="*" element={"Erro, caminho errado"} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default Main;
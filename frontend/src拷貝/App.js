import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import FillIn from "./pages/FillIn/index"
import GlobalContext from "./components/GlobalContext"
import LoginIconBeforeLogin from "./components/LoginIconBeforeLogin"
import LoginIconAfterLogin from "./components/LoginIconAfterLogin"
import SubmitSuccess from './pages/SubmitSuccess'
import Login from "./pages/Login/Login"
import UserTitle from "./pages/UserView/UserTitle"
import UserView from "./pages/UserView"
import Edit from "./pages/Edit/CreateandEditForm"

import './global/index.css'
import './pages/FillIn/index.css'
export default function App() {


  const [v, setV] = useState();
  return (
    <GlobalContext.Provider value={v} >
      <div className="navbar">
        <div className="title">新冠門診個案填寫系統</div>
        <Routes>
          <Route path="/" element={<LoginIconBeforeLogin />} />
          <Route path="/submitSuccess" element={<LoginIconBeforeLogin />} />
          <Route path="/login" element={""} />
          <Route path="/userView" element={<UserTitle />} />
          <Route path="/edit" element={<LoginIconAfterLogin />} />
        </Routes>

      </div>
      <Routes>
        <Route path="/" element={<FillIn />} />
        <Route path="/submitSuccess" element={<SubmitSuccess />} />
        <Route path="/login" element={<Login get={setV} />} />
        <Route path="/userView" element={<UserView />} />
        <Route path="/edit" element={<Edit get={setV} />} />
      </Routes>
    </GlobalContext.Provider>

  )
}

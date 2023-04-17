import { Route, Routes } from "react-router-dom";

import { Cadastro } from "../pages/Cadastro";
import { Login} from "../pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Cadastro />} />
    </Routes>
  )
}
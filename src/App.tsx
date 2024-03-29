import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./pages/home"
import { Botoes } from "./pages/botoes"
import { Cards } from "./pages/cards"
import { Estilos } from "./pages/estilos"
import { Paginas } from "./pages/paginas"

export function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/botoes" element={<Botoes />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/estilos" element={<Estilos />} />
        <Route path="/paginas" element={<Paginas />} />
      </Routes>
    </BrowserRouter>
  )
}
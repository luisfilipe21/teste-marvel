import { Routes, Route } from 'react-router-dom';
import { Filmes } from "./Pages/Filmes"
import { HQs } from './Pages/HQs';
import { Personagens } from './Pages/Personagens';


function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Personagens />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/hqs" element={<HQs />} />
      </Routes>
    </main>
  )
}

export default App

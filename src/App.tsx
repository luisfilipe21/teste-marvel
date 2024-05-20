import { Routes, Route } from 'react-router-dom';
import { Filmes } from "./Pages/Filmes"
import { HQs } from './Pages/HQs';
import { Personagens } from './Pages/Personagens';
import { RegisterForm } from './components/form/RegisterForm';
import { FormLogin } from './components/form/FormLogin';


function App() {


  return (
    <main>
      <Routes>
        <Route path="/" element={<RegisterForm />}/>
        <Route path="/login" element={<FormLogin />}/>
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/hqs" element={<HQs />} />
      </Routes>
    </main>
  )
}

export default App

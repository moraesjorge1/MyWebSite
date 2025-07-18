import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './assets/sidebar'; // não esqueça de importar
import Contatos from './pages/Contatos'; // ou o caminho correto
import Sobre from './pages/Sobre';

function App() {
  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      <Sidebar />
      <main className="flex-1 bg-blue-50 pl-[100px] md:pl-[250px] pr-4 py-6 transition-all duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;

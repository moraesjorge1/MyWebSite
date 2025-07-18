import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './assets/sidebar'; // não esqueça de importar
import Contatos from './pages/Contatos'; // ou o caminho correto
import Sobre from './pages/Sobre';

function App() {
  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      <Sidebar />
      <main className="flex-1 p-6 bg-blue-50">
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

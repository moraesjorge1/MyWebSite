import { useNavigate } from 'react-router-dom';  // Importando o hook useNavigate
import Tilt from 'react-parallax-tilt';

export default function Home() {
  const handleClick = () => {
    // Redirecionar para o GitHub
    window.location.href = 'https://github.com/moraesjorge1/Analise-RecSys'; // Substitua pelo seu link
  };

  return (
    <div className="min-h-screen w-full bg-green-100 justify-center p-20">
      <div className="flex">
        <div className="max-w-4xl mx-auto px-4">
          {/* Títulos Responsivos */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
            I’m Jorge de Moraes
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold mb-6 text-center md:text-left">
            Computer Science student and enthusiast
          </h2>

          {/* Parágrafo introdutório */}
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-10 text-center md:text-left">
            Hi, I’m Jorge de Moraes. I’m a Computer Science student and an enthusiast of intelligent systems, recommendation engines, and machine learning.

            This is my personal space where I share my projects, research, academic work, and experiences in the world of technology. Throughout my academic journey, I’ve focused on exploring areas like software development, artificial intelligence, and data analysis, always striving to learn and apply new concepts in innovative projects.

            I’m constantly looking for challenges that help me grow as a professional and contribute solutions that truly make a difference. If you’re interested in learning more about my experiences or collaborating on a project, feel free to explore the content and get in touch!
          </p>

          {/* Cards de notícias */}
          <div onClick={handleClick} className="cursor-pointer">  {/* Tornando o Tilt clicável */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Última Atualização</h3>
              <p className="text-gray-700 text-base">
                Análise comparativa entre abordagens model-based e memory-based
              </p>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

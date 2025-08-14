import Tilt from 'react-parallax-tilt';

export default function Home() {
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
            I’m passionate about intelligent systems, recommendation engines, and machine learning.
            This is my personal space to share projects, research, academic work and experiences.
          </p>

          {/* Cards de notícias */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">Última Atualização</h3>
            <p className="text-gray-700 text-base">
              Comecei a trabalhar com modelos memory-based e reduzi o RMSE em 10%!
            </p>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

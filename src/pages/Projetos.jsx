import { Github } from "lucide-react";

export default function Projetos() {
    const projetos = [
        {
            titulo: "WestSideClub (e-commerce fictício)",
            categoria: "Aplicação Web",
            ano: "2024",
            descricao:
                "É uma aplicação completa de um e-commerce de roupas, tendo funcionamentos como: Interação com produtos, Login/Logout, Cadastro de user, Carrinho funcional e Estoque completo.",
            github: "https://github.com/moraesjorge1/WestSideWebApplication"
        },
        {
            titulo: "Análise de Sistemas de Recomendação (Analise-RecSys)",
            categoria: "Análise de Dados / Sistemas de Recomendação",
            ano: "2024",
            descricao:
                "Este projeto implementa uma análise comparativa entre abordagens de sistemas de recomendação: model-based e memory-based. A análise foi realizada utilizando a linguagem **Julia**, com o objetivo de explorar o desempenho de ambas as abordagens utilizando dados de usuários. A avaliação das abordagens é feita com base em métricas como **RMSE** (Root Mean Square Error) e **precisão**. O projeto tem como foco a análise de algoritmos de recomendação, buscando entender os pontos fortes e fracos de cada abordagem em cenários práticos.",
            github: "https://github.com/moraesjorge1/Analise-RecSys"
        }
    ];

    return (
        <section className="px-4 sm:px-8 md:px-16 py-12 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Projetos Acadêmicos</h2>

            <div className="space-y-10">
                {projetos.map((proj, index) => (
                    <div
                        key={index}
                        className="space-y-3 border-b border-gray-200 pb-6"
                    >
                        <div className="flex flex-wrap items-center gap-2 text-xl font-semibold text-black">
                            <span>{proj.titulo}</span>
                            {proj.github && (
                                <a
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-blue-600"
                                >
                                    <Github className="w-5 h-5 inline" />
                                </a>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2 text-sm font-medium">
                            <span className="bg-black text-white px-2 py-0.5 rounded">
                                {proj.categoria}
                            </span>
                            <span className="bg-black text-white px-2 py-0.5 rounded">
                                {proj.ano}
                            </span>
                        </div>

                        <p className="text-gray-800 text-justify leading-relaxed">
                            {proj.descricao}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

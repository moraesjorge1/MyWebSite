import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiTailwindcss,
    SiMysql,
    SiPython,
    SiGit,
    SiTypescript,
    SiKotlin,
    SiUnity
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { FaCode } from 'react-icons/fa';

import { FaMousePointer } from 'react-icons/fa';

import clsx from "clsx";
import { useState } from "react";

const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "Básico" },
    { name: "React", icon: <SiReact className="text-cyan-400" />, level: "Básico" },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: "Básico" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "Básico" },
    { name: "SQL", icon: <SiMysql className="text-blue-600" />, level: "Intermediário" },
    { name: "Python", icon: <SiPython className="text-yellow-500" />, level: "Intermediário" },
    { name: "Git", icon: <SiGit className="text-orange-500" />, level: "Intermediário" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: "Básico" },
    { name: "Java", icon: <FaJava className="text-red-600" />, level: "Intermediário" },
    { name: "Kotlin", icon: <SiKotlin className="text-purple-500" />, level: "Básico" },
    { name: "Unity (C#)", icon: <SiUnity className="text-gray-800" />, level: "Intermediário" },
    { name: "C", icon: <FaCode className="text-blue-700" />, level: "Avançado" }
];

function SkillCard({ skill }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            onClick={() => setFlipped(!flipped)}
            className="w-full sm:w-[220px] mx-auto perspective cursor-pointer transition-transform duration-300 hover:scale-105"
        >
            <div
                className={clsx(
                    "relative w-full h-40 sm:h-48 duration-500 transform-style-preserve-3d",
                    flipped && "rotate-y-180"
                )}
            >
                {/* Frente */}
                <div className="absolute w-full h-full backface-hidden bg-white dark:bg-blue-50 rounded-lg shadow-md flex flex-col items-center justify-center p-4">
                    <div className="text-5xl mb-2">{skill.icon}</div>
                    <span className="font-semibold text-gray-800 dark:text-gray-900 text-center">
                        {skill.name}
                    </span>
                </div>

                {/* Verso */}
                <div className="absolute w-full h-full backface-hidden bg-blue-500 dark:bg-blue-700 rounded-lg shadow-md flex flex-col items-center justify-center p-4 rotate-y-180">
                    <span className="text-white font-bold text-xl">{skill.level}</span>
                </div>
            </div>
        </div>
    );

}

export default function Sobre() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-base sm:text-lg md:text-xl leading-relaxed pl-0 md:pl-[100px]">
            <h1 className="text-5xl font-bold mb-8 text-center">Sobre mim</h1>
            <p className="mb-6">
                Olá! Me chamo Jorge Neto e sou estudante de Ciência da Computação na UFRRJ. Apaixonado por tecnologia, gosto de resolver problemas com código e transformar ideias em soluções reais.
            </p>
            <p className="mb-6">
                Tenho interesse em desenvolvimento web, especialmente com JavaScript, React e Node.js, além de estar me aprofundando em sistemas embarcados e tempo real por meio de projetos acadêmicos.
            </p>
            <p className="mb-6">
                Ao longo da minha trajetória, já participei de projetos interdisciplinares, fui organizador da Semana Acadêmica de Computação e estou sempre em busca de aprender algo novo — seja uma linguagem, uma framework ou uma abordagem diferente para encarar desafios.
            </p>
            <p className="mb-6">
                Quando não estou programando, gosto de acompanhar novidades do mundo tech, treinar, ouvir música ou pensar em como posso construir algo útil (ou divertido) com o que aprendi.
            </p>
            <p className="text-center font-semibold">
                Estou em busca de novas oportunidades e desafios.
            </p>

            <h2 className="text-3xl font-semibold my-10 text-center">Minhas competências</h2>
            <div className="grid gap-10 grid-cols-[repeat(auto-fit,_minmax(180px,_2fr))]">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>

            <div className="mt-4 flex items-center justify-center text-gray-600 text-xl gap-2">
                <FaMousePointer className="animate-bounce" />
                <span>Clique nos cards para saber o nível</span>
            </div>
        </div>
    );
}


import { FaInstagram, FaDiscord, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contato() {
    return (
        <div class="pl-8 grid grid-fl-col grid-rows-2 gap-y-30">
            <h1 className="text-9xl font-bold mb-10 text-center">Entre em contato</h1>
            <div className="flex flex-wrap justify-center gap-10 text-[10rem] pl-10">
                <a href="https://instagram.com/seu_usuario" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://discord.com/users/seu_id" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="hover:text-indigo-400 hover:rotate-[360deg] hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://twitter.com/seu_usuario" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://linkedin.com/in/seu_usuario" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com/seu_usuario" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
                </a>
            </div>
        </div>

    )

}



/*export default function Contato() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black flex flex-col items-center justify-center text-white px-4">

            <h1 className="text-4xl font-bold mb-10 text-center">Entre em contato</h1>

            <div className="flex flex-wrap justify-center gap-10 text-6xl">
                <a href="https://instagram.com/seu_usuario" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://discord.com/users/seu_id" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="hover:text-indigo-400 hover:rotate-[15deg] hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://twitter.com/seu_usuario" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://linkedin.com/in/seu_usuario" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com/seu_usuario" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
                </a>
            </div>
        </div>
    );
}*/

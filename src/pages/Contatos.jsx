import {
    FaInstagram,
    FaDiscord,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaPhoneAlt,
    FaEnvelope,
} from 'react-icons/fa';

export default function Contato() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10 grid gap-12">

            {/* Informações de contato responsivas */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Telefone */}
                <div className="flex items-center bg-blue-100 border border-blue-200 rounded-xl shadow-md p-4 sm:p-6 gap-4 hover:scale-[1.02] transition-transform duration-300">
                    <FaPhoneAlt className="text-blue-600 text-2xl min-w-[32px]" />
                    <div>
                        <p className="text-sm sm:text-base text-gray-600">Telefone</p>
                        <p className="text-base sm:text-lg font-semibold text-gray-900">(21) 98889-7291</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center bg-blue-100 border border-blue-200 rounded-xl shadow-md p-4 sm:p-6 gap-4 hover:scale-[1.02] transition-transform duration-300">
                    <FaEnvelope className="text-blue-600 text-2xl min-w-[32px]" />
                    <div>
                        <p className="text-sm sm:text-base text-gray-600">Email</p>
                        <p className="text-base sm:text-lg font-semibold text-gray-900">morxesjorge@outlook.com</p>
                    </div>
                </div>
            </div>

            {/* Título */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800">
                Ou
            </h1>

            {/* Ícones sociais */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 text-[3rem] sm:text-[4rem] md:text-[5rem]">
                <a href="https://instagram.com/morxesjorge" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://discord.com/users/moraesjorge" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="hover:text-indigo-400 hover:rotate-[360deg] hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://twitter.com/morxesjorgi" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/jorge-de-moraes-im/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com/moraesjorge1" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
                </a>
            </div>
        </div>
    );
}

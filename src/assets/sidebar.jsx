import { useState, useEffect } from 'react';
import { MdMenuOpen, MdHome, MdPerson, MdWork, MdContactMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MenuItems = [
  { icon: <MdHome size={28} />, label: 'Home', path: '/' },
  { icon: <MdPerson size={28} />, label: 'Sobre mim', path: '/sobre' },
  { icon: <MdWork size={28} />, label: 'Projetos', path: '/projetos' },
  { icon: <MdContactMail size={28} />, label: 'Contato', path: '/contatos' },
];


export default function Sidebar() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false); // Fecha automaticamente no mobile
      } else {
        setOpen(true); // Abre novamente no desktop
      }
    };

    handleResize(); // Executa uma vez ao carregar

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`shadow-md min-h-screen p-2 bg-[#6FAFA5] transition-all duration-300
        ${open ? 'w-72' : 'w-20'}
        fixed md:relative z-40
      `}
    >
      {/* Header com botão */}
      <div className="px-3 py-4 h-24 flex justify-between items-center">
        <MdMenuOpen
          size={34}
          className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Logo no topo da sidebar */}
      {/* Alterna entre a profile pic e logo dependendo do estado da sidebar */}
      <div className="flex justify-center mt-4">
        {open ? (
          // Quando a sidebar estiver aberta, mostra a foto de perfil
          <img
            src="/picatt.jpg" // coloque sua imagem de perfil no public/ com esse nome
            alt="Minha foto"
            className="w-60 h-60 rounded-full border-0 shadow-md transition-all duration-300"
          />
        ) : (
          // Quando a sidebar estiver fechada, mostra a logo
          <img
            src="/LogoJM.png"
            alt="Logo JM"
            className="w-12 h-12 transition-all duration-600"
          />
        )}
      </div>


      {/* Nome (visível somente se aberto) */}
      {open && (
        <div className="text-gray-900 text-center font-bold text-xl mt-3 mb-6">
          Jorge de Moraes
        </div>
      )}

      {/* Menu */}
      <ul className="mt-4 space-y-3">
        {MenuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            title={item.label}
            className="group relative text-gray-900 flex items-center gap-4 px-5 py-3 hover:bg-blue-200 hover:scale-105 rounded transition-all duration-300"
          >
            {/* Ícone */}
            <div>{item.icon}</div>

            {/* Label visível quando aberto */}
            <p
              className={`${!open ? 'w-0 opacity-0 translate-x-24' : 'opacity-100'
                } duration-500 overflow-hidden transition-all`}
            >
              {item.label}
            </p>

            {/* Tooltip visível quando fechado, exceto no mobile */}
            <p
              className={`
                          ${open ? 'hidden' : 'block sm:block'} 
                          absolute left-20 shadow-md rounded-md bg-white text-black text-sm font-medium 
                          px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          whitespace-nowrap z-10
                        `}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

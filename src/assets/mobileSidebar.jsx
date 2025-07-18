import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { MdHome, MdPerson, MdWork, MdContactMail } from 'react-icons/md';

const MenuItems = [
    { icon: <MdHome size={24} />, label: 'Home' },
    { icon: <MdPerson size={24} />, label: 'Sobre mim' },
    { icon: <MdWork size={24} />, label: 'Projetos' },
    { icon: <MdContactMail size={24} />, label: 'Contato' },
];

export default function MobileSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Botão flutuante de menu */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button onClick={() => setOpen(!open)} className="p-2 bg-blue-600 text-white rounded shadow">
                    <MdMenu size={28} />
                </button>
            </div>

            {/* Menu lateral */}
            <div className={`fixed top-0 left-0 h-full bg-blue-100 shadow-lg z-40 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} w-64`}>
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="font-bold text-lg text-gray-800">Menu</h2>
                    <button onClick={() => setOpen(false)} className="text-gray-800 text-xl">×</button>
                </div>

                <ul className="mt-4 space-y-3 p-4">
                    {MenuItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-800 hover:bg-blue-200 p-2 rounded">
                            {item.icon}
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

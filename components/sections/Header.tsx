"use client"
import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const whatsappLink = "https://l1nk.dev/hubbb";

    // Efeito de scroll para a navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0510]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#d4af37]/20 ' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto h-20 px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo vitoria prado.png" alt="Logo Medium Vitória Prado" className="w-[150px] h-auto object-contain" />
                </div>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0510] transition-all duration-300 font-mystic text-sm tracking-wider uppercase"
                >
                    <WhatsAppIcon size={18} />
                    Agendar Consulta
                </a>
            </div>
        </nav>
    );
}

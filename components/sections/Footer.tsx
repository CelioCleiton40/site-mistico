
import React from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Footer = () => {
    const whatsappLink = "https://l1nk.dev/hubbb";

    return (
        <footer className="bg-[#050208] pt-20 pb-10 border-t border-[#d4af37]/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-mystic text-3xl text-white mb-6">Pronta para transformar seu destino?</h2>
                    <p className="font-body text-gray-400 mb-8">
                        Não deixe para depois a felicidade que você pode começar a construir hoje. O universo conspira a seu favor quando você dá o primeiro passo.
                    </p>
                    <a
                        href={whatsappLink}
                        className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-900/20"
                    >
                        <WhatsAppIcon />
                        Falar no WhatsApp
                    </a>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-body">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p>&copy; 2025 Medium Vitória Prado. Todos os direitos reservados.</p>
                        <p> Desenvolvido pela{" "} <a href="https://wa.me/5584998442522" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline" > Sales Digital </a> </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

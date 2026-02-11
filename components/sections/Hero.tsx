
import React from 'react';
import { Sparkles } from 'lucide-react';

export const Hero = () => {
    const whatsappLink = "https://wa.link/86hf6m";

    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden mandala-bg">
            {/* Overlay Escuro com Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0510]/80 via-[#0a0510]/60 to-[#0a0510] z-10"></div>

            {/* Imagem de Fundo (Placeholder para foto principal) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/FOTO Vitoria Prado.webp"
                    alt="Fundo Místico"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Conteúdo Hero */}
            <div className="relative z-20 container mx-auto px-4 text-center mt-20">
                <div className="mb-6 animate-fade-in-down">
                    <div className="font-luxury text-4xl md:text-6xl text-[#d4af37] mb-2 glow-text">
                        Dons de Nascença
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"></div>
                </div>

                <h1 className="font-mystic text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 tracking-wide drop-shadow-2xl">
                    Seu relacionamento mudou e você não sabe o que fazer?<br />
                    <span className="text-gold font-bold">Distanciamento, brigas constantes, término inesperado...</span>
                </h1>

                <p className="font-body text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
                    Nem sempre o fim significa que acabou de vez. Antes de desistir, é importante entender o que realmente está acontecendo.
                </p>

                <a
                    href={whatsappLink}
                    className="inline-flex items-center gap-3 bg-gold-gradient text-[#0a0510] px-10 py-4 rounded-full font-mystic font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                    <Sparkles className="animate-spin-slow" />
                    FALAR AGORA NO WHATSAPP
                    <Sparkles className="animate-spin-slow" />
                </a>
            </div>
        </header>
    );
}

import React, { useRef, useState } from 'react';

export const LoveUnion = () => {
    const whatsappLink = "https://wa.link/86hf6m";
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        if (!videoRef.current) return;
        videoRef.current.play();
        setIsPlaying(true);
    };

    return (
        <section className="py-24 bg-[#0a0510] relative border-b border-[#d4af37]/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Vídeo */}
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]">

                            <video
                                ref={videoRef}
                                src="/amor.mp4"
                                poster="/FOTO Vitoria Prado.webp"
                                className="w-full h-auto object-cover"
                                onEnded={() => setIsPlaying(false)}
                                controls
                                onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}
                            />

                            {/* Overlay */}
                            {!isPlaying && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510]/80 to-transparent"></div>

                                    {/* Botão Play */}
                                    <button
                                        onClick={playVideo}
                                        className="absolute inset-0 flex items-center justify-center z-10"
                                        aria-label="Reproduzir vídeo"
                                    >
                                        <div className="w-20 h-20 bg-[#d4af37]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-110 transition-transform duration-300">
                                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-[#d4af37] border-b-[12px] border-b-transparent ml-2"></div>
                                        </div>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="font-luxury text-5xl text-[#d4af37] mb-6">
                            União Amorosa
                        </h2>

                        <p className="font-mystic text-2xl text-white leading-relaxed mb-4">
                            Trago o amor de volta com resultados que começam a surgir em <span className="text-[#d4af37]">3 horas</span>.
                        </p>

                        <p className="font-body text-lg text-gray-300 mb-6">
                            Prazo máximo final até <span className="text-[#d4af37] font-bold">14 dias</span>.
                        </p>

                        <a
                            href={whatsappLink}
                            className="inline-block bg-[#d4af37] text-[#0a0510] px-8 py-3 rounded-full font-mystic font-bold hover:bg-white transition-colors"
                        >
                            Quero meu amor de volta
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};
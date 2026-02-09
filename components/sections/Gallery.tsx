
import React from 'react';

export const Gallery = () => {
    return (
        <section className="py-24 bg-[#0a0510]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-luxury text-5xl text-[#d4af37] mb-4">Ambiente Sagrado</h2>
                    <p className="font-body text-gray-400">Conheça o espaço onde a magia acontece</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Foto 2 - Altar com velas */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10"></div>
                        <img
                            src="/foto-02.jpg"
                            alt="Altar Místico"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-700 transition-transform"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <span className="text-white font-mystic text-xl">Altares Consagrados</span>
                        </div>
                    </div>

                    {/* Foto 3 - Vitória Prado com lenço */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10"></div>
                        <img
                            src="/foto-03.jpg"
                            alt="Medium Vitória Prado Natureza"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-700 transition-transform"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <span className="text-white font-mystic text-xl">Conexão com a Natureza</span>
                        </div>
                    </div>

                    {/* Foto 4 - Ritual com incenso */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer sm:col-span-2 lg:col-span-1">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10"></div>
                        <img
                            src="/foto-04.jpg"
                            alt="Rituais Sagrados"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-700 transition-transform"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <span className="text-white font-mystic text-xl">Rituais de Luz</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

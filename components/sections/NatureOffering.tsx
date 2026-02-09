
import React from 'react';
import { Star, Flame, Moon, Leaf } from 'lucide-react';

export const NatureOffering = () => {
    const whatsappLink = "https://l1nk.dev/hubbb";

    return (
        <section className="py-24 bg-[#0d0714] relative overflow-hidden border-t border-[#d4af37]/20">
            {/* Background Elements - Subtle Smoke/Glow Effect using CSS Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#d4af37]/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center gap-2 mb-4">
                        <Star className="w-4 h-4 text-[#d4af37]" />
                        <span className="text-[#d4af37] font-mystic tracking-widest uppercase text-sm">Conceito Espiritual</span>
                        <Star className="w-4 h-4 text-[#d4af37]" />
                    </div>

                    <h2 className="font-luxury text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Mesa de Oferenda à <span className="text-[#d4af37]">Mãe Natureza</span>
                    </h2>

                    <p className="font-mystic text-xl text-gray-300 italic mb-8">
                        "Onde a astrologia, os elementos e as forças naturais se unem para realinhar destinos"
                    </p>

                    <div className="prose prose-invert mx-auto text-gray-300 leading-relaxed font-body">
                        <p className="mb-4">
                            Cada oferenda é preparada com base no seu <span className="text-[#d4af37]">mapa energético</span> e no momento astrológico atual.
                            Trabalhamos com as forças da Terra, os ciclos da Lua e os elementos naturais para desbloquear caminhos, fortalecer pedidos e restaurar o equilíbrio espiritual.
                        </p>
                        <p>
                            Nada aqui é feito ao acaso. Cada vela, erva, elemento e intenção segue um fundamento ancestral.
                        </p>
                    </div>

                    {/* Destaque Box Dourado */}
                    <div className="mt-8 mx-auto inline-block relative group">
                        <div className="absolute inset-0 bg-[#d4af37] blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
                        <div className="relative border border-[#d4af37] bg-[#0a0510]/80 backdrop-blur-sm px-8 py-4 rounded-lg">
                            <p className="text-[#d4af37] font-mystic text-lg">
                                Ritual realizado em conexão direta com as forças da natureza e a regência astral do momento.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid de Imagens / Pilares */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    {/* Card 1 */}
                    <div className="group relative rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-colors duration-500 bg-[#150c1f]">
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                            <img
                                src="/mesadeoferendaamaenatureza.jpeg"
                                alt="Mesa de Oferenda"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/30">
                                <Leaf className="w-4 h-4 text-[#d4af37]" />
                            </div>
                        </div>
                        <div className="p-6 relative z-20 -mt-20">
                            <h3 className="text-2xl font-luxury text-white mb-2 drop-shadow-lg">Mesa de Oferenda</h3>
                            <p className="text-gray-200 font-body text-sm leading-relaxed bg-[#150c1f]/80 p-2 rounded backdrop-blur-sm border-l-2 border-[#d4af37]">
                                Conexão direta com a Terra, os espíritos naturais e os elementos.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-colors duration-500 bg-[#150c1f]">
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                            <img
                                src="/astrologia.jpeg"
                                alt="Astrologia Ancestral"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/30">
                                <Moon className="w-4 h-4 text-[#d4af37]" />
                            </div>
                        </div>
                        <div className="p-6 relative z-20 -mt-20">
                            <h3 className="text-2xl font-luxury text-white mb-2 drop-shadow-lg">Astrologia Ancestral</h3>
                            <p className="text-gray-200 font-body text-sm leading-relaxed bg-[#150c1f]/80 p-2 rounded backdrop-blur-sm border-l-2 border-[#d4af37]">
                                O ritual é alinhado com fases da Lua, signos e portais energéticos.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-colors duration-500 bg-[#150c1f]">
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                            <img
                                src="/forcasdanatureza.jpeg"
                                alt="Forças da Natureza"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/30">
                                <Flame className="w-4 h-4 text-[#d4af37]" />
                            </div>
                        </div>
                        <div className="p-6 relative z-20 -mt-20">
                            <h3 className="text-2xl font-luxury text-white mb-2 drop-shadow-lg">Forças da Natureza</h3>
                            <p className="text-gray-200 font-body text-sm leading-relaxed bg-[#150c1f]/80 p-2 rounded backdrop-blur-sm border-l-2 border-[#d4af37]">
                                Ativação dos elementos para proteção, amor, prosperidade e equilíbrio.
                            </p>
                        </div>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <a
                        href={whatsappLink}
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#d4af37] font-mystic rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] hover:bg-white hover:text-[#0a0510]"
                    >
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                        <span className="relative">Agendar Análise Espiritual</span>
                        <Star className="w-5 h-5 ml-2 animate-spin-slow" />
                    </a>
                    <p className="mt-4 text-sm text-gray-400 font-body">
                        Descubra qual força da natureza rege o seu caminho
                    </p>
                </div>

            </div>
        </section>
    );
};

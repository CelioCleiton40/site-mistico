
import React from 'react';
import { Star } from 'lucide-react';

export const About = () => {
    const whatsappLink = "https://l1nk.dev/hubbb";

    return (
        <section className="py-24 bg-[#0a0510] relative overflow-hidden">
            {/* Elemento Decorativo Fundo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Coluna Imagem (Foto-01 Style) */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-t-[10rem] rounded-b-3xl overflow-hidden border-2 border-[#d4af37]/30 p-2">
                            <div className="absolute inset-0 bg-black/20 z-10 hover:bg-transparent transition-all duration-500"></div>
                            {/* Placeholder para Foto 01 - A imagem da Médium rezando */}
                            <img
                                src="/foto-01.jpg"
                                alt="Medium Vitória Prado"
                                className="w-full h-auto min-h-[400px] lg:h-[600px] object-cover object-top rounded-t-[9.5rem] rounded-b-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Texto Flutuante */}
                            <div className="absolute bottom-8 left-8 z-20">
                                <p className="font-luxury text-4xl text-[#d4af37] drop-shadow-md">Medium Vitória Prado</p>
                            </div>
                        </div>
                    </div>

                    {/* Coluna Texto */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="font-luxury text-5xl md:text-6xl text-white mb-4">
                            Quem <span className="text-gold">Sou?</span>
                        </h2>

                        <div className="space-y-6 font-body text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                <strong className="text-[#d4af37] font-mystic text-xl block mb-2">Astróloga e Vidente a Serviço do Amor e do Destino</strong>
                                "Sou Vitória Prado, astróloga e vidente, dedicada a ajudar pessoas que desejam transformar o amor, o destino e a própria energia espiritual."
                            </p>

                            <p>
                                Meu trabalho é guiado pela espiritualidade, pela leitura correta dos sinais e pelo respeito às forças que regem cada caminho.

                                Através da astrologia espiritual, dos búzios e do tarot, identifico bloqueios, afastamentos, interferências espirituais e ciclos negativos que impedem a vida amorosa e emocional de fluir. Cada consulta revela não apenas o problema, mas a raiz espiritual da situação.

                                Atuo com amarração amorosa responsável, sempre após orientação espiritual, respeitando o tempo, o merecimento e o propósito de cada pessoa. Nada é feito sem fundamento — tudo é conduzido com verdade, ética e proteção espiritual.

                                Se você sente que o amor se afastou, que seu destino está travado ou que sua energia precisa ser restaurada, o primeiro passo é a orientação correta.
                            </p>

                            <ul className="space-y-4 mt-6">
                                {[
                                    "Mais de 20 anos de experiência na Europa e Brasil",
                                    "Atendimento totalmente sigiloso e humano",
                                    "Especialista em casos amorosos complexos",
                                    "Orientação através de Baralho Cigano e Tarot"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
                                        <span className="text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <a href={"https://www.instagram.com/mae_vitoria_prado?utm_medium=cop"} className="border-b border-[#d4af37] text-[#d4af37] pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
                                    Ler minha história completa
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

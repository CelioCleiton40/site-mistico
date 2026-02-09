import { CheckCircle2 } from 'lucide-react';

export const Ritual = () => {
    const whatsappLink = "https://l1nk.dev/hubbb";

    return (
        <section className="py-24 bg-[#150c1f] relative border-y border-[#d4af37]/20">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block p-2 border border-[#d4af37]/30 rounded-full mb-6">
                        <span className="block px-6 py-1 bg-[#d4af37]/10 rounded-full text-[#d4af37] font-mystic text-sm tracking-widest uppercase">
                            O Ritual Mais Poderoso
                        </span>
                    </div>

                    <h2 className="font-mystic text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                        RITUAL <span className="text-gold italic">CHORA NOS MEUS PÉS</span>
                    </h2>

                    <p className="font-body text-xl text-gray-300 mb-12 leading-relaxed">
                        Um trabalho ancestral de alta magia, destinado a quem busca resultados definitivos. Este ritual atua diretamente no subconsciente e no campo energético da pessoa amada, despertando saudade, desejo e necessidade de estar ao seu lado.
                    </p>

                    {/* Grid de Benefícios do Ritual */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            "Domínio do Pensamento",
                            "Adoçamento Amoroso",
                            "Afastamento de Rivais",
                            "União Espiritual"
                        ].map((benefit, i) => (
                            <div key={i} className="bg-[#0a0510] p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all group">
                                <CheckCircle2 className="w-8 h-8 text-[#d4af37] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-mystic text-white">{benefit}</h3>
                            </div>
                        ))}
                    </div>

                    <a
                        href={whatsappLink}
                        className="inline-block bg-transparent border-2 border-[#d4af37] text-[#d4af37] px-12 py-4 rounded-full font-mystic font-bold text-lg hover:bg-[#d4af37] hover:text-[#0a0510] transition-all duration-300"
                    >
                        SAIBA MAIS SOBRE O RITUAL
                    </a>
                </div>
            </div>
        </section>
    );
}

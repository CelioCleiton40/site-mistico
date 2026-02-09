import { Flower2, Eye, Gem } from 'lucide-react';

export const Services = () => {
    return (
        <section className="relative py-20 bg-[#0f0816]">
            <div className="container mx-auto px-4">
                <h2 className="sr-only">Nossos Diferenciais</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group bg-[#150c1f] p-8 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all">
                            <Flower2 className="w-8 h-8 text-[#d4af37]" />
                        </div>
                        <h3 className="font-mystic text-xl text-white mb-3">Energia & Lótus</h3>
                        <p className="font-body text-gray-400 text-sm leading-relaxed">
                            Recuperação da sua própria energia vital através da espiritualidade sagrada e rituais de purificação.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-[#150c1f] p-8 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all">
                            <Eye className="w-8 h-8 text-[#d4af37]" />
                        </div>
                        <h3 className="font-mystic text-xl text-white mb-3">Vidência & Precisão</h3>
                        <p className="font-body text-gray-400 text-sm leading-relaxed">
                            Acompanhamento completo até o resultado final com zero margem para erros e foco na vibração correta.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-[#150c1f] p-8 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all">
                            <Gem className="w-8 h-8 text-[#d4af37]" />
                        </div>
                        <h3 className="font-mystic text-xl text-white mb-3">Amor & Cristais</h3>
                        <p className="font-body text-gray-400 text-sm leading-relaxed">
                            Especialista em unir a Energia Quântica e a Lei da Atração para alinhar seu pedido ao universo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

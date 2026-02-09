
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Star } from 'lucide-react';

export const Testimonials = () => {
    const testimonials = [
        {
            name: "Carol",
            text: "Estava desesperada, mas a consulta abriu meus caminhos. Gratidão eterna! O resultado veio mais rápido do que eu esperava.",
            title: "Resultados Rápidos"
        },
        {
            name: "Flavia",
            text: "O ritual foi poderosíssimo. Senti a energia mudar na hora e tudo começou a fluir na minha vida amorosa.",
            title: "Energia Transformadora"
        },
        {
            name: "Cliente Anônima",
            text: "Recuperei meu amor em poucos dias! Agradeço imensamente à Mãe Vitória por todo o carinho e atenção.",
            title: "Amor Recuperado"
        },
        {
            name: "Mariana",
            text: "Profissionalismo e acolhimento sem igual. Me senti muito segura durante todo o processo.",
            title: "Confiança Total"
        }
    ];

    return (
        <section className="py-24 bg-[#0f0816] relative border-b border-[#d4af37]/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-luxury text-5xl text-[#d4af37] mb-4">Vidas Transformadas</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
                    <p className="font-body text-gray-400 max-w-2xl mx-auto">
                        Veja o que dizem aqueles que recuperaram sua felicidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((item, i) => (
                        <Card key={i} className="bg-[#150c1f] border-[#d4af37]/20 text-white hover:border-[#d4af37] transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-center mb-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                                    ))}
                                </div>
                                <CardTitle className="font-mystic text-lg text-[#d4af37] text-center">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-body text-gray-300 text-sm text-center italic">&quot;{item.text}&quot;</p>
                                <p className="font-mystic text-[#d4af37] text-xs text-center mt-4 tracking-widest uppercase">- {item.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://www.instagram.com/stories/highlights/17947659190522664/" className="text-[#d4af37] hover:text-white border-b border-[#d4af37] hover:border-white transition-all pb-1 font-mystic text-sm tracking-widest uppercase">
                        Ver mais depoimentos no Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}

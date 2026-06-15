import { Leaf, Sparkles, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: Leaf,
    title: "Tratamientos a tu medida",
    description:
      "Cada protocolo se adapta a tu piel, tu cuerpo y tus objetivos. Nada de plantillas genéricas.",
  },
  {
    icon: Sparkles,
    title: "Tecnología y productos premium",
    description:
      "Trabajamos solo con equipos profesionales y marcas de alta gama para garantizar resultados.",
  },
  {
    icon: BadgeCheck,
    title: "Equipo experto y cercano",
    description:
      "Profesionales formados y especializados que te acompañan en cada paso de tu cuidado.",
  },
];

export default function Pillars() {
  return (
    <section className="border-y border-ink/5 bg-cream-dark/60">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pine/10 text-pine">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-ink">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/65">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

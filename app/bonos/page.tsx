import type { Metadata } from "next";
import Bonuses from "@/components/Bonuses";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Bonos con descuento",
  description:
    "Bonos de 5, 8 y 10 sesiones con hasta un 20% de descuento, sin fecha de caducidad. Válidos para cualquier tratamiento de Sandra Vera Estètic en Barcelona.",
  alternates: {
    canonical: "/bonos",
  },
};

export default function BonosPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pt-16 lg:px-10 lg:pt-24">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
              Cuidado continuado
            </span>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Ahorra con nuestros bonos
            </h1>
            <p className="mt-4 text-ink/65">
              Cuanto más cuidas de ti, más ahorras. Nuestros bonos no caducan
              y son válidos para cualquier tratamiento del catálogo.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="mt-12">
        <Bonuses />
      </div>
    </div>
  );
}

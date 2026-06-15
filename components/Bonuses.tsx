import { Check } from "lucide-react";
import { bonuses } from "@/lib/services";
import Reveal from "./Reveal";

export default function Bonuses() {
  return (
    <section className="bg-pine py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Ahorra cuidándote
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Bonos con descuento
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">
              Sin fecha de caducidad. Válidos para cualquier tratamiento de
              nuestro catálogo, combínalos como quieras.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {bonuses.map((bono, i) => (
            <Reveal key={bono.sessions} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  bono.popular
                    ? "border-gold bg-cream text-ink shadow-2xl shadow-gold/20 sm:-translate-y-4"
                    : "border-cream/15 bg-cream/5"
                }`}
              >
                {bono.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                    Más popular
                  </span>
                )}

                <h3
                  className={`font-display text-2xl ${
                    bono.popular ? "text-ink" : "text-cream"
                  }`}
                >
                  {bono.title}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`font-display text-5xl ${
                      bono.popular ? "text-pine" : "text-gold"
                    }`}
                  >
                    -{bono.discount}%
                  </span>
                  <span
                    className={
                      bono.popular ? "text-sm text-ink/60" : "text-sm text-cream/60"
                    }
                  >
                    de descuento
                  </span>
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    bono.popular ? "text-ink/65" : "text-cream/70"
                  }`}
                >
                  {bono.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${bono.popular ? "text-pine" : "text-gold"}`} />
                    Válido para cualquier tratamiento
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${bono.popular ? "text-pine" : "text-gold"}`} />
                    Sin fecha de caducidad
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${bono.popular ? "text-pine" : "text-gold"}`} />
                    {bono.highlight}
                  </li>
                </ul>

                <a
                  href={`https://wa.me/34618000456?text=${encodeURIComponent(
                    `Hola, me gustaría información sobre el ${bono.title} con ${bono.discount}% de descuento`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center rounded-full py-3.5 text-sm font-semibold transition-colors ${
                    bono.popular
                      ? "bg-pine text-cream hover:bg-ink"
                      : "bg-cream text-ink hover:bg-gold"
                  }`}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

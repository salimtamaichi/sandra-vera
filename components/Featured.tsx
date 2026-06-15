import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { services } from "@/lib/services";
import Reveal from "./Reveal";

export default function Featured() {
  const featured = services.filter((s) => s.featured);

  return (
    <section id="tratamientos-destacados" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
              Más solicitados
            </span>
            <h2 className="mt-3 max-w-lg font-display text-4xl leading-tight text-ink sm:text-5xl">
              Los tratamientos favoritos de nuestras clientas
            </h2>
          </div>
          <Link
            href="/tratamientos"
            className="group inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-pine"
          >
            Ver los 45 tratamientos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((service, i) => (
          <Reveal key={service.id} delay={i * 80}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-pine p-6 text-cream transition-transform hover:-translate-y-1">
              <div>
                <span className="inline-block rounded-full bg-cream/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  {service.category}
                </span>
                <h3 className="mt-4 font-display text-xl leading-snug">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-cream/15 pt-4">
                <div>
                  <p className="font-display text-2xl">
                    {service.price === 0 ? "Gratis" : `${service.price}€`}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-cream/60">
                    <Clock className="h-3 w-3" />
                    {service.duration} min
                  </p>
                </div>
                <a
                  href={`https://wa.me/34618000456?text=${encodeURIComponent(
                    `Hola, me gustaría reservar cita para: ${service.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cream px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-gold"
                >
                  Reservar
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import { reviews } from "@/lib/services";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <Reveal>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Opiniones reales
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Lo que dicen nuestras clientas
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="font-display text-4xl text-ink">4.8</span>
            <div>
              <div className="flex gap-0.5 text-terracotta">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-ink/50">Basado en 127 reseñas de Google</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review, i) => (
          <Reveal key={review.name} delay={i * 80}>
            <div className="flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pine font-display text-sm text-cream">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-ink/45">{review.time}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5 text-terracotta">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {review.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <a
            href="https://www.google.com/search?q=Estetic.pro+Centro+de+Estética+Deportiva+Barcelona+reseñas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-pine underline-offset-4 hover:underline"
          >
            Ver todas las reseñas en Google →
          </a>
        </div>
      </Reveal>
    </section>
  );
}

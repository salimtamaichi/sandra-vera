import Link from "next/link";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-noise">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />
      <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-pine/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:px-10 lg:pt-20 lg:pb-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-pine/15 bg-cream-dark/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pine">
            <MapPin className="h-3.5 w-3.5" />
            Calle Entença 134, Barcelona
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            El ritual de
            <br />
            <span className="italic text-pine">cuidarte</span>, sin
            <br />
            prisas.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            Tratamientos faciales, corporales y masajes terapéuticos
            diseñados a tu medida. Más de 45 servicios, profesionales
            expertos y una valoración de 4.8★ en Google.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/34618000456?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-pine px-7 py-4 text-sm font-semibold text-cream transition-all hover:bg-ink"
            >
              Reservar cita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/tratamientos"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
            >
              Ver tratamientos
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-ink/60">
            <div>
              <span className="font-display text-2xl text-ink">45+</span>
              <p>tratamientos disponibles</p>
            </div>
            <div>
              <span className="font-display text-2xl text-ink">4.8★</span>
              <p>127 reseñas en Google</p>
            </div>
            <div>
              <span className="font-display text-2xl text-ink">10+</span>
              <p>años de experiencia</p>
            </div>
          </div>
        </div>

        {/* Signature element: tarjeta de cita interactiva visual */}
        <div className="relative lg:justify-self-end">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-pine shadow-2xl shadow-pine/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(184,155,110,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,rgba(201,123,90,0.25),transparent_55%)]" />

            <div className="relative flex h-full flex-col justify-between p-8 text-cream">
              <div className="flex items-center justify-between">
                <Sparkles className="h-6 w-6 text-gold" />
                <span className="font-display text-sm uppercase tracking-[0.25em] text-cream/70">
                  Diagnóstico
                </span>
              </div>

              <div>
                <p className="font-display text-3xl italic leading-tight">
                  &ldquo;¿Por dónde empiezo?&rdquo;
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  Empieza con un diagnóstico facial o corporal{" "}
                  <span className="font-semibold text-gold">gratuito</span>{" "}
                  y diseñamos juntas tu plan de tratamientos ideal.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Diagnóstico Facial", time: "30 min", price: "Gratis" },
                  { label: "Diagnóstico Corporal", time: "30 min", price: "Gratis" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl bg-cream/10 px-4 py-3 backdrop-blur-sm"
                  >
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="text-xs text-cream/60">{item.time}</p>
                    </div>
                    <span className="rounded-full bg-gold/90 px-3 py-1 text-xs font-bold text-ink">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/34618000456?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20diagn%C3%B3stico%20gratuito"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cream py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold"
              >
                Pedir diagnóstico gratis
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cream px-5 py-4 shadow-xl sm:block">
            <p className="font-display text-3xl text-pine">4.8</p>
            <div className="mt-1 flex gap-0.5 text-terracotta">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <p className="mt-1 text-xs text-ink/50">127 reseñas Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Phone, Clock as ClockIcon } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
              Visítanos
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Tu momento empieza en Entença 134
            </h2>
            <p className="mt-4 max-w-md text-ink/65">
              Reserva tu cita en segundos por WhatsApp o pásate por el centro.
              Te esperamos en el corazón de Barcelona.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine/10 text-pine">
                  <MapPin className="h-4 w-4" />
                </span>
                <a
                  href="https://maps.google.com/?q=Calle+Entença+134,+08015+Barcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pine"
                >
                  Calle Entença 134, 08015 Barcelona
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine/10 text-pine">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+34618000456" className="hover:text-pine">
                  +34 618 000 456
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine/10 text-pine">
                  <ClockIcon className="h-4 w-4" />
                </span>
                <span>Lun–Vie 10:00–20:00 · Sáb 10:00–14:00</span>
              </div>
            </div>

            <a
              href="https://wa.me/34618000456?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-pine px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-ink"
            >
              Reservar cita por WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <iframe
              title="Mapa Sandra Vera Estètic - Calle Entença 134, Barcelona"
              src="https://www.google.com/maps?q=Calle+Entença+134,+08015+Barcelona&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

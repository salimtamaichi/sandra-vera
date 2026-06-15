import type { Metadata } from "next";
import { MapPin, Phone, Clock as ClockIcon, MessageCircle, Camera } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Sandra Vera Estètic en Calle Entença 134, Barcelona. Reserva tu cita por WhatsApp o teléfono.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Estamos aquí
          </span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Hablemos de tu próxima cita
          </h1>
          <p className="mt-4 text-ink/65">
            La forma más rápida de reservar es por WhatsApp. También puedes
            llamarnos o visitarnos directamente en el centro.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            <a
              href="https://wa.me/34618000456?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-6 transition-colors hover:border-pine/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-ink">WhatsApp</p>
                <p className="text-sm text-ink/60">+34 618 000 456 — respuesta rápida</p>
              </div>
            </a>

            <a
              href="tel:+34618000456"
              className="flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-6 transition-colors hover:border-pine/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-ink">Llamada</p>
                <p className="text-sm text-ink/60">+34 618 000 456</p>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Calle+Entença+134,+08015+Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-6 transition-colors hover:border-pine/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-ink">Dirección</p>
                <p className="text-sm text-ink/60">Calle Entença 134, 08015 Barcelona</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-ink">Horario</p>
                <p className="text-sm text-ink/60">Lun–Vie 10:00–20:00 · Sáb 10:00–14:00</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/estetic_pro_bcn/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-6 transition-colors hover:border-pine/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <Camera className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-ink">Camera</p>
                <p className="text-sm text-ink/60">@estetic_pro_bcn</p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="aspect-square overflow-hidden rounded-3xl shadow-xl lg:aspect-auto lg:h-full">
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
    </div>
  );
}

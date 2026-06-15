import Link from "next/link";
import { Camera, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <span className="font-display text-2xl text-cream">
            Sandra Vera <span className="text-terracotta-light">Estètic</span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
            Centro de estética en Barcelona especializado en tratamientos
            faciales, corporales y masajes terapéuticos. Tu bienestar,
            cuidado por profesionales.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/estetic_pro_bcn/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Camera"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-terracotta hover:text-terracotta-light"
            >
              <Camera className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@estetic.pro.by.sa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-xs font-bold transition-colors hover:border-terracotta hover:text-terracotta-light"
            >
              TT
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-cream/50">
            Navegación
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/" className="hover:text-terracotta-light">Inicio</Link></li>
            <li><Link href="/tratamientos" className="hover:text-terracotta-light">Tratamientos</Link></li>
            <li><Link href="/bonos" className="hover:text-terracotta-light">Bonos</Link></li>
            <li><Link href="/contacto" className="hover:text-terracotta-light">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-cream/50">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-light" />
              <a
                href="https://maps.google.com/?q=Calle+Entença+134,+08015+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta-light"
              >
                Calle Entença 134, 08015 Barcelona
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-terracotta-light" />
              <a href="tel:+34618000456" className="hover:text-terracotta-light">
                +34 618 000 456
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-terracotta-light" />
              <a
                href="https://wa.me/34618000456"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta-light"
              >
                Escríbenos por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Sandra Vera Estètic. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/aviso-legal" className="hover:text-cream/70">Aviso legal</Link>
            <Link href="/politica-privacidad" className="hover:text-cream/70">Privacidad</Link>
            <Link href="/politica-cookies" className="hover:text-cream/70">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

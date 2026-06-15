import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <span className="font-display text-7xl text-pine">404</span>
      <h1 className="mt-4 font-display text-3xl text-ink">
        Esta página se ha tomado un descanso
      </h1>
      <p className="mt-3 text-ink/65">
        Puede que el enlace esté roto o que la página ya no exista. Vuelve al
        inicio o consulta nuestros tratamientos.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink"
        >
          Volver al inicio
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/tratamientos"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
        >
          Ver tratamientos
        </Link>
      </div>
    </div>
  );
}

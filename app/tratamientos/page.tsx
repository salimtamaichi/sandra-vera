import type { Metadata } from "next";
import TreatmentCatalog from "@/components/TreatmentCatalog";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tratamientos",
  description:
    "Explora los más de 45 tratamientos faciales, corporales y masajes de Sandra Vera Estètic en Barcelona. Filtra por categoría y reserva por WhatsApp.",
  alternates: {
    canonical: "/tratamientos",
  },
};

export default function TratamientosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Catálogo completo
          </span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Encuentra tu tratamiento ideal
          </h1>
          <p className="mt-4 text-ink/65">
            Busca por nombre o filtra por categoría. Todos los tratamientos se
            reservan directamente por WhatsApp en un solo clic.
          </p>
        </div>
      </Reveal>

      <div className="mt-10">
        <TreatmentCatalog />
      </div>
    </div>
  );
}

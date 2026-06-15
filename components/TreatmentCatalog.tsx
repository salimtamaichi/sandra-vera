"use client";

import { useMemo, useState } from "react";
import { Search, Clock, ArrowUpRight } from "lucide-react";
import { services, categories, type Category } from "@/lib/services";

const waLink = (name: string) =>
  `https://wa.me/34618000456?text=${encodeURIComponent(
    `Hola, me gustaría reservar cita para: ${name}`
  )}`;

export default function TreatmentCatalog({
  limit,
}: {
  limit?: number;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "Todos">("Todos");

  const filtered = useMemo(() => {
    let list = services;
    if (category !== "Todos") {
      list = list.filter((s) => s.category === category);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(q));
    }
    return limit ? list.slice(0, limit) : list;
  }, [query, category, limit]);

  return (
    <div>
      {!limit && (
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar tratamiento…"
              aria-label="Buscar tratamiento"
              className="w-full rounded-full border border-ink/10 bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-pine"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("Todos")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                category === "Todos"
                  ? "bg-pine text-cream"
                  : "bg-white text-ink/70 hover:bg-cream-dark"
              }`}
            >
              Todos
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  category === c
                    ? "bg-pine text-cream"
                    : "bg-white text-ink/70 hover:bg-cream-dark"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-ink/15 px-8 py-16 text-center">
          <p className="font-display text-xl text-ink">
            No encontramos ningún tratamiento con ese nombre
          </p>
          <p className="mt-2 text-sm text-ink/60">
            Prueba con otra palabra o consulta todas nuestras categorías por
            WhatsApp.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-3xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-1 hover:border-pine/30 hover:shadow-lg hover:shadow-pine/5"
            >
              <div>
                <span className="inline-block rounded-full bg-cream-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-pine">
                  {service.category}
                </span>
                <h3 className="mt-3 font-display text-lg leading-snug text-ink">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4">
                <div>
                  <p className="font-display text-xl text-pine">
                    {service.price === 0 ? "Gratis" : `${service.price}€`}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-ink/50">
                    <Clock className="h-3 w-3" />
                    {service.duration} min
                  </p>
                </div>
                <a
                  href={waLink(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cream-dark px-4 py-2 text-xs font-semibold text-ink transition-colors group-hover:bg-pine group-hover:text-cream"
                >
                  Reservar
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

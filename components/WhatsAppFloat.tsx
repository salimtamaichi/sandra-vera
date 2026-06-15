"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34618000456?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-pine text-cream shadow-lg shadow-pine/30 transition-transform hover:scale-110 hover:bg-pine-light"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-75" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-terracotta" />
      </span>
    </a>
  );
}

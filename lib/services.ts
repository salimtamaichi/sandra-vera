export type Category =
  | "Faciales"
  | "Corporales"
  | "Masajes"
  | "Avanzados"
  | "Diagnóstico";

export interface Service {
  id: number;
  name: string;
  price: number;
  duration: number; // minutos
  category: Category;
  description: string;
  featured?: boolean;
}

export const services: Service[] = [
  { id: 1, name: "Masaje Facial Kobido", price: 50, duration: 60, category: "Faciales", description: "Técnica japonesa de lifting facial manual que tonifica, drena y reafirma la piel del rostro.", featured: true },
  { id: 2, name: "Masaje piernas cansadas + presoterapia", price: 45, duration: 60, category: "Corporales", description: "Combinación de drenaje manual y presoterapia para activar la circulación y aliviar la pesadez." },
  { id: 3, name: "Masaje descontracturante 30 min", price: 35, duration: 30, category: "Masajes", description: "Sesión enfocada en liberar tensión muscular puntual en cuello, espalda u hombros." },
  { id: 4, name: "Masaje descontracturante 1h", price: 55, duration: 60, category: "Masajes", description: "Tratamiento completo de espalda para liberar contracturas profundas y mejorar la movilidad." },
  { id: 5, name: "Masaje Clásico Relajante 30 min", price: 35, duration: 30, category: "Masajes", description: "Masaje sueco de relajación general para reducir el estrés y la tensión acumulada." },
  { id: 6, name: "Masajes de piernas cansadas + presoterapia", price: 45, duration: 60, category: "Corporales", description: "Drenaje y presoterapia combinados para piernas ligeras y descansadas." },
  { id: 7, name: "Masaje Clásico Relajante 1h", price: 50, duration: 60, category: "Masajes", description: "Una hora de relajación profunda con técnicas suecas de cuerpo completo.", featured: true },
  { id: 8, name: "Masaje Linfático 30 min", price: 38, duration: 30, category: "Corporales", description: "Drenaje linfático manual para reducir retención de líquidos y desintoxicar el organismo." },
  { id: 9, name: "Masaje Linfático 1h", price: 55, duration: 60, category: "Corporales", description: "Sesión completa de drenaje linfático para todo el cuerpo." },
  { id: 10, name: "Masaje deportivo 30 min", price: 38, duration: 30, category: "Masajes", description: "Técnica orientada a la recuperación muscular antes o después del ejercicio." },
  { id: 11, name: "Masaje deportivo 1h", price: 65, duration: 60, category: "Masajes", description: "Trabajo profundo en grupos musculares clave para deportistas y recuperación activa." },
  { id: 12, name: "Masaje reductor abdomen + maderoterapia", price: 40, duration: 45, category: "Corporales", description: "Combinación de maderoterapia y masaje reductor para modelar la zona abdominal." },
  { id: 13, name: "Masaje reductor + presoterapia", price: 60, duration: 60, category: "Corporales", description: "Tratamiento reductor potenciado con presoterapia para resultados más visibles." },
  { id: 14, name: "Masaje reductor abdomen, glúteos y piernas", price: 60, duration: 60, category: "Corporales", description: "Tratamiento integral de modelado corporal en las zonas de mayor preocupación." },
  { id: 15, name: "Masaje Terapéutico 30 min", price: 38, duration: 30, category: "Masajes", description: "Sesión terapéutica enfocada en una zona específica de dolor o tensión." },
  { id: 16, name: "Masaje Terapéutico 1h", price: 65, duration: 60, category: "Masajes", description: "Tratamiento terapéutico completo para aliviar dolores crónicos y mejorar el bienestar general." },
  { id: 17, name: "Depilación Cejas Hombres", price: 20, duration: 20, category: "Faciales", description: "Diseño y depilación de cejas para un acabado natural y definido." },
  { id: 18, name: "Depilación Cejas con Hilo", price: 15, duration: 20, category: "Faciales", description: "Técnica milenaria de depilación con hilo, precisa y suave con la piel." },
  { id: 19, name: "Maderoterapia reductora + presoterapia", price: 55, duration: 60, category: "Corporales", description: "Maderoterapia y presoterapia combinadas para potenciar la reducción de medidas." },
  { id: 20, name: "Maderoterapia reductora", price: 55, duration: 60, category: "Corporales", description: "Masaje con instrumentos de madera que estimula la circulación y reduce volumen." },
  { id: 21, name: "Radiofrecuencia Corporal + Masaje reductor/reafirmante", price: 65, duration: 60, category: "Avanzados", description: "Radiofrecuencia combinada con masaje para tensar y reafirmar la piel del cuerpo." },
  { id: 22, name: "Masaje anticelulítico + presoterapia", price: 50, duration: 60, category: "Corporales", description: "Tratamiento específico contra la celulitis combinando masaje manual y presoterapia." },
  { id: 23, name: "Presoterapia", price: 30, duration: 30, category: "Corporales", description: "Terapia de compresión secuencial que mejora el retorno venoso y linfático." },
  { id: 24, name: "Mesoterapia Corporal Localizada (1 zona)", price: 60, duration: 60, category: "Avanzados", description: "Microinyecciones localizadas para tratar zonas concretas de grasa o flacidez." },
  { id: 25, name: "Radiofrecuencia + Mesoterapia virtual 30 min", price: 40, duration: 30, category: "Avanzados", description: "Combinación no invasiva de radiofrecuencia y mesoterapia virtual." },
  { id: 26, name: "Radiofrecuencia + Mesoterapia virtual 1h15", price: 60, duration: 75, category: "Avanzados", description: "Sesión extendida de radiofrecuencia y mesoterapia virtual para tratamientos más completos." },
  { id: 27, name: "Maderoterapia abdomen y piernas", price: 50, duration: 60, category: "Corporales", description: "Maderoterapia enfocada en remodelar abdomen y piernas." },
  { id: 28, name: "Polinucleótidos inductores de colágeno", price: 220, duration: 60, category: "Avanzados", description: "Tratamiento de medicina estética que estimula la producción natural de colágeno." },
  { id: 29, name: "Polinucleótidos contorno de ojos (anti ojeras)", price: 220, duration: 60, category: "Avanzados", description: "Tratamiento específico para reducir ojeras y rejuvenecer el contorno de ojos.", featured: true },
  { id: 30, name: "Plasma frío efecto lifting", price: 85, duration: 60, category: "Avanzados", description: "Tecnología de plasma frío para un efecto lifting inmediato sin agujas." },
  { id: 31, name: "Tratamiento exosomas naturales", price: 150, duration: 60, category: "Avanzados", description: "Tratamiento de regeneración celular con exosomas naturales para piel más joven." },
  { id: 32, name: "Limpieza facial personalizada", price: 60, duration: 60, category: "Faciales", description: "Limpieza profunda adaptada a tu tipo de piel y sus necesidades." },
  { id: 33, name: "Hilos de Colágeno", price: 80, duration: 60, category: "Avanzados", description: "Estimulación de colágeno mediante hilos para mejorar firmeza y textura de la piel." },
  { id: 34, name: "Tratamiento despigmentante", price: 60, duration: 60, category: "Faciales", description: "Tratamiento para unificar el tono de la piel y reducir manchas." },
  { id: 35, name: "Radiofrecuencia Fraccionada", price: 120, duration: 60, category: "Avanzados", description: "Radiofrecuencia de alta precisión para regenerar la piel y mejorar su textura." },
  { id: 36, name: "Lip Hydration - Hidratación labial", price: 130, duration: 60, category: "Faciales", description: "Tratamiento de hidratación profunda para labios más definidos y nutridos." },
  { id: 37, name: "Tratamiento Facial Hombre", price: 60, duration: 60, category: "Faciales", description: "Tratamiento facial diseñado específicamente para las necesidades de la piel masculina." },
  { id: 38, name: "Tratamiento Facial Células Madre", price: 150, duration: 90, category: "Avanzados", description: "Tratamiento facial avanzado de regeneración con células madre para piel renovada." },
  { id: 39, name: "Peeling químico efecto Botox", price: 60, duration: 60, category: "Faciales", description: "Peeling químico que suaviza líneas de expresión con efecto similar al botox." },
  { id: 40, name: "Limpieza facial con vapor hombre + masaje craneal", price: 60, duration: 60, category: "Faciales", description: "Limpieza facial con vapor combinada con un relajante masaje craneal." },
  { id: 41, name: "Radiofrecuencia Facial + oxigenación", price: 50, duration: 60, category: "Avanzados", description: "Radiofrecuencia facial combinada con oxigenación para piel luminosa y firme." },
  { id: 42, name: "Dermapen + limpieza profunda", price: 80, duration: 90, category: "Avanzados", description: "Microagujas con dermapen junto a limpieza profunda para renovar la textura de la piel." },
  { id: 43, name: "Tratamiento Acné", price: 60, duration: 60, category: "Faciales", description: "Protocolo específico para controlar el acné y mejorar el aspecto de la piel." },
  { id: 44, name: "Tratamiento Facial Anti-Age – Peeling Químico con Efecto Botox", price: 60, duration: 60, category: "Faciales", description: "Tratamiento antienvejecimiento con peeling químico de efecto botox." },
  { id: 45, name: "Radiofrecuencia Fraccionada", price: 120, duration: 60, category: "Avanzados", description: "Tratamiento de radiofrecuencia fraccionada para renovación de la piel." },
  { id: 46, name: "Radiofrecuencia Fraccionada", price: 120, duration: 60, category: "Avanzados", description: "Sesión de radiofrecuencia fraccionada para mejorar firmeza y textura cutánea." },
  { id: 47, name: "Varios / Ajuste Manual", price: 0, duration: 30, category: "Diagnóstico", description: "Sesión de ajuste o seguimiento personalizado según necesidades." },
  { id: 48, name: "Diagnóstico Facial", price: 0, duration: 30, category: "Diagnóstico", description: "Valoración inicial gratuita de tu piel para diseñar tu plan de tratamiento ideal.", featured: true },
  { id: 49, name: "Diagnóstico Corporal", price: 0, duration: 30, category: "Diagnóstico", description: "Valoración corporal gratuita para definir el tratamiento más adecuado para ti." },
  { id: 50, name: "Armonización Facial Natural", price: 280, duration: 90, category: "Avanzados", description: "Tratamiento integral de armonización facial con técnicas naturales no invasivas." },
  { id: 51, name: "Terapia intravenosa de vitaminas", price: 180, duration: 60, category: "Avanzados", description: "Sueroterapia con vitaminas para revitalizar el organismo desde dentro." },
];

export const categories: Category[] = ["Faciales", "Corporales", "Masajes", "Avanzados", "Diagnóstico"];

export const bonuses = [
  {
    sessions: 5,
    discount: 10,
    title: "Bono 5 sesiones",
    description: "Ideal para probar tus tratamientos favoritos y empezar a ver resultados.",
    highlight: "Sin caducidad",
  },
  {
    sessions: 8,
    discount: 15,
    title: "Bono 8 sesiones",
    description: "La opción favorita de nuestras clientas. Mejor equilibrio entre ahorro y constancia.",
    highlight: "Más popular",
    popular: true,
  },
  {
    sessions: 10,
    discount: 20,
    title: "Bono 10 sesiones",
    description: "El máximo ahorro para quienes buscan resultados duraderos y un cuidado continuado.",
    highlight: "Mayor ahorro",
  },
];

export const reviews = [
  {
    name: "María González",
    rating: 5,
    time: "Hace 2 semanas",
    text: "Centro de estética muy profesional. Noté mejora real en mi piel tras los tratamientos faciales. Totalmente recomendable.",
  },
  {
    name: "Carlos Martín",
    rating: 5,
    time: "Hace 1 mes",
    text: "Primera vez en un centro de estética y la experiencia fue excelente. Me explicaron todo el proceso y los resultados superaron lo esperado.",
  },
  {
    name: "Ana López",
    rating: 5,
    time: "Hace 3 semanas",
    text: "Llevo años viniendo y siempre salgo encantada. Productos y tratamientos de gran calidad, ambiente muy relajante.",
  },
  {
    name: "Laura Fernández",
    rating: 5,
    time: "Hace 1 semana",
    text: "Los masajes post-entrenamiento son increíbles para la recuperación. Personal muy cualificado e instalaciones impecables.",
  },
];

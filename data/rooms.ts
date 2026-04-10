export interface RoomSpec {
  icon: string;
  label: string;
  value: string;
}

export interface RoomTag {
  icon: string;
  text: string;
}

export interface Amenity {
  icon: string;
  name: string;
}

export interface Room {
  slug: string;
  category: "habitaciones" | "privadas" | "studios" | "aparts";
  number: string;
  eyebrowList: string;
  eyebrowDetail: string;
  name: string;
  nameHtml: string;
  titleHtml: string;
  descList: string;
  descDetail: string;
  headerDesc: string;
  image: string;
  tags: RoomTag[];
  specs: RoomSpec[];
  amenities: Amenity[];
  activeNav: string;
}

export interface CategoryPage {
  slug: string;
  title: string;
  metaDesc: string;
  eyebrow: string;
  h1Html: string;
  headerDesc: string;
  headerImage: string;
  ctaH2Html: string;
  ctaDesc: string;
  ctaBtnText: string;
  activeNav: string;
  footerCol2Title: string;
  footerCol2Links: { label: string; href: string }[];
}

const CDN = "https://d1ofesossdj49a.cloudfront.net/sw_3123/TN";

// ─── Amenity presets ───
const sharedAmenities: Amenity[] = [
  { icon: "fa-snowflake", name: "Aire Acondicionado" },
  { icon: "fa-tshirt", name: "Lavandería" },
  { icon: "fa-square", name: "Toallas" },
  { icon: "fa-shower", name: "Ducha" },
  { icon: "fa-broom", name: "Servicio de Mucama" },
  { icon: "fa-wifi", name: "Wi-Fi Internet" },
  { icon: "fa-key", name: "Cerradura Electrónica" },
  { icon: "fa-utensils", name: "Cocina" },
  { icon: "fa-pump-soap", name: "Amenities" },
  { icon: "fa-mug-saucer", name: "Desayuno" },
];

const suiteAmenities: Amenity[] = [
  { icon: "fa-snowflake", name: "Aire Acondicionado" },
  { icon: "fa-tshirt", name: "Lavandería" },
  { icon: "fa-square", name: "Toallas" },
  { icon: "fa-shower", name: "Ducha" },
  { icon: "fa-broom", name: "Servicio de Mucama" },
  { icon: "fa-wifi", name: "Wi-Fi Internet" },
  { icon: "fa-key", name: "Cerradura Electrónica" },
  { icon: "fa-utensils", name: "Cocina" },
  { icon: "fa-pump-soap", name: "Amenities" },
  { icon: "fa-fire", name: "Parrilla Individual" },
  { icon: "fa-mug-saucer", name: "Desayuno" },
];

const suiteStandarAmenities: Amenity[] = [
  { icon: "fa-snowflake", name: "Aire Acondicionado" },
  { icon: "fa-tshirt", name: "Lavandería" },
  { icon: "fa-square", name: "Toallas" },
  { icon: "fa-water-ladder", name: "Piscina" },
  { icon: "fa-shower", name: "Ducha" },
  { icon: "fa-broom", name: "Servicio de Mucama" },
  { icon: "fa-wifi", name: "Wi-Fi Internet" },
  { icon: "fa-key", name: "Cerradura Electrónica" },
  { icon: "fa-utensils", name: "Cocina" },
  { icon: "fa-pump-soap", name: "Amenities" },
  { icon: "fa-fire", name: "Parrilla Individual" },
  { icon: "fa-mug-saucer", name: "Desayuno" },
];

const studioAmenities: Amenity[] = [
  { icon: "fa-snowflake", name: "Aire Acondicionado" },
  { icon: "fa-tshirt", name: "Lavandería" },
  { icon: "fa-square", name: "Toallas" },
  { icon: "fa-tv", name: "LED TV" },
  { icon: "fa-shower", name: "Ducha" },
  { icon: "fa-broom", name: "Servicio de Mucama" },
  { icon: "fa-box", name: "Frigobar" },
  { icon: "fa-wifi", name: "Wi-Fi Internet" },
  { icon: "fa-key", name: "Cerradura Electrónica" },
  { icon: "fa-utensils", name: "Cocina" },
  { icon: "fa-pump-soap", name: "Amenities" },
  { icon: "fa-fire", name: "Parrilla Individual" },
  { icon: "fa-mug-saucer", name: "Desayuno" },
];

const apartAmenities: Amenity[] = [
  { icon: "fa-snowflake", name: "Aire Acondicionado" },
  { icon: "fa-square", name: "Toallas" },
  { icon: "fa-shower", name: "Ducha" },
  { icon: "fa-broom", name: "Servicio de Mucama" },
  { icon: "fa-wifi", name: "Wi-Fi Internet" },
  { icon: "fa-key", name: "Cerradura Electrónica" },
  { icon: "fa-utensils", name: "Cocina" },
  { icon: "fa-pump-soap", name: "Amenities" },
  { icon: "fa-fire", name: "Parrilla Individual" },
  { icon: "fa-mug-saucer", name: "Desayuno" },
];

const apartDeluxeAmenities: Amenity[] = [
  { icon: "fa-snowflake", name: "Aire Acondicionado" },
  { icon: "fa-square", name: "Toallas" },
  { icon: "fa-shower", name: "Ducha" },
  { icon: "fa-broom", name: "Servicio de Mucama" },
  { icon: "fa-wifi", name: "Wi-Fi Internet" },
  { icon: "fa-key", name: "Cerradura Electrónica" },
  { icon: "fa-utensils", name: "Cocina" },
  { icon: "fa-pump-soap", name: "Amenities" },
  { icon: "fa-fire", name: "Parrilla Individual" },
  { icon: "fa-mug-saucer", name: "Desayuno" },
];

// ─── ALL ROOMS ───
export const rooms: Room[] = [
  // ── Habitaciones ──
  {
    slug: "tierra",
    category: "habitaciones",
    number: "N° 01",
    eyebrowList: "Compartida · 6 personas",
    eyebrowDetail: "Compartida · 6 personas",
    name: "Tierra",
    nameHtml: "Tierra",
    titleHtml: 'Tu refugio<br>en <em>Cofico.</em>',
    descList: "Habitación compartida mixta de 6 personas. Cómoda y equilibrada, con 3 literas equipadas con luz individual, enchufe, apoyo personal y cortina roller para mayor privacidad. Incluye lockers amplios con candado y baño compartido.",
    descDetail: "Habitación compartida mixta de 6 personas. Cómoda y equilibrada, ideal para una experiencia compartida con confort. Dispone de 3 camas tipo litera, cada una con luz individual, enchufe, espacio de apoyo y cortina roller que brinda mayor privacidad. Incluye lockers amplios con candado donde entra una valija y baño compartido.",
    headerDesc: "Cómoda y equilibrada. Una compartida mixta de 6 personas con todo lo que necesitás para descansar bien.",
    image: `${CDN}/11_538508.jpg`,
    tags: [
      { icon: "fa-bed", text: "3 literas" },
      { icon: "fa-lock", text: "Lockers" },
      { icon: "fa-eye-slash", text: "Cortina roller" },
    ],
    specs: [
      { icon: "fa-users", label: "Capacidad", value: "6 personas" },
      { icon: "fa-bed", label: "Camas", value: "3 literas" },
      { icon: "fa-venus-mars", label: "Tipo", value: "Mixta" },
      { icon: "fa-bath", label: "Baño", value: "Compartido" },
    ],
    amenities: sharedAmenities,
    activeNav: "Compartidas",
  },
  {
    slug: "agua",
    category: "habitaciones",
    number: "N° 02",
    eyebrowList: "Compartida · 8 personas",
    eyebrowDetail: "Compartida · 8 personas",
    name: "Agua",
    nameHtml: "Agua",
    titleHtml: 'Un espacio<br>para <em>compartir.</em>',
    descList: "Habitación compartida mixta de 8 personas. Un espacio dinámico pensado para viajeros que disfrutan compartir. Ofrece 4 literas con luz individual, enchufe, apoyo personal y cortina roller. Lockers de gran tamaño y baño compartido.",
    descDetail: "Habitación compartida mixta de 8 personas. Un espacio dinámico pensado para viajeros que disfrutan compartir. Ofrece 4 camas tipo litera con luz individual, enchufe, apoyo personal y cortina roller para mayor intimidad. Cuenta con lockers de gran tamaño con candado y baño compartido.",
    headerDesc: "Dinámica y social. Una compartida mixta de 8 personas pensada para los que disfrutan compartir el camino.",
    image: `${CDN}/12_938812.jpg`,
    tags: [
      { icon: "fa-bed", text: "4 literas" },
      { icon: "fa-lock", text: "Lockers XL" },
      { icon: "fa-eye-slash", text: "Cortina roller" },
    ],
    specs: [
      { icon: "fa-users", label: "Capacidad", value: "8 personas" },
      { icon: "fa-bed", label: "Camas", value: "4 literas" },
      { icon: "fa-venus-mars", label: "Tipo", value: "Mixta" },
      { icon: "fa-bath", label: "Baño", value: "Compartido" },
    ],
    amenities: [
      { icon: "fa-snowflake", name: "Aire Acondicionado" },
      { icon: "fa-tshirt", name: "Lavandería" },
      { icon: "fa-shower", name: "Ducha" },
      { icon: "fa-broom", name: "Servicio de Mucama" },
      { icon: "fa-wifi", name: "Wi-Fi Internet" },
      { icon: "fa-key", name: "Cerradura Electrónica" },
      { icon: "fa-utensils", name: "Cocina" },
      { icon: "fa-pump-soap", name: "Amenities" },
      { icon: "fa-fire", name: "Parrilla Individual" },
    ],
    activeNav: "Compartidas",
  },
  {
    slug: "fuego",
    category: "habitaciones",
    number: "N° 03",
    eyebrowList: "Compartida · 8 personas",
    eyebrowDetail: "Compartida · 8 personas",
    name: "Fuego",
    nameHtml: "Fuego",
    titleHtml: 'Energía<br>en <em>estado puro.</em>',
    descList: "Habitación compartida mixta de 8 personas. Amplia y funcional, ideal para grupos o viajeros sociales. 4 literas totalmente equipadas con luz de lectura, enchufe, espacio personal y cortina roller. Lockers amplios y baño compartido.",
    descDetail: "Habitación compartida mixta de 8 personas. Amplia y funcional, ideal para grupos o viajeros sociales. Dispone de 4 camas litera totalmente equipadas con luz de lectura, enchufe, espacio personal y cortina roller. Incluye lockers amplios con candado para equipaje y baño compartido.",
    headerDesc: "Amplia y funcional. Una compartida mixta de 8 personas, ideal para grupos y viajeros sociales.",
    image: `${CDN}/13_616848.jpg`,
    tags: [
      { icon: "fa-bed", text: "4 literas" },
      { icon: "fa-lock", text: "Lockers" },
      { icon: "fa-lightbulb", text: "Luz de lectura" },
    ],
    specs: [
      { icon: "fa-users", label: "Capacidad", value: "8 personas" },
      { icon: "fa-bed", label: "Camas", value: "4 literas" },
      { icon: "fa-venus-mars", label: "Tipo", value: "Mixta" },
      { icon: "fa-bath", label: "Baño", value: "Compartido" },
    ],
    amenities: [
      { icon: "fa-snowflake", name: "Aire Acondicionado" },
      { icon: "fa-tshirt", name: "Lavandería" },
      { icon: "fa-square", name: "Toallas" },
      { icon: "fa-shower", name: "Ducha" },
      { icon: "fa-broom", name: "Servicio de Mucama" },
      { icon: "fa-wifi", name: "Wi-Fi Internet" },
      { icon: "fa-key", name: "Cerradura Electrónica" },
      { icon: "fa-utensils", name: "Cocina" },
      { icon: "fa-pump-soap", name: "Amenities" },
      { icon: "fa-fire", name: "Parrilla Individual" },
      { icon: "fa-mug-saucer", name: "Desayuno" },
      { icon: "fa-bed", name: "Ropa de Blanco" },
    ],
    activeNav: "Compartidas",
  },
  {
    slug: "aire",
    category: "habitaciones",
    number: "N° 04",
    eyebrowList: "Flexible · 4 a 5 personas",
    eyebrowDetail: "Flexible · 4 a 5 personas",
    name: "Aire",
    nameHtml: "Aire",
    titleHtml: 'Libertad<br>para <em>elegir.</em>',
    descList: "La más flexible de nuestras compartidas. Dos literas (cuatro plazas) con opción de sumar cama marinera para configuración quíntuple. Puede reservarse como doble privada o cuádruple. Luz individual, enchufe, cortina roller, lockers amplios y baño compartido.",
    descDetail: "La más flexible de nuestras compartidas. Cuenta con dos literas (cuatro plazas) y opción de sumar cama marinera para configuración quíntuple. Puede reservarse como habitación doble privada o cuádruple. Cada cama dispone de luz individual, enchufe, espacio de apoyo, cortina roller, lockers amplios y baño compartido.",
    headerDesc: "Flexible y adaptable. De habitación doble privada a cuádruple o quíntuple, según cómo viajes.",
    image: `${CDN}/14_102705.jpg`,
    tags: [
      { icon: "fa-bed", text: "2 literas" },
      { icon: "fa-users", text: "Doble o cuádruple" },
      { icon: "fa-plus", text: "Cama marinera" },
    ],
    specs: [
      { icon: "fa-users", label: "Capacidad", value: "4 a 5 personas" },
      { icon: "fa-bed", label: "Camas", value: "2 literas + marinera" },
      { icon: "fa-shuffle", label: "Configuración", value: "Doble · Cuádruple · Quíntuple" },
      { icon: "fa-bath", label: "Baño", value: "Compartido" },
    ],
    amenities: [
      { icon: "fa-snowflake", name: "Aire Acondicionado" },
      { icon: "fa-tshirt", name: "Lavandería" },
      { icon: "fa-square", name: "Toallas" },
      { icon: "fa-shower", name: "Ducha" },
      { icon: "fa-broom", name: "Servicio de Mucama" },
      { icon: "fa-wifi", name: "Wi-Fi Internet" },
      { icon: "fa-key", name: "Cerradura Electrónica" },
      { icon: "fa-utensils", name: "Cocina" },
      { icon: "fa-pump-soap", name: "Amenities" },
      { icon: "fa-fire", name: "Parrilla Individual" },
      { icon: "fa-mug-saucer", name: "Desayuno" },
    ],
    activeNav: "Compartidas",
  },

  // ── Privadas ──
  {
    slug: "suite-matrimonial-deluxe",
    category: "privadas",
    number: "N° 01",
    eyebrowList: "Suite · Matrimonial",
    eyebrowDetail: "Suite · Matrimonial",
    name: "Matrimonial Deluxe",
    nameHtml: "Matrimonial<br>Deluxe",
    titleHtml: 'Tu espacio<br>de <em>silencio.</em>',
    descList: "Más amplia y luminosa, ofrece un entorno cómodo y relajado. Cuenta con cama matrimonial fija, ventana con luz natural, baño en suite, Smart TV y aire acondicionado para una experiencia superior.",
    descDetail: "Más amplia y luminosa, ofrece un entorno cómodo y relajado. Cuenta con cama matrimonial fija, ventana con luz natural, baño en suite, Smart TV y aire acondicionado para una experiencia superior.",
    headerDesc: "Amplia, luminosa y pensada para que la pausa sea verdaderamente una pausa.",
    image: `${CDN}/1_721041.jpg`,
    tags: [
      { icon: "fa-bed", text: "Matrimonial fija" },
      { icon: "fa-bath", text: "Baño en suite" },
      { icon: "fa-tv", text: "Smart TV" },
    ],
    specs: [
      { icon: "fa-bed", label: "Cama", value: "Matrimonial fija" },
      { icon: "fa-bath", label: "Baño", value: "En suite" },
      { icon: "fa-tv", label: "Entretenimiento", value: "Smart TV" },
      { icon: "fa-snowflake", label: "Climatización", value: "Aire acondicionado" },
    ],
    amenities: suiteAmenities,
    activeNav: "Privadas",
  },
  {
    slug: "suite-matrimonial-standar",
    category: "privadas",
    number: "N° 02",
    eyebrowList: "Suite · Matrimonial",
    eyebrowDetail: "Suite · Matrimonial",
    name: "Matrimonial Standar",
    nameHtml: "Matrimonial<br>Standar",
    titleHtml: 'Descanso<br>con <em>estilo.</em>',
    descList: "Más amplia y luminosa, ofrece un entorno cómodo y relajado. Cuenta con cama matrimonial fija, ventana con luz natural, baño en suite, Smart TV y aire acondicionado para una experiencia superior.",
    descDetail: "Más amplia y luminosa, ofrece un entorno cómodo y relajado. Cuenta con cama matrimonial fija, ventana con luz natural, baño en suite, Smart TV y aire acondicionado para una experiencia superior.",
    headerDesc: "Cómoda y luminosa, con acceso a piscina. Tu pausa perfecta en pleno Cofico.",
    image: `${CDN}/2_339246.jpg`,
    tags: [
      { icon: "fa-bed", text: "Matrimonial fija" },
      { icon: "fa-bath", text: "Baño en suite" },
      { icon: "fa-water-ladder", text: "Piscina" },
    ],
    specs: [
      { icon: "fa-bed", label: "Cama", value: "Matrimonial fija" },
      { icon: "fa-bath", label: "Baño", value: "En suite" },
      { icon: "fa-water-ladder", label: "Extra", value: "Acceso a piscina" },
      { icon: "fa-tv", label: "Entretenimiento", value: "Smart TV" },
    ],
    amenities: suiteStandarAmenities,
    activeNav: "Privadas",
  },
  {
    slug: "suite-doble-standar",
    category: "privadas",
    number: "N° 03",
    eyebrowList: "Suite · Doble",
    eyebrowDetail: "Suite · Doble",
    name: "Doble Standar",
    nameHtml: "Doble<br>Standar",
    titleHtml: 'Versátil<br>y <em>confortable.</em>',
    descList: "Versátil y confortable. Puede configurarse con dos camas twin o una cama matrimonial, adaptándose a cada huésped al momento de reserva. Dispone de baño en suite, Smart TV y aire acondicionado.",
    descDetail: "Versátil y confortable. Puede configurarse con dos camas twin o una cama matrimonial, adaptándose a cada huésped al momento de reserva. Dispone de baño en suite, Smart TV y aire acondicionado.",
    headerDesc: "Versátil y confortable. Se adapta a cómo viajes — twin o matrimonial, vos elegís.",
    image: `${CDN}/3_607803.jpg`,
    tags: [
      { icon: "fa-bed", text: "Twin o matrimonial" },
      { icon: "fa-bath", text: "Baño en suite" },
      { icon: "fa-tv", text: "Smart TV" },
    ],
    specs: [
      { icon: "fa-bed", label: "Cama", value: "Twin o matrimonial" },
      { icon: "fa-bath", label: "Baño", value: "En suite" },
      { icon: "fa-tv", label: "Entretenimiento", value: "Smart TV" },
      { icon: "fa-snowflake", label: "Climatización", value: "Aire acondicionado" },
    ],
    amenities: suiteAmenities,
    activeNav: "Privadas",
  },

  // ── Studios ──
  {
    slug: "studio-premium",
    category: "studios",
    number: "N° 01",
    eyebrowList: "Studio · Doble",
    eyebrowDetail: "Studio · Doble",
    name: "Studio Premium",
    nameHtml: "Studio<br>Premium",
    titleHtml: 'Tu propio<br><em>espacio.</em>',
    descList: "Studio doble con cocina equipada y baño privado. Independencia, comodidad y todo lo necesario para tu estadía en Cofico.",
    descDetail: "Studio doble con cocina equipada y baño privado. Independencia, comodidad y todo lo necesario para que vivas Cofico a tu ritmo.",
    headerDesc: "Studio doble con todo lo necesario para tu estadía. Independencia y comodidad en pleno Cofico.",
    image: `${CDN}/8_17387.jpg`,
    tags: [
      { icon: "fa-bed", text: "Doble" },
      { icon: "fa-utensils", text: "Cocina equipada" },
      { icon: "fa-bath", text: "Baño privado" },
    ],
    specs: [
      { icon: "fa-bed", label: "Configuración", value: "Doble" },
      { icon: "fa-utensils", label: "Cocina", value: "Equipada" },
      { icon: "fa-bath", label: "Baño", value: "Privado" },
      { icon: "fa-snowflake", label: "Climatización", value: "Aire acondicionado" },
    ],
    amenities: studioAmenities,
    activeNav: "Studios",
  },

  // ── Aparts ──
  {
    slug: "apart-deluxe",
    category: "aparts",
    number: "N° 01",
    eyebrowList: "Familiar · 2 dormitorios",
    eyebrowDetail: "Familiar · 2 dormitorios",
    name: "Apart Deluxe",
    nameHtml: "Apart<br>Deluxe",
    titleHtml: 'Espacio<br>para <em>compartir.</em>',
    descList: "Amplio y cómodo, perfecto para grupos o familias. Ofrece dos dormitorios (uno en suite), living-comedor espacioso y cocina totalmente equipada. Su balcón con asador suma un espacio ideal para compartir.",
    descDetail: "Amplio y cómodo, perfecto para grupos o familias. Ofrece dos dormitorios (uno en suite), living-comedor espacioso y cocina totalmente equipada. Su balcón con asador suma un espacio ideal para compartir.",
    headerDesc: "Espacio, suite y un balcón con asador. Pensado para compartir sin renunciar al confort.",
    image: `${CDN}/7_180057.jpg`,
    tags: [
      { icon: "fa-door-open", text: "2 dormitorios" },
      { icon: "fa-bath", text: "Suite" },
      { icon: "fa-fire", text: "Balcón con asador" },
    ],
    specs: [
      { icon: "fa-door-open", label: "Dormitorios", value: "2 (uno en suite)" },
      { icon: "fa-couch", label: "Espacios", value: "Living-comedor" },
      { icon: "fa-utensils", label: "Cocina", value: "Totalmente equipada" },
      { icon: "fa-fire", label: "Extra", value: "Balcón con asador" },
    ],
    amenities: apartDeluxeAmenities,
    activeNav: "Departamentos",
  },
  {
    slug: "apart-familiar",
    category: "aparts",
    number: "N° 02",
    eyebrowList: "Familiar · 2 dormitorios",
    eyebrowDetail: "Familiar · 2 dormitorios",
    name: "Exclusivo Apart Familiar",
    nameHtml: "Exclusivo<br>Apart Familiar",
    titleHtml: 'Amplitud<br>y <em>confort.</em>',
    descList: "Pensado para compartir en familia o con amigos, combina amplitud y funcionalidad. Cuenta con dos dormitorios, living-comedor y cocina equipada que permiten disfrutar la estadía con independencia y confort.",
    descDetail: "Pensado para compartir en familia o con amigos, combina amplitud y funcionalidad. Cuenta con dos dormitorios, living-comedor y cocina equipada que permiten disfrutar la estadía con independencia y confort.",
    headerDesc: "Amplitud y funcionalidad. Pensado para que la familia o los amigos compartan con independencia.",
    image: `${CDN}/9_936819.jpg`,
    tags: [
      { icon: "fa-door-open", text: "2 dormitorios" },
      { icon: "fa-couch", text: "Living-comedor" },
      { icon: "fa-utensils", text: "Cocina equipada" },
    ],
    specs: [
      { icon: "fa-door-open", label: "Dormitorios", value: "2 dormitorios" },
      { icon: "fa-couch", label: "Espacios", value: "Living-comedor" },
      { icon: "fa-utensils", label: "Cocina", value: "Equipada" },
      { icon: "fa-house-user", label: "Tipo", value: "Familiar" },
    ],
    amenities: apartAmenities,
    activeNav: "Departamentos",
  },
  {
    slug: "apart-premium",
    category: "aparts",
    number: "N° 03",
    eyebrowList: "Premium · Hasta 6 personas",
    eyebrowDetail: "Premium · Hasta 6 personas",
    name: "Apart Premium Flex",
    nameHtml: "Apart<br>Premium Flex",
    titleHtml: 'El más<br><em>completo.</em>',
    descList: "El más completo y versátil. Amplios ambientes, living-comedor, área de trabajo y guardado, cocina totalmente equipada y balcón privado con asador. Configurado como quíntuple, ofrece la posibilidad de sumar un sexto huésped mediante sofá cama.",
    descDetail: "El más completo y versátil. Amplios ambientes, living-comedor, área de trabajo y guardado, cocina totalmente equipada y balcón privado con asador. Ideal para familias o estadías prolongadas con máximo confort. Configurado como quíntuple, ofrece la posibilidad de sumar un sexto huésped mediante sofá cama, adaptándose con flexibilidad a diferentes necesidades de alojamiento.",
    headerDesc: "El más completo y versátil. Para familias, grupos o estadías largas que no quieren resignar nada.",
    image: `${CDN}/15_150809.jpg`,
    tags: [
      { icon: "fa-users", text: "Hasta 6 personas" },
      { icon: "fa-fire", text: "Balcón con asador" },
      { icon: "fa-laptop", text: "Área de trabajo" },
    ],
    specs: [
      { icon: "fa-users", label: "Capacidad", value: "5 + 1 (sofá cama)" },
      { icon: "fa-laptop", label: "Espacios", value: "Área de trabajo" },
      { icon: "fa-utensils", label: "Cocina", value: "Totalmente equipada" },
      { icon: "fa-fire", label: "Extra", value: "Balcón con asador" },
    ],
    amenities: apartAmenities,
    activeNav: "Departamentos",
  },
  {
    slug: "apart-select",
    category: "aparts",
    number: "N° 04",
    eyebrowList: "Urbano · 3 personas",
    eyebrowDetail: "Urbano · 3 personas",
    name: "Apart Select Triple",
    nameHtml: "Apart<br>Select Triple",
    titleHtml: 'Práctico<br>y <em>urbano.</em>',
    descList: "Práctico y confortable para estadías urbanas. Dispone de cocina integrada equipada, living-comedor y espacios bien resueltos que garantizan comodidad tanto en viajes cortos como prolongados.",
    descDetail: "Práctico y confortable para estadías urbanas. Dispone de cocina integrada equipada, living-comedor y espacios bien resueltos que garantizan comodidad tanto en viajes cortos como prolongados.",
    headerDesc: "Práctico, urbano, bien resuelto. Para escapadas cortas o estadías prolongadas con el mismo confort.",
    image: `${CDN}/16_303688.jpg`,
    tags: [
      { icon: "fa-users", text: "3 personas" },
      { icon: "fa-utensils", text: "Cocina integrada" },
      { icon: "fa-couch", text: "Living-comedor" },
    ],
    specs: [
      { icon: "fa-users", label: "Capacidad", value: "3 personas" },
      { icon: "fa-utensils", label: "Cocina", value: "Integrada equipada" },
      { icon: "fa-couch", label: "Espacios", value: "Living-comedor" },
      { icon: "fa-city", label: "Tipo", value: "Urbano" },
    ],
    amenities: apartAmenities,
    activeNav: "Departamentos",
  },
  {
    slug: "apart-family-kids",
    category: "aparts",
    number: "N° 05",
    eyebrowList: "Family · Con niños",
    eyebrowDetail: "Family · Con niños",
    name: "Apart Family Kids",
    nameHtml: "Apart<br>Family Kids",
    titleHtml: 'Para toda<br>la <em>familia.</em>',
    descList: "Ideal para familias con niños. Dispone de dos dormitorios, uno principal y otro con cama litera, especialmente pensado para los más chicos. Cocina integrada, living-comedor y un entorno práctico y acogedor.",
    descDetail: "Ideal para familias con niños. Dispone de dos dormitorios, uno principal y otro con cama litera, especialmente pensado para los más chicos. Cocina integrada, living-comedor y un entorno práctico y acogedor.",
    headerDesc: "Pensado para familias con niños. Dos dormitorios, cama litera para los más chicos y todo lo necesario.",
    image: `${CDN}/4_927059.jpg`,
    tags: [
      { icon: "fa-door-open", text: "2 dormitorios" },
      { icon: "fa-bed", text: "Cama litera" },
      { icon: "fa-child", text: "Family-friendly" },
    ],
    specs: [
      { icon: "fa-door-open", label: "Dormitorios", value: "2 (1 principal + litera)" },
      { icon: "fa-bed", label: "Camas", value: "Cama litera" },
      { icon: "fa-utensils", label: "Cocina", value: "Integrada" },
      { icon: "fa-child", label: "Tipo", value: "Family-friendly" },
    ],
    amenities: apartAmenities,
    activeNav: "Departamentos",
  },
];

// ─── Helpers ───
export function getRoomsByCategory(category: Room["category"]): Room[] {
  return rooms.filter((r) => r.category === category);
}

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}

// ─── Category Pages Config ───
export const categoryPages: Record<string, CategoryPage> = {
  habitaciones: {
    slug: "habitaciones",
    title: "Habitaciones — Faz Hostel",
    metaDesc: "Conocé las habitaciones de Faz Hostel: Tierra, Agua, Fuego y Aire. Compartidas mixtas en Cofico, Córdoba.",
    eyebrow: "Dónde dormir",
    h1Html: 'Cuatro elementos,<br>cuatro <em>refugios.</em>',
    headerDesc: "Tierra, Agua, Fuego y Aire. Cada habitación tiene su propia personalidad — elegí la que mejor acompañe tu viaje.",
    headerImage: `${CDN}/11_538508.jpg`,
    ctaH2Html: '¿Lista o listo<br>para <em>quedarte?</em>',
    ctaDesc: "Mejor precio garantizado. Confirmación inmediata por WhatsApp. Te respondemos personalmente, no un bot.",
    ctaBtnText: "Escribinos por WhatsApp",
    activeNav: "Compartidas",
    footerCol2Title: "Habitaciones",
    footerCol2Links: [
      { label: "Tierra", href: "/habitaciones/tierra" },
      { label: "Agua", href: "/habitaciones/agua" },
      { label: "Fuego", href: "/habitaciones/fuego" },
      { label: "Aire", href: "/habitaciones/aire" },
    ],
  },
  privadas: {
    slug: "privadas",
    title: "Suites Privadas — Faz Hostel",
    metaDesc: "Suites privadas en Faz Hostel: Matrimonial Deluxe, Matrimonial Standar y Doble Standar en Cofico, Córdoba.",
    eyebrow: "Suites Privadas",
    h1Html: 'Tu propio<br><em>refugio.</em>',
    headerDesc: "Tres suites con baño privado, Smart TV y aire acondicionado. La intimidad de un hotel boutique con la calidez de Faz.",
    headerImage: `${CDN}/1_721041.jpg`,
    ctaH2Html: 'Tu suite<br><em>te espera.</em>',
    ctaDesc: "Confirmación inmediata por WhatsApp. Te respondemos personalmente, no un bot.",
    ctaBtnText: "Consultar disponibilidad",
    activeNav: "Privadas",
    footerCol2Title: "Privadas",
    footerCol2Links: [
      { label: "Matrimonial Deluxe", href: "/privadas/suite-matrimonial-deluxe" },
      { label: "Matrimonial Standar", href: "/privadas/suite-matrimonial-standar" },
      { label: "Doble Standar", href: "/privadas/suite-doble-standar" },
    ],
  },
  studios: {
    slug: "studios",
    title: "Studios — Faz Hostel",
    metaDesc: "Studios en Faz Hostel: studio doble con cocina equipada y baño privado en Cofico, Córdoba.",
    eyebrow: "Studios",
    h1Html: 'Espacio<br><em>compacto.</em>',
    headerDesc: "Studios doble con todo lo necesario. La línea exacta entre habitación privada y departamento.",
    headerImage: `${CDN}/8_17387.jpg`,
    ctaH2Html: 'Tu studio<br><em>te espera.</em>',
    ctaDesc: "Confirmación inmediata por WhatsApp. Te respondemos personalmente, no un bot.",
    ctaBtnText: "Consultar disponibilidad",
    activeNav: "Studios",
    footerCol2Title: "Studios",
    footerCol2Links: [
      { label: "Studio Premium", href: "/studios/studio-premium" },
    ],
  },
  aparts: {
    slug: "aparts",
    title: "Faz Aparts — Cofico, Córdoba",
    metaDesc: "Faz Aparts: departamentos y studios completos en Barrio Cofico, Córdoba. Espacios pensados para estadías independientes.",
    eyebrow: "Faz Aparts",
    h1Html: 'Tu casa<br>en <em>Cofico.</em>',
    headerDesc: "Cinco departamentos y studios pensados para que vivas Córdoba con la libertad de un hogar propio.",
    headerImage: `${CDN}/14_102705.jpg`,
    ctaH2Html: 'Tu casa<br><em>te espera.</em>',
    ctaDesc: "Confirmación inmediata por WhatsApp. Te respondemos personalmente, no un bot.",
    ctaBtnText: "Consultar disponibilidad",
    activeNav: "Departamentos",
    footerCol2Title: "Aparts",
    footerCol2Links: [
      { label: "Apart Deluxe", href: "/aparts/apart-deluxe" },
      { label: "Apart Familiar", href: "/aparts/apart-familiar" },
      { label: "Premium Flex", href: "/aparts/apart-premium" },
      { label: "Select Triple", href: "/aparts/apart-select" },
      { label: "Family Kids", href: "/aparts/apart-family-kids" },
    ],
  },
};

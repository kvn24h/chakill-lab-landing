// Chakill Lab — catálogo de la landing. Datos de ejemplo (placeholders de foto via <image-slot>).
const WA_NUMBER = '51999999999'; // <- reemplazar por el número real de Chakill Lab

const CL_CATALOG = [
  { id: 'maceta-onda',   name: 'Maceta Onda',       price: 18, tag: 'Nuevo',          tone: '#6CA0CF', sku: 'CHK · LAB · 0042', desc: 'Maceta ondulada para suculentas, con drenaje incluido.' },
  { id: 'florero-espiral', name: 'Florero Espiral', price: 24, tag: 'Edición',        tone: '#5E7CA6', sku: 'CHK · LAB · 0051', desc: 'Espiral continua, impresión sin costuras visibles.' },
  { id: 'portavelas-duna', name: 'Portavelas Duna', price: 14, tag: null,             tone: '#D9C0A0', sku: 'CHK · LAB · 0033', desc: 'Textura de duna que difunde una luz cálida.' },
  { id: 'organizador-nido', name: 'Organizador Nido', price: 21, tag: 'Hecho a pedido', tone: '#BFD2E6', sku: 'CHK · LAB · 0067', desc: 'Bandeja para escritorio o entrada. Ordena con actitud.' },
  { id: 'lampara-geo',   name: 'Lámpara Geo',       price: 39, tag: 'Pieza del mes',  tone: '#1E3653', sku: 'CHK · LAB · 0070', desc: 'Pantalla geométrica que proyecta patrones suaves.' },
  { id: 'maceta-mini',   name: 'Maceta Mini',       price: 11, tag: null,             tone: '#ECE6D6', sku: 'CHK · LAB · 0028', desc: 'Mini maceta para cactus, ideal en repisas.' },
];

function waLink(p) {
  const msg = p
    ? `Hola Chakill Lab ✕ Quiero pedir la pieza "${p.name}" (${p.sku}). ¿Me cuentan colores y tiempos? `
    : 'Hola Chakill Lab ✕ Quiero hacer un pedido del catálogo. ';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

Object.assign(window, { CL_CATALOG, waLink });

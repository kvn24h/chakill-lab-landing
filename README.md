# Chakill Lab — Landing page

Landing de catálogo de **Chakill Lab** (piezas decorativas en impresión 3D).
Construida con el sistema de diseño de la marca. Los clientes ven el catálogo y
concretan el pedido por WhatsApp.

## Estructura

```
Chakill Lab Landing.html      → página principal (versión editable)
Chakill Lab Landing — offline.html → versión de un solo archivo, funciona sin conexión
landing-data.jsx              → catálogo de productos + link de WhatsApp
landing-sections-a.jsx        → header, hero, catálogo
landing-sections-b.jsx        → galería, cómo funciona, color, footer
tweaks-panel.jsx / image-slot.js → utilidades
assets/logos/                 → logotipos de la marca
_ds/                          → sistema de diseño de Chakill Lab (tokens + componentes)
```

## Cómo verla en local

Ábrela con un servidor estático simple (por las rutas de los `.jsx`):

```bash
npx serve .
# luego abre http://localhost:3000/Chakill%20Lab%20Landing.html
```

O simplemente abre **`Chakill Lab Landing — offline.html`** directamente en el
navegador — ese archivo no necesita servidor ni conexión.

## Publicar con GitHub Pages

1. Repo → **Settings → Pages**
2. En *Source* elige la rama `main` y la carpeta `/root`
3. Guarda. En un minuto tendrás una URL pública.

## Editar el catálogo

Por ahora el catálogo vive en `landing-data.jsx` (array `CL_CATALOG`).
Edita nombre, precio, SKU, etiqueta y descripción ahí. El número de WhatsApp
está en la constante `WA_NUMBER` (formato internacional sin `+`, ej. `51999...`).

> Próximo paso pendiente: conectar el catálogo con Notion (requiere una pequeña
> función serverless o un `catalog.json` en el repo). Ver conversación.

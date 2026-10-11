# EA Consultora de Software — sitio en React

Migración del proyecto Laravel (Blade) a React + Vite. Es un sitio 100 % estático: no necesita PHP ni base de datos.

## Uso

```bash
npm install
npm run dev        # desarrollo en http://localhost:5173
npm run build      # genera la carpeta dist/ lista para publicar
npm run preview    # prueba local del build
```

## Formulario de contacto

En Laravel los mensajes se guardaban en una base de datos. En el sitio estático se envían por correo con
[Formspree](https://formspree.io) (plan gratuito):

1. Creá un formulario en Formspree con el correo donde querés recibir los mensajes.
2. Copiá `.env.example` a `.env` y completá `VITE_FORMSPREE_ID` con el ID (la parte final de la URL `https://formspree.io/f/XXXXXXXX`).
3. En Vercel, cargá la misma variable en *Settings → Environment Variables*.

Si `VITE_FORMSPREE_ID` está vacío, el botón abre el programa de correo del visitante con el mensaje ya armado (mailto).

## Estructura

- `src/components/` — un componente por sección (Header, Hero, Benefits, Services, About, Process, Contact, Footer, WhatsAppButton).
- `src/index.css` — estilos migrados sin cambios del layout de Blade.
- `public/images/` — logo y mascota.

## Publicar en Vercel

Importá el repositorio: Vercel detecta Vite solo (build `npm run build`, salida `dist`).

PLUGINVAULT — cómo usarlo
==========================

Esto es una web estática (HTML + CSS + JS puro). No lleva base de
datos ni panel de admin: todo se edita a mano en un solo archivo.

1) EDITAR TU CONTENIDO
   Abre:  js/config.js
   Ahí cambias el nombre del sitio, la frase y la lista de plugins
   y configs. Cada uno es un bloque { ... } con su nombre, tipo,
   descripción, etiquetas y el enlace de Mediafire.
   El propio archivo trae comentarios explicando cada campo.

2) VER CÓMO QUEDA (con npm)
   Necesitas tener Node.js instalado (trae npm incluido).
   Desde dentro de la carpeta plugin-vault, en la terminal:

     npm install
     npm start

   Eso levanta un servidor local y te va a decir algo como:
     Accepting connections at http://localhost:3000

   Abres esa dirección en el navegador y ahí está la web.
   Para pararlo: Ctrl + C en la terminal.

   (Sigue siendo una web estática por dentro — "npm start" solo
   levanta un servidorcito que sirve los archivos, no hay backend
   real ni base de datos.)

   Alternativa sin npm: doble clic en index.html y se abre igual
   directo en el navegador, sin terminal ni instalar nada.

3) SUBIRLO A INTERNET
   Es una carpeta de archivos estáticos, así que sirve en
   cualquier hosting gratuito de este tipo:
     - GitHub Pages
     - Netlify (arrastra la carpeta y ya)
     - Vercel
     - Cloudflare Pages
   Sube TODA la carpeta (index.html, css/, js/) tal cual.

4) AÑADIR / QUITAR ITEMS MÁS ADELANTE
   Solo tocas js/config.js. No hay que tocar HTML ni CSS para
   añadir un plugin o config nuevo — copias un bloque existente,
   cambias los datos y lo pegas antes del ] final.

Estructura de archivos:
   package.json    -> permite iniciarlo con npm install / npm start
   index.html      -> la página
   css/style.css   -> todos los estilos
   js/config.js    -> TU CONTENIDO (edita solo esto normalmente)
   js/script.js    -> la lógica que dibuja las tarjetas (no hace
                      falta tocarlo salvo que quieras cambiar el
                      comportamiento)

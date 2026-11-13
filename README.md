# Nenek Trivia Landing Page

Sitio estático para presentar Nenek Trivia. Jekyll genera las páginas y Webpack prepara JavaScript, estilos, iconos y recursos.

## Requisitos

- Node.js 26.13.0 (versión definida en `.nvmrc`)
- Ruby y Bundler para ejecutar Jekyll

## Instalación

```sh
nvm install
nvm use
npm ci
bundle install
```

## Desarrollo

```sh
npm start
```

Abre `http://localhost:8080`. Webpack sirve los recursos y Jekyll vuelve a generar las páginas.

## Compilación

```sh
npm run build
```

El sitio final se genera en `_site/`. Para compilarlo con el service worker de Workbox:

```sh
npm run build:pwa
```

`npm run build:optim` conserva el alias de la compilación de producción; Webpack aplica la minificación de producción directamente.

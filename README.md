# Nenek Trivia Landing Page

Sitio estático para presentar Nenek Trivia. Jekyll genera las páginas y Webpack prepara JavaScript, estilos, iconos y recursos.

## Requisitos

- Node.js 26.13.0 (versión definida en `.nvmrc`)
- Ruby 3.4.12 (versión definida en `.ruby-version`)
- Bundler 4.0.24 (versión fijada en `Gemfile.lock`)

## Instalación

```sh
nvm install
nvm use
mise install
npm ci
gem install bundler -v 4.0.24
bundle install
```

La versión de Ruby está fijada en `.ruby-version` y `.mise.toml`; con Mise activado en la terminal, se selecciona automáticamente.

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

La compilación del HTML de Jekyll no usa un minificador adicional. Se retiraron AMP y el antiguo plugin de minificación porque el sitio no tiene páginas AMP y esos plugins bloqueaban la actualización. Feed, sitemap y metadatos SEO se generan con sus plugins Jekyll actuales.

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

## CI y publicación

Los pull requests ejecutan `npm ci` y `npm run build` antes de publicar una vista previa en Firebase Hosting. Los pull requests desde forks también compilan; el despliegue de preview se limita a ramas del mismo repositorio porque usa el secreto de Firebase. Los fallos de instalación o compilación detienen el workflow antes del despliegue.

`development` es la rama de integración. `master` es la rama predeterminada y de publicación: cada push en `master` compila el sitio y lo despliega al canal live de Firebase Hosting en el proyecto `nenek-trivia`. Para publicar cambios, intégralos primero en `development` y después promueve esa rama a `master` mediante un pull request.

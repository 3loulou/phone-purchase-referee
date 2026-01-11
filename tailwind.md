### Create new Astro project

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Start a new Astro project using the `create astro` command. This initializes the project structure and installs necessary dependencies, preparing your environment for further setup.

```Terminal
npm create astro@latest my-project
cd my-project
```

--------------------------------

### Create New Vite Project with npm

Source: https://tailwindcss.com/docs/index

Creates a new Vite project directory named 'my-project' and navigates into it. This is the initial setup step before installing Tailwind CSS dependencies.

```bash
npm create vite@latest my-project
cd my-project
```

--------------------------------

### Create a new TanStack Start project

Source: https://tailwindcss.com/docs/installation/framework-guides/tanstack-start

Initializes a new TanStack Start project named 'my-project' and navigates into its directory, preparing the environment for further configuration.

```bash
npx create-start-app@latest my-project
cd my-project
```

--------------------------------

### Run Vite Development Server

Source: https://tailwindcss.com/docs/index

Starts the Vite development server with the configured build process. This command runs the dev script defined in package.json to enable hot module reloading.

```bash
npm run dev
```

--------------------------------

### Start Parcel Development Server

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Run Parcel build process with src/index.html as entry point. This compiles your project, processes Tailwind CSS, and starts the development server.

```bash
npx parcel src/index.html
```

--------------------------------

### Create a new Laravel project

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/vite

This command uses the Laravel installer to create a new project directory named 'my-project' and then navigates into that directory, preparing the environment for further setup.

```bash
laravel new my-project
cd my-project
```

--------------------------------

### Create new Qwik project with npm

Source: https://tailwindcss.com/docs/installation/framework-guides/qwik

Initializes a new Qwik project named 'my-project' using `npm create qwik@latest empty` and navigates into the project directory. This is the first step for a fresh Qwik setup.

```bash
npm create qwik@latest empty my-project
cd my-project
```

--------------------------------

### Example HTML showcasing Tailwind CSS usage

Source: https://tailwindcss.com/docs/installation

This HTML snippet demonstrates how to link your compiled CSS file and apply Tailwind's utility classes to elements. It's crucial that your framework properly includes the `<link>` tag pointing to your generated stylesheet. The example uses `text-3xl`, `font-bold`, and `underline` to style a heading.

```HTML
<!doctype html><html><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <link href="/src/style.css" rel="stylesheet"></head><body>  <h1 class="text-3xl font-bold underline">    Hello world!  </h1></body></html>
```

--------------------------------

### Start Gatsby development server

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Initiates the Gatsby development server, compiling the project and making it accessible for local development and testing with Tailwind CSS applied.

```Terminal
gatsby develop
```

--------------------------------

### Start Angular development server

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

Initiates the Angular development server using the Angular CLI. This command compiles the project and serves it, allowing live reloading during development.

```Shell
ng serve
```

--------------------------------

### Create a new Gatsby project

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Initializes a new Gatsby project named 'my-project' and navigates into its directory, serving as the starting point for Tailwind CSS integration.

```Terminal
gatsby new my-project
cd my-project
```

--------------------------------

### HTML Document with Tailwind CSS Utility Classes

Source: https://tailwindcss.com/docs/index

Demonstrates a basic HTML document structure with Tailwind CSS imported and utility classes applied. The example shows a heading styled with Tailwind's text-3xl, font-bold, and underline utility classes.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

--------------------------------

### Start Laravel development build process

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Run the npm watch command to start the development build process. This continuously monitors for file changes and recompiles CSS with Tailwind utilities as needed.

```bash
npm run watch
```

--------------------------------

### Start Ember.js Development Server

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

This command initiates the Ember.js development server and build process. It compiles the application, including all integrated styles like Tailwind CSS, and typically serves it locally for development and testing.

```bash
npm run start
```

--------------------------------

### Start Phoenix build process with Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Initiates the Phoenix development server and asset build process, including Tailwind CSS compilation, using `mix phx.server`. This command starts the application and live-reloads assets during development.

```bash
mix phx.server
```

--------------------------------

### Start development build process

Source: https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails

Run the development server with the Tailwind CSS build process. This command watches for changes and compiles your Tailwind utilities in real-time.

```bash
./bin/dev
```

--------------------------------

### Install Tailwind CSS npm package

Source: https://tailwindcss.com/docs/installation/tailwind-cli

Install tailwindcss and @tailwindcss/cli packages via npm to set up Tailwind CSS locally. This is the first step in initializing Tailwind CSS in your project.

```bash
npm install tailwindcss @tailwindcss/cli
```

--------------------------------

### align-content Start - Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

Packs rows in a container against the start of the cross axis using the content-start utility class. This example creates a 3-column grid with a fixed height and applies content-start to align rows at the start.

```html
<div class="grid h-56 grid-cols-3 content-start gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

--------------------------------

### Start the AdonisJS development server

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Executes the development build process for your AdonisJS project using `npm run dev`. This command typically starts a local server and watches for file changes.

```shell
npm run dev
```

--------------------------------

### Import the CSS file in __root.tsx

Source: https://tailwindcss.com/docs/installation/framework-guides/tanstack-start

Imports the compiled `styles.css` file into your TanStack Start application's root route (`__root.tsx`) using Vite's `?url` query. This ensures the styles are globally applied by injecting a stylesheet link into the document's head.

```typescript
// other imports...
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      // your meta tags and site config
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
    // other head config
  }),
  component: RootComponent,
})
```

--------------------------------

### Create a new Symfony project

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Initializes a new Symfony web application project using the Symfony installer and navigates into the newly created project directory.

```bash
symfony new --webapp my-project
cd my-project
```

--------------------------------

### Create SvelteKit Project

Source: https://tailwindcss.com/docs/installation/framework-guides/sveltekit

Initialize a new SvelteKit project using the official scaffolding tool. This command creates a new directory with the basic SvelteKit project structure and dependencies.

```bash
npx sv create my-project
cd my-project
```

--------------------------------

### Create a new Phoenix project

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Initializes a new Phoenix application using `mix phx.new` and navigates into its directory, preparing the environment for further configuration.

```bash
mix phx.new myproject
cd myproject
```

--------------------------------

### Apply Styles on Initial DOM Render with @starting-style

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Uses the starting variant to set element appearance when first rendered in the DOM or transitioning from display: none to visible. This example manages opacity transitions for a popover element during initial render.

```html
<div>
  <button popovertarget="my-popover">Check for updates</button>
  <div popover id="my-popover" class="opacity-0 starting:open:opacity-0 ...">
  </div>
</div>
```

--------------------------------

### Apply Tailwind CSS classes in Qwik component

Source: https://tailwindcss.com/docs/installation/framework-guides/qwik

Demonstrates the usage of Tailwind CSS utility classes within a Qwik component. This example shows how to apply `text-3xl`, `font-bold`, and `underline` classes to an `<h1>` element.

```typescript
import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <h1 class="text-3xl font-bold underline">
      Hello World!
    </h1>
  )
})
```

--------------------------------

### Apply Responsive place-content with Tailwind CSS

Source: https://tailwindcss.com/docs/place-content

This example demonstrates applying `place-content` utilities responsively using breakpoint variants. The content is `start` by default and transitions to `center` on medium screens and larger, adapting layout based on viewport size.

```html
<div class="grid place-content-start md:place-content-center ...">  <!-- ... --></div>
```

--------------------------------

### Install Tailwind CSS and Vite Plugin

Source: https://tailwindcss.com/docs/index

Installs the tailwindcss package and @tailwindcss/vite plugin as npm dependencies. These packages are required for Tailwind CSS to work with the Vite build tool.

```bash
npm install tailwindcss @tailwindcss/vite
```

--------------------------------

### Add Custom CSS with Tailwind Play CDN in HTML

Source: https://tailwindcss.com/docs/installation/play-cdn

This example shows how to define custom CSS rules that leverage Tailwind's features when using the Play CDN. By setting the `type` attribute of a `<style>` tag to `text/tailwindcss`, users can define custom themes or styles that work seamlessly with Tailwind's JIT engine directly in the browser.

```html
<!doctype html><html>  <head>    <meta charset="UTF-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>    <style type="text/tailwindcss">      @theme {        --color-clifford: #da373d;      }    </style>  </head>  <body>    <h1 class="text-3xl font-bold underline text-clifford">      Hello world!    </h1>  </body></html>
```

--------------------------------

### Link compiled CSS and use Tailwind utilities in HTML

Source: https://tailwindcss.com/docs/installation/tailwind-cli

Add the compiled CSS file to the HTML head section and apply Tailwind utility classes to elements for styling. This example demonstrates basic HTML structure with Tailwind's text-3xl, font-bold, and underline utility classes.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

--------------------------------

### Create a new SolidJS project

Source: https://tailwindcss.com/docs/installation/framework-guides/solidjs

Initializes a new SolidJS project using the `degit` tool with the official SolidJS JavaScript template. This command sets up the basic project structure and then navigates into the newly created directory.

```bash
npx degit solidjs/templates/js my-project
cd my-project
```

--------------------------------

### Create a new AdonisJS project

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Initializes a new AdonisJS web project using the `create-adonisjs` command. This step sets up the basic project structure and necessary files.

```shell
npm init adonisjs@latest my-project -- --kit=webcd my-project
```

--------------------------------

### Sort Tailwind CSS Classes with Prettier

Source: https://tailwindcss.com/docs/editor-setup

This example demonstrates how the official Prettier plugin for Tailwind CSS automatically reorders utility classes in HTML markup to follow the recommended class order, improving consistency and readability. It shows the HTML before and after sorting.

```HTML
<!-- Before --><button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button><!-- After --><button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Submit</button>
```

--------------------------------

### Basic HTML template with linked Tailwind CSS and utility classes

Source: https://tailwindcss.com/docs/installation/using-postcss

This HTML example demonstrates how to include the compiled Tailwind CSS file in the `<head>` section of your document. It also shows the application of basic Tailwind utility classes (`text-3xl font-bold underline`) to an `<h1>` element for styling content.

```HTML
<!doctype html><html><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <link href="/dist/styles.css" rel="stylesheet"></head><body>  <h1 class="text-3xl font-bold underline">    Hello world!  </h1></body></html>
```

--------------------------------

### Install Tailwind CSS standalone CLI

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Executes the `mix tailwind.install` command to download and install the standalone Tailwind CSS command-line interface. This CLI is essential for processing and compiling Tailwind styles.

```bash
mix tailwind.install
```

--------------------------------

### Create Parcel Project and Initialize npm

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Initialize a new Parcel project directory with npm. Creates project folder structure and installs Parcel as a dev dependency. Prerequisites: Node.js and npm installed on your system.

```bash
mkdir my-project
cd my-project
npm init -y
npm install parcel
mkdir src
touch src/index.html
```

--------------------------------

### Configure Tailwind CSS Vite Plugin

Source: https://tailwindcss.com/docs/index

Sets up the Vite configuration file to include the Tailwind CSS plugin. This enables Tailwind to process your templates and generate optimized CSS during the build process.

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

--------------------------------

### Use Tailwind CSS utility classes in a React component

Source: https://tailwindcss.com/docs/installation/framework-guides/tanstack-start

Demonstrates how to apply Tailwind CSS utility classes directly within a React component's JSX. This example shows styling a basic `h1` element with `text-3xl`, `font-bold`, and `underline` classes.

```typescript
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <h1 class="text-3xl font-bold underline">
      Hello World!
    </h1>
  )
}
```

--------------------------------

### Create new Nuxt.js project

Source: https://tailwindcss.com/docs/installation/framework-guides/nuxt

This command initializes a new Nuxt.js project named 'my-project' and then navigates into the project directory. It's the standard way to set up a new Nuxt application using Create Nuxt.

```Terminal
npm create nuxt my-project
cd my-project
```

--------------------------------

### Create new Angular project

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

Initializes a new Angular project using Angular CLI. This command sets up a new project named 'my-project' and navigates into its directory, configured to use CSS for styling.

```Shell
ng new my-project --style css
cd my-project
```

--------------------------------

### Basic transition-behavior HTML example with discrete transitions

Source: https://tailwindcss.com/docs/transition-behavior

Demonstrates using transition-discrete utility to enable transitions on discrete CSS properties. The first example uses transition-normal (default behavior), while the second applies transition-discrete to allow smooth transitions when toggling between hidden and visible states using checkbox interactions.

```html
<label class="peer ...">
  <input type="checkbox" checked />
</label>
<button class="hidden transition-all not-peer-has-checked:opacity-0 peer-has-checked:block ...">
  I hide
</button>
<label class="peer ...">
  <input type="checkbox" checked />
</label>
<button class="hidden transition-all transition-discrete not-peer-has-checked:opacity-0 peer-has-checked:block ...">
  I fade out
</button>
```

--------------------------------

### Create Next.js Project with TypeScript

Source: https://tailwindcss.com/docs/installation/framework-guides/nextjs

Initialize a new Next.js project using Create Next App with TypeScript and ESLint configuration. This command scaffolds a new project directory with all necessary Next.js boilerplate.

```bash
npx create-next-app@latest my-project --typescript --eslint --app
cd my-project
```

--------------------------------

### justify-items responsive design - Breakpoint variants

Source: https://tailwindcss.com/docs/justify-items

Apply justify-items utilities responsively using breakpoint prefixes like md:. This example starts with justify-items-start alignment and switches to center alignment at medium screen sizes and above.

```html
<div class="grid justify-items-start md:justify-items-center ...">
  <!-- ... -->
</div>
```

--------------------------------

### Set Grid Row Start and End Lines in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-row

This example illustrates how to position grid items using `row-start-<number>` or `row-end-<number>` utilities, such as `row-start-2` and `row-end-3`, to define an element's placement at specific grid lines in Tailwind CSS.

```html
<div class="grid grid-flow-col grid-rows-3 gap-4">  <div class="row-span-2 row-start-2 ...">01</div>  <div class="row-span-2 row-end-3 ...">02</div>  <div class="row-start-1 row-end-4 ...">03</div></div>
```

--------------------------------

### Align Grid Content to Start with Tailwind CSS

Source: https://tailwindcss.com/docs/place-content

The `place-content-start` utility class positions grid items against the start of both the inline and block axes. This ensures content starts from the beginning of the container's available space.

```html
<div class="grid h-48 grid-cols-2 place-content-start gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Create a New Ember.js Project

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

This command initializes a new Ember.js application named 'my-project' using Ember CLI, configured with Embroider support and skipping the welcome screen. It then navigates into the newly created project directory.

```bash
npx ember-cli new my-project --embroider --no-welcome
cd my-project
```

--------------------------------

### Create new Rails project

Source: https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails

Initialize a new Ruby on Rails project using the Rails command-line interface. This creates the basic project structure needed before adding Tailwind CSS.

```bash
rails new my-project
cd my-project
```

--------------------------------

### Run Tailwind CLI build process with watch mode

Source: https://tailwindcss.com/docs/installation/tailwind-cli

Execute the Tailwind CLI tool to scan source files for class names and generate the compiled CSS output. The --watch flag enables automatic rebuilding when files change, streamlining the development workflow.

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

--------------------------------

### Add Tailwind CSS Play CDN to HTML for Development

Source: https://tailwindcss.com/docs/installation/play-cdn

This snippet demonstrates how to integrate the Tailwind CSS Play CDN into an HTML file. By including the provided script tag in the `<head>`, developers can immediately use Tailwind's utility classes for styling, making it suitable for development and prototyping without a build process.

```html
<!doctype html><html>  <head>    <meta charset="UTF-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```

--------------------------------

### Create React Router Project

Source: https://tailwindcss.com/docs/installation/framework-guides/react-router

Initialize a new React Router project using the create-react-router CLI tool. This sets up the basic project structure and dependencies needed for a React Router application.

```bash
npx create-react-router@latest my-project
cd my-project
```

--------------------------------

### Configure Tailwind CSS Vite Plugin in vite.config.ts

Source: https://tailwindcss.com/docs/installation/framework-guides/tanstack-start

Adds the `@tailwindcss/vite` plugin to your `vite.config.ts` file. This configuration tells Vite to process your CSS files with Tailwind CSS during development and build processes.

```typescript
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(),
    tsConfigPaths(),
  ]
});
```

--------------------------------

### Create Rspack Project with npm

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/vue

Initiates a new Rspack project using the npm package manager's `create` command. This command sets up the basic project structure and necessary configurations.

```Shell
npm create rspack@latest
```

--------------------------------

### Apply Tailwind CSS classes in a SolidJS component

Source: https://tailwindcss.com/docs/installation/framework-guides/solidjs

Demonstrates how to use Tailwind CSS utility classes directly within a SolidJS component's JSX. This example applies text size, font weight, and an underline style to an `<h1>` element, showcasing immediate styling capabilities.

```jsx
export default function App() {  return (    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  )}
```

--------------------------------

### Install Webpack Encore in Symfony

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Installs Webpack Encore and related Symfony UX bundles for asset building, while removing older or conflicting packages. Webpack Encore is essential for processing front-end assets in Symfony.

```bash
composer remove symfony/ux-turbo symfony/asset-mapper symfony/stimulus-bundle
composer require symfony/webpack-encore-bundle symfony/ux-turbo symfony/stimulus-bundle
```

--------------------------------

### Basic border-spacing HTML Table Example

Source: https://tailwindcss.com/docs/border-spacing

Demonstrates how to apply border-spacing utilities to an HTML table element with separate borders. Uses border-spacing-2 class on the table with border styling on header and body cells. Shows a practical example with state and city data.

```html
<table class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
  <thead>
    <tr>
      <th class="border border-gray-300 dark:border-gray-600">State</th>
      <th class="border border-gray-300 dark:border-gray-600">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Indiana</td>
      <td class="border border-gray-300 dark:border-gray-700">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Ohio</td>
      <td class="border border-gray-300 dark:border-gray-700">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Michigan</td>
      <td class="border border-gray-300 dark:border-gray-700">Detroit</td>
    </tr>
  </tbody>
</table>
```

--------------------------------

### Create a new Meteor project using npx

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

This command initializes a new Meteor application with the specified project name ('my-project') and then changes the current directory into the newly created project folder. It's the standard way to begin a fresh Meteor development environment.

```bash
npx meteor create my-project
cd my-project
```

--------------------------------

### Using logical properties with scroll-padding

Source: https://tailwindcss.com/docs/scroll-padding

Shows how to use logical scroll-padding properties (scroll-ps and scroll-pe) that adapt to text direction. Includes examples for both left-to-right and right-to-left layouts.

```html
<div dir="ltr">
  <div class="snap-x scroll-ps-6 ...">
    <!-- ... -->
  </div>
</div>
<div dir="rtl">
  <div class="snap-x scroll-ps-6 ...">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Configure Tailwind CSS plugin for Phoenix assets

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Configures the Tailwind plugin in `config/config.exs`, specifying the Tailwind CSS version and defining input/output paths for asset compilation within the Phoenix project. This setup ensures Tailwind processes the correct CSS files.

```elixir
config :tailwind,
  version: "4.1.10",
  myproject: [
    args: ~w(
      --input=assets/css/app.css
      --output=priv/static/assets/app.css
    ),
    cd: Path.expand("..", __DIR__)
  ]
```

--------------------------------

### Basic Backdrop Brightness HTML Example

Source: https://tailwindcss.com/docs/backdrop-filter-brightness

Demonstrates how to apply backdrop brightness filters to HTML elements using Tailwind CSS utility classes. Shows two examples with different brightness levels (50% and 150%) applied to semi-transparent white overlays over a background image.

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-brightness-50 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-brightness-150 ..."></div>
</div>
```

--------------------------------

### Use Tailwind CSS Utility Classes

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/react

Apply Tailwind CSS utility classes to HTML elements in React components. This example demonstrates text sizing, font weight, and text decoration utilities.

```jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

--------------------------------

### place-items Responsive Design with Breakpoint Variants

Source: https://tailwindcss.com/docs/place-items

Demonstrates responsive design implementation using place-items utilities with breakpoint prefixes. The example applies place-items-start at mobile sizes and switches to place-items-center at medium (md:) breakpoint and above.

```html
<div class="grid place-items-start md:place-items-center ...">
  <!-- ... -->
</div>
```

--------------------------------

### Include compiled assets in AdonisJS Edge template

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Demonstrates how to include the compiled CSS and JavaScript assets generated by Vite in an AdonisJS Edge template (`home.edge`). It also shows a basic example of using a Tailwind utility class.

```html
<!doctype html><html>  <head>    <meta charset="utf-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    @vite(['resources/css/app.css', 'resources/js/app.js'])  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```

--------------------------------

### justify-start - Align flex items to start

Source: https://tailwindcss.com/docs/justify-content

Use the justify-start utility class to align flex container items against the start of the container's main axis. This is the default behavior for flex containers.

```html
<div class="flex justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Example Vue Component Using Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/vue

Demonstrates how to apply Tailwind CSS utility classes within a Vue single-file component's template. The `text-3xl`, `font-bold`, and `underline` classes style an `<h1>` element.

```Vue.js
<template>  <h1 class="text-3xl font-bold underline">    Hello world!  </h1></template>
```

--------------------------------

### place-items-start - Grid Item Start Alignment

Source: https://tailwindcss.com/docs/place-items

Aligns grid items to the start of their grid areas on both axes using the place-items-start class. This utility applies the CSS property place-items: start; to container elements with a 3-column grid layout and 4-unit gap spacing.

```html
<div class="grid grid-cols-3 place-items-start gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

--------------------------------

### Configure Vite for Tailwind CSS and SolidJS

Source: https://tailwindcss.com/docs/installation/framework-guides/solidjs

Modifies the `vite.config.ts` file to include both the `@tailwindcss/vite` plugin for Tailwind CSS processing and `vite-plugin-solid` for SolidJS support. This setup ensures that Tailwind CSS is correctly integrated into the Vite build process.

```typescript
import { defineConfig } from 'vite';import solidPlugin from 'vite-plugin-solid';import tailwindcss from '@tailwindcss/vite';export default defineConfig({
  plugins: [
    tailwindcss(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
```

--------------------------------

### Custom flex-grow value in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-grow

Example using the grow-[<value>] bracket notation syntax to apply custom flex-grow values. This allows arbitrary values not available through predefined utility classes.

```html
<div class="grow-[25vw] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Responsive Position Utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/position

Demonstrates using breakpoint prefixes with position utilities to apply different positioning values at specific screen sizes. The example shows applying `relative` positioning at small screens and `absolute` at medium breakpoints and above.

```html
<div class="relative md:absolute ...">
  <!-- ... -->
</div>
```

--------------------------------

### Configure PostCSS Plugins

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/react

Create postcss.config.mjs in the project root and register the @tailwindcss/postcss plugin. This file tells PostCSS which plugins to use when processing CSS.

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

--------------------------------

### Apply responsive Tailwind CSS skew utilities

Source: https://tailwindcss.com/docs/skew

This example illustrates how to make skew transformations responsive by using breakpoint variants like `md:`. The `skew-3` utility is applied by default, but `md:skew-12` overrides it for medium screen sizes and above.

```html
<img class="skew-3 md:skew-12 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Responsive z-index with Breakpoint Variants

Source: https://tailwindcss.com/docs/z-index

Demonstrates using breakpoint prefixes like md: to apply different z-index utilities at specific screen sizes. This example applies z-0 at small screens and z-50 at medium screens and above.

```html
<div class="z-0 md:z-50 ...">  <!-- ... --></div>
```

--------------------------------

### Import CSS in SvelteKit Layout

Source: https://tailwindcss.com/docs/installation/framework-guides/sveltekit

Create a layout component at src/routes/+layout.svelte and import the app.css file. This ensures Tailwind CSS is loaded globally across all pages in your SvelteKit application.

```svelte
<script>
  let { children } = $props();
  import "../app.css";
</script>

{@render children()}
```

--------------------------------

### Style HTML with Tailwind utility classes

Source: https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails

Apply Tailwind CSS utility classes directly to HTML elements in your ERB templates. This example demonstrates using text sizing, font weight, and text decoration utilities.

```erb
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
```

--------------------------------

### justify-items-start - Align grid items to start

Source: https://tailwindcss.com/docs/justify-items

Use the justify-items-start utility to align grid items against the start of their inline axis. Creates a grid container with items positioned at the beginning of available space.

```html
<div class="grid justify-items-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

--------------------------------

### Import Tailwind CSS in Main CSS File

Source: https://tailwindcss.com/docs/index

Adds an @import directive to your main CSS file to include Tailwind CSS. This import statement loads all of Tailwind's utility classes and components.

```css
@import "tailwindcss";
```

--------------------------------

### Install Tailwind CSS and PostCSS dependencies for Gatsby

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Installs the necessary npm packages including `@tailwindcss/postcss`, `tailwindcss`, `postcss`, and `gatsby-plugin-postcss`, which are required for Tailwind CSS to function within a Gatsby environment.

```Terminal
npm install @tailwindcss/postcss tailwindcss postcss gatsby-plugin-postcss
```

--------------------------------

### Install Tailwind CSS and PostCSS dependencies

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

Installs Tailwind CSS, `@tailwindcss/postcss`, and `postcss` as development dependencies in your project using npm. The `--force` flag is used to resolve potential peer dependency conflicts during installation.

```Shell
npm install tailwindcss @tailwindcss/postcss postcss --force
```

--------------------------------

### Apply responsive saturation filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-saturate

Demonstrates how to apply different saturation filter levels based on screen size using responsive prefixes like `md:`. The example shows an image with `saturate-50` by default and `md:saturate-150` for medium screens and above.

```html
<img class="saturate-50 md:saturate-150 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Install Tailwind CSS and its Vite plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Installs the core Tailwind CSS package (`tailwindcss`) and the official Tailwind CSS Vite plugin (`@tailwindcss/vite`) along with their peer dependencies using npm.

```shell
npm install tailwindcss @tailwindcss/vite
```

--------------------------------

### Responsive flex-grow with breakpoint variants in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-grow

Example showing responsive design with flex-grow utilities using breakpoint prefixes. The grow class applies at mobile sizes, while md:grow-0 overrides the behavior at medium screen sizes and above.

```html
<div class="grow md:grow-0 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Tailwind CSS classes in Angular template

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

Demonstrates the usage of Tailwind CSS utility classes within an Angular component's HTML template. This example applies styling for text size, font weight, and an underline to an `<h1>` element.

```HTML
<h1 class="text-3xl font-bold underline">  Hello world!</h1>
```

--------------------------------

### Use Tailwind CSS utility classes in Laravel Blade template

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Example Blade template demonstrating how to use Tailwind CSS utility classes for styling. The compiled CSS must be linked in the document head, and utility classes are applied to HTML elements.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

--------------------------------

### Responsive order with breakpoint variants

Source: https://tailwindcss.com/docs/order

Prefix an order utility with a breakpoint variant like md: to apply the utility only at specific screen sizes. This example shows applying order-first on small screens and order-last on medium screens and above.

```HTML
<div class="order-first md:order-last ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Angled Linear Gradient Masks with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

This example demonstrates how to create custom angled linear gradient masks using Tailwind CSS utilities such as `mask-linear-<angle>`, `mask-linear-from-<value>`, and `mask-linear-to-<value>`. It includes examples for both positive (`mask-linear-50`) and negative (`-mask-linear-50`) angles to control the mask's direction and extent, typically transitioning from black to transparent.

```html
<div class="mask-linear-50 mask-linear-from-60% mask-linear-to-80% bg-[url(/img/mountains.jpg)] ..."></div><div class="-mask-linear-50 mask-linear-from-60% mask-linear-to-80% bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Apply Tailwind CSS classes in a Vue component

Source: https://tailwindcss.com/docs/installation/framework-guides/nuxt

This Vue component example demonstrates how to use Tailwind CSS utility classes directly within a template. The `text-3xl`, `font-bold`, and `underline` classes are applied to an `<h1>` tag to style its appearance.

```Vue
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>
```

--------------------------------

### Growing flex items proportionally with factor in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-grow

Example demonstrating proportional growth using grow-<number> utilities. Items with grow-3 and grow-7 classes expand relative to their growth factors, with grow-7 occupying more space than grow-3.

```html
<div class="flex ...">
  <div class="size-14 grow-3 ...">01</div>
  <div class="size-14 grow-7 ...">02</div>
  <div class="size-14 grow-3 ...">03</div>
</div>
```

--------------------------------

### Safelist Utilities with Ranges in Tailwind CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Generate multiple classes with brace expansion syntax to create ranges of utilities. This example generates all red background colors (50, 100-900 in steps of 100, and 950) with hover variants. Supports range syntax `{start..end..step}` for numeric sequences.

```css
@import "tailwindcss";
@source inline("{hover:,}bg-red-{50,{100..900..100},950}");
```

```css
.bg-red-50 {
  background-color: var(--color-red-50);
}
.bg-red-100 {
  background-color: var(--color-red-100);
}
.bg-red-200 {
  background-color: var(--color-red-200);
}
/* ... */
.bg-red-800 {
  background-color: var(--color-red-800);
}
.bg-red-900 {
  background-color: var(--color-red-900);
}
.bg-red-950 {
  background-color: var(--color-red-950);
}
@media (hover: hover) {
  .hover\:bg-red-50:hover {
    background-color: var(--color-red-50);
  }
  /* ... */
  .hover\:bg-red-950:hover {
    background-color: var(--color-red-950);
  }
}
```

--------------------------------

### Import Main CSS File into Ember.js `app.js`

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

This JavaScript code in `app.js` imports the application's main CSS file (`my-project/app.css`). This step is crucial for ensuring that the styles, including those processed by Tailwind CSS, are loaded and applied when the Ember.js application starts.

```javascript
import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'my-project/config/environment';
import 'my-project/app.css';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
```

--------------------------------

### Install Tailwind CSS and PostCSS Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Install @tailwindcss/postcss package and its peer dependencies via npm. This enables Tailwind CSS processing in your Parcel build pipeline.

```bash
npm install tailwindcss @tailwindcss/postcss
```

--------------------------------

### Basic scroll-padding example with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-padding

Demonstrates using scroll-padding utilities like scroll-pl-4 and scroll-pt-6 to set scroll offset within a snap container. This example shows a horizontally scrollable grid of images with scroll padding applied to the left side.

```html
<div class="snap-x scroll-pl-6 ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-05.jpg" />
  </div>
</div>
```

--------------------------------

### Apply Responsive Grid Columns with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/grid-template-columns

This example shows how to use Tailwind CSS's responsive prefixes (like `md:`) with `grid-template-columns` utilities. It demonstrates how to set different column layouts based on screen sizes, such as `grid-cols-1` by default and `md:grid-cols-6` for medium screens and above.

```html
<div class="grid grid-cols-1 md:grid-cols-6 ...">  <!-- ... --></div>
```

--------------------------------

### Basic flex-1 Example with Tailwind CSS

Source: https://tailwindcss.com/docs/flex

Demonstrates using flex-1 utility class to allow flex items to grow and shrink equally. Creates a three-column layout where the middle and right columns expand to fill available space while the left column maintains fixed width.

```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-1 ...">02</div>
  <div class="w-32 flex-1 ...">03</div>
</div>
```

--------------------------------

### Apply Tailwind Utility Classes to React Component

Source: https://tailwindcss.com/docs/installation/framework-guides/nextjs

Use Tailwind CSS utility classes in a Next.js React component via the className attribute. This example demonstrates styling a heading element with text size, font weight, and underline utilities.

```typescript
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

--------------------------------

### Stack Arbitrary Variants with Built-in Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Arbitrary variants can be combined with built-in variants for more specific selectors. This example stacks the arbitrary variant with the active variant to apply cursor-grabbing only when both conditions are met.

```html
<ul role="list">
  {#each items as item}
    <li class="[&.is-dragging]:active:cursor-grabbing">{item}</li>
  {/each}
</ul>
```

--------------------------------

### Apply List Styles Using Tailwind CSS Utilities in HTML

Source: https://tailwindcss.com/docs/preflight

This HTML example demonstrates how to apply styling to an unstyled list using Tailwind CSS utility classes. It adds `list-inside` and `list-disc` to render a disc-style list with markers inside the content flow.

```html
<ul class="list-inside list-disc">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

--------------------------------

### Apply Basic Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter

This example demonstrates how to apply individual and combined filters like blur and grayscale to image elements using Tailwind CSS utility classes. It shows basic filter application for visual effects.

```html
<img class="blur-xs" src="/img/mountains.jpg" /><img class="grayscale" src="/img/mountains.jpg" /><img class="blur-xs grayscale" src="/img/mountains.jpg" />
```

--------------------------------

### Responsive outline-width with breakpoint variant HTML

Source: https://tailwindcss.com/docs/outline-width

Demonstrates using responsive design with outline-width utilities by prefixing with breakpoint variants like md:. This example applies outline at all screen sizes and outline-2 only at medium screen sizes and above.

```html
<div class="outline md:outline-2 ..."><!-- ... --></div>
```

--------------------------------

### Apply Dual-Side Linear Gradient Masks (X and Y axis) with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

This example illustrates how to apply linear gradient masks simultaneously to opposite sides of an element using Tailwind CSS utilities like `mask-x-from-70% mask-x-to-90%` and `mask-y-from-70% mask-y-to-90%`. This allows for masks along both the horizontal (x-axis) and vertical (y-axis) directions, controlling the gradient start and end points for two sides at once.

```html
<div class="mask-x-from-70% mask-x-to-90% bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-y-from-70% mask-y-to-90% bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Include compiled CSS and use Tailwind classes in Blade template

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/vite

This Blade template example demonstrates how to include the Vite-compiled CSS asset in your HTML head using the `@vite` directive. It also showcases applying basic Tailwind CSS utility classes ('text-3xl', 'font-bold', 'underline') to an HTML element.

```html
<!doctype html><html>  <head>    <meta charset="utf-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    @vite('resources/css/app.css')  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```

--------------------------------

### Percentage-Based Width with Fractions

Source: https://tailwindcss.com/docs/width

Set responsive percentage widths using w-full and w-<fraction> utilities such as w-1/2, w-1/3, w-1/4, w-2/5. Useful for flexible layouts where elements need to share available space proportionally.

```html
<div class="flex ...">
  <div class="w-1/2 ...">w-1/2</div>
  <div class="w-1/2 ...">w-1/2</div>
</div>
<div class="flex ...">
  <div class="w-2/5 ...">w-2/5</div>
  <div class="w-3/5 ...">w-3/5</div>
</div>
<div class="flex ...">
  <div class="w-1/3 ...">w-1/3</div>
  <div class="w-2/3 ...">w-2/3</div>
</div>
<div class="w-full ...">w-full</div>
```

--------------------------------

### Install Tailwind CSS and PostCSS Dependencies for Ember.js

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

This command installs 'tailwindcss', '@tailwindcss/postcss', 'postcss', and 'postcss-loader' as development dependencies using npm. These packages are essential for integrating Tailwind CSS and PostCSS into an Ember.js project's build process.

```bash
npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
```

--------------------------------

### Install tailwindcss-rails gem and configure

Source: https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails

Add the tailwindcss-rails gem to your Gemfile and run the install command to automatically configure Tailwind CSS in your Rails project with necessary configuration files.

```bash
bundle add tailwindcss-rails
./bin/rails tailwindcss:install
```

--------------------------------

### Percentage-based max-height HTML example with fractions

Source: https://tailwindcss.com/docs/max-height

Shows how to apply percentage-based maximum heights using Tailwind CSS fraction utilities like max-h-1/2, max-h-1/4, and max-h-full. Constrains child elements to specific percentages of their parent container.

```html
<div class="h-96 ...">
  <div class="h-full max-h-9/10 ...">max-h-9/10</div>
  <div class="h-full max-h-3/4 ...">max-h-3/4</div>
  <div class="h-full max-h-1/2 ...">max-h-1/2</div>
  <div class="h-full max-h-1/4 ...">max-h-1/4</div>
  <div class="h-full max-h-full ...">max-h-full</div>
</div>
```

--------------------------------

### Configure Tailwind CSS Vite Plugin in Qwik

Source: https://tailwindcss.com/docs/installation/framework-guides/qwik

Adds the `@tailwindcss/vite` plugin to the `vite.config.ts` file in a Qwik project. This integration enables Vite to process Tailwind CSS during the build process, ensuring proper styling.

```typescript
import { defineConfig } from 'vite'import { qwikVite } from "@builder.io/qwik/optimizer";import { qwikCity } from "@builder.io/qwik-city/vite";// …import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }): UserConfig => {
  return {
    plugins: [
      tailwindcss(),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
    ],
    // …
  }
})
```

--------------------------------

### Align items to start with Tailwind CSS

Source: https://tailwindcss.com/docs/align-items

Use the items-start utility to align flex items to the start of the container's cross axis. This positions items at the top of a flex container with column direction.

```html
<div class="flex items-start ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
```

--------------------------------

### Install Tailwind CSS dependencies via npm

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Install the required npm packages for Tailwind CSS integration with Laravel. This includes the main tailwindcss package, the PostCSS plugin, and PostCSS itself as peer dependencies.

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

--------------------------------

### Implement Responsive Columns with Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example shows how to apply different column configurations based on screen size using Tailwind CSS responsive variants. The layout changes from 2 columns with `gap-4` to 3 columns with `gap-8` on small screens and above.

```html
<div class="columns-2 gap-4 sm:columns-3 sm:gap-8 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... --></div>
```

--------------------------------

### HTML Template with Tailwind Utilities

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Basic HTML template linking compiled CSS and demonstrating Tailwind utility classes (text-3xl, font-bold, underline). The stylesheet must be linked in the head for styles to apply.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./index.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

--------------------------------

### Apply Tailwind CSS mask-radial-from for radial mask gradient start

Source: https://tailwindcss.com/docs/mask-image

These Tailwind CSS utilities create a radial gradient mask with `mask-image` where the gradient starts from a specified point. They utilize custom CSS variables for shape, size, and position, allowing dynamic control over the gradient's appearance. The start point can be a number, percentage, color, custom CSS property, or a generic CSS value.

```css
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black calc(var(--spacing) * <number>), transparent var(--tw-mask-radial-to));
```

```css
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black <percentage>, transparent var(--tw-mask-radial-to));
```

```css
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), <color> var(--tw-mask-radial-from), transparent var(--tw-mask-radial-to));
```

```css
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black var(<custom-property>), transparent var(--tw-mask-radial-to));
```

```css
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black <value>, transparent var(--tw-mask-radial-to));
```

--------------------------------

### Apply Single-Side Linear Gradient Masks with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

These examples show how to use Tailwind CSS utilities like `mask-t-from-50%`, `mask-r-from-30%`, `mask-l-from-50% mask-l-to-90%`, and `mask-b-from-20% mask-b-to-80%` to apply linear gradient masks to individual edges (top, right, left, bottom) of an element. The masks create a gradient effect from black to transparent, controlling the start and end points.

```html
<div class="mask-t-from-50% bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-r-from-30% bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-l-from-50% mask-l-to-90% bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-b-from-20% mask-b-to-80% bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Install Tailwind CSS and PostCSS dependencies via npm

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

This command installs the core Tailwind CSS package, its PostCSS plugin (`@tailwindcss/postcss`), and essential PostCSS peer dependencies (`postcss`, `postcss-load-config`). These packages are required for Tailwind CSS to process and generate utility classes within a Meteor project.

```bash
npm install tailwindcss @tailwindcss/postcss postcss postcss-load-config
```

--------------------------------

### place-self-start - Align item to start position

Source: https://tailwindcss.com/docs/place-self

Aligns an item to the start on both horizontal and vertical axes. Useful for positioning grid items at the beginning of their cells in both directions.

```html
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-start ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

--------------------------------

### Conditionally Hide Content Based on Viewport Orientation

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Uses portrait and landscape variants to show or hide content based on device orientation. This example displays a landscape-only message when the viewport is in portrait mode, useful for guiding users to rotate their device.

```html
<div>
  <div class="portrait:hidden">
  </div>
  <div class="landscape:hidden">
    <p>This experience is designed to be viewed in landscape. Please rotate your device to view the site.</p>
  </div>
</div>
```

--------------------------------

### Pinning Elements with Tailwind CSS Inset Utilities (HTML)

Source: https://tailwindcss.com/docs/top-right-bottom-left

This example demonstrates how to use `top`, `right`, `bottom`, `left`, and `inset` utilities in Tailwind CSS to position elements absolutely within a relative parent. It shows various pinning scenarios like top-left, spanning edges, and filling the parent, providing fine-grained control over element placement.

```html
<!-- Pin to top left corner -->
<div class="relative size-32 ...">
  <div class="absolute top-0 left-0 size-16 ...">01</div>
</div>
<!-- Span top edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>
<!-- Pin to top right corner -->
<div class="relative size-32 ...">
  <div class="absolute top-0 right-0 size-16 ...">03</div>
</div>
<!-- Span left edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>
<!-- Fill entire parent -->
<div class="relative size-32 ...">
  <div class="absolute inset-0 ...">05</div>
</div>
<!-- Span right edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>
<!-- Pin to bottom left corner -->
<div class="relative size-32 ...">
  <div class="absolute bottom-0 left-0 size-16 ...">07</div>
</div>
<!-- Span bottom edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>
<!-- Pin to bottom right corner -->
<div class="relative size-32 ...">
  <div class="absolute right-0 bottom-0 size-16 ...">09</div>
</div>
```

--------------------------------

### Understand Default Tailwind CSS Import Structure (CSS)

Source: https://tailwindcss.com/docs/preflight

This CSS example shows the default imports generated by `@import "tailwindcss";`. It explicitly outlines how `theme`, `base` (Preflight), `components`, and `utilities` layers are loaded, providing context for individual module imports.

```css
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css" layer(utilities);
```

--------------------------------

### Static Contributors List with Repeated Avatar Classes

Source: https://tailwindcss.com/docs/styling-with-utility-classes

HTML example showing a contributors section with multiple avatar images. Demonstrates the pattern of repeated utility classes across similar elements when not using loops or components.

```html
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

--------------------------------

### align-self Start Alignment - HTML

Source: https://tailwindcss.com/docs/align-self

Shows how to use the self-start utility to align an item to the start of the container's cross axis, overriding the container's align-items value. Useful for positioning items independently within flex containers.

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-start ...">02</div>
  <div>03</div>
</div>
```

--------------------------------

### Apply responsive Tailwind CSS background blend modes

Source: https://tailwindcss.com/docs/background-blend-mode

This example illustrates how to apply `background-blend-mode` utilities conditionally based on screen size using Tailwind CSS responsive variants. The `bg-blend-lighten` utility is applied by default, and `md:bg-blend-darken` overrides it for medium screen sizes and above, demonstrating adaptive styling for different viewports.

```html
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-lighten md:bg-blend-darken ...">  <!-- ... --></div>
```

--------------------------------

### Apply Prefix to Tailwind CSS Theme and Utilities (CSS)

Source: https://tailwindcss.com/docs/preflight

This CSS example shows how to apply a prefix, such as `prefix(tw)`, to both `tailwindcss/theme.css` and `tailwindcss/utilities.css` imports. Using a prefix affects the generated utility classes and theme variables, preventing naming conflicts in mixed environments.

```css
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import "tailwindcss/theme.css" layer(theme) prefix(tw);
@import "tailwindcss/utilities.css" layer(utilities) prefix(tw);
```

--------------------------------

### Responsive break-before with breakpoint variants

Source: https://tailwindcss.com/docs/break-before

Use breakpoint prefixes like md: to apply break-before utilities conditionally at different screen sizes. This example shows break-before-column on mobile and break-before-auto on medium screens and above.

```html
<div class="break-before-column md:break-before-auto ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Styles for Open Details Element in HTML

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This HTML example uses the `open:` variant to conditionally style a `<details>` element when it is in an open state. It applies a border and background color change when the disclosure is expanded.

```html
<details class="border border-transparent open:border-black/10 open:bg-gray-100 ..." open>  <summary class="text-sm leading-6 font-semibold text-gray-900 select-none">Why do they call it Ovaltine?</summary>  <div class="mt-3 text-sm leading-6 text-gray-600">    <p>The mug is round. The jar is round. They should call it Roundtine.</p>  </div></details>
```

--------------------------------

### Configure Vite Plugin for Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/sveltekit

Add the @tailwindcss/vite plugin to your Vite configuration file. This integrates Tailwind CSS processing into the SvelteKit build pipeline and enables Tailwind CSS functionality.

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
  ],
});
```

--------------------------------

### Apply Tailwind CSS skew with custom and variable values

Source: https://tailwindcss.com/docs/skew

This example demonstrates applying a skew transformation using a completely custom value with `skew-[<value>]` syntax, such as `skew-[3.142rad]`. It also shows how to use a CSS variable with `skew-(<custom-property>)` syntax for dynamic values.

```html
<img class="skew-[3.142rad] ..." src="/img/mountains.jpg" />
```

```html
<img class="skew-(--my-skew) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Import global CSS into Gatsby browser entry

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Creates or updates `gatsby-browser.js` at the root of the project to import `./src/styles/global.css`, ensuring the global styles, including Tailwind CSS, are loaded by Gatsby in the browser.

```JavaScript
import './src/styles/global.css';
```

--------------------------------

### Import Styles with @reference in Vue/Svelte/CSS Modules for Tailwind CSS v4

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4, separate stylesheets (e.g., Vue `<style>` blocks, CSS modules) lack direct access to external theme definitions. This example shows how to use the `@reference` directive to import these definitions without duplicating CSS in the final bundle. This makes custom utilities, variables, and variants available in isolated contexts.

```Vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  @reference "../../app.css";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
```

--------------------------------

### Align grid item to start with Tailwind CSS justify-self-start

Source: https://tailwindcss.com/docs/justify-self

This HTML snippet shows how to align a grid item to the start of its inline axis using the `justify-self-start` utility class in Tailwind CSS. The `div` with this class will position itself at the beginning of its grid cell. This requires a parent `div` with `display: grid` and `justify-items-stretch`.

```html
<div class="grid justify-items-stretch ...">  <!-- ... -->  <div class="justify-self-start ...">02</div>  <!-- ... --></div>
```

--------------------------------

### Using CSS Variables for Tailwind CSS Inset (HTML)

Source: https://tailwindcss.com/docs/top-right-bottom-left

This example demonstrates how to leverage CSS variables within Tailwind CSS positioning utilities using the `inset-(<custom-property>)` syntax. This allows dynamic control over positioning through custom properties, promoting reusability and maintainability.

```html
<div class="inset-(--my-position) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Cursor Styles with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/cursor

Demonstrates how to use responsive prefixes, such as `md:`, with Tailwind CSS cursor utilities to apply different cursor styles based on screen size. In this example, the cursor is `not-allowed` by default and changes to `auto` from medium screen sizes and above. This allows for adaptable user interfaces across various devices.

```html
<button class="cursor-not-allowed md:cursor-auto ...">  <!-- ... --></button>
```

--------------------------------

### Conic Gradient Backgrounds

Source: https://tailwindcss.com/docs/background-image

Utilities for applying conic gradients as an element's background image, with options for custom starting angles and integration with color stop utilities.

```APIDOC
## Utility: Conic Gradients

### Description
These utilities apply a conic gradient to an element's background, creating a color transition around a central point. They support various starting angles.

### Method
Apply CSS Class

### Endpoint
N/A (Applies to HTML elements)

### Parameters
#### Utility Classes
- **`bg-conic-<angle>`** (angle) - Sets `background-image: conic-gradient(from <angle> in oklab, var(--tw-gradient-stops));`
- **`-bg-conic-<angle>`** (angle) - Sets `background-image: conic-gradient(from -<angle> in oklab, var(--tw-gradient-stops));`
- **`bg-conic-(<custom-property>)`** (string) - Sets `background-image: var(<custom-property>);`
- **`bg-conic-[<value>]`** (string) - Sets `background-image: <value>;`

### Request Example
```html
<div class="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
<div class="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
```

### Response
#### Resulting CSS
```css
.bg-conic {
  background-image: conic-gradient(from 0deg in oklab, var(--tw-gradient-stops)); /* Default for bg-conic */
}
.bg-conic-180 {
  background-image: conic-gradient(from 180deg in oklab, var(--tw-gradient-stops));
}
```
#### Description
The element will display a conic gradient background, with colors rotating around a central point from a specified angle.
```

--------------------------------

### Apply Tailwind CSS utility classes in HTML

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Demonstrates the use of Tailwind CSS utility classes directly within an HTML template (`index.html.heex`) to style an element. This shows how to leverage Tailwind's class-based styling system.

```html
<h1 class="text-3xl font-bold underline">
  Hello world!</h1>
```

--------------------------------

### Update Phoenix deployment alias for Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Modifies the `assets.deploy` alias in `mix.exs` to include Tailwind CSS compilation with minification, ensuring assets are built correctly and efficiently during deployment.

```elixir
defp aliases do  [
    # …
    "assets.deploy": [
      "tailwind myproject --minify",
      "esbuild myproject --minify",
      "phx.digest"
    ]
  ]end
```

--------------------------------

### Apply opacity with responsive variants

Source: https://tailwindcss.com/docs/opacity

Use breakpoint prefixes like md: to apply opacity utilities only at specific screen sizes and above. This example applies opacity-50 on mobile and opacity-100 on medium screens and larger.

```html
<button class="opacity-50 md:opacity-100 ...">  <!-- ... --></button>
```

--------------------------------

### Apply responsive box-sizing with breakpoint variant

Source: https://tailwindcss.com/docs/box-sizing

Use breakpoint variants like md: to apply box-sizing utilities at specific screen sizes. This example uses box-content on mobile and switches to box-border on medium screens and above.

```html
<div class="box-content md:box-border ...">  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS background blend modes for basic effects

Source: https://tailwindcss.com/docs/background-blend-mode

This example demonstrates how to apply various Tailwind CSS `bg-blend-*` utilities such as `bg-blend-multiply`, `bg-blend-soft-light`, and `bg-blend-overlay` to an element. It uses a background image and a solid background color to showcase the blending effects between them, altering the visual composition.

```html
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-multiply ..."></div><div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-soft-light ..."></div><div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-overlay ..."></div>
```

--------------------------------

### Use At-Rules in Arbitrary Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Arbitrary variants support at-rules like @media and @supports for conditional styling. This example applies grid layout only when the browser supports CSS Grid.

```html
<div class="flex [@supports(display:grid)]:grid">
  <!-- ... -->
</div>
```

--------------------------------

### Positioning with Tailwind CSS Logical Properties (HTML)

Source: https://tailwindcss.com/docs/top-right-bottom-left

This example demonstrates the use of `start-<number>` and `end-<number>` utilities in Tailwind CSS, which map to `inset-inline-start` and `inset-inline-end`. These logical properties adjust positioning based on the text direction (LTR/RTL), providing internationalization support.

```html
<div dir="ltr">
  <div class="relative size-32 ...">
    <div class="absolute start-0 top-0 size-14 ..."></div>
  </div>
  <div>
    <div dir="rtl">
      <div class="relative size-32 ...">
        <div class="absolute start-0 top-0 size-14 ..."></div>
      </div>
      <div></div>
    </div>
  </div>
</div>
```

--------------------------------

### Enable Tailwind CSS watcher in Phoenix development

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Adds a Tailwind CSS watcher to the `dev.exs` configuration, allowing for automatic recompilation of styles during development when source files change. This provides a live-reloading experience.

```elixir
watchers: [
  # Start the esbuild watcher by calling Esbuild.install_and_run(:default, args)
  esbuild: {Esbuild, :install_and_run, [:myproject, ~w(--sourcemap=inline --watch)]},
  tailwind: {Tailwind, :install_and_run, [:myproject, ~w(--watch)]}]
```

--------------------------------

### Enable Gatsby PostCSS plugin in gatsby-config.js

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Adds `gatsby-plugin-postcss` to the plugins array in `gatsby-config.js`, activating the PostCSS processing capabilities for Gatsby builds.

```JavaScript
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // ...
  ],
}
```

--------------------------------

### Basic Border Color Example with HTML

Source: https://tailwindcss.com/docs/border-color

Demonstrates applying border color utilities to HTML elements using Tailwind CSS classes. Shows how to use predefined color utilities like border-indigo-500, border-purple-500, and border-sky-500 with border-4 utility class.

```html
<div class="border-4 border-indigo-500 ..."></div>
<div class="border-4 border-purple-500 ..."></div>
<div class="border-4 border-sky-500 ..."></div>
```

--------------------------------

### Snap Start Alignment - Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-align

Snaps an element to the start of its scroll container using the snap-start utility class. Aligns elements to the beginning of the scroll area, useful for left-aligned galleries or lists. Apply to child elements within a snap-x container.

```html
<div class="snap-x ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

--------------------------------

### Apply Tailwind CSS mask-x-from for horizontal gradient mask start

Source: https://tailwindcss.com/docs/mask-image

These Tailwind CSS utilities create a horizontal linear gradient mask effect using `mask-image` that starts from a specified point. They combine gradients from the left and right, intersecting them to form a cohesive mask. The starting point can be defined by a number, percentage, color, custom CSS property, or a generic CSS value.

```css
mask-image: linear-gradient(to right, black calc(var(--spacing) * <number>), transparent var(--tw-mask-right-to)), linear-gradient(to left, black calc(var(--spacing) * <number>), transparent var(--tw-mask-left-to)); mask-composite: intersect;
```

```css
mask-image: linear-gradient(to right, black <percentage>, transparent var(--tw-mask-right-to)), linear-gradient(to left, black <percentage>, transparent var(--tw-mask-left-to)); mask-composite: intersect;
```

```css
mask-image: linear-gradient(to right, <color> var(--tw-mask-right-from), transparent var(--tw-mask-right-to)), linear-gradient(to left, <color> var(--tw-mask-left-from), transparent var(--tw-mask-left-to)); mask-composite: intersect;
```

```css
mask-image: linear-gradient(to right, black var(<custom-property>), transparent var(--tw-mask-right-to)), linear-gradient(to left, black var(<custom-property>), transparent var(--tw-mask-left-to)); mask-composite: intersect;
```

```css
mask-image: linear-gradient(to right, black <value>, transparent var(--tw-mask-right-to)), linear-gradient(to left, black <value>, transparent var(--tw-mask-left-to)); mask-composite: intersect;
```

--------------------------------

### Responsive object-position with Breakpoint Variants

Source: https://tailwindcss.com/docs/object-position

Apply object-position utilities responsively using breakpoint prefixes like md:, lg:, etc. This example centers the image by default and switches to top positioning at medium screen sizes and above.

```html
<img class="object-center md:object-top ..." src="/img/mountains.jpg" />
```

--------------------------------

### Configure Tailwind CSS PostCSS plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Creates or updates `postcss.config.js` to include `@tailwindcss/postcss` in the plugins section, ensuring that Tailwind CSS is processed by PostCSS during the build.

```JavaScript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

--------------------------------

### flex-initial Utility for Shrinking Items in Tailwind CSS

Source: https://tailwindcss.com/docs/flex

Shows how flex-initial allows flex items to shrink but not grow, respecting their initial size. Useful for items that should scale down on smaller screens but maintain their intended width when space is available.

```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-initial ...">02</div>
  <div class="w-32 flex-initial ...">03</div>
</div>
```

--------------------------------

### Basic break-after Column Layout Example

Source: https://tailwindcss.com/docs/break-after

Demonstrates using the break-after-column utility class within a multi-column layout to control where column breaks occur. Applied to a paragraph element to force a column break after it within a 2-column container.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

--------------------------------

### Animate with Tailwind CSS v4 Theme Variables in React JSX

Source: https://tailwindcss.com/docs/upgrade-guide

This example shows how to utilize Tailwind CSS v4's generated CSS variables directly within JavaScript frameworks like React. Using a library such as Motion, you can animate styles by referencing CSS variables like `--color-blue-500`, simplifying bundle size and integration. This approach replaces the v3 `resolveConfig` function.

```JSX
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />
```

--------------------------------

### Apply Tailwind CSS skew-x utilities to an element

Source: https://tailwindcss.com/docs/skew

This example demonstrates how to use `skew-x-<number>` utilities like `-skew-x-12`, `skew-x-6`, and `skew-x-12` to apply a skew transformation specifically along the x-axis of an element.

```html
<img class="-skew-x-12 ..." src="/img/mountains.jpg" /><img class="skew-x-6 ..." src="/img/mountains.jpg" /><img class="skew-x-12 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Custom Grid Row Values in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-row

This example shows how to use arbitrary value syntax with `row-[<value>]`, `row-span-[<value>]`, `row-start-[<value>]`, and `row-end-[<value>]` to set grid row properties using custom values in Tailwind CSS.

```html
<div class="row-[span_16_/_span_16] ...">  <!-- ... --></div>
```

--------------------------------

### Custom CSS variable flex-grow in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-grow

Example demonstrating the grow-(<custom-property>) syntax for using CSS custom properties with flex-grow. This is shorthand for grow-[var(<custom-property>)] and automatically wraps the variable with the var() function.

```html
<div class="grow-(--my-grow) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive mix-blend-mode in Tailwind CSS

Source: https://tailwindcss.com/docs/mix-blend-mode

This example demonstrates how to apply `mix-blend-mode` utilities conditionally using responsive variants in Tailwind CSS. By prefixing a utility with a breakpoint like `md:`, the blend mode will only apply at that screen size and above, changing from `mix-blend-multiply` to `md:mix-blend-overlay` on medium screens.

```html
<div class="mix-blend-multiply md:mix-blend-overlay ...">  <!-- ... --></div>
```

--------------------------------

### Basic mask-composite utilities HTML example

Source: https://tailwindcss.com/docs/mask-composite

Demonstrates the use of mask-composite utility classes (mask-add, mask-subtract, mask-intersect, mask-exclude) applied to div elements with multiple mask images and background images. Each class controls how the masks are combined together.

```html
<div class="mask-add mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
<div class="mask-subtract mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
<div class="mask-intersect mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
<div class="mask-exclude mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
```

--------------------------------

### Configure Rspack PostCSS Loader

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/react

Enable PostCSS loader in rspack.config.js to process CSS files with PostCSS plugins. This configuration routes all .css files through the postcss-loader.

```typescript
export default defineConfig({
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
      // ...
    ],
  },
})
```

--------------------------------

### Responsive transition-timing-function utilities - HTML/Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Illustrates how to apply transition-timing-function utilities responsively using breakpoint variants like md:. The utility only applies at specified screen sizes and above.

```html
<button class="ease-out md:ease-in ...">  <!-- ... --></button>
```

--------------------------------

### Set Column Gap with Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example illustrates how to define the spacing between columns using Tailwind CSS's `gap-<width>` utilities. Here, a `gap-8` utility is applied along with `columns-3`.

```html
<div class="columns-3 gap-8 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS transition duration responsively

Source: https://tailwindcss.com/docs/transition-duration

Demonstrates how to make transition durations responsive by applying different durations based on screen size using breakpoint variants. For example, `md:duration-150` overrides a default `duration-0` on medium screens and above.

```html
<button class="duration-0 md:duration-150 ...">  <!-- ... --></button>
```

--------------------------------

### Apply Responsive Animations with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/animation

Control animation behavior at different screen sizes using responsive breakpoint variants like `md:`. This example applies `animate-none` by default and `animate-spin` only on medium screens and above, demonstrating responsive animation application.

```html
<div class="animate-none md:animate-spin ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive hyphenation in HTML with Tailwind CSS variants

Source: https://tailwindcss.com/docs/hyphens

This example demonstrates how to conditionally apply hyphenation utilities based on screen size using responsive prefixes. By combining `hyphens-none` with `md:hyphens-auto`, different hyphenation behaviors can be achieved across various breakpoints.

```html
<p class="hyphens-none md:hyphens-auto ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Responsive Grid Row Utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-row

This example illustrates how to apply grid row utilities conditionally based on screen size using breakpoint variants like `md:`, ensuring responsive behavior for elements in a Tailwind CSS layout.

```html
<div class="row-span-3 md:row-span-4 ...">  <!-- ... --></div>
```

--------------------------------

### Tailwind CSS: Handling Spaces in Arbitrary Content Values (`content-['Hello_World']`)

Source: https://tailwindcss.com/docs/content

This example shows how to use an underscore (`_`) to represent spaces within arbitrary `content-[...]` values in Tailwind CSS, as spaces normally denote the end of a class name. This ensures that multi-word phrases are correctly applied as content.

```html
<p class="before:content-['Hello_World'] ..."></p>
```

--------------------------------

### Set Linear Gradient Mask 'From' Position by Custom Property (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Sets the start position of the `black` part of a linear gradient mask using a custom CSS property. This allows for dynamic control over the gradient's starting point from `black` to `transparent`.

```css
mask-image: linear-gradient(var(--tw-mask-linear-position), black <custom-property>, transparent var(--tw-mask-linear-to));
```

--------------------------------

### Add Tailwind plugin dependency in Phoenix

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Adds the Tailwind plugin to the Phoenix project's dependencies in `mix.exs`. The plugin is configured to be active only in development environments, optimizing production builds.

```elixir
defp deps do  [
    # …
    {:tailwind, "~> 0.3", runtime: Mix.env() == :dev},
  ]end
```

--------------------------------

### Add global CSS file to nuxt.config.ts

Source: https://tailwindcss.com/docs/installation/framework-guides/nuxt

This configuration snippet extends the `nuxt.config.ts` file by adding the path to the global CSS file (`./app/assets/css/main.css`) to the `css` array. This ensures that the Tailwind CSS styles are globally applied across the Nuxt application.

```TypeScript
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
```

--------------------------------

### Apply responsive padding with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/padding

This example illustrates how to apply responsive padding using breakpoint variants in Tailwind CSS. By prefixing a padding utility with `md:`, like `md:py-8`, the style is applied only at medium screen sizes and above. This enables adaptive layouts that adjust spacing based on viewport size.

```html
<div class="py-4 md:py-8 ...">  <!-- ... --></div>
```

--------------------------------

### Configure PostCSS for Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

Creates a `.postcssrc.json` file in the project root to configure PostCSS plugins. It enables the `@tailwindcss/postcss` plugin, allowing PostCSS to process Tailwind CSS directives.

```JSON
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

--------------------------------

### Apply Tailwind CSS skew utilities to an element

Source: https://tailwindcss.com/docs/skew

This example demonstrates how to use `skew-<number>` utilities like `skew-3`, `skew-6`, and `skew-12` to apply a skew transformation on both the x and y axes of an element.

```html
<img class="skew-3 ..." src="/img/mountains.jpg" /><img class="skew-6 ..." src="/img/mountains.jpg" /><img class="skew-12 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Border Inline Start Color - Stone Palette in Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Applies border-inline-start-color to the starting edge of an element using stone color variants. Uses CSS custom properties with OKLCH color space values ranging from stone-100 (light) to stone-950 (dark). Supports custom properties and arbitrary values for extended color control.

```css
.border-s-stone-100 {
  border-inline-start-color: var(--color-stone-100);
  /* oklch(97% 0.001 106.424) */
}

.border-s-stone-200 {
  border-inline-start-color: var(--color-stone-200);
  /* oklch(92.3% 0.003 48.717) */
}

.border-s-stone-300 {
  border-inline-start-color: var(--color-stone-300);
  /* oklch(86.9% 0.005 56.366) */
}

.border-s-stone-400 {
  border-inline-start-color: var(--color-stone-400);
  /* oklch(70.9% 0.01 56.259) */
}

.border-s-stone-500 {
  border-inline-start-color: var(--color-stone-500);
  /* oklch(55.3% 0.013 58.071) */
}

.border-s-stone-600 {
  border-inline-start-color: var(--color-stone-600);
  /* oklch(44.4% 0.011 73.639) */
}

.border-s-stone-700 {
  border-inline-start-color: var(--color-stone-700);
  /* oklch(37.4% 0.01 67.558) */
}

.border-s-stone-800 {
  border-inline-start-color: var(--color-stone-800);
  /* oklch(26.8% 0.007 34.298) */
}

.border-s-stone-900 {
  border-inline-start-color: var(--color-stone-900);
  /* oklch(21.6% 0.006 56.043) */
}

.border-s-stone-950 {
  border-inline-start-color: var(--color-stone-950);
  /* oklch(14.7% 0.004 49.25) */
}
```

--------------------------------

### Apply responsive gaps in Tailwind CSS

Source: https://tailwindcss.com/docs/gap

Explains how to use responsive prefixes like `md:` with `gap` utilities to apply different gap sizes based on screen breakpoints. For example, `md:gap-6` will set a larger gap for medium screens and above, overriding the default `gap-4`.

```html
<div class="grid gap-4 md:gap-6 ...">  <!-- ... --></div>
```

--------------------------------

### Apply normal white-space with Tailwind CSS

Source: https://tailwindcss.com/docs/white-space

Use the `whitespace-normal` utility to allow text to wrap normally within an element. Newlines and spaces will be collapsed. This example shows text in a paragraph element.

```html
<p class="whitespace-normal">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

--------------------------------

### Implement Responsive Flex Shrink with Tailwind CSS

Source: https://tailwindcss.com/docs/flex-shrink

Shows how to apply responsive behavior to the `flex-shrink` utility by using breakpoint variants like `md:`, allowing different shrink behaviors based on screen size.

```html
<div class="shrink md:shrink-0 ...">  <!-- ... --></div>
```

--------------------------------

### Apply custom saturation filter with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-saturate

Shows how to use arbitrary values with the `saturate-[<value>]` syntax to apply a specific, custom saturation level (e.g., 25%) to an image. This allows for fine-grained control beyond predefined utility classes.

```html
<img class="saturate-[.25] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Import Tailwind CSS into main stylesheet

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

Adds an `@import` statement to the `src/styles.css` file. This line imports all of Tailwind CSS's base styles, components, and utilities into the project.

```CSS
@import "tailwindcss";
```

--------------------------------

### Apply Responsive mask-clip Utility in HTML

Source: https://tailwindcss.com/docs/mask-clip

This example shows how to apply `mask-clip` utilities conditionally based on screen size using responsive variants in Tailwind CSS. The `md:` prefix ensures that `mask-clip-padding` is applied only at medium screen sizes and above, overriding the default `mask-clip-border`.

```html
<div class="mask-clip-border md:mask-clip-padding ...">  <!-- ... --></div>
```

--------------------------------

### Preserve white-space and newlines with Tailwind CSS `pre`

Source: https://tailwindcss.com/docs/white-space

Use the `whitespace-pre` utility to preserve newlines and spaces within an element, similar to the `<pre>` HTML tag. Text will not be wrapped. This example includes `overflow-auto`.

```html
<p class="overflow-auto whitespace-pre">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

--------------------------------

### Responsive appearance utility with breakpoint variant

Source: https://tailwindcss.com/docs/appearance

Apply appearance utilities conditionally at different screen sizes using breakpoint variants like md:. This example applies appearance-auto at medium screen sizes and above.

```html
<select class="appearance-auto md:appearance-none ...">
  <!-- ... -->
</select>
```

--------------------------------

### Use Tailwind CSS classes in Astro component

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Demonstrates how to apply Tailwind utility classes directly within an Astro component, such as `index.astro`. Ensure the global stylesheet is imported to make the classes effective for styling your content.

```astro
---import "../styles/global.css";---
<h1 class="text-3xl font-bold underline">
  Hello world!</h1>
```

--------------------------------

### Use responsive breakpoint variant with background-attachment

Source: https://tailwindcss.com/docs/background-attachment

Combine background-attachment utilities with Tailwind breakpoint prefixes to apply different attachment behaviors at different screen sizes. In this example, the background uses bg-local on small screens and switches to bg-fixed on medium screens and above.

```html
<div class="bg-local md:bg-fixed ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive Tailwind CSS touch-action utilities

Source: https://tailwindcss.com/docs/touch-action

This example illustrates how to apply `touch-action` utilities responsively using Tailwind CSS breakpoint variants. The `md:touch-auto` class ensures that the `touch-auto` behavior is only applied to the element at medium screen sizes and above, overriding the default `touch-pan-x` behavior for smaller screens.

```html
<div class="touch-pan-x md:touch-auto ...">  <!-- ... --></div>
```

--------------------------------

### Responsive mask-composite with breakpoint variant

Source: https://tailwindcss.com/docs/mask-composite

Shows how to apply mask-composite utilities conditionally at different screen sizes using Tailwind breakpoint prefixes. The example applies mask-add by default and switches to mask-subtract at medium screen sizes and above.

```html
<div class="mask-add md:mask-subtract ..."><!-- ... --></div>
```

--------------------------------

### Apply Responsive Outline Color with Breakpoints

Source: https://tailwindcss.com/docs/outline-color

Use breakpoint variants like `md:` to apply outline color utilities conditionally at specific screen sizes. The example applies outline at medium breakpoint and above.

```html
<div class="outline md:outline-blue-400 ...">  <!-- ... --></div>
```

--------------------------------

### Sticky Positioning with Tailwind CSS

Source: https://tailwindcss.com/docs/position

Shows how to use the `sticky` utility for hybrid positioning behavior: elements start as relatively positioned and switch to fixed positioning when crossing a specified threshold. Offsets are calculated relative to the element's normal position.

```html
<div>
  <div>
    <div class="sticky top-0 ...">A</div>
    <div>
      <div>
        <img src="/img/andrew.jpg" />
        <strong>Andrew Alfred</strong>
      </div>
      <div>
        <img src="/img/aisha.jpg" />
        <strong>Aisha Houston</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <div>
    <div class="sticky top-0">B</div>
    <div>
      <div>
        <img src="/img/bob.jpg" />
        <strong>Bob Alfred</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Text Decoration Thickness in Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-thickness

This example demonstrates how to make text decoration thickness responsive using Tailwind CSS breakpoint variants. By prefixing a utility like `md:decoration-4`, the thickness is applied only at medium screen sizes and above, adapting to different device viewports.

```html
<p class="underline md:decoration-4 ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Configure Tailwind CSS Vite plugin in AdonisJS

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Adds the `@tailwindcss/vite` plugin to your `vite.config.ts` file. This configures Vite to process Tailwind CSS during the build process for your AdonisJS project.

```typescript
import { defineConfig } from 'vite'import adonisjs from '@adonisjs/vite/client'import tailwindcss from '@tailwindcss/vite'export default defineConfig({
  plugins: [
    tailwindcss(),
    adonisjs({
      // …
    }),
  ],
})
```

--------------------------------

### Apply Accent Color on Hover State in Tailwind

Source: https://tailwindcss.com/docs/accent-color

Use state variants like hover: to conditionally apply accent color utilities. This example shows a checkbox that changes from black to pink-500 on hover.

```html
<input class="accent-black hover:accent-pink-500" type="checkbox" />
```

--------------------------------

### Prevent text wrapping with Tailwind CSS

Source: https://tailwindcss.com/docs/white-space

Use the `whitespace-nowrap` utility to prevent text from wrapping within an element. Newlines and spaces will be collapsed. This example also includes `overflow-auto` for handling overflow.

```html
<p class="overflow-auto whitespace-nowrap">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

--------------------------------

### Apply Tailwind CSS line-clamp with a custom CSS variable

Source: https://tailwindcss.com/docs/line-clamp

This HTML example demonstrates using a custom CSS property (variable) with the `line-clamp-(<custom-property>)` syntax. This shorthand simplifies applying line clamping based on a defined CSS variable like `--my-line-count`.

```html
<p class="line-clamp-(--my-line-count) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Tailwind CSS skew-y utilities to an element

Source: https://tailwindcss.com/docs/skew

This example shows how to use `skew-y-<number>` utilities like `-skew-y-12`, `skew-y-6`, and `skew-y-12` to apply a skew transformation specifically along the y-axis of an element.

```html
<img class="-skew-y-12 ..." src="/img/mountains.jpg" /><img class="skew-y-6 ..." src="/img/mountains.jpg" /><img class="skew-y-12 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Align Text with Logical Properties in Tailwind CSS

Source: https://tailwindcss.com/docs/text-align

Demonstrates the use of `text-start` and `text-end` utilities, which map to left or right alignment based on the text direction (e.g., `dir="rtl"`). This example uses `text-end` within a right-to-left context.

```html
<div dir="rtl" lang="ar">  <p class="text-end">فبدأت بالسير نحو الماء...</p></div>
```

--------------------------------

### Apply box-decoration-break responsively with Tailwind CSS

Source: https://tailwindcss.com/docs/box-decoration-break

This example shows how to apply `box-decoration-break` utilities conditionally based on screen size using responsive prefixes in Tailwind CSS. The `md:box-decoration-slice` class ensures the `slice` behavior is only applied on medium screens and above, overriding the default `box-decoration-clone`.

```html
<div class="box-decoration-clone md:box-decoration-slice ...">  <!-- ... --></div>
```

--------------------------------

### Create a Responsive User Profile Card with Interactive Button

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This HTML code illustrates building a responsive user profile card component entirely with Tailwind CSS utility classes. It highlights responsive design using `sm:` prefixes for breakpoint-specific styling, implements interactive states like `hover:` and `active:` for a button, and utilizes common layout and text utilities to create a dynamic profile display.

```html
<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />  <div class="space-y-2 text-center sm:text-left">    <div class="space-y-0.5">      <p class="text-lg font-semibold text-black">Erin Lindford</p>      <p class="font-medium text-gray-500">Product Engineer</p>    </div>    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">      Message    </button>  </div></div>
```

--------------------------------

### Basic grid-auto-rows with predefined utilities

Source: https://tailwindcss.com/docs/grid-auto-rows

Demonstrates using Tailwind CSS utilities like auto-rows-min and auto-rows-max to control the size of implicitly-created grid rows. The example creates a grid with three items where rows automatically size to their content maximum.

```html
<div class="grid grid-flow-row auto-rows-max">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Responsive Flex Utilities with Breakpoint Variants in Tailwind CSS

Source: https://tailwindcss.com/docs/flex

Demonstrates applying different flex utilities at specific breakpoints using md: prefix. Allows flex items to have different sizing behavior at different screen sizes for responsive design.

```html
<div class="flex-none md:flex-1 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Basic break-inside HTML Example

Source: https://tailwindcss.com/docs/break-inside

Demonstrates using break-inside utility classes to control column breaking behavior within a multi-column layout. The break-inside-avoid-column class prevents the second paragraph from breaking across columns.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

--------------------------------

### Set basic transform origin in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/transform-origin

This example demonstrates how to use basic `origin-*` utility classes like `origin-center`, `origin-top-left`, and `origin-bottom` to define the pivot point for transformations on `<img>` elements.

```html
<img class="origin-center rotate-45 ..." src="/img/mountains.jpg" /><img class="origin-top-left rotate-12 ..." src="/img/mountains.jpg" /><img class="origin-bottom -rotate-12 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Set Top-Direction Mask 'From' Color (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts with a specified color at `--tw-mask-top-from` and transitions to `transparent` at `--tw-mask-top-to`.

```css
mask-image: linear-gradient(to top, <color> var(--tw-mask-top-from), transparent var(--tw-mask-top-to));
```

--------------------------------

### Responsive align-items with Tailwind CSS breakpoint variants

Source: https://tailwindcss.com/docs/align-items

Apply align-items utilities responsively by prefixing with breakpoint variants like md:. This example stretches items by default and centers them at medium screen sizes and above.

```html
<div class="flex items-stretch md:items-center ...">
  <!-- ... -->
</div>
```

--------------------------------

### Set Right-Direction Mask 'From' Color (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts with a specified color at `--tw-mask-right-from` and transitions to `transparent` at `--tw-mask-right-to`.

```css
mask-image: linear-gradient(to right, <color> var(--tw-mask-right-from), transparent var(--tw-mask-right-to));
```

--------------------------------

### Set Right-Direction Mask 'From' Position by Percentage (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at a specified percentage and transitions to `transparent` at `--tw-mask-right-to`.

```css
mask-image: linear-gradient(to right, black <percentage>, transparent var(--tw-mask-right-to));
```

--------------------------------

### Set Top-Direction Mask 'From' Position by Percentage (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at a specified percentage and transitions to `transparent` at `--tw-mask-top-to`.

```css
mask-image: linear-gradient(to top, black <percentage>, transparent var(--tw-mask-top-to));
```

--------------------------------

### Border Inline Start Color - Custom Properties and Arbitrary Values

Source: https://tailwindcss.com/docs/border-color

Extends border-inline-start-color styling with support for custom CSS properties and arbitrary values, enabling dynamic color assignment and inline value specification beyond predefined palettes.

```css
.border-s-(<custom-property>) {
  border-inline-start-color: var(<custom-property>);
}

.border-s-[<value>] {
  border-inline-start-color: <value>;
}
```

--------------------------------

### Implement Responsive Blur Filters in HTML with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/filter-blur

This example shows how to conditionally apply blur filters based on screen size using Tailwind CSS's responsive prefixes. The `md:blur-lg` utility ensures that the `blur-lg` effect is only active on medium screen sizes and larger, allowing for adaptive designs.

```html
<img class="blur-none md:blur-lg ..." src="/img/mountains.jpg" />
```

--------------------------------

### Remove all default and define custom Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/responsive-design

This CSS example shows how to remove all default breakpoints by setting `--breakpoint-*: initial` and then define a completely new set of custom breakpoints (e.g., `tablet`, `laptop`, `desktop`). This approach provides full control over the responsive grid system, allowing developers to tailor it precisely to project requirements from scratch. Remember to use consistent units.

```css
@import "tailwindcss";@theme {  --breakpoint-*: initial;  --breakpoint-tablet: 40rem;  --breakpoint-laptop: 64rem;  --breakpoint-desktop: 80rem;}
```

--------------------------------

### Responsive transition-behavior with breakpoint variant

Source: https://tailwindcss.com/docs/transition-behavior

Shows how to apply transition-behavior utilities with responsive breakpoint prefixes. Uses md: prefix to apply transition-normal at medium screen sizes and above, with transition-discrete as the default for smaller screens.

```html
<button class="transition-discrete md:transition-normal ...">
  <!-- ... -->
</button>
```

--------------------------------

### Set Right-Direction Mask 'To' Position by Percentage (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at `--tw-mask-right-from` and transitions to `transparent` at a specified percentage.

```css
mask-image: linear-gradient(to right, black var(--tw-mask-right-from), transparent <percentage>);
```

--------------------------------

### Set Top-Direction Mask 'To' Position by Percentage (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at `--tw-mask-top-from` and transitions to `transparent` at a specified percentage.

```css
mask-image: linear-gradient(to top, black var(--tw-mask-top-from), transparent <percentage>);
```

--------------------------------

### Set Right-Direction Mask 'To' Color (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at `--tw-mask-right-from` and transitions to a specified color at `--tw-mask-right-to`.

```css
mask-image: linear-gradient(to right, black var(--tw-mask-right-from), <color> var(--tw-mask-right-to));
```

--------------------------------

### Create Responsive Layouts with Tailwind CSS (HTML)

Source: https://tailwindcss.com/docs/responsive-design

This comprehensive example showcases a marketing page component that adapts its layout from stacked on small screens to side-by-side on larger screens. It utilizes Tailwind's responsive utilities like `md:flex` and `md:shrink-0` to control flex behavior and element sizing at different breakpoints, demonstrating the power of a mobile-first design strategy.

```HTML
<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">  <div class="md:flex">    <div class="md:shrink-0">      <img        class="h-48 w-full object-cover md:h-full md:w-48"        src="/img/building.jpg"        alt="Modern building architecture"      />    </div>    <div class="p-8">      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">        Incredible accommodation for your team      </a>      <p class="mt-2 text-gray-500">        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of        places to do just that.      </p>    </div>  </div></div>
```

--------------------------------

### Apply Tailwind CSS Contrast Using CSS Variables

Source: https://tailwindcss.com/docs/filter-contrast

This example shows how to use CSS custom properties (variables) with Tailwind CSS's contrast utility. The `contrast-(<custom-property>)` syntax allows dynamic contrast values to be pulled from a CSS variable, automatically wrapping the variable name in `var()`.

```html
<img class="contrast-(--my-contrast) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Set Top-Direction Mask 'To' Color (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at `--tw-mask-top-from` and transitions to a specified color at `--tw-mask-top-to`.

```css
mask-image: linear-gradient(to top, black var(--tw-mask-top-from), <color> var(--tw-mask-top-to));
```

--------------------------------

### Apply Styles Based on Specific Data Attribute Value in HTML

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This HTML example demonstrates using an arbitrary `data-[attribute=value]` variant to apply styles when a data attribute matches a specific value. The `data-[size=large]:p-8` class applies padding only when `data-size` is 'large'.

```html
<!-- Will apply --><div data-size="large" class="data-[size=large]:p-8">  <!-- ... --></div><!-- Will not apply --><div data-size="medium" class="data-[size=large]:p-8">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Border Width with Breakpoint Variants

Source: https://tailwindcss.com/docs/border-width

Prefix border-width utilities with breakpoint variants like md: to apply borders only at specific screen sizes and above. This example applies a 2px border by default and increases to 4px on medium screens and larger.

```html
<div class="border-2 md:border-t-4 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Handle Outline-Color Transitions - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

The transition and transition-colors utilities now include outline-color property. Set outline color unconditionally or explicitly for both states to prevent color transitions from default.

```html
<button class="outline-cyan-500 transition hover:outline-2"></button>
```

--------------------------------

### Render Repeated Elements with Loops in Tailwind

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Svelte template example using a loop to render repeated avatar images with Tailwind utility classes. Demonstrates that apparent duplication is avoided by rendering markup in loops where class lists are authored once.

```html
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.avatarUrl} alt={user.handle} />
    {/each}
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

--------------------------------

### Custom transition-timing-function with arbitrary values - HTML/Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Shows how to use the ease-[<value>] syntax to apply completely custom cubic-bezier timing functions. This allows for fine-grained control over transition easing beyond the predefined utilities.

```html
<button class="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ...">  <!-- ... --></button>
```

--------------------------------

### Complex Arbitrary Grid Values with Inline Styles

Source: https://tailwindcss.com/docs/styling-with-utility-classes

HTML example showing inline styles for complicated CSS grid template columns with CSS variables and calculations. Demonstrates cases where arbitrary values are too complex to format as Tailwind class names.

```html
<div class="grid-[2fr_max(0,var(--gutter-width))_calc(var(--gutter-width)+10px)]">
  <div style="grid-template-columns: 2fr max(0, var(--gutter-width)) calc(var(--gutter-width) + 10px)">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Customize Tailwind CSS perspective theme variables

Source: https://tailwindcss.com/docs/perspective

Provides an example of how to extend the Tailwind CSS theme to define custom perspective utility values, making them available as new utility classes in your project's markup.

```css
@theme {  --perspective-remote: 1800px; }
```

--------------------------------

### Basic Tailwind CSS container query

Source: https://tailwindcss.com/docs/responsive-design

This HTML example shows how to use Tailwind CSS container queries for basic responsive styling within a component. By marking the parent with `@container`, child elements can use variants like `@md:flex-row` to change their layout based on the parent's width, making components more portable and reusable. This applies mobile-first, at the target container size and up.

```html
<div class="@container">  <div class="flex flex-col @md:flex-row">    <!-- ... -->  </div></div>
```

--------------------------------

### Apply Custom Maximum Width using CSS Variables in Tailwind CSS

Source: https://tailwindcss.com/docs/max-width

This example illustrates using `max-w-(<custom-property>)` syntax to apply a maximum width defined by a CSS variable. This is a shorthand for `max-w-[var(<custom-property>)]`, simplifying the use of dynamic values.

```html
<div class="max-w-(--my-max-width) ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive list-style-position with Tailwind CSS HTML

Source: https://tailwindcss.com/docs/list-style-position

This example illustrates how to make list-style-position responsive using Tailwind CSS. By prefixing the utility with a breakpoint variant like `md:`, the `list-inside` style is applied only on medium screens and above, overriding the default `list-outside`.

```html
<ul class="list-outside md:list-inside ...">  <!-- ... --></ul>
```

--------------------------------

### Responsive font-weight Design HTML

Source: https://tailwindcss.com/docs/font-weight

Illustrates applying different font weights at different breakpoints using Tailwind's responsive prefixes. The example shows font-normal at default screen size and font-bold at medium breakpoints (md:) and above, enabling adaptive typography.

```html
<p class="font-normal md:font-bold ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Tailwind CSS touch-action utilities for basic interactivity

Source: https://tailwindcss.com/docs/touch-action

This example demonstrates how to use various Tailwind CSS `touch-action` utilities like `touch-auto`, `touch-none`, `touch-pan-x`, and `touch-pan-y` to control scrolling and zooming behavior on different HTML `div` elements containing images. It shows how these classes prevent or allow specific touch gestures on touchscreens.

```html
<div class="h-48 w-full touch-auto overflow-auto ...">  <img class="h-auto w-[150%] max-w-none" src="..." /></div><div class="h-48 w-full touch-none overflow-auto ...">  <img class="h-auto w-[150%] max-w-none" src="..." /></div><div class="h-48 w-full touch-pan-x overflow-auto ...">  <img class="h-auto w-[150%] max-w-none" src="..." /></div><div class="h-48 w-full touch-pan-y overflow-auto ...">  <img class="h-auto w-[150%] max-w-none" src="..." /></div>
```

--------------------------------

### Responsive Overflow Utilities with Breakpoint Variants

Source: https://tailwindcss.com/docs/overflow

Prefix overflow utilities with breakpoint variants like md: to apply the utility only at specific screen sizes. This example applies overflow-auto by default and switches to overflow-scroll at medium breakpoints and above.

```html
<div class="overflow-auto md:overflow-scroll ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive backdrop contrast with breakpoint variants

Source: https://tailwindcss.com/docs/backdrop-filter-contrast

Use breakpoint prefixes like md: to apply backdrop-filter contrast utilities only at specific screen sizes. This example shows backdrop-contrast-125 on mobile and backdrop-contrast-150 at medium breakpoints and above.

```html
<div class="backdrop-contrast-125 md:backdrop-contrast-150 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Widths with Tailwind CSS (HTML)

Source: https://tailwindcss.com/docs/responsive-design

This example demonstrates how to apply different widths to an element at various breakpoints using Tailwind CSS utility classes. By prefixing utilities with breakpoint names (e.g., `md:`, `lg:`), styles are conditionally applied based on screen size, making it easy to create adaptive layouts.

```HTML
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens --><img class="w-16 md:w-32 lg:w-48" src="..." />
```

--------------------------------

### Apply percentage-based minimum height in HTML

Source: https://tailwindcss.com/docs/min-height

Use min-h-full or min-h-<fraction> utilities to set minimum heights as percentages of the parent container. Supports common fractions like 1/2, 1/3, 3/4, and 9/10.

```html
<div class="min-h-full ...">min-h-full</div>
<div class="min-h-9/10 ...">min-h-9/10</div>
<div class="min-h-3/4 ...">min-h-3/4</div>
<div class="min-h-1/2 ...">min-h-1/2</div>
<div class="min-h-1/3 ...">min-h-1/3</div>
```

--------------------------------

### align-content Responsive Design - Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

Applies align-content utilities conditionally at different breakpoints using breakpoint prefixes like md:. This example uses content-start on mobile and content-around on medium screens and above.

```html
<div class="grid content-start md:content-around ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply CSS Variable for Grid Row in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-row

This example demonstrates using a CSS variable with `row-(<custom-property>)` syntax to dynamically control grid row properties in Tailwind CSS, which is a shorthand for `row-[var(<custom-property>)]`.

```html
<div class="row-(--my-rows) ...">  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS utility classes in a React component

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Demonstrates the usage of Tailwind CSS utility classes like `text-3xl`, `font-bold`, and `underline` within a Gatsby React component to style text.

```JavaScript
export default function IndexPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )}

```

--------------------------------

### justify-items-end - Align grid items to end

Source: https://tailwindcss.com/docs/justify-items

Use the justify-items-end utility to align grid items against the end of their inline axis. The justify-items-end-safe variant will align items to the start if there is insufficient space.

```html
<div class="grid grid-flow-col justify-items-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

```html
<div class="grid grid-flow-col justify-items-end-safe ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Basic backdrop-invert HTML Example

Source: https://tailwindcss.com/docs/backdrop-filter-invert

Demonstrates how to use the backdrop-invert utility classes (backdrop-invert-0, backdrop-invert-65, backdrop-invert) to control the color inversion of an element's backdrop. Each div shows different levels of inversion applied to the same background image.

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert-0 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert-65 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert ..."></div>
</div>
```

--------------------------------

### Implementing Responsive Positioning with Tailwind CSS (HTML)

Source: https://tailwindcss.com/docs/top-right-bottom-left

This snippet illustrates how to apply responsive positioning in Tailwind CSS using breakpoint variants. By prefixing utilities like `top-4` with a breakpoint (e.g., `md:top-6`), styles are conditionally applied based on screen size, adapting layouts for different devices.

```html
<div class="top-4 md:top-6 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Responsive transition delay with breakpoint variants

Source: https://tailwindcss.com/docs/transition-delay

Use breakpoint variants like md: to apply different transition delays at specific screen sizes. This example applies delay-150 by default and delay-300 at medium breakpoints and above.

```html
<button class="delay-150 md:delay-300 ...">  <!-- ... --></button>
```

--------------------------------

### Style All Descendants with ** Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the `**` variant to apply styles to all descendants, not just direct children. This example uses the `**:data-avatar` selector to style all image elements with the data-avatar attribute regardless of nesting depth.

```html
<ul class="**:data-avatar:size-12 **:data-avatar:rounded-full ...">
  {#each items as item}
    <li>
      <img src={item.src} data-avatar />
      <p>{item.name}</p>
    </li>
  {/each}
</ul>
```

--------------------------------

### Custom Backdrop Brightness Value HTML Example

Source: https://tailwindcss.com/docs/backdrop-filter-brightness

Shows how to use arbitrary values with the backdrop-brightness utility class using square bracket syntax. Allows setting custom brightness values like 1.75 that aren't predefined in the Tailwind configuration.

```html
<div class="backdrop-brightness-[1.75] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Styles to Unsupported Browser Features

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Uses the not-supports-[...] variant to apply fallback styles when a CSS feature is not supported. This example applies flex layout when grid display is not supported by the browser.

```html
<div class="not-supports-[display:grid]:flex">
</div>
```

--------------------------------

### Set Column Width with Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example shows how to set an ideal column width using Tailwind CSS's `columns-<size>` utilities (e.g., `columns-3xs`). The number of columns will dynamically adjust to maintain the desired width, preventing them from becoming too narrow.

```html
<div class="columns-3xs ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... --></div>
```

--------------------------------

### Span Grid Rows in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-row

This example demonstrates how to use `row-span-<number>` utilities like `row-span-2` and `row-span-4` to make an element span a specified number of grid rows within a Tailwind CSS grid layout.

```html
<div class="grid grid-flow-col grid-rows-3 gap-4">  <div class="row-span-3 ...">01</div>  <div class="col-span-2 ...">02</div>  <div class="col-span-2 row-span-2 ...">03</div></div>
```

--------------------------------

### Set Bottom-Direction Mask 'From' Position by Number (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to bottom'. The gradient starts from `black` at a position calculated by a number and transitions to `transparent` at `--tw-mask-bottom-to`.

```css
mask-image: linear-gradient(to bottom, black calc(var(--spacing) * <number>), transparent var(--tw-mask-bottom-to));
```

--------------------------------

### Apply Basic Transitions to HTML Elements with Tailwind CSS

Source: https://tailwindcss.com/docs/transition-property

Demonstrates how to apply transition effects to an HTML button using Tailwind CSS utility classes like `transition`, `delay-150`, `duration-300`, `ease-in-out`, and hover states. This setup creates a smooth visual feedback when a user interacts with the button.

```HTML
<button class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">  Save Changes</button>
```

--------------------------------

### Apply Responsive Table Layouts using Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/table-layout

This HTML example illustrates how to make table layouts responsive using Tailwind CSS breakpoint variants. The `table-auto` class is applied by default, while `md:table-fixed` overrides it for medium screens and larger, switching the layout algorithm dynamically. This allows for adaptable table presentations across various device sizes.

```html
<div class="table-auto md:table-fixed ...">  <!-- ... --></div>
```

--------------------------------

### Align Grid Content to End with Tailwind CSS

Source: https://tailwindcss.com/docs/place-content

Use the `place-content-end` utility class to pack grid items against the end of both the inline and block axes. This positions the content at the opposite end of the container from the start.

```html
<div class="grid h-48 grid-cols-2 place-content-end gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Apply responsive minimum height with breakpoints in HTML

Source: https://tailwindcss.com/docs/min-height

Prefix min-height utilities with breakpoint variants like md: to conditionally apply different minimum heights at specific screen sizes. Enables responsive layout adjustments across devices.

```html
<div class="h-24 min-h-0 md:min-h-full ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply negative Tailwind CSS skew utilities to an element

Source: https://tailwindcss.com/docs/skew

This example shows how to use negative `skew-<number>` utilities like `-skew-3`, `-skew-6`, and `-skew-12` to apply a negative skew transformation on both axes of an element.

```html
<img class="-skew-3 ..." src="/img/mountains.jpg" /><img class="-skew-6 ..." src="/img/mountains.jpg" /><img class="-skew-12 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Configure PostCSS to use Tailwind plugin

Source: https://tailwindcss.com/docs/installation/using-postcss

This configuration snippet for `postcss.config.mjs` registers the `@tailwindcss/postcss` plugin. It ensures that PostCSS processes Tailwind CSS directives, making it a critical step for successful integration.

```JavaScript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

--------------------------------

### Apply Maximum Width using Tailwind CSS Container Scale

Source: https://tailwindcss.com/docs/max-width

This example shows how to use `max-w-sm`, `max-w-md`, `max-w-xl` utilities to set an element's maximum width based on Tailwind's predefined container scale sizes. These correspond to specific `rem` and `px` values for common screen sizes.

```html
<div class="max-w-md ...">  <!-- ... --></div>
```

--------------------------------

### Set Custom Text Decoration Thickness with Arbitrary Values in Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-thickness

This example shows how to use arbitrary value syntax `decoration-[<value>]` to apply a precise, custom thickness to text decorations in Tailwind CSS, such as `0.25rem`. This method allows for highly specific design requirements beyond the predefined numeric utilities.

```html
<p class="decoration-[0.25rem] ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Differentiate Multiple Peers with Named Peer Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

When styling multiple peer elements, use peer/{name} class to give each peer a unique identifier, then reference it with peer-{state}/{name} variants. This example demonstrates radio button states where different messages display based on which radio is checked.

```html
<fieldset>
  <legend>Published status</legend>
  <input id="draft" class="peer/draft" type="radio" name="status" checked />
  <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>
  <input id="published" class="peer/published" type="radio" name="status" />
  <label for="published" class="peer-checked/published:text-sky-500">Published</label>
  <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
```

--------------------------------

### Remove Tailwind CSS line-clamp with line-clamp-none

Source: https://tailwindcss.com/docs/line-clamp

This HTML example shows how to override a previously applied `line-clamp` utility. Using `line-clamp-none` will revert the text to its full length, which is useful for responsive designs or interactive elements.

```html
<p class="line-clamp-3 lg:line-clamp-none">  <!-- ... --></p>
```

--------------------------------

### Configure PostCSS Plugin for Tailwind CSS v4

Source: https://tailwindcss.com/docs/upgrade-guide

Update PostCSS configuration to use the new dedicated @tailwindcss/postcss package in v4. Remove postcss-import and autoprefixer as they are now handled automatically by the framework.

```javascript
export default {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "@tailwindcss/postcss": {},
  },
};
```

--------------------------------

### Apply Tailwind CSS text decoration styles

Source: https://tailwindcss.com/docs/text-decoration-style

This example demonstrates how to apply various text decoration styles (solid, double, dotted, dashed, wavy) to underlined text using Tailwind CSS utility classes. It shows the direct application of `decoration-{style}` classes to paragraph elements.

```html
<p class="underline decoration-solid">The quick brown fox...</p><p class="underline decoration-double">The quick brown fox...</p><p class="underline decoration-dotted">The quick brown fox...</p><p class="underline decoration-dashed">The quick brown fox...</p><p class="underline decoration-wavy">The quick brown fox...</p>
```

--------------------------------

### Use Custom Supports Variant in Tailwind Classes

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Applies a custom @supports variant defined in the project configuration. This example uses the supports-grid variant to conditionally apply grid layout when supported.

```html
<div class="supports-grid:grid">
</div>
```

--------------------------------

### Responsive flex-direction with breakpoint variants

Source: https://tailwindcss.com/docs/flex-direction

Use breakpoint prefixes like md: to apply flex-direction utilities at specific screen sizes. This example shows flex-col on small screens and flex-row on medium screens and above, enabling responsive layouts.

```html
<div class="flex flex-col md:flex-row ...">
  <!-- ... -->
</div>
```

--------------------------------

### Style Checked Checkboxes and Radios with Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Apply styles to a checkbox or radio button when it is in a checked state. For example, change the background color of the element when it's selected.

```html
<input type="checkbox" class="appearance-none checked:bg-blue-500 ..." />
```

--------------------------------

### Apply responsive `underline-offset` in Tailwind CSS

Source: https://tailwindcss.com/docs/text-underline-offset

Demonstrates how to apply the `underline-offset` utility conditionally based on screen size using Tailwind CSS responsive prefixes. In this example, the `underline-offset-4` class is applied only from the medium breakpoint (`md:`) and above, enabling adaptive designs.

```html
<p class="underline md:underline-offset-4 ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Set Right-Direction Mask 'From' Position by Number (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at a position calculated by a number and transitions to `transparent` at `--tw-mask-right-to`.

```css
mask-image: linear-gradient(to right, black calc(var(--spacing) * <number>), transparent var(--tw-mask-right-to));
```

--------------------------------

### Conditionally apply Tailwind CSS `backface-visibility` with responsive variants

Source: https://tailwindcss.com/docs/backface-visibility

This example shows how to use Tailwind CSS responsive variants, such as `md:backface-hidden`, to apply `backface-visibility` utilities only at specific breakpoints, enabling adaptive backface visibility based on screen size.

```html
<div class="backface-visible md:backface-hidden ...">  <!-- ... --></div>
```

--------------------------------

### Set Top-Direction Mask 'From' Position by Number (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at a position calculated by a number and transitions to `transparent` at `--tw-mask-top-to`.

```css
mask-image: linear-gradient(to top, black calc(var(--spacing) * <number>), transparent var(--tw-mask-top-to));
```

--------------------------------

### Apply responsive aspect ratio using Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/aspect-ratio

Use breakpoint variants like md: to apply different aspect ratios at different screen sizes. This example applies aspect-video on small screens and aspect-square on medium screens and above.

```HTML
<iframe class="aspect-video md:aspect-square ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

--------------------------------

### Set Linear Gradient Mask 'From' Color (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Defines the start color of a linear gradient mask using a specified color value. The gradient transitions from this color at `--tw-mask-linear-from` to `transparent` at `--tw-mask-linear-to`.

```css
mask-image: linear-gradient(var(--tw-mask-linear-position), <color> var(--tw-mask-linear-from), transparent var(--tw-mask-linear-to));
```

--------------------------------

### Left Mask Gradient From Percentage in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Applies a left-directed mask gradient starting at a specified percentage. The mask fades from black at the percentage point to transparent on the left side. Useful for left-fading mask effects.

```css
mask-image: linear-gradient(to left, black <percentage>, transparent var(--tw-mask-left-to));
```

--------------------------------

### Set Right-Direction Mask 'From' Position by Arbitrary Value (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at an arbitrary value and transitions to `transparent` at `--tw-mask-right-to`.

```css
mask-image: linear-gradient(to right, black <value>, transparent var(--tw-mask-right-to));
```

--------------------------------

### Apply Basic Tailwind CSS Contrast Filter to Images

Source: https://tailwindcss.com/docs/filter-contrast

This example demonstrates how to use predefined `contrast-<number>` utility classes in Tailwind CSS to control an element's contrast. Apply classes like `contrast-50` for reduced contrast or `contrast-200` for increased contrast directly to HTML elements.

```html
<img class="contrast-50 ..." src="/img/mountains.jpg" /><img class="contrast-100 ..." src="/img/mountains.jpg" /><img class="contrast-125 ..." src="/img/mountains.jpg" /><img class="contrast-200 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Set Right-Direction Mask 'To' Position by Number (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at `--tw-mask-right-from` and transitions to `transparent` at a position calculated by a number.

```css
mask-image: linear-gradient(to right, black var(--tw-mask-right-from), transparent calc(var(--spacing) * <number>));
```

--------------------------------

### Set Top-Direction Mask 'To' Position by Number (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at `--tw-mask-top-from` and transitions to `transparent` at a position calculated by a number.

```css
mask-image: linear-gradient(to top, black var(--tw-mask-top-from), transparent calc(var(--spacing) * <number>));
```

--------------------------------

### Set Right-Direction Mask 'To' Position by Arbitrary Value (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at `--tw-mask-right-from` and transitions to `transparent` at an arbitrary value.

```css
mask-image: linear-gradient(to right, black var(--tw-mask-right-from), transparent <value>);
```

--------------------------------

### Create Decorative Effects with before Pseudo-element

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use before and after pseudo-elements to add decorative background effects without modifying the DOM. This example creates a skewed pink background behind highlighted text using positioning and transform utilities.

```html
<blockquote class="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
  When you look
  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
    <span class="relative text-white dark:text-gray-950">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>
```

--------------------------------

### Set Top-Direction Mask 'From' Position by Arbitrary Value (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at an arbitrary value and transitions to `transparent` at `--tw-mask-top-to`.

```css
mask-image: linear-gradient(to top, black <value>, transparent var(--tw-mask-top-to));
```

--------------------------------

### justify-items-center - Center grid items

Source: https://tailwindcss.com/docs/justify-items

Use the justify-items-center or justify-items-center-safe utilities to center grid items along their inline axis. The safe variant falls back to start alignment when space is insufficient.

```html
<div class="grid grid-flow-col justify-items-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

```html
<div class="grid grid-flow-col justify-items-center-safe ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Using flex-basis fractional utilities in HTML

Source: https://tailwindcss.com/docs/flex-basis

Set the initial size of flex items using basis-<fraction> utilities like basis-1/3 and basis-2/3 to divide flex containers into equal proportions. Each fraction is calculated as a percentage of the container width.

```html
<div class="flex flex-row">
  <div class="basis-1/3">01</div>
  <div class="basis-2/3">02</div>
</div>
```

--------------------------------

### justify-center-safe - Safe center align with fallback

Source: https://tailwindcss.com/docs/justify-content

Use the justify-center-safe utility to center align flex items with a fallback to start alignment when insufficient space is available. Prevents content overflow.

```html
<div class="flex justify-center-safe ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

--------------------------------

### Apply Accent Color to Checkbox with Tailwind

Source: https://tailwindcss.com/docs/accent-color

Use the accent-{color}-{shade} utility class to set the accent color of form elements like checkboxes. This example shows a browser default checkbox and a customized one with accent-pink-500.

```html
<label>
  <input type="checkbox" checked />
  Browser default
</label>
<label>
  <input class="accent-pink-500" type="checkbox" checked />
  Customized
</label>
```

--------------------------------

### Ordering flex items first or last

Source: https://tailwindcss.com/docs/order

Use order-first and order-last utilities to render flex and grid items at the beginning or end of the visual order. This example shows moving the first DOM item to last and the last DOM item to first position.

```HTML
<div class="flex justify-between ...">
  <div class="order-last ...">01</div>
  <div class="...">02</div>
  <div class="order-first ...">03</div>
</div>
```

--------------------------------

### Apply box-decoration-slice or clone with Tailwind CSS

Source: https://tailwindcss.com/docs/box-decoration-break

This example demonstrates how to use the `box-decoration-slice` and `box-decoration-clone` utilities in Tailwind CSS to control how background, border, and other properties render across line breaks. It shows how `slice` treats the element as continuous, while `clone` treats each line as a distinct block, affecting visual styling.

```html
<span class="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">  Hello<br />World</span><span class="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">  Hello<br />World</span>
```

--------------------------------

### Set Top-Direction Mask 'To' Position by Arbitrary Value (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at `--tw-mask-top-from` and transitions to `transparent` at an arbitrary value.

```css
mask-image: linear-gradient(to top, black var(--tw-mask-top-from), transparent <value>);
```

--------------------------------

### Apply Filters on Hover with Tailwind CSS

Source: https://tailwindcss.com/docs/filter

This example demonstrates applying filters conditionally based on interaction states using Tailwind CSS variants. It shows how to remove a blur filter when an element is hovered over.

```html
<img class="blur-sm hover:filter-none ..." src="/img/mountains.jpg" />
```

--------------------------------

### Using responsive flex-basis utilities in HTML

Source: https://tailwindcss.com/docs/flex-basis

Apply flex-basis utilities conditionally at different screen sizes using breakpoint variants like md:. This example adjusts the basis width from basis-1/4 on mobile to basis-1/3 on medium screens and above.

```html
<div class="flex flex-row">
  <div class="basis-1/4 md:basis-1/3">01</div>
  <div class="basis-1/4 md:basis-1/3">02</div>
  <div class="basis-1/2 md:basis-1/3">03</div>
</div>
```

--------------------------------

### Apply Basic Invert Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-invert

This HTML snippet demonstrates how to use basic Tailwind CSS `invert` utilities to control the color inversion of an image. It includes examples for no inversion (`invert-0`), partial inversion (`invert-20`), and full inversion (`invert`).

```html
<img class="invert-0" src="/img/mountains.jpg" /><img class="invert-20" src="/img/mountains.jpg" /><img class="invert" src="/img/mountains.jpg" />
```

--------------------------------

### justify-end-safe - Safe end align with fallback

Source: https://tailwindcss.com/docs/justify-content

Use the justify-end-safe utility to align flex items to the end with a fallback to start alignment when insufficient space is available. Prevents content cutoff.

```html
<div class="flex justify-end-safe ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>03</div>
</div>
```

--------------------------------

### Apply responsive mask-size utility with breakpoint variant

Source: https://tailwindcss.com/docs/mask-size

Demonstrates using a breakpoint variant (md:) with the mask-size utility to apply different mask sizing at different screen sizes. The example shows mask-auto on mobile and mask-contain on medium screens and above.

```html
<div class="mask-auto md:mask-contain ...">  <!-- ... --></div>
```

--------------------------------

### Set Column Count with Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example demonstrates how to set a fixed number of columns for an element using Tailwind CSS's `columns-<number>` utility. The column width will automatically adjust to fit the specified count.

```html
<div class="columns-3 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... --></div>
```

--------------------------------

### Apply responsive perspective with Tailwind CSS

Source: https://tailwindcss.com/docs/perspective

Explains how to apply perspective utilities conditionally based on screen size using responsive prefixes, such as `md:perspective-dramatic`, ensuring dynamic perspective effects across different breakpoints.

```html
<div class="perspective-midrange md:perspective-dramatic ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive overscroll behavior with Tailwind CSS

Source: https://tailwindcss.com/docs/overscroll-behavior

Utilize responsive prefixes, such as `md:`, with overscroll-behavior utilities to apply different behaviors based on screen sizes. This example sets `overscroll-auto` by default and `overscroll-contain` for medium screens and above.

```html
<div class="overscroll-auto md:overscroll-contain ...">  <!-- ... --></div>
```

--------------------------------

### align-content Center - Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

Packs rows in a container in the center of the cross axis using the content-center utility class. This example demonstrates centering grid rows within a fixed-height container.

```html
<div class="grid h-56 grid-cols-3 content-center gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

--------------------------------

### Apply Responsive Scroll Behavior with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-behavior

This example illustrates how to apply `scroll-smooth` globally and then override it with `scroll-auto` for medium screens and above, using Tailwind CSS's responsive prefixes. The `scroll-smooth` class provides a smooth scrolling experience by default, while `md:scroll-auto` reverts to the browser's default instant scrolling for larger viewports, offering flexible control over scroll animations based on screen size.

```html
<html class="scroll-smooth md:scroll-auto">  <!-- ... --></html>
```

--------------------------------

### Apply opacity with conditional variants

Source: https://tailwindcss.com/docs/opacity

Use variant prefixes like disabled: to conditionally apply opacity utilities only when specific states are active. This example reduces opacity to 75% when an input element is disabled.

```html
<input class="opacity-100 disabled:opacity-75 ..." type="text" />
```

--------------------------------

### Configure Tailwind CSS Vite plugin in vite.config.ts

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/vite

This TypeScript configuration snippet adds the '@tailwindcss/vite' plugin to the `plugins` array within your Vite configuration file (vite.config.ts). This activates Tailwind CSS processing during the build.

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    // …
  ],
})
```

--------------------------------

### Apply responsive list-style-type with Tailwind breakpoints

Source: https://tailwindcss.com/docs/list-style-type

Prefix list-style-type utilities with breakpoint variants like md: to conditionally apply the utility at specific screen sizes. This example applies list-none on small screens and switches to list-disc on medium screens and above.

```html
<ul class="list-none md:list-disc ...">
  <!-- ... -->
</ul>
```

--------------------------------

### Apply responsive height with breakpoint variants in Tailwind CSS

Source: https://tailwindcss.com/docs/height

Prefix height utilities with breakpoint variants like md:, lg:, etc. to apply different heights at specific screen sizes. Example: h-1/2 on mobile, h-full on medium screens and above.

```html
<div class="h-1/2 md:h-full ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive backdrop-sepia with breakpoint variants

Source: https://tailwindcss.com/docs/backdrop-filter-sepia

Use breakpoint prefixes like `md:` to conditionally apply backdrop-sepia utilities at specific screen sizes. In this example, sepia is applied at all sizes but changes to no sepia (0) at medium breakpoint and above.

```HTML
<div class="backdrop-sepia md:backdrop-sepia-0 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Style Direct Children with * Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the `*` variant to style direct children when you don't have control over child elements. This example applies rounded corners, borders, and background colors to all list items in a category list.

```html
<div>
  <h2>Categories<h2>
  <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
    <li>Sales</li>
    <li>Marketing</li>
    <li>SEO</li>
    <!-- ... -->
  </ul>
</div>
```

--------------------------------

### Remove default CSS import in Phoenix JavaScript

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Removes the default CSS import from `assets/js/app.js`, as Tailwind CSS will now manage the styling pipeline. This prevents conflicts and ensures a single source of truth for styles.

```javascript
// Remove this line if you add your own CSS build pipeline (e.g postcss).import "../css/app.css"
```

--------------------------------

### Check for Specific CSS Property Support

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Shorthand syntax for @supports variant that checks if a CSS property is supported without specifying a value. This example applies backdrop blur styling only when the backdrop-filter property is supported.

```html
<div class="bg-black/75 supports-backdrop-filter:bg-black/25 supports-backdrop-filter:backdrop-blur ...">
</div>
```

--------------------------------

### Import Tailwind CSS and configure content scanning

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Import the Tailwind CSS framework and configure content paths for Tailwind to scan. The @source directives tell Tailwind which files to scan for utility class usage, including Blade templates and JavaScript files.

```css
@import "tailwindcss";
@source '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php';
@source '../../storage/framework/views/*.php';
@source '../**/*.blade.php';
@source '../**/*.js';
```

--------------------------------

### Apply custom text shadow values with Tailwind CSS bracket notation

Source: https://tailwindcss.com/docs/text-shadow

Demonstrates how to use custom text shadow values with Tailwind CSS bracket notation syntax. The example shows applying a completely custom shadow value with specific pixel offsets, blur radius, and rgba color values for cases not covered by predefined utilities.

```html
<p class="text-shadow-[0_35px_35px_rgb(0_0_0_/_0.25)] ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Responsive Scroll Snap Stop Behavior with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-stop

Demonstrate how to apply `scroll-snap-stop` utilities responsively using breakpoint variants like `md:`. The example sets `snap-always` as a default but switches to `snap-normal` for medium screen sizes and above, adapting behavior for different viewports.

```html
<div class="snap-always md:snap-normal ...">  <!-- ... --></div>
```

--------------------------------

### Use @supports Variant to Target Supported Browser Features

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Uses the supports-[...] variant to conditionally apply styles based on CSS feature support in the user's browser. The example checks for grid display support and applies grid layout only when available, with fallback to flex layout.

```html
<div class="flex supports-[display:grid]:grid ...">
</div>
```

--------------------------------

### Apply Responsive Tailwind CSS Width with Breakpoints

Source: https://tailwindcss.com/docs/width

This code demonstrates how to implement responsive width behavior in Tailwind CSS using breakpoint variants. The `md:w-full` utility ensures the element's width changes to full at medium screen sizes and above, while `w-1/2` applies for smaller screens. This allows for adaptable layouts across different device sizes.

```html
<div class="w-1/2 md:w-full ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Scroll Margin with Breakpoint Variants

Source: https://tailwindcss.com/docs/scroll-margin

Use breakpoint variants like `md:` to conditionally apply scroll-margin utilities at specific screen sizes. This example applies `scroll-m-8` on smaller screens and `scroll-m-0` at medium screen sizes and above.

```html
<div class="scroll-m-8 md:scroll-m-0 ...">  <!-- ... --></div>
```

--------------------------------

### Basic break-before HTML usage

Source: https://tailwindcss.com/docs/break-before

Apply break-before utilities to control column or page breaks in multi-column layouts. The example uses break-before-column to force a column break before a paragraph element within a two-column container.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-before-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

--------------------------------

### Apply Grayscale Filter Utilities in HTML

Source: https://tailwindcss.com/docs/filter-grayscale

Basic example demonstrating how to use grayscale utility classes on img elements with different grayscale intensity levels (grayscale-0, grayscale-25, grayscale-50, grayscale). These classes apply CSS filter: grayscale() with varying percentages to control the amount of desaturation applied to the element.

```html
<img class="grayscale-0 ..." src="/img/mountains.jpg" />
<img class="grayscale-25 ..." src="/img/mountains.jpg" />
<img class="grayscale-50 ..." src="/img/mountains.jpg" />
<img class="grayscale ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply uniform padding to all sides with Tailwind CSS

Source: https://tailwindcss.com/docs/padding

This example demonstrates how to apply uniform padding to all sides of an HTML element using Tailwind CSS utility classes. The `p-<number>` classes, such as `p-8`, define padding based on a pre-defined spacing scale. This allows for quick and consistent spacing within the UI.

```html
<div class="p-8 ...">p-8</div>
```

--------------------------------

### Apply Responsive flex-wrap with Breakpoint Variants

Source: https://tailwindcss.com/docs/flex-wrap

Prefix flex-wrap utilities with breakpoint variants like md: to apply the utility only at specific screen sizes and above. This example uses flex-wrap normally on smaller screens and flex-wrap-reverse on medium screens and above.

```html
<div class="flex flex-wrap md:flex-wrap-reverse ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Tailwind CSS text decoration responsively

Source: https://tailwindcss.com/docs/text-decoration-style

This example illustrates how to apply a text decoration style conditionally based on screen size using Tailwind CSS responsive variants. The `md:decoration-dashed` class ensures the dashed decoration is only applied on medium screens and above.

```html
<p class="underline md:decoration-dashed ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Override Image Sizing Constraint with Tailwind CSS in HTML

Source: https://tailwindcss.com/docs/preflight

This HTML example demonstrates how to override Preflight's default image sizing constraint. By applying the `max-w-none` utility class, an image or video will not be constrained to its parent's width, allowing it to exceed its container.

```html
<img class="max-w-none" src="..." alt="..." />
```

--------------------------------

### Basic min-width utility with spacing scale

Source: https://tailwindcss.com/docs/min-width

Demonstrates basic usage of min-width utilities like min-w-24, min-w-40, and min-w-80 to set fixed minimum widths based on the Tailwind spacing scale.

```html
<div class="w-20 ...">
  <div class="min-w-80 ...">min-w-80</div>
  <div class="min-w-64 ...">min-w-64</div>
  <div class="min-w-48 ...">min-w-48</div>
  <div class="min-w-40 ...">min-w-40</div>
  <div class="min-w-32 ...">min-w-32</div>
  <div class="min-w-24 ...">min-w-24</div>
</div>
```

--------------------------------

### Responsive text-overflow with breakpoint variants

Source: https://tailwindcss.com/docs/text-overflow

Use breakpoint prefixes like md: to apply text-overflow utilities conditionally at specific screen sizes. This example uses text-ellipsis on small screens and text-clip on medium screens and above.

```html
<p class="text-ellipsis md:text-clip ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Tailwind CSS `backface-hidden` and `backface-visible` classes to elements

Source: https://tailwindcss.com/docs/backface-visibility

This example demonstrates applying `backface-hidden` to hide the backface of elements in a 3D cube simulation and `backface-visible` to show them, illustrating how these Tailwind CSS utilities control visibility when elements are rotated.

```html
<div class="size-20 ...">  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden ...">1</div>  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden ...">2</div>  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden ...">3</div>  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden ...">4</div>  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden ...">5</div>  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden ...">6</div></div><div class="size-20 ...">  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible ...">1</div>  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-visible ...">2</div>  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible ...">3</div>  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible ...">4</div>  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible ...">5</div>  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible ...">6</div></div>
```

--------------------------------

### Apply horizontal padding with Tailwind CSS

Source: https://tailwindcss.com/docs/padding

This example shows how to apply horizontal padding to an HTML element using Tailwind CSS. The `px-<number>` utility classes, such as `px-8`, set both `padding-left` and `padding-right` simultaneously. This simplifies the application of symmetrical horizontal spacing.

```html
<div class="px-8 ...">px-8</div>
```

--------------------------------

### Preventing flex items from growing in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-grow

Example showing how to prevent specific flex items from growing using the grow-0 class while allowing other items to expand. The middle item with grow-0 maintains its fixed size.

```html
<div class="flex ...">
  <div class="size-14 grow ...">01</div>
  <div class="size-14 grow-0 ...">02</div>
  <div class="size-14 grow ...">03</div>
</div>
```

--------------------------------

### Target dark mode with color utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/colors

Shows how to use the dark variant prefix to apply different colors in dark mode. This example displays a card component that changes background and text colors when dark mode is active.

```html
<div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg class="h-6 w-6 stroke-white" ...>
        <!-- ... -->
      </svg>
    </span>
  </div>
  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes upside-down</h3>
  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
```

--------------------------------

### Adjust color opacity in Tailwind CSS

Source: https://tailwindcss.com/docs/colors

Demonstrates adjusting the opacity of colors using the slash syntax (e.g., bg-sky-500/10) to set alpha channel values from 10% to 100%. Includes examples with arbitrary values and CSS variable shortcuts.

```html
<div>
  <div class="bg-sky-500/10"></div>
  <div class="bg-sky-500/20"></div>
  <div class="bg-sky-500/30"></div>
  <div class="bg-sky-500/40"></div>
  <div class="bg-sky-500/50"></div>
  <div class="bg-sky-500/60"></div>
  <div class="bg-sky-500/70"></div>
  <div class="bg-sky-500/80"></div>
  <div class="bg-sky-500/90"></div>
  <div class="bg-sky-500/100"></div>
</div>
```

```html
<div class="bg-pink-500/[71.37%]"><!-- ... --></div>
<div class="bg-cyan-400/(--my-alpha-value)"><!-- ... --></div>
```

--------------------------------

### Responsive Font-size with Breakpoints - HTML

Source: https://tailwindcss.com/docs/font-size

Apply font-size utilities responsively using breakpoint prefixes like md:, lg:, etc. This enables different font sizes at different screen sizes, allowing flexible typography across devices.

```html
<p class="text-sm md:text-base ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply responsive resizing with Tailwind CSS breakpoint variants

Source: https://tailwindcss.com/docs/resize

Implement responsive resizing behavior by prefixing `resize` utilities with breakpoint variants, such as `md:`. This allows you to conditionally apply resizing properties based on screen size, for example, preventing resizing on small screens and enabling it on medium screens and above.

```HTML
<div class="resize-none md:resize ...">  <!-- ... --></div>
```

--------------------------------

### Style Inputs with Placeholder Shown using Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Apply styles to an input element when its placeholder text is visible. This can be used to subtly style the input field differently before the user starts typing.

```html
<input class="placeholder-shown:border-gray-500 ..." placeholder="you@example.com" />
```

--------------------------------

### Apply Tailwind CSS `isolation` utilities responsively

Source: https://tailwindcss.com/docs/isolation

Shows how to apply `isolation` utilities conditionally based on screen size using responsive prefixes like `md:` in HTML, enabling `isolate` by default and `isolation-auto` on medium screens and above.

```html
<div class="isolate md:isolation-auto ...">  <!-- ... --></div>
```

--------------------------------

### Distribute Grid Content Evenly with Tailwind CSS

Source: https://tailwindcss.com/docs/place-content

The `place-content-evenly` utility ensures grid items are evenly spaced along both the inline and block axes. This includes the space at the start, between items, and at the end of the container, creating uniform distribution.

```html
<div class="grid h-48 grid-cols-2 place-content-evenly gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Apply Responsive Outline Styles with Tailwind CSS

Source: https://tailwindcss.com/docs/outline-style

This example demonstrates how to apply outline styles conditionally based on screen size using Tailwind CSS responsive variants. By prefixing an `outline-style` utility with a breakpoint variant like `md:`, the style will only be applied at that screen size and above.

```html
<div class="outline md:outline-dashed ...">  <!-- ... --></div>
```

--------------------------------

### Configure Tailwind CSS Vite plugin in Astro

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Integrate the `@tailwindcss/vite` plugin into your Astro configuration file (`astro.config.mjs`). This step ensures that Astro's build process recognizes and applies Tailwind CSS during development and production builds.

```javascript
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

--------------------------------

### Use custom aspect ratio utility in Tailwind CSS markup

Source: https://tailwindcss.com/docs/aspect-ratio

Apply a custom aspect ratio utility that was defined in the theme configuration. The aspect-retro utility in this example uses the 4:3 ratio defined in the theme.

```HTML
<iframe class="aspect-retro" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

--------------------------------

### Set Tailwind CSS Element Width with Custom Value

Source: https://tailwindcss.com/docs/width

This example shows how to apply a completely custom width to an element using arbitrary values with the `w-[<value>]` syntax in Tailwind CSS. This allows for highly specific, pixel-based widths or other units not available in the default utility classes.

```html
<div class="w-[5px] ...">  <!-- ... --></div>
```

--------------------------------

### Apply logical padding properties with Tailwind CSS

Source: https://tailwindcss.com/docs/padding

This example explains how to use Tailwind CSS utilities for logical padding properties, `ps-<number>` and `pe-<number>`. These classes set `padding-inline-start` and `padding-inline-end`, which dynamically map to left/right based on the text direction (LTR/RTL). This ensures proper layout in multi-directional contexts.

```html
<div>  <div dir="ltr">    <div class="ps-8 ...">ps-8</div>    <div class="pe-8 ...">pe-8</div>  </div>  <div dir="rtl">    <div class="ps-8 ...">ps-8</div>    <div class="pe-8 ...">pe-8</div>  </div></div>
```

--------------------------------

### Import Tailwind CSS into app.css

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Imports Tailwind CSS into the main application stylesheet (`app.css`) and adds a special `@source` directive to prevent recompile loops during development. This makes Tailwind's utility classes available.

```css
@import "tailwindcss";@source not "../../public";
```

--------------------------------

### CSS Custom Property Backdrop Brightness HTML Example

Source: https://tailwindcss.com/docs/backdrop-filter-brightness

Demonstrates using CSS custom properties with the backdrop-brightness utility. The parentheses syntax automatically wraps the custom property in the var() function for dynamic brightness control.

```html
<div class="backdrop-brightness-(--my-backdrop-brightness) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Basic Text Indentation with Tailwind CSS

Source: https://tailwindcss.com/docs/text-indent

This example demonstrates applying a basic text indentation using Tailwind CSS utilities. The `indent-8` class sets an 8-unit indentation, affecting the `text-indent` CSS property of the paragraph element.

```HTML
<p class="indent-8">So I started to walk into the water...</p>
```

--------------------------------

### Left Mask Gradient From Color in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Creates a left-directed mask gradient using a custom color as the starting point. The gradient transitions from the specified color to transparent on the left boundary. Enables left-facing colored masking effects.

```css
mask-image: linear-gradient(to left, <color> var(--tw-mask-left-from), transparent var(--tw-mask-left-to));
```

--------------------------------

### Basic max-height HTML example with fixed spacing scale

Source: https://tailwindcss.com/docs/max-height

Demonstrates setting multiple elements with fixed maximum heights using Tailwind CSS spacing-based utilities. Uses max-h-24 through max-h-80 classes on nested divs with full height parents, showing how overflow content is constrained.

```html
<div class="h-96 ...">
  <div class="h-full max-h-80 ...">max-h-80</div>
  <div class="h-full max-h-64 ...">max-h-64</div>
  <div class="h-full max-h-48 ...">max-h-48</div>
  <div class="h-full max-h-40 ...">max-h-40</div>
  <div class="h-full max-h-32 ...">max-h-32</div>
  <div class="h-full max-h-24 ...">max-h-24</div>
</div>
```

--------------------------------

### Responsive mask-mode utility with breakpoint variant in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-mode

Demonstrates responsive design using the mask-mode utilities with breakpoint variants. The md: prefix applies the mask-luminance utility only at medium screen sizes and above, while defaulting to mask-alpha on smaller screens.

```html
<div class="mask-alpha md:mask-luminance ...">  <!-- ... --></div>
```

--------------------------------

### Apply Custom URL Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter

This example demonstrates applying a custom filter value using the arbitrary value syntax `filter-[<value>]` in Tailwind CSS. It specifically shows linking to an SVG filter definition.

```html
<img class="filter-[url('filters.svg#filter-id')] ..." src="/img/mountains.jpg" />
```

--------------------------------

### justify-between - Distribute flex items with space between

Source: https://tailwindcss.com/docs/justify-content

Use the justify-between utility to distribute flex items evenly along the main axis with equal space between each item. First item is at start, last at end.

```html
<div class="flex justify-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Import Tailwind CSS into application stylesheet

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Adds an `@import` statement to your `app.css` file to include Tailwind CSS's base, components, and utilities. It also instructs Tailwind CSS to scan your `resources/views` directory for class usages.

```css
@import "tailwindcss";@source "../views";
```

--------------------------------

### Set Linear Gradient Mask 'From' Position by Percentage (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Specifies the start position of the `black` portion of a linear gradient mask using a percentage value. The gradient progresses from this `black` stop to `transparent` at the `--tw-mask-linear-to` position.

```css
mask-image: linear-gradient(var(--tw-mask-linear-position), black <percentage>, transparent var(--tw-mask-linear-to));
```

--------------------------------

### Configure Tailwind CSS with Laravel Mix

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Add Tailwind CSS as a PostCSS plugin in the webpack.mix.js configuration file. This integrates Tailwind's PostCSS plugin into the Laravel Mix build process to process CSS files.

```javascript
mix
  .js("resources/js/app.js", "public/js")
  .postCss("resources/css/app.css", "public/css", [
    require("@tailwindcss/postcss")
  ]);
```

--------------------------------

### HTML Structure with Manual Dark Mode Class

Source: https://tailwindcss.com/docs/dark-mode

This HTML example illustrates how to manually activate dark mode by adding the `dark` class to the `<html>` element. When combined with a custom Tailwind CSS dark variant configuration that checks for this class, it enables the application of `dark:` utilities to child elements throughout the document, allowing for user-controlled theme switching.

```html
<html class="dark">
  <body>
    <div class="bg-white dark:bg-black">
      <!-- ... -->
    </div>
  </body>
</html>
```

--------------------------------

### Apply Responsive Maximum Width with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/max-width

This snippet shows how to make maximum width utilities responsive by prefixing them with breakpoint variants (e.g., `md:max-w-lg`). The utility will only apply at the specified screen size and above, enabling adaptive layouts.

```html
<div class="max-w-sm md:max-w-lg ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Text Shadow with Breakpoint Variant

Source: https://tailwindcss.com/docs/text-shadow

Use breakpoint prefixes like `md:` to apply text-shadow utilities only at specific screen sizes. This example demonstrates applying `text-shadow-lg` only at medium screen sizes and above, with `text-shadow-none` as the default.

```html
<p class="text-shadow-none md:text-shadow-lg ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Reset Individual Transform Properties - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Replace transform-none with individual property resets (scale-none, rotate-none, translate-none). The transform-none utility no longer works for resetting rotate, scale, and translate utilities.

```html
<button class="scale-150 focus:scale-none"></button>
```

--------------------------------

### Use custom Tailwind CSS perspective utility

Source: https://tailwindcss.com/docs/perspective

Shows how to apply a custom perspective utility, such as `perspective-remote`, which was previously defined in the theme, to an HTML element.

```html
<div class="perspective-remote">  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS perspective-origin utilities

Source: https://tailwindcss.com/docs/perspective-origin

Demonstrates how to apply `perspective-origin` utilities like `perspective-origin-top-left` and `perspective-origin-bottom-right` to control the vanishing point of a 3D perspective in HTML elements. This example shows two containers with different perspective origins, showcasing their visual effect on nested 3D transformed elements.

```HTML
<div class="size-20 perspective-near perspective-origin-top-left ...">  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div><div class="size-20 perspective-near perspective-origin-bottom-right …">  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div>
```

--------------------------------

### Configure Tailwind CSS Vite Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/react-router

Add the @tailwindcss/vite plugin to the Vite configuration file. This plugin enables Tailwind CSS processing during the build and development processes, integrating with React Router and TypeScript path resolution.

```typescript
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
```

--------------------------------

### Apply Responsive Brightness Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-brightness

This example demonstrates applying brightness filters conditionally based on screen size using Tailwind CSS responsive variants. The `md:brightness-150` utility ensures that the `brightness-150` class is only applied to the image on medium screens and above.

```html
<img class="brightness-110 md:brightness-150 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Responsive min-width with breakpoint variants

Source: https://tailwindcss.com/docs/min-width

Demonstrates responsive design by prefixing min-width utilities with breakpoint variants like md: to apply different minimum widths at specific screen sizes.

```html
<div class="w-24 min-w-full md:min-w-0 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Basic Brightness Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-brightness

This example demonstrates how to apply predefined brightness levels to images using Tailwind CSS utility classes like `brightness-50`, `brightness-100`, `brightness-125`, and `brightness-200`. These classes directly control the brightness of the element.

```html
<img class="brightness-50 ..." src="/img/mountains.jpg" /><img class="brightness-100 ..." src="/img/mountains.jpg" /><img class="brightness-125 ..." src="/img/mountains.jpg" /><img class="brightness-200 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Customize Tailwind CSS Column Utilities via Theme

Source: https://tailwindcss.com/docs/columns

This example illustrates how to extend Tailwind CSS's theme to define custom column width variables. Once defined in the `@theme` block, the new utility (e.g., `columns-4xs`) can be used in HTML markup.

```css
@theme {
  --container-4xs: 14rem;
}
```

```html
<div class="columns-4xs">
  <!-- ... --></div>
```

--------------------------------

### Apply mix-blend-mode utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/mix-blend-mode

This example demonstrates how to use Tailwind CSS `mix-blend-mode` utilities, specifically `mix-blend-multiply`, to control how an element's content and background blend with other content in the same stacking context. It shows two overlapping div elements with different background colors applying a multiply blend effect.

```html
<div class="flex justify-center -space-x-14">  <div class="bg-blue-500 mix-blend-multiply ..."></div>  <div class="bg-pink-500 mix-blend-multiply ..."></div></div>
```

--------------------------------

### Apply conditional styles with not- pseudo-class variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the not- variant to style an element when a condition is not true. This example combines not-focus: with hover: to apply hover styles only when an element is not in a focused state.

```html
<button class="bg-indigo-600 hover:not-focus:bg-indigo-700">
  <!-- ... -->
</button>
```

--------------------------------

### Apply backdrop contrast filter using Tailwind utility classes

Source: https://tailwindcss.com/docs/backdrop-filter-contrast

Use backdrop-contrast utilities like backdrop-contrast-50 and backdrop-contrast-200 to apply backdrop contrast filters to elements. This example demonstrates basic usage with different contrast levels applied to overlays on a background image.

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-contrast-50 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-contrast-200 ..."></div>
</div>
```

--------------------------------

### Basic Fixed Width with Spacing Scale

Source: https://tailwindcss.com/docs/width

Apply fixed widths using w-<number> utilities that calculate width based on the spacing scale multiplier. Commonly used for consistent sizing across layouts with values like w-24, w-32, w-64, and w-96.

```html
<div class="w-96 ...">w-96</div>
<div class="w-80 ...">w-80</div>
<div class="w-64 ...">w-64</div>
<div class="w-48 ...">w-48</div>
<div class="w-40 ...">w-40</div>
<div class="w-32 ...">w-32</div>
<div class="w-24 ...">w-24</div>
```

--------------------------------

### Apply Responsive Text Indentation with Tailwind CSS

Source: https://tailwindcss.com/docs/text-indent

This example demonstrates how to apply responsive text indentation using Tailwind CSS breakpoint variants. The `indent-4 md:indent-8` classes set a default 4-unit indentation, which then overrides to an 8-unit indentation on medium screens and larger.

```HTML
<p class="indent-4 md:indent-8 ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Enable PostCSS Loader in webpack.config.js

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Configures Webpack Encore to enable the PostCSS loader, allowing it to process CSS files using PostCSS plugins like Tailwind CSS. This line should be added within the Encore configuration block in your webpack.config.js file.

```javascript
Encore  .enablePostCssLoader();
```

--------------------------------

### Backdrop Brightness CSS Class Reference

Source: https://tailwindcss.com/docs/backdrop-filter-brightness

Reference guide showing the CSS output for backdrop-brightness utility classes. Includes standard numbered variants, custom property syntax, and arbitrary value support for complete control over backdrop brightness effects.

```css
/* Standard utility class */
.backdrop-brightness-<number> {
  backdrop-filter: brightness(<number>%);
}

/* Custom property syntax */
.backdrop-brightness-(<custom-property>) {
  backdrop-filter: brightness(var(<custom-property>));
}

/* Arbitrary value syntax */
.backdrop-brightness-[<value>] {
  backdrop-filter: brightness(<value>);
}
```

--------------------------------

### Reverse Flex Item Wrap Direction with flex-wrap-reverse

Source: https://tailwindcss.com/docs/flex-wrap

Use the flex-wrap-reverse class to wrap flex items in the reverse direction, starting from the bottom and moving upward. This reverses both the wrap order and the cross-axis direction.

```html
<div class="flex flex-wrap-reverse">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Responsive background-clip with breakpoint variants - Tailwind CSS

Source: https://tailwindcss.com/docs/background-clip

Apply background-clip utilities responsively using breakpoint prefixes like md: to only apply the utility at medium screen sizes and above. This example shows bg-clip-border as default and md:bg-clip-padding for medium screens and larger.

```html
<div class="bg-clip-border md:bg-clip-padding ...">  <!-- ... --></div>
```

--------------------------------

### Tailwind CSS: Basic Pseudo-element Content (`content-[value]`, `after:`, `before:`)

Source: https://tailwindcss.com/docs/content

This example demonstrates how to use the `content-[<value>]` utility with Tailwind CSS `after:` and `before:` variants to insert static text into pseudo-elements. It's useful for adding decorative elements or small icons without altering the HTML structure directly.

```html
<p>Higher resolution means more than just a better-quality image. With aRetina 6K display, <a class="text-blue-600 after:content-['_↗']" href="...">Pro Display XDR</a> gives you nearly 40 percent more screen real estate thana 5K display.</p>
```

--------------------------------

### Apply Tailwind CSS Outline Offset with Predefined Values

Source: https://tailwindcss.com/docs/outline-offset

This example demonstrates how to apply `outline-offset` utility classes with predefined numeric values to HTML buttons. It shows `outline-offset-0`, `outline-offset-2`, and `outline-offset-4` to control the outline's distance from the element, requiring an `outline` class to be visible.

```html
<button class="outline-2 outline-offset-0 ...">Button A</button><button class="outline-2 outline-offset-2 ...">Button B</button><button class="outline-2 outline-offset-4 ...">Button C</button>
```

--------------------------------

### Configure Tailwind CSS Vite plugin in nuxt.config.ts

Source: https://tailwindcss.com/docs/installation/framework-guides/nuxt

This configuration snippet adds the `@tailwindcss/vite` plugin to the `vite.plugins` array within the `nuxt.config.ts` file. This enables Tailwind CSS processing during the Nuxt build process, ensuring utility classes are generated correctly.

```TypeScript
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
```

--------------------------------

### Apply basic list-style-position with Tailwind CSS HTML

Source: https://tailwindcss.com/docs/list-style-position

This example demonstrates how to use the `list-inside` and `list-outside` Tailwind CSS utilities to control the position of list markers within an HTML `<ul>` element. It shows the basic application of these classes to modify list styling.

```html
<ul class="list-inside">  <li>5 cups chopped Porcini mushrooms</li>  <!-- ... --></ul><ul class="list-outside">  <li>5 cups chopped Porcini mushrooms</li>  <!-- ... --></ul>
```

--------------------------------

### Responsive caption-side with breakpoint variants

Source: https://tailwindcss.com/docs/caption-side

Apply caption-side utilities responsively using breakpoint prefixes like md: to change caption positioning at different screen sizes. This example shows caption-top on mobile and caption-bottom on medium screens and above.

```html
<caption class="caption-top md:caption-bottom ...">
  <!-- ... -->
</caption>
```

--------------------------------

### Apply opacity with custom values

Source: https://tailwindcss.com/docs/opacity

Use the opacity-[<value>] bracket notation syntax to apply custom opacity values not covered by preset utilities. This allows any decimal or percentage value for fine-grained opacity control.

```html
<button class="opacity-[.67] ...">  <!-- ... --></button>
```

--------------------------------

### Apply Negative Text Indentation with Tailwind CSS

Source: https://tailwindcss.com/docs/text-indent

This example illustrates how to apply a negative text indentation using Tailwind CSS. By prefixing the class name with a dash, such as `-indent-8`, a negative `text-indent` value is applied to the paragraph element.

```HTML
<p class="-indent-8">So I started to walk into the water...</p>
```

--------------------------------

### Bottom Mask Gradient From Color in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Creates a bottom mask gradient using a custom color as the starting point instead of black. The gradient transitions from the specified color to transparent at the bottom boundary. Enables colored masking effects.

```css
mask-image: linear-gradient(to bottom, <color> var(--tw-mask-bottom-from), transparent var(--tw-mask-bottom-to));
```

--------------------------------

### Apply Basic Outline Styles with Tailwind CSS

Source: https://tailwindcss.com/docs/outline-style

This example demonstrates how to use various Tailwind CSS utilities such as `outline-solid`, `outline-dashed`, `outline-dotted`, and `outline-double` to set the visual style of an element's outline. These classes are typically combined with `outline-width` and `outline-offset` utilities.

```html
<button class="outline-2 outline-offset-2 outline-solid ...">Button A</button><button class="outline-2 outline-offset-2 outline-dashed ...">Button B</button><button class="outline-2 outline-offset-2 outline-dotted ...">Button C</button><button class="outline-3 outline-offset-2 outline-double ...">Button D</button>
```

--------------------------------

### Set Fixed Maximum Width with Tailwind CSS Spacing Scale

Source: https://tailwindcss.com/docs/max-width

This example demonstrates how to use `max-w-<number>` utilities (e.g., `max-w-96`, `max-w-80`) to assign a fixed maximum width to elements based on the Tailwind CSS spacing scale. These utilities apply a `max-width` property derived from `calc(var(--spacing) * <number>)`.

```html
<div class="w-full max-w-96 ...">max-w-96</div><div class="w-full max-w-80 ...">max-w-80</div><div class="w-full max-w-64 ...">max-w-64</div><div class="w-full max-w-48 ...">max-w-48</div><div class="w-full max-w-40 ...">max-w-40</div><div class="w-full max-w-32 ...">max-w-32</div><div class="w-full max-w-24 ...">max-w-24</div>
```

--------------------------------

### Optimize Vue/Svelte/Astro <style> blocks using native CSS variables

Source: https://tailwindcss.com/docs/compatibility

This example for Vue, Svelte, and Astro components demonstrates styling within a `<style scoped>` block by directly referencing native CSS variables (e.g., `var(--color-blue-500)`). This approach bypasses Tailwind CSS processing for the component's styles, offering a performance benefit over using `@apply`.

```html
<template>
  <button><slot /></button>
</template>
<style scoped>
  button {
    background-color: var(--color-blue-500);
  }
</style>
```

--------------------------------

### Apply responsive mask-type utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-type

This example shows how to apply `mask-type` utilities responsively using Tailwind CSS breakpoint variants. The `mask-type-alpha` class is applied by default, but it switches to `mask-type-luminance` for medium screen sizes and above due to the `md:mask-type-luminance` variant.

```html
<mask class="mask-type-alpha md:mask-type-luminance ...">  <!-- ... --></mask>
```

--------------------------------

### Apply Tailwind CSS backdrop grayscale responsively

Source: https://tailwindcss.com/docs/backdrop-filter-grayscale

Explains how to use responsive prefixes like `md:` to apply backdrop grayscale utilities conditionally based on screen size. This example demonstrates how to apply a grayscale filter by default and then disable it at medium screen sizes and above.

```html
<div class="backdrop-grayscale md:backdrop-grayscale-0 ...">  <!-- ... --></div>
```

--------------------------------

### Add Pulse Animation with Tailwind CSS

Source: https://tailwindcss.com/docs/animation

Utilize `animate-pulse` to make an element gently fade in and out, commonly used for skeleton loaders to indicate content is being loaded. The example shows a pulsating content placeholder structure.

```html
<div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">  <div class="flex animate-pulse space-x-4">    <div class="size-10 rounded-full bg-gray-200"></div>    <div class="flex-1 space-y-6 py-1">      <div class="h-2 rounded bg-gray-200"></div>      <div class="space-y-3">        <div class="grid grid-cols-3 gap-4">          <div class="col-span-2 h-2 rounded bg-gray-200"></div>          <div class="col-span-1 h-2 rounded bg-gray-200"></div>        </div>        <div class="h-2 rounded bg-gray-200"></div>      </div>    </div>  </div></div>
```

--------------------------------

### Use Tailwind CSS Utility Classes in Component

Source: https://tailwindcss.com/docs/installation/framework-guides/sveltekit

Apply Tailwind CSS utility classes to HTML elements in your SvelteKit components. Use the @reference directive in style blocks to enable Tailwind CSS processing for custom styles and theme access.

```svelte
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
```

--------------------------------

### Importing Tailwind CSS Preflight into Base Layer

Source: https://tailwindcss.com/docs/preflight

This CSS snippet demonstrates how Tailwind CSS automatically imports its Preflight base styles into the `base` layer. It shows the recommended layer ordering and explicit `@import` rules for theme, base, components, and utilities.

```css
@layer theme, base, components, utilities;@import "tailwindcss/theme.css" layer(theme);@import "tailwindcss/preflight.css" layer(base);@import "tailwindcss/utilities.css" layer(utilities);
```

--------------------------------

### Apply Custom Text Indentation with Tailwind CSS

Source: https://tailwindcss.com/docs/text-indent

This example showcases applying custom text indentation using Tailwind CSS with arbitrary values or CSS variables. The `indent-[50%]` class directly sets a 50% indentation, while `indent-(--my-indentation)` utilizes a CSS custom property for dynamic indentation.

```HTML
<p class="indent-[50%] ...">  Lorem ipsum dolor sit amet...</p>
```

```HTML
<p class="indent-(--my-indentation) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Create Arbitrary Variants with Custom Selectors

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Arbitrary variants allow writing custom selector variants directly in HTML using square bracket syntax. This example creates a variant that changes cursor to grabbing when an element has the is-dragging class.

```html
<ul role="list">
  {#each items as item}
    <li class="[&.is-dragging]:cursor-grabbing">{item}</li>
  {/each}
</ul>
```

--------------------------------

### Apply Important Flag to Tailwind CSS Utilities (CSS)

Source: https://tailwindcss.com/docs/preflight

This CSS example demonstrates how to use the `important` flag with the `tailwindcss/utilities.css` import. Applying `important` affects all generated utilities, making them `!important`, which can be useful for overriding other styles.

```css
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import "tailwindcss/utilities.css" layer(utilities) important;
```

--------------------------------

### Bottom Mask Gradient From Percentage in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Applies a bottom-to-top mask gradient starting at a specified percentage opacity. The mask fades from black at the given percentage to transparent at the bottom stop position. Useful for creating bottom-fading mask effects.

```css
mask-image: linear-gradient(to bottom, black <percentage>, transparent var(--tw-mask-bottom-to));
```

--------------------------------

### Static Positioning with Tailwind CSS

Source: https://tailwindcss.com/docs/position

Demonstrates using the `static` utility class to position an element according to the normal document flow. Static positioned elements ignore offset utilities and do not serve as position references for absolutely positioned children.

```html
<div class="static ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

--------------------------------

### Set custom Tailwind CSS backdrop saturation value

Source: https://tailwindcss.com/docs/backdrop-filter-saturate

Illustrates how to set a completely custom backdrop saturation value using Tailwind CSS's arbitrary value syntax, for example, `backdrop-saturate-[.25]`.

```html
<div class="backdrop-saturate-[.25] ...">  <!-- ... --></div>
```

--------------------------------

### Set Top-Direction Mask 'From' Position by Custom Property (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at a position defined by a custom CSS property and transitions to `transparent` at `--tw-mask-top-to`.

```css
mask-image: linear-gradient(to top, black var(<custom-property>), transparent var(--tw-mask-top-to));
```

--------------------------------

### Apply Responsive Scroll Padding with Breakpoint Variants in Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-padding

Demonstrates how to use Tailwind CSS scroll-padding utilities with responsive breakpoint variants. The example shows applying base scroll padding (scroll-p-8) that changes to no scroll padding (scroll-p-0) at medium screen sizes and above using the md: prefix.

```html
<div class="scroll-p-8 md:scroll-p-0 ...">  <!-- ... --></div>
```

--------------------------------

### Set Right-Direction Mask 'From' Position by Custom Property (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at a position defined by a custom CSS property and transitions to `transparent` at `--tw-mask-right-to`.

```css
mask-image: linear-gradient(to right, black var(<custom-property>), transparent var(--tw-mask-right-to));
```

--------------------------------

### Run Tailwind CSS Upgrade Tool

Source: https://tailwindcss.com/docs/upgrade-guide

Execute the automated upgrade tool via npm to migrate a project from v3 to v4. The tool automatically updates dependencies, migrates configuration files to CSS, and handles template file changes. Requires Node.js 20 or higher.

```terminal
npx @tailwindcss/upgrade
```

--------------------------------

### Set Top-Direction Mask 'To' Position by Custom Property (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to top'. The gradient starts from `black` at `--tw-mask-top-from` and transitions to `transparent` at a position defined by a custom CSS property.

```css
mask-image: linear-gradient(to top, black var(--tw-mask-top-from), transparent var(<custom-property>));
```

--------------------------------

### Apply aspect ratio to image element using Tailwind CSS

Source: https://tailwindcss.com/docs/aspect-ratio

Use the aspect-<ratio> utility class to set a specific aspect ratio on an image element. This example applies a 3:2 aspect ratio combined with object-cover for proper image scaling.

```HTML
<img class="aspect-3/2 object-cover ..." src="/img/villas.jpg" />
```

--------------------------------

### Dynamic Class Name Generation in React Component

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Demonstrates how Tailwind CSS scans source files to detect class names used dynamically. This example shows a React Button component that generates Tailwind classes programmatically based on component props.

```javascript
export default function Button({ size, children }) {
  let sizeClasses = {
    md: "px-4 py-2 rounded-md text-base",
    lg: "px-5 py-3 rounded-lg text-lg",
  }[size];
  return (
    <button type="button" className={`font-bold ${sizeClasses}`}>
      {children}
    </button>
  );
}
```

--------------------------------

### Basic outline-width classes HTML

Source: https://tailwindcss.com/docs/outline-width

Examples of using Tailwind CSS outline-width utility classes (outline, outline-2, outline-4) with outline-offset for spacing control. These classes set the outline width of buttons to 1px, 2px, and 4px respectively.

```html
<button class="outline outline-offset-2 ...">Button A</button>
<button class="outline-2 outline-offset-2 ...">Button B</button>
<button class="outline-4 outline-offset-2 ...">Button C</button>
```

--------------------------------

### Set Right-Direction Mask 'To' Position by Custom Property (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies a linear gradient mask directed 'to right'. The gradient starts from `black` at `--tw-mask-right-from` and transitions to `transparent` at a position defined by a custom CSS property.

```css
mask-image: linear-gradient(to right, black var(--tw-mask-right-from), transparent var(<custom-property>));
```

--------------------------------

### Custom Flex Values with Square Bracket Syntax in Tailwind CSS

Source: https://tailwindcss.com/docs/flex

Demonstrates using flex-[<value>] syntax for arbitrary custom flex shorthand values not covered by predefined utilities. Allows complete control over flex grow, shrink, and basis properties.

```html
<div class="flex-[3_1_auto] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive transform origin with Tailwind CSS in HTML

Source: https://tailwindcss.com/docs/transform-origin

This code demonstrates how to make `transform-origin` utilities responsive by prefixing them with breakpoint variants like `md:`. This allows the origin to change based on screen size, for example, `origin-center` for small screens and `md:origin-top` for medium and larger screens.

```html
<img class="origin-center md:origin-top ..." src="/img/mountains.jpg" />
```

--------------------------------

### Use Custom Data Attribute Variant in HTML

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This HTML example demonstrates how to apply styles using a custom `data-checked` Tailwind CSS variant. The `data-checked:underline` class is applied when the `data-ui` attribute includes 'checked'.

```html
<div data-ui="checked active" class="data-checked:underline">  <!-- ... --></div>
```

--------------------------------

### Set Custom Cursor Value with Tailwind CSS Utility

Source: https://tailwindcss.com/docs/cursor

Illustrates how to use the arbitrary value syntax `cursor-[<value>]` in Tailwind CSS to apply a completely custom cursor style. This example sets a custom cursor using a URL to an image file (`hand.cur`) and provides `pointer` as a fallback. This allows for highly customized visual feedback.

```html
<button class="cursor-[url(hand.cur),_pointer] ...">  <!-- ... --></button>
```

--------------------------------

### HTML Structure with Manual Dark Mode Data Attribute

Source: https://tailwindcss.com/docs/dark-mode

This HTML example shows how to manually activate dark mode by setting the `data-theme="dark"` attribute on the `<html>` element. When used with a custom Tailwind CSS configuration for data attribute-based dark mode, this attribute enables `dark:` utilities for elements within the document, facilitating user-controlled theme management.

```html
<html data-theme="dark">
  <body>
    <div class="bg-white dark:bg-black">
      <!-- ... -->
    </div>
  </body>
</html>
```

--------------------------------

### Set Linear Gradient Mask 'From' Position by Arbitrary Value (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Applies an arbitrary value to define the start position of the `black` part of a linear gradient mask. The gradient transitions from this `black` stop to `transparent` at the `--tw-mask-linear-to` position.

```css
mask-image: linear-gradient(var(--tw-mask-linear-position), black <value>, transparent var(--tw-mask-linear-to));
```

--------------------------------

### Responsive background-position with breakpoint variants in Tailwind CSS

Source: https://tailwindcss.com/docs/background-position

Illustrates how to apply background-position utilities responsively using Tailwind breakpoint prefixes. The md: prefix applies the bg-top utility only at medium screen sizes and above, while bg-center applies at smaller breakpoints.

```html
<div class="bg-center md:bg-top ...">  <!-- ... --></div>
```

--------------------------------

### Basic transition-timing-function utilities - HTML/Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Demonstrates how to apply predefined easing utilities to HTML elements. The ease-in, ease-out, and ease-in-out classes control the acceleration curve of CSS transitions. Each class maps to a specific cubic-bezier timing function or CSS variable.

```html
<button class="duration-300 ease-in ...">Button A</button>
<button class="duration-300 ease-out ...">Button B</button>
<button class="duration-300 ease-in-out ...">Button C</button>
```

--------------------------------

### Update Tailwind CSS CLI Command for v4

Source: https://tailwindcss.com/docs/upgrade-guide

Migrate Tailwind CLI commands from the base tailwindcss package to the new dedicated @tailwindcss/cli package in v4. Update build scripts to use the new package name.

```terminal
npx @tailwindcss/cli -i input.css -o output.css
```

--------------------------------

### Define Custom @supports Variant in Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Creates a reusable custom variant for common @supports rules using @custom-variant. This example defines a supports-grid variant that checks for display: grid support, reducing repetition across the project.

```css
@custom-variant supports-grid {
  @supports (display: grid) {
    @slot;
  }
}
```

--------------------------------

### Configure Vite Plugin for Tailwind CSS v4

Source: https://tailwindcss.com/docs/upgrade-guide

Set up the dedicated Vite plugin for Tailwind CSS v4 to replace the PostCSS plugin approach. This provides improved performance and better developer experience in Vite-based projects.

```typescript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
```

--------------------------------

### Set Font Stretch with Percentage Values in Tailwind CSS

Source: https://tailwindcss.com/docs/font-stretch

This HTML example illustrates applying font stretch using percentage-based Tailwind CSS utilities such as `font-stretch-50%`, `font-stretch-100%`, and `font-stretch-150%`. These classes allow precise control over font width, useful for fonts that support such variations.

```html
<p class="font-stretch-50%">The quick brown fox...</p><p class="font-stretch-100%">The quick brown fox...</p><p class="font-stretch-150%">The quick brown fox...</p>
```

--------------------------------

### Apply Responsive Masking with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Explains how to use responsive breakpoint variants, such as `md:`, to apply `mask-image` utilities conditionally based on screen size. This allows for adaptive mask designs across different devices.

```html
<div class="mask-radial-from-70% md:mask-radial-from-50% ...">  <!-- ... --></div>
```

--------------------------------

### Show Element with Tailwind CSS `visible`

Source: https://tailwindcss.com/docs/visibility

This example shows how to use the Tailwind CSS `visible` utility to explicitly make an element visible. This is primarily useful for overriding `invisible` or other hidden states at different screen sizes or under specific conditions, ensuring the element is rendered in its normal document flow position.

```html
<div class="grid grid-cols-3 gap-4">  <div>01</div>  <div class="visible ...">02</div>  <div>03</div></div>
```

--------------------------------

### Dynamic Class Names Anti-Pattern in HTML

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Shows an incorrect example of using template syntax to dynamically construct Tailwind class names. This pattern fails because Tailwind scans source files as plain text and cannot understand string interpolation, resulting in missing CSS generation.

```html
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

--------------------------------

### Set custom aspect ratio value using Tailwind CSS

Source: https://tailwindcss.com/docs/aspect-ratio

Use the aspect-[<value>] syntax to apply a completely custom aspect ratio calculation. This example uses a calc() expression to compute a custom aspect ratio value.

```HTML
<img class="aspect-[calc(4*3+1)/3] ..." src="/img/villas.jpg" />
```

--------------------------------

### Enable @apply with global styles in Vue/Svelte/Astro <style> blocks

Source: https://tailwindcss.com/docs/compatibility

For component frameworks like Vue, Svelte, and Astro, this example illustrates how to use `@reference` within a `<style scoped>` block. This explicit import of global styles ensures that Tailwind's `@apply` directive can access theme variables correctly within the component's isolated styles.

```html
<template>
  <button><slot /></button>
</template>
<style scoped>
  @reference "../app.css";
  button {
    @apply bg-blue-500;
  }
</style>
```

--------------------------------

### Use a custom letter spacing utility in Tailwind CSS

Source: https://tailwindcss.com/docs/letter-spacing

This HTML example demonstrates how to apply a newly defined custom `letter-spacing` utility class, `tracking-tightest`, to a paragraph element. This class becomes available after customizing the Tailwind CSS theme.

```html
<p class="tracking-tightest">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Responsive Text Wrapping with Tailwind CSS

Source: https://tailwindcss.com/docs/text-wrap

This example shows how to apply text wrapping utilities responsively using Tailwind CSS breakpoint variants. The `md:text-balance` class ensures that `text-balance` is only applied at medium screen sizes and above, allowing for different text wrapping behaviors based on screen dimensions.

```html
<h1 class="text-pretty md:text-balance ...">  <!-- ... --></h1>
```

--------------------------------

### Extend Tailwind CSS Theme with Custom Blur Utility

Source: https://tailwindcss.com/docs/filter-blur

This example demonstrates how to customize the Tailwind CSS theme by defining a new blur utility, `--blur-2xs`, with a specific pixel value within the `@theme` block. This allows project-specific blur sizes to be integrated and used throughout the application.

```css
@theme {  --blur-2xs: 2px; }
```

--------------------------------

### Scale with Hover Variant - Tailwind CSS

Source: https://tailwindcss.com/docs/scale

Apply scale utilities conditionally using state variants like hover:*. This example scales an element to 95% by default and increases to 120% on hover, enabling interactive scaling effects.

```html
<img class="scale-95 hover:scale-120 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply not- variant with media query conditions

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Combine the not- variant with media query variants like forced-colors or supports to conditionally style elements based on user environment constraints. This example uses flexbox layout when CSS Grid is not supported.

```html
<div class="not-supports-[display:grid]:flex">
  <!-- ... -->
</div>
```

--------------------------------

### Add Ping Animation with Tailwind CSS

Source: https://tailwindcss.com/docs/animation

Apply the `animate-ping` utility to create a scaling and fading effect, useful for notification badges or ripple effects. This example demonstrates a pulsating notification dot by using a combination of `animate-ping` and a static dot.

```html
<span class="relative flex size-3">  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span></span>
```

--------------------------------

### Apply Tailwind CSS `isolate` utility for stacking context

Source: https://tailwindcss.com/docs/isolation

Demonstrates the basic usage of the `isolate` utility in HTML to explicitly create a new stacking context for an element.

```html
<div class="isolate ...">  <!-- ... --></div>
```

--------------------------------

### Build a Basic Card Component with Tailwind CSS

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This HTML snippet demonstrates how to construct a simple UI card component using various Tailwind CSS utility classes. It showcases the application of classes for layout (`flex`, `mx-auto`), spacing (`p-6`, `gap-x-4`), sizing (`max-w-sm`, `size-12`), background (`bg-white`), border radius (`rounded-xl`), shadow (`shadow-lg`), and text styling (`text-xl`, `font-medium`). It also includes dark mode variants for adaptive themes.

```html
<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />  <div>    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>  </div></div>
```

--------------------------------

### Update Transitions for Individual Transform Properties - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Include individual properties (opacity, scale, rotate, translate) instead of generic transform in transition lists. Using transition-[opacity,transform] no longer works with individual transform utilities.

```html
<button class="hover:scale-150 transition-[opacity,scale]"></button>
```

--------------------------------

### Update Arbitrary Values in Grid and Object-Position - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Replace commas with underscores in grid-cols-*, grid-rows-*, and object-* utilities when using arbitrary values. Commas are no longer converted to spaces automatically, requiring underscores for space representation.

```html
<div class="grid-cols-[max-content_auto]"></div>
```

--------------------------------

### Implement Grid Subgrid with Tailwind CSS grid-cols-subgrid

Source: https://tailwindcss.com/docs/grid-template-columns

This example illustrates the use of the `grid-cols-subgrid` utility in Tailwind CSS to make a nested grid inherit its parent's column tracks. It's useful for aligning items within a subgrid based on the main grid's structure.

```html
<div class="grid grid-cols-4 gap-4">  <div>01</div>  <!-- ... -->  <div>05</div>  <div class="col-span-3 grid grid-cols-subgrid gap-4">    <div class="col-start-2">06</div>  </div></div>
```

--------------------------------

### Use CSS Custom Properties for Font Stretch in Tailwind CSS

Source: https://tailwindcss.com/docs/font-stretch

This HTML example demonstrates applying font stretch using a CSS custom property with the `font-stretch-(<custom-property>)` syntax. This allows dynamic control over font width by linking it to a CSS variable, such as `--my-font-width`.

```html
<p class="font-stretch-(--my-font-width) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Safelist Utilities with Variants in Tailwind CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Generate classes with multiple variants (hover, focus, etc.) using `@source inline()` with variant syntax `{hover:,focus:,}`. This example generates the underline utility with hover and focus variants. Each variant creates a media query or pseudo-class selector for responsive behavior.

```css
@import "tailwindcss";
@source inline("{hover:,focus:,}underline");
```

```css
.underline {
  text-decoration-line: underline;
}
@media (hover: hover) {
  .hover\:underline:hover {
    text-decoration-line: underline;
  }
}
@media (focus: focus) {
  .focus\:underline:focus {
    text-decoration-line: underline;
  }
}
```

--------------------------------

### Correctly Target Mobile with Unprefixed Tailwind Utilities (HTML)

Source: https://tailwindcss.com/docs/responsive-design

To correctly style elements for mobile screens (the smallest breakpoint), use unprefixed Tailwind utilities. This example shows `text-center` for mobile, which is then overridden by `sm:text-left` for screens 640px and wider, following the mobile-first design principle.

```HTML
<!-- This will center text on mobile, and left align it on screens 640px and wider --><div class="text-center sm:text-left"></div>
```

--------------------------------

### Use responsive background-origin with breakpoint variants

Source: https://tailwindcss.com/docs/background-origin

Shows how to apply background-origin utilities conditionally at different screen sizes using Tailwind's responsive breakpoint syntax. The md: prefix applies the bg-origin-padding utility only at medium screen sizes and above.

```html
<div class="bg-origin-border md:bg-origin-padding ...">  <!-- ... --></div>
```

--------------------------------

### Configure Tailwind CSS PostCSS Plugin in `postcss.config.mjs`

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

This configuration file, `postcss.config.mjs`, sets up PostCSS plugins for the project. It explicitly includes `@tailwindcss/postcss` to enable Tailwind CSS processing as part of the PostCSS pipeline, ensuring Tailwind's directives are correctly handled.

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

--------------------------------

### Responsive Text Decoration Color

Source: https://tailwindcss.com/docs/text-decoration-color

Apply different text decoration colors at various breakpoints using responsive variants like md:. This example shows decoration-sky-600 on smaller screens and decoration-blue-400 on medium screens and above.

```html
<p class="underline decoration-sky-600 md:decoration-blue-400 ...">
  Lorem ipsum dolor sit amet...
</p>
```

--------------------------------

### Responsive border-spacing with Breakpoint Variants

Source: https://tailwindcss.com/docs/border-spacing

Demonstrates responsive design by applying different border-spacing utilities at different breakpoints. Uses md: prefix to apply border-spacing-4 at medium screen sizes and above, with border-spacing-2 as default.

```html
<table class="border-spacing-2 md:border-spacing-4 ...">  <!-- ... --></table>
```

--------------------------------

### Apply custom letter spacing with CSS variables in Tailwind CSS

Source: https://tailwindcss.com/docs/letter-spacing

This HTML example demonstrates using the `tracking-(<custom-property>)` syntax to apply a custom letter spacing defined by a CSS variable. This shorthand automatically wraps the custom property in `var()` for convenience.

```html
<p class="tracking-(--my-tracking) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply responsive background-size utility with breakpoint variant

Source: https://tailwindcss.com/docs/background-size

Prefix a background-size utility with a breakpoint variant like md: to conditionally apply the utility only at medium screen sizes and above. Enables mobile-first responsive design patterns.

```html
<div class="bg-auto md:bg-contain ...">  <!-- ... --></div>
```

--------------------------------

### Style before and after Pseudo-elements in Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use before and after variants to style ::before and ::after pseudo-elements. Tailwind automatically adds content: '' by default. This example shows a required field indicator using the after pseudo-element with a red asterisk.

```html
<label>
  <span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
  <input type="email" name="email" class="..." placeholder="you@example.com" />
</label>
```

--------------------------------

### Use Descendant Selector with Underscore in Arbitrary Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Arbitrary variants support descendant selectors using underscores for spaces. This example selects all paragraph elements within the div to add top margin, regardless of nesting depth.

```html
<div class="[&_p]:mt-4">
  <p>Lorem ipsum...</p>
  <ul>
    <li>
      <p>Lorem ipsum...</p>
    </li>
    <!-- ... -->
  </ul>
</div>
```

--------------------------------

### Adjust Spacing for Reversed Flex Children with Tailwind CSS `space-x/y-reverse`

Source: https://tailwindcss.com/docs/margin

When flex children are in reverse order (e.g., `flex-row-reverse`), use `space-x-reverse` or `space-y-reverse` utilities to ensure spacing is applied correctly. This example demonstrates `space-x-reverse` with `flex-row-reverse` to maintain appropriate spacing.

```html
<div class="flex flex-row-reverse space-x-4 space-x-reverse ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Set Percentage-Based Maximum Width with Tailwind CSS

Source: https://tailwindcss.com/docs/max-width

This snippet illustrates the usage of `max-w-full` or `max-w-<fraction>` utilities (e.g., `max-w-9/10`, `max-w-1/2`) to apply percentage-based maximum widths to elements. This allows for flexible sizing relative to the parent container.

```html
<div class="w-full max-w-9/10 ...">max-w-9/10</div><div class="w-full max-w-3/4 ...">max-w-3/4</div><div class="w-full max-w-1/2 ...">max-w-1/2</div><div class="w-full max-w-1/3 ...">max-w-1/3</div>
```

--------------------------------

### Include compiled CSS and use Tailwind classes in Twig

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Demonstrates how to include the compiled application stylesheet in a Symfony Twig template using `encore_entry_link_tags` and applies a basic Tailwind CSS class to an HTML element. This confirms Tailwind CSS is correctly integrated and working.

```twig
<!doctype html><html>  <head>    <meta charset="utf-8" />    <meta      name="viewport"      content="width=device-width, initial-scale=1.0"    />    {% block stylesheets %}      {{ encore_entry_link_tags('app') }}    {% endblock %}  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```

--------------------------------

### Apply Tailwind CSS `color-scheme` utilities to HTML elements

Source: https://tailwindcss.com/docs/color-scheme

This HTML example shows how to use Tailwind CSS `scheme-light`, `scheme-dark`, and `scheme-light-dark` utilities on `div` containers. These utilities influence how child elements, such as `input type="date"`, render their intrinsic UI based on the specified color scheme.

```html
<div class="scheme-light ...">  <input type="date" /></div><div class="scheme-dark ...">  <input type="date" /></div><div class="scheme-light-dark ...">  <input type="date" /></div>
```

--------------------------------

### Apply responsive text transformation with Tailwind CSS

Source: https://tailwindcss.com/docs/text-transform

Tailwind CSS allows applying text transformation utilities conditionally based on screen size using breakpoint variants. For example, `md:uppercase` will make the text uppercase only on medium screens and above, overriding `capitalize`.

```html
<p class="capitalize md:uppercase ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Set Custom Border Width with bracket Syntax

Source: https://tailwindcss.com/docs/border-width

Use the border-[<value>] syntax to apply completely custom border width values that aren't available in the default Tailwind scale. This example sets a border width of 2vw (2% of viewport width).

```html
<div class="border-[2vw] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Responsive Backdrop Brightness HTML Example

Source: https://tailwindcss.com/docs/backdrop-filter-brightness

Illustrates responsive design with backdrop brightness filters using Tailwind breakpoint variants. The backdrop brightness value changes from 110% on mobile to 150% at medium screen sizes and above using the md: prefix.

```html
<div class="backdrop-brightness-110 md:backdrop-brightness-150 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply styles within a Tailwind CSS breakpoint range

Source: https://tailwindcss.com/docs/responsive-design

This example demonstrates how to apply a utility class only within a specific breakpoint range by stacking responsive variants. The `md:max-xl:flex` class applies `flex` layout from the `md` breakpoint up to, but not including, the `xl` breakpoint. This is useful for creating responsive designs that need precise control over element behavior at different screen sizes.

```html
<div class="md:max-xl:flex">  <!-- ... --></div>
```

--------------------------------

### Create Arbitrary peer-* Variants with Custom Selectors

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use peer-[selector] syntax to create one-off peer variants with custom CSS selectors. The & character marks where the .peer class should be positioned in the final selector for fine-grained control over selector specificity and structure.

```html
<form>
  <label for="email">Email:</label>
  <input id="email" name="email" type="email" class="is-dirty peer" required />
  <div class="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
</form>
```

```html
<div>
  <input type="text" class="peer" />
  <div class="hidden peer-[:nth-of-type(3)_&]:block">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Add Spin Animation with Tailwind CSS

Source: https://tailwindcss.com/docs/animation

Use the `animate-spin` utility to add a linear spin animation to HTML elements, typically for loading indicators. This example shows a spinning SVG icon within a button to indicate processing.

```html
<button type="button" class="bg-indigo-500 ..." disabled>  <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">    <!-- ... -->  </svg>  Processing…</button>
```

--------------------------------

### Conditionally Apply Animations with Tailwind CSS Reduced Motion Variants

Source: https://tailwindcss.com/docs/animation

Use `motion-safe` and `motion-reduce` variants to apply animations conditionally based on user preferences for reduced motion. This example applies `animate-spin` only if the user has not specified a preference for reduced motion.

```html
<button type="button" class="bg-indigo-600 ..." disabled>  <svg class="mr-3 size-5 motion-safe:animate-spin ..." viewBox="0 0 24 24">    <!-- ... -->  </svg>  Processing</button>
```

--------------------------------

### Responsive break-after with Breakpoint Variants

Source: https://tailwindcss.com/docs/break-after

Shows how to use responsive design with break-after utilities by prefixing with breakpoint variants like md:. The break-after-column utility applies at small screens, switching to break-after-auto at medium screens and above.

```html
<div class="break-after-column md:break-after-auto ...">
  <!-- ... -->
</div>
```

--------------------------------

### Bottom Mask Gradient From Custom Property in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Applies a bottom mask gradient using a custom CSS property for the from-color position. Allows dynamic control over the gradient start point via CSS variables. Supports flexible masking configurations.

```css
mask-image: linear-gradient(to bottom, black var(<custom-property>), transparent var(--tw-mask-bottom-to));
```

--------------------------------

### Set transform origin using CSS variable in HTML

Source: https://tailwindcss.com/docs/transform-origin

This example illustrates how to dynamically set the transform origin using a CSS custom property with the `origin-(<custom-property>)` syntax. It's a shorthand for `origin-[var(<custom-property>)]`, allowing flexible origin definitions.

```html
<img class="origin-(--my-transform-origin) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply an Image Mask using Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

This example demonstrates how to apply a custom image mask to an HTML element using Tailwind CSS's `mask-[<value>]` utility. It combines a mask image (`url(/img/scribble.png)`) with a background image (`bg-[url(/img/mountains.jpg)]`) to create a masked visual effect.

```html
<div class="mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Transitions in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/transition-property

Explains how to use responsive prefixes like `md:` with `transition-property` utilities in Tailwind CSS. This allows transitions to be enabled or disabled only at specific screen sizes or larger breakpoints.

```HTML
<button class="transition-none md:transition-all ...">  <!-- ... --></button>
```

--------------------------------

### Use Negative Margins with Tailwind CSS `-m-<number>` Utilities

Source: https://tailwindcss.com/docs/margin

Apply negative margin values by prefixing the class name with a dash, such as `-mt-8`. This example demonstrates how a negative top margin can cause an element to overlap with preceding content.

```html
<div class="h-16 w-36 bg-sky-400 opacity-20 ..."></div><div class="-mt-8 bg-sky-300 ...">-mt-8</div>
```

--------------------------------

### Explicitly setting flex item sort order

Source: https://tailwindcss.com/docs/order

Use order-<number> utilities to render flex and grid items in a different order than they appear in the document. This example demonstrates reordering three items (01, 02, 03) to display in order 2, 3, 1 visually while maintaining their original DOM structure.

```HTML
<div class="flex justify-between ...">
  <div class="order-3 ...">01</div>
  <div class="order-1 ...">02</div>
  <div class="order-2 ...">03</div>
</div>
```

--------------------------------

### Use responsive mask-origin utilities with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/mask-origin

Apply mask-origin utilities conditionally at different screen sizes using breakpoint prefixes like md:. This example shows how to change the mask origin from border to padding at medium screen sizes and above.

```html
<div class="mask-origin-border md:mask-origin-padding ...">  <!-- ... --></div>
```

--------------------------------

### Apply Predefined Blur Filters to HTML Elements with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-blur

This example demonstrates how to apply a range of predefined blur filters, such as `blur-none`, `blur-sm`, `blur-lg`, and `blur-2xl`, to image elements using Tailwind CSS utility classes. These classes directly translate to `filter: blur()` CSS properties with varying pixel values.

```html
<img class="blur-none" src="/img/mountains.jpg" /><img class="blur-sm" src="/img/mountains.jpg" /><img class="blur-lg" src="/img/mountains.jpg" /><img class="blur-2xl" src="/img/mountains.jpg" />
```

--------------------------------

### Override Image Display to Inline with Tailwind CSS in HTML

Source: https://tailwindcss.com/docs/preflight

This HTML example shows how to override Preflight's default `display: block` for images. By applying the `inline` utility class from Tailwind CSS, the image will render as an inline element.

```html
<img class="inline" src="..." alt="..." />
```

--------------------------------

### Allowing flex items to grow in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-grow

Basic example of using the grow class to allow a flex item to expand and fill available space within a flexbox container. The first and third items are prevented from growing with flex-none, while the middle item grows to fill the remaining space.

```html
<div class="flex ...">
  <div class="size-14 flex-none ...">01</div>
  <div class="size-14 grow ...">02</div>
  <div class="size-14 flex-none ...">03</div>
</div>
```

--------------------------------

### Automatically Size Table Columns with Tailwind CSS `table-auto`

Source: https://tailwindcss.com/docs/table-layout

This HTML example uses the Tailwind CSS `table-auto` utility to set the table layout algorithm. It automatically sizes table columns to fit their content, allowing for flexible column widths based on data length. No external dependencies are required beyond Tailwind CSS itself.

```html
<table class="table-auto">  <thead>    <tr>      <th>Song</th>      <th>Artist</th>      <th>Year</th>    </tr>  </thead>  <tbody>    <tr>      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>      <td>Malcolm Lockyer</td>      <td>1961</td>    </tr>    <tr>      <td>Witchy Woman</td>      <td>The Eagles</td>      <td>1972</td>    </tr>    <tr>      <td>Shining Star</td>      <td>Earth, Wind, and Fire</td>      <td>1975</td>    </tr>  </tbody></table>
```

--------------------------------

### Apply Basic Fill Color to SVG with Tailwind CSS

Source: https://tailwindcss.com/docs/fill

This example demonstrates how to set the fill color of an SVG element using a predefined Tailwind CSS color utility class. It applies `fill-blue-500` to an SVG, effectively coloring its interior.

```html
<svg class="fill-blue-500 ...">  <!-- ... --></svg>
```

--------------------------------

### Apply Responsive Margins with Tailwind CSS Breakpoint Variants

Source: https://tailwindcss.com/docs/margin

Implement responsive design by applying margin utilities conditionally based on screen size using breakpoint variants like `md:`. This example sets a default `mt-4` margin which changes to `md:mt-8` on medium screens and above.

```html
<div class="mt-4 md:mt-8 ...">  <!-- ... --></div>
```

--------------------------------

### Migrate Tailwind CSS v4 Space Utilities to Flex/Grid Gap

Source: https://tailwindcss.com/docs/upgrade-guide

If the updated selectors for `space-x-*` and `space-y-*` utilities in Tailwind CSS v4 cause unexpected layout issues, it is recommended to migrate to a flexbox or grid layout and utilize the `gap` utility for spacing instead.

```html
<div class="space-y-4 p-4"><div class="flex flex-col gap-4 p-4">  <label for="name">Name</label>  <input type="text" name="name" /></div>
```

--------------------------------

### Set Base Path for Source Detection

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Configures the base path for Tailwind's source file scanning using the source() function in the CSS import statement. Useful for monorepo setups where build commands run from different directories.

```css
@import "tailwindcss" source("../src");
```

--------------------------------

### Apply Print-Specific Styles in Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Uses the print variant to apply styles that only take effect when the document is being printed. This example hides the main article and shows a custom message when printing, useful for protecting sensitive content.

```html
<div>
  <article class="print:hidden">
    <h1>My Secret Pizza Recipe</h1>
    <p>This recipe is a secret, and must not be shared with anyone</p>
  </article>
  <div class="hidden print:block">Are you seriously trying to print this? It's secret!</div>
</div>
```

--------------------------------

### Apply Responsive Fill Colors to SVG with Tailwind CSS

Source: https://tailwindcss.com/docs/fill

This example demonstrates how to make SVG fill colors responsive using Tailwind CSS breakpoint variants. By prefixing a `fill` utility with a breakpoint like `md:`, the fill color can change based on screen size, applying `fill-cyan-500` by default and `fill-cyan-700` from medium screens and above.

```html
<svg class="fill-cyan-500 md:fill-cyan-700 ...">  <!-- ... --></svg>
```

--------------------------------

### Custom border-spacing Value Syntax

Source: https://tailwindcss.com/docs/border-spacing

Shows how to use the border-spacing-[<value>] syntax to apply arbitrary custom spacing values directly to table elements. Provides two approaches: inline custom values and CSS custom properties.

```html
<table class="border-spacing-[7px] ...">  <!-- ... --></table>
```

```html
<table class="border-spacing-(--my-border-spacing) ...">  <!-- ... --></table>
```

--------------------------------

### Apply responsive display utilities with breakpoint variants in Tailwind CSS

Source: https://tailwindcss.com/docs/display

Prefix display utilities with breakpoint variants like `md:` to apply the utility only at specific screen sizes. This enables responsive design patterns where display behavior changes based on viewport width. Example shows `flex` on small screens and `inline-flex` on medium screens and above.

```html
<div class="flex md:inline-flex ...">
  <!-- ... -->
</div>
```

--------------------------------

### Reference Tailwind CSS directly in Vue components with @reference

Source: https://tailwindcss.com/docs/functions-and-directives

This `@reference` example shows how to import `tailwindcss` directly into a Vue component's `<style>` block. This approach is suitable when you're using default Tailwind theme values without custom configurations like `@theme` or `@plugin` directives.

```Vue
<template>  <h1>Hello world!</h1></template><style>  @reference "tailwindcss";  h1 {    @apply text-2xl font-bold text-red-500;  }</style>
```

--------------------------------

### Reverse Divide Direction for Reversed Flex Layouts

Source: https://tailwindcss.com/docs/border-width

Use divide-x-reverse or divide-y-reverse utilities when child elements are in reverse order (using flex-row-reverse or flex-col-reverse) to ensure borders appear on the correct side. This example shows a vertically reversed layout with reversed divide borders.

```html
<div class="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-200">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Set Gradient Color Stops with Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Use from-*, via-*, and to-* color utilities to define gradient color stops. The from class sets the starting color, via defines intermediate colors, and to sets the ending color in a gradient transition.

```html
<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
```

--------------------------------

### Customize Tailwind CSS v4 Container Utility using `@utility` Directive

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4, configuration options for the `container` utility like `center` and `padding` are removed. To customize the `container` utility, extend it using the `@utility` directive in your CSS.

```css
@utility container {  margin-inline: auto;  padding-inline: 2rem;}
```

--------------------------------

### Apply Responsive Line Height (Tailwind CSS HTML)

Source: https://tailwindcss.com/docs/line-height

Demonstrates applying responsive line height utilities to HTML elements using Tailwind CSS breakpoint variants. Prefixing utilities like `md:leading-6` allows different line heights based on screen sizes.

```html
<p class="leading-5 md:leading-6 ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Style Placeholder Text with Tailwind CSS `placeholder` Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example demonstrates how to style the placeholder text of an input or textarea element using Tailwind CSS's `placeholder` variant. It applies specific text color and font style to the placeholder text.

```html
<input  class="placeholder:text-gray-500 placeholder:italic ..."  placeholder="Search for anything..."  type="text"  name="search"/>
```

--------------------------------

### Percentage-based min-width utilities

Source: https://tailwindcss.com/docs/min-width

Uses min-w-full and fraction-based utilities like min-w-1/2 and min-w-3/4 to set percentage-based minimum widths for responsive layouts.

```html
<div class="flex ...">
  <div class="min-w-3/4 ...">min-w-3/4</div>
  <div class="w-full ...">w-full</div>
</div>
```

--------------------------------

### Apply Custom Sepia Filter Value in Tailwind CSS

Source: https://tailwindcss.com/docs/filter-sepia

This HTML example illustrates applying a custom sepia filter value using Tailwind CSS's JIT syntax `sepia-[<value>]`. It allows precise control over the sepia effect by specifying a custom numeric value, such as `sepia-[.25]` for a 25% sepia effect.

```html
<img class="sepia-[.25] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply responsive vertical alignment with Tailwind CSS

Source: https://tailwindcss.com/docs/vertical-align

Illustrates how to conditionally apply `vertical-align` utilities based on screen size using responsive prefixes, such as `md:align-top`, ensuring adaptable layouts for different viewports.

```html
<span class="align-middle md:align-top ...">  <!-- ... --></span>
```

--------------------------------

### Apply Outline Offset with Tailwind CSS Custom Properties

Source: https://tailwindcss.com/docs/outline-offset

This example demonstrates applying an outline offset using a CSS custom property with Tailwind CSS's shorthand `outline-offset-(<custom-property>)` syntax. It automatically wraps the custom property in `var()`, allowing for dynamic offsets managed by CSS variables.

```html
<div class="outline-offset-(--my-outline-offset) ...">  <!-- ... --></div>
```

--------------------------------

### Set Linear Gradient Mask 'From' Position by Number (Tailwind CSS)

Source: https://tailwindcss.com/docs/mask-image

Defines the start position of the `black` part of a linear gradient mask using a calculated spacing value. The gradient transitions from this `black` stop to `transparent` at the `--tw-mask-linear-to` position, based on `--tw-mask-linear-position`.

```css
mask-image: linear-gradient(var(--tw-mask-linear-position), black calc(var(--spacing) * <number>), transparent var(--tw-mask-linear-to));
```

--------------------------------

### Apply negative letter spacing using Tailwind CSS classes

Source: https://tailwindcss.com/docs/letter-spacing

This HTML example demonstrates how to apply a negative letter spacing value using a custom Tailwind CSS tracking class like `-tracking-2`. This class leverages pre-configured theme variables to achieve the negative tracking effect.

```html
<p class="-tracking-2">The quick brown fox ...</p>
```

--------------------------------

### Isolate mix-blend-mode effects in Tailwind CSS

Source: https://tailwindcss.com/docs/mix-blend-mode

This example illustrates how to use the `isolate` utility on a parent element in Tailwind CSS to create a new stacking context. This prevents the `mix-blend-mode` effect from blending with content outside of the isolated parent, as shown by comparing two sets of blended divs, one within an `isolate` container and one without.

```html
<div class="isolate flex justify-center -space-x-14">  <div class="bg-yellow-500 mix-blend-multiply ..."></div>  <div class="bg-green-500 mix-blend-multiply ..."></div></div><div class="flex justify-center -space-x-14">  <div class="bg-yellow-500 mix-blend-multiply ..."></div>  <div class="bg-green-500 mix-blend-multiply ..."></div></div>
```

--------------------------------

### Enable PostCSS Processing in Ember.js `ember-cli-build.js`

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

This configuration in `ember-cli-build.js` enables PostCSS processing for CSS files within an Ember.js project. It utilizes `postcss-loader` via Webpack to ensure that CSS files, including those using Tailwind CSS, are processed correctly during the build.

```javascript
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  const { Webpack } = require('@embroider/webpack');

  return require('@embroider/compat').compatBuild(app, Webpack, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    packagerOptions: {
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ['postcss-loader'],
            },
          ],
        },
      },
    },
  });
};
```

--------------------------------

### Apply Responsive Word Break in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/word-break

Implement responsive word breaking by prefixing word-break utilities with breakpoint variants, such as `md:`. This allows the text breaking behavior to adapt to different screen sizes, for example, switching from normal breaks on small screens to `break-all` on medium screens and above.

```HTML
<p class="break-normal md:break-all ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Set Logical Margins with Tailwind CSS `ms/me-<number>` Utilities

Source: https://tailwindcss.com/docs/margin

Control inline-start and inline-end margins using logical properties like `ms-<number>` and `me-<number>`. This example shows how these utilities (`ms-8`, `me-8`) adjust based on the `dir` attribute (LTR or RTL) of the parent container.

```html
<div>  <div dir="ltr">    <div class="ms-8 ...">ms-8</div>    <div class="me-8 ...">me-8</div>  </div>  <div dir="rtl">    <div class="ms-8 ...">ms-8</div>    <div class="me-8 ...">me-8</div>  </div></div>
```

--------------------------------

### Apply Custom Blur Values using Arbitrary or CSS Variable Syntax in HTML

Source: https://tailwindcss.com/docs/filter-blur

These examples illustrate how to achieve highly specific blur effects by applying custom pixel values directly (`blur-[2px]`) or referencing CSS variables (`blur-(--my-blur)`) within Tailwind CSS utility classes. This provides flexibility beyond the predefined blur sizes.

```html
<img class="blur-[2px] ..." src="/img/mountains.jpg" />
```

```html
<img class="blur-(--my-blur) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply responsive perspective-origin utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/perspective-origin

Demonstrates how to conditionally apply `perspective-origin` utilities based on screen size using responsive prefixes like `md:`. This enables different perspective origins for various breakpoints, allowing for adaptive 3D layouts across devices.

```HTML
<div class="perspective-origin-center md:perspective-origin-bottom-left ...">  <!-- ... --></div>
```

--------------------------------

### Configure PostCSS to use Tailwind CSS in a Meteor project

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

This JavaScript configuration file (`postcss.config.mjs`) defines the PostCSS plugins for your Meteor project. It specifically registers the `@tailwindcss/postcss` plugin, enabling Tailwind CSS to process its directives and generate the final CSS output.

```javascript
export default {  plugins: {    "@tailwindcss/postcss": {},  },};
```

--------------------------------

### Apply bg-cover utility to fill container with background image

Source: https://tailwindcss.com/docs/background-size

Use the bg-cover class to scale the background image until it fills the background layer, cropping the image if necessary. This utility is useful for hero sections and full-width background images.

```html
<div class="bg-[url(/img/mountains.jpg)] bg-cover bg-center"></div>
```

--------------------------------

### Horizontal-only mask repetition with mask-repeat-x

Source: https://tailwindcss.com/docs/mask-repeat

Uses the mask-repeat-x utility to repeat a mask image exclusively in the horizontal direction. This example shows how to constrain mask repetition to a single axis while maintaining other mask properties like size and background image.

```html
<div class="mask-repeat-x mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)]"></div>
```

--------------------------------

### Crop background to text with bg-clip-text - Tailwind CSS

Source: https://tailwindcss.com/docs/background-clip

Use the bg-clip-text utility to crop an element's background to match the shape of text. This example applies a linear gradient background (pink to violet) and text-transparent class to create a gradient text effect on a paragraph element.

```html
<p class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">  Hello world</p>
```

--------------------------------

### Apply mask-cover utility to fill container with cropping

Source: https://tailwindcss.com/docs/mask-size

Uses the mask-cover utility class to scale a mask image until it fills the mask layer, cropping the image if necessary. The example combines mask-cover with a mask image URL and background image URL on a div element.

```html
<div class="mask-cover mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Apply styles within a Tailwind CSS container query range

Source: https://tailwindcss.com/docs/responsive-design

This HTML example illustrates how to target a specific container size range by stacking container query variants. The `@sm:@max-md:flex-col` variant applies `flex-col` when the container size is between the `sm` and `md` breakpoints. This provides precise control over component layout based on defined container size ranges.

```html
<div class="@container">  <div class="flex flex-row @sm:@max-md:flex-col">    <!-- ... -->  </div></div>
```

--------------------------------

### Basic z-index Utilities Usage with Tailwind CSS

Source: https://tailwindcss.com/docs/z-index

Demonstrates using z-<number> utilities like z-10, z-30, and z-40 to control the stack order (z-index) of multiple elements regardless of their display order. This example shows five stacked divs with increasing z-index values to control which elements appear on top.

```html
<div class="z-40 ...">05</div>
<div class="z-30 ...">04</div>
<div class="z-20 ...">03</div>
<div class="z-10 ...">02</div>
<div class="z-0 ...">01</div>
```

--------------------------------

### Apply grid-auto-flow utilities in HTML

Source: https://tailwindcss.com/docs/grid-auto-flow

Use Tailwind CSS grid-auto-flow utility classes to control how elements are automatically placed in a grid. The example demonstrates a 3x3 grid with row-dense auto-flow where items span multiple columns. Responsive variants like md: prefix allow applying different auto-flow values at specific breakpoints.

```html
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

```html
<div class="grid grid-flow-col md:grid-flow-row ...">
  <!-- ... -->
</div>
```

--------------------------------

### Update Variant Stacking Order - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

In v4, stacked variants are applied left to right instead of right to left. Reverse the order of stacked variants that are order-sensitive, particularly direct child variants (*) and typography plugin variants (prose-headings).

```html
<ul class="py-4 first:*:pt-0 last:*:pb-0"></ul>
```

--------------------------------

### Tailwind Border Inline Start Color - Fuchsia Shades

Source: https://tailwindcss.com/docs/border-color

CSS utility classes for styling the inline-start border with fuchsia color variants. Includes all shade levels (50-950) with OKLCH color definitions, enabling vibrant to deep fuchsia borders for bidirectional text layouts.

```css
.border-s-fuchsia-50 {
  border-inline-start-color: var(--color-fuchsia-50);
  /* oklch(97.7% 0.017 320.058) */
}

.border-s-fuchsia-200 {
  border-inline-start-color: var(--color-fuchsia-200);
  /* oklch(90.3% 0.076 319.62) */
}

.border-s-fuchsia-500 {
  border-inline-start-color: var(--color-fuchsia-500);
  /* oklch(66.7% 0.295 322.15) */
}

.border-s-fuchsia-950 {
  border-inline-start-color: var(--color-fuchsia-950);
  /* oklch(29.3% 0.136 325.661) */
}
```

--------------------------------

### Responsive scroll-snap-type with breakpoint variant

Source: https://tailwindcss.com/docs/scroll-snap-type

Applies scroll snapping utilities conditionally based on screen size using Tailwind's breakpoint variants (e.g., md:). This example disables snapping on small screens and enables horizontal snapping at medium breakpoint and above.

```html
<div class="snap-none md:snap-x ...">
  <!-- ... -->
</div>
```

--------------------------------

### Utilize Custom Defined Blur Utility in HTML Markup

Source: https://tailwindcss.com/docs/filter-blur

After extending the Tailwind CSS theme with a custom blur utility, this example shows how to apply the newly created `blur-2xs` class directly to an HTML image element. This integrates custom theme definitions seamlessly into your markup.

```html
<img class="blur-2xs" src="/img/mountains.jpg" />
```

--------------------------------

### Container Scale Width Sizing

Source: https://tailwindcss.com/docs/width

Use container scale utilities (w-xs, w-sm, w-md, w-lg, w-xl, w-2xl through w-7xl) to set element widths based on predefined container breakpoints. Ideal for responsive design with semantic sizing.

```html
<div class="w-xl ...">w-xl</div>
<div class="w-lg ...">w-lg</div>
<div class="w-md ...">w-md</div>
<div class="w-sm ...">w-sm</div>
<div class="w-xs ...">w-xs</div>
<div class="w-2xs ...">w-2xs</div>
<div class="w-3xs ...">w-3xs</div>
```

--------------------------------

### Tailwind CSS: Using CSS Variables for Pseudo-element Content (`content-(--var)`)

Source: https://tailwindcss.com/docs/content

This example uses the `content-(<custom-property>)` syntax in Tailwind CSS to set the pseudo-element's content dynamically using a CSS variable. This provides a flexible way to manage content through CSS custom properties, supporting theming and dynamic updates.

```html
<p class="content-(--my-content)"></p>
```

--------------------------------

### Responsive font-style with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/font-style

Combine `font-style` utilities with responsive breakpoint prefixes like `md:` to apply different text styles at specific screen sizes. This example applies italic styling on small screens and switches to normal text at medium breakpoints and above.

```html
<p class="italic md:not-italic ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Collapsing Borders to HTML Tables using Tailwind CSS

Source: https://tailwindcss.com/docs/border-collapse

This example demonstrates how to use the `border-collapse` utility class in Tailwind CSS to combine adjacent cell borders into a single border for an HTML table. It requires adding `border-collapse` and `border` classes to the table element and `border` classes to cells for the effect to be visible. The utility ensures borders are merged efficiently.

```html
<table class="border-collapse border border-gray-400 ...">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">State</th>
      <th class="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 ...">Indiana</td>
      <td class="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Ohio</td>
      <td class="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Michigan</td>
      <td class="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
```

--------------------------------

### Style Element Based on Sibling State with peer Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the peer class on a sibling element and peer-* variants to style a target element based on the sibling's state. This example shows validation feedback that appears when an email input is invalid. The peer marker works only on previous siblings due to CSS combinator limitations.

```html
<form>
  <label class="block">
    <span class="...">Email</span>
    <input type="email" class="peer ..." />
    <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
  </label>
</form>
```

--------------------------------

### Responsive max-height HTML with breakpoint variants

Source: https://tailwindcss.com/docs/max-height

Demonstrates responsive design by prefixing max-height utilities with breakpoint variants like md: to apply different maximum heights at different screen sizes. Sets max-h-full on small screens and max-h-screen on medium screens and above.

```html
<div class="h-48 max-h-full md:max-h-screen ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply background-clip utilities in HTML - Tailwind CSS

Source: https://tailwindcss.com/docs/background-clip

Use Tailwind CSS background-clip utility classes to control the bounding box of element backgrounds. The example demonstrates bg-clip-border, bg-clip-padding, and bg-clip-content classes applied to bordered div elements with indigo backgrounds and padding.

```html
<div class="border-4 bg-indigo-500 bg-clip-border p-3"></div>
<div class="border-4 bg-indigo-500 bg-clip-padding p-3"></div>
<div class="border-4 bg-indigo-500 bg-clip-content p-3"></div>
```

--------------------------------

### Apply Dark Mode Styles in Tailwind CSS

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This example demonstrates how to implement dark mode styling using the `dark:` prefix in Tailwind CSS. Utilities like `dark:bg-gray-800` apply specific styles only when dark mode is active, allowing for separate class definitions for light and dark themes. The generated CSS shows the underlying `@media (prefers-color-scheme: dark)` implementation.

```HTML
<div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">  <div>    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">      <svg        class="h-6 w-6 text-white"        fill="none"        viewBox="0 0 24 24"        stroke="currentColor"        aria-hidden="true"      >        <!-- ... -->      </svg>    </span>  </div>  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.  </p></div>
```

```CSS
.dark\:bg-gray-800 {  @media (prefers-color-scheme: dark) {    background-color: var(--color-gray-800);  }}
```

--------------------------------

### Custom z-index Values with Arbitrary Syntax

Source: https://tailwindcss.com/docs/z-index

Demonstrates using arbitrary value syntax z-[<value>] to set custom z-index values that aren't predefined in Tailwind. Useful for dynamic calculations or specific stacking requirements beyond standard utility classes.

```html
<div class="z-[calc(var(--index)+1)] ...">  <!-- ... --></div>
```

--------------------------------

### Apply mask-alpha utility with radial gradient in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-mode

Demonstrates the mask-alpha utility class applied to a div element with a radial gradient mask. The mask-alpha mode uses the opacity of the mask to determine visibility of the masked element. The example includes radial gradient positioning and a background image from the mountains photo.

```html
<div class="mask-alpha mask-r-from-black mask-r-from-50% mask-r-to-transparent bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Custom background-position values with bracket notation in Tailwind CSS

Source: https://tailwindcss.com/docs/background-position

Shows how to use Tailwind's bracket notation syntax to apply completely custom background-position values that aren't covered by predefined utilities. The bg-position-[<value>] syntax allows arbitrary CSS values.

```html
<div class="bg-position-[center_top_1rem] ...">  <!-- ... --></div>
```

--------------------------------

### Customize Tailwind CSS Stroke Colors via Theme

Source: https://tailwindcss.com/docs/stroke

Provides an example of customizing the Tailwind CSS theme to define new color variables using the `@theme` directive. This enables the creation of custom `stroke` utility classes like `stroke-regal-blue` for use in your markup.

```css
@theme {  --color-regal-blue: #243c5a; }
```

```html
<svg class="stroke-regal-blue">  <!-- ... --></svg>
```

--------------------------------

### Apply Responsive Sepia Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-sepia

This HTML example demonstrates applying a sepia filter conditionally based on screen size using responsive variants in Tailwind CSS. The `md:sepia-0` class ensures the sepia effect is removed (set to 0%) on medium screens and above, while `sepia` applies a full sepia filter by default.

```html
<img class="sepia md:sepia-0 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Set Custom Grid Column Values with Tailwind CSS

Source: https://tailwindcss.com/docs/grid-template-columns

These examples demonstrate how to use custom values for `grid-template-columns` in Tailwind CSS. The first shows direct `grid-cols-[<value>]` syntax, allowing for arbitrary CSS values, while the second uses `grid-cols-(<custom-property>)` for applying CSS variables directly.

```html
<div class="grid-cols-[200px_minmax(900px,_1fr)_100px] ...">  <!-- ... --></div>
```

```html
<div class="grid-cols-(--my-grid-cols) ...">  <!-- ... --></div>
```

--------------------------------

### Apply Container Query Length Units in Tailwind CSS

Source: https://tailwindcss.com/docs/responsive-design

Use container query length units like cqw (container query width) as arbitrary values in utility classes to dynamically size elements relative to their container. This example sets width to 50% of the container width using the w-[50cqw] utility.

```html
<div class="@container">
  <div class="w-[50cqw]">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Apply responsive Tailwind CSS line-clamp utilities

Source: https://tailwindcss.com/docs/line-clamp

This HTML snippet shows how to apply responsive line clamping using breakpoint variants. The text will be clamped to 3 lines by default and then to 4 lines on medium screen sizes and above, adapting the UI to different viewports.

```html
<div class="line-clamp-3 md:line-clamp-4 ...">  <!-- ... --></div>
```

--------------------------------

### Apply Custom Background Color Utility in Tailwind Markup

Source: https://tailwindcss.com/docs/background-color

Use the custom background-color utility created from theme variables in your HTML markup. This example demonstrates applying the `bg-regal-blue` utility class to a div element after defining the custom color in the theme.

```html
<div class="bg-regal-blue">  <!-- ... --></div>
```

--------------------------------

### Responsive grid-auto-columns with breakpoint variant

Source: https://tailwindcss.com/docs/grid-auto-columns

Demonstrates responsive design by prefixing the grid-auto-columns utility with a breakpoint variant like md:. The utility only applies at medium screen sizes and above, allowing different column sizing at different viewport widths.

```html
<div class="grid grid-flow-col auto-cols-max md:auto-cols-min ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive Tailwind CSS backdrop saturation

Source: https://tailwindcss.com/docs/backdrop-filter-saturate

Demonstrates how to apply backdrop saturation utilities conditionally based on screen size by using responsive prefixes, such as `md:backdrop-saturate-150` for medium screens and above.

```html
<div class="backdrop-saturate-50 md:backdrop-saturate-150 ...">  <!-- ... --></div>
```

--------------------------------

### Clear with logical properties using clear-start and clear-end

Source: https://tailwindcss.com/docs/clear

Uses clear-start and clear-end utilities with logical properties that automatically map to left or right based on text direction. This is essential for supporting both LTR (left-to-right) and RTL (right-to-left) languages like Arabic without changing the HTML.

```html
<article dir="rtl">
  <img class="float-left ..." src="/img/green-mountains.jpg" />
  <img class="float-right ..." src="/img/green-mountains.jpg" />
  <p class="clear-end ...">...ربما يمكننا العيش بدون مكتبات،</p>
</article>
```

--------------------------------

### Custom transition-timing-function with CSS variables - HTML/Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Demonstrates the ease-(<custom-property>) syntax for referencing custom CSS variables. This provides a shorthand that automatically wraps the custom property in the var() function.

```html
<button class="ease-(--my-ease) ...">  <!-- ... --></button>
```

--------------------------------

### Replace theme() Function with CSS Variables - CSS

Source: https://tailwindcss.com/docs/upgrade-guide

Use CSS variables instead of the theme() function for theme values in v4. For cases requiring theme() like media queries, use CSS variable names instead of dot notation.

```css
.my-class {
  background-color: var(--color-red-500);
}
```

```css
@media (width >= theme(--breakpoint-xl)) {
  /* ... */
}
```

--------------------------------

### HTML Usage of Border Y Color Classes

Source: https://tailwindcss.com/docs/border-color

Example HTML markup demonstrating how to apply Tailwind CSS border-y color utilities to elements. These classes style the top and bottom borders of HTML elements with predefined color values from Tailwind's palette.

```HTML
<div class="border-y border-y-purple-950">
  Purple top and bottom borders
</div>

<div class="border-y border-y-fuchsia-500">
  Fuchsia top and bottom borders
</div>

<div class="border-y border-y-pink-400">
  Pink top and bottom borders
</div>

<div class="border-y border-y-rose-600">
  Rose top and bottom borders
</div>

<div class="border-y border-y-slate-300">
  Slate top and bottom borders
</div>

<div class="border-y border-y-gray-200">
  Gray top and bottom borders
</div>
```

--------------------------------

### Apply Pretty Text Wrapping with Tailwind CSS `text-pretty`

Source: https://tailwindcss.com/docs/text-wrap

This example demonstrates using the `text-pretty` utility class on an `h3` element to prefer better text wrapping and layout, often preventing orphans. While behavior can vary across browsers, it aims for enhanced aesthetics at a potential performance cost.

```html
<article>  <h3 class="text-pretty">Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

--------------------------------

### Responsive clear utility with breakpoint variant in Tailwind CSS

Source: https://tailwindcss.com/docs/clear

Apply clear utilities responsively using Tailwind CSS breakpoint variants like md:. This allows you to apply different clear behaviors at different screen sizes. The example applies clear-left by default and switches to clear-none at medium screen sizes and above.

```html
<p class="clear-left md:clear-none ...">
  Lorem ipsum dolor sit amet...
</p>
```

--------------------------------

### Style Dialog Backdrop with Tailwind CSS `backdrop` Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example illustrates how to style the backdrop of a native `<dialog>` element using the Tailwind CSS `backdrop` variant. It sets a specific background color for the overlay that appears when the dialog is open, enhancing its visual presentation.

```html
<dialog class="backdrop:bg-gray-50">  <form method="dialog">    <!-- ... -->  </form></dialog>
```

--------------------------------

### Apply backdrop blur and grayscale filters in Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter

Demonstrates basic usage of Tailwind backdrop filter utilities to apply blur and grayscale effects to an element's backdrop. The example shows individual filters and combined filters applied to nested div elements with background images.

```html
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-blur-xs ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-grayscale ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-blur-xs backdrop-grayscale ..."></div>
</div>
```

--------------------------------

### Define Grid Columns with Tailwind CSS grid-cols-<number>

Source: https://tailwindcss.com/docs/grid-template-columns

This example demonstrates how to use `grid-cols-<number>` utilities in Tailwind CSS to create a grid layout with a specified number of equally sized columns. It shows a basic `div` structure where `grid-cols-4` divides the container into four columns.

```html
<div class="grid grid-cols-4 gap-4">  <div>01</div>  <!-- ... -->  <div>09</div></div>
```

--------------------------------

### Match Theme Values with --value(--theme-key-*) Syntax

Source: https://tailwindcss.com/docs/adding-custom-styles

Resolves utility values against theme keys using the --value(--theme-key-*) function. Allows matching utilities like tab-2, tab-4, and tab-github by referencing corresponding theme variables. The asterisk (*) acts as a wildcard for dynamic matching.

```CSS
@theme {
  --tab-size-2: 2;
  --tab-size-4: 4;
  --tab-size-github: 8;
}

@utility tab-* {
  tab-size: --value(--tab-size-*);
}
```

--------------------------------

### Apply CSS Variable for Cursor with Tailwind CSS Utility

Source: https://tailwindcss.com/docs/cursor

Shows how to use the `cursor-(<custom-property>)` shorthand in Tailwind CSS to apply a custom cursor style defined by a CSS variable. This syntax automatically wraps the custom property name in `var()`, making it a convenient way to integrate CSS custom properties for cursor styling. For example, `--my-cursor` would be resolved to `var(--my-cursor)`.

```html
<button class="cursor-(--my-cursor) ...">  <!-- ... --></button>
```

--------------------------------

### Apply mask-luminance utility with radial gradient in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-mode

Demonstrates the mask-luminance utility class applied to a div element with a radial gradient mask. The mask-luminance mode uses the luminance value of the mask to determine visibility, making grayscale colors produce the most predictable results. The example shows a gradient from white to black.

```html
<div class="mask-luminance mask-r-from-white mask-r-from-50% mask-r-to-black bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Set Custom Outline Offset with Tailwind CSS Bracket Syntax

Source: https://tailwindcss.com/docs/outline-offset

This snippet illustrates using Tailwind CSS's bracket syntax `outline-offset-[<value>]` to set a custom outline offset. The example `outline-offset-[2vw]` applies a viewport-width relative offset, allowing for flexible design specifications.

```html
<div class="outline-offset-[2vw] ...">  <!-- ... --></div>
```

--------------------------------

### Apply opacity with CSS custom properties

Source: https://tailwindcss.com/docs/opacity

Use the opacity-(<custom-property>) syntax to reference CSS custom properties for dynamic opacity values. This is shorthand for opacity-[var(<custom-property>)] and automatically wraps the property in the var() function.

```html
<button class="opacity-(--my-opacity) ...">  <!-- ... --></button>
```

--------------------------------

### Apply font-family utilities in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/font-family

Use Tailwind CSS font-family utility classes to set typography on HTML elements. Includes examples of font-sans, font-serif, and font-mono classes applied to paragraph elements for different text rendering styles.

```HTML
<p class="font-sans ...">The quick brown fox ...</p>
<p class="font-serif ...">The quick brown fox ...</p>
<p class="font-mono ...">The quick brown fox ...</p>
```

--------------------------------

### Apply Tailwind Outline Color to Buttons

Source: https://tailwindcss.com/docs/outline-color

This example demonstrates how to apply different outline colors to HTML buttons using Tailwind CSS utility classes. It shows the use of `outline-blue-500`, `outline-cyan-500`, and `outline-pink-500` classes, combined with `outline-2` for width and `outline-offset-2` for spacing, to style button outlines.

```html
<button class="outline-2 outline-offset-2 outline-blue-500 ...">Button A</button><button class="outline-2 outline-offset-2 outline-cyan-500 ...">Button B</button><button class="outline-2 outline-offset-2 outline-pink-500 ...">Button C</button>
```

--------------------------------

### Apply Responsive Rotation with Tailwind CSS

Source: https://tailwindcss.com/docs/rotate

This snippet demonstrates how to apply different rotation utilities based on screen size using Tailwind CSS responsive prefixes like `md:`. This allows for adaptive rotation effects across various viewports.

```html
<img class="rotate-45 md:rotate-60 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Basic scroll-margin utility usage with snap container

Source: https://tailwindcss.com/docs/scroll-margin

Demonstrates how to use scroll-margin utilities like scroll-ml-6 and scroll-mt-6 to set scroll offsets on snapped items within a horizontal snap container. The snap-start class positions items at snap points while scroll-margin controls the offset distance.

```html
<div class="snap-x ...">
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-01.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-02.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-03.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-04.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-05.jpg"/>
  </div>
</div>
```

--------------------------------

### Apply Vertical Margin with Tailwind CSS `my-<number>` Utility

Source: https://tailwindcss.com/docs/margin

Utilize the `my-<number>` utility in Tailwind CSS to apply vertical margins (margin-top and margin-bottom) at once. This example shows `my-8` which sets 8 units of margin on both the top and bottom sides of the element.

```html
<div class="my-8 ...">my-8</div>
```

--------------------------------

### Set Border Start Color using Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/border-color

These utilities allow setting the `border-inline-start-color` property in CSS using Tailwind's predefined color palette. Each class corresponds to a specific color and shade, using CSS variables for consistency. The `oklch` color function provides a perceptual uniform color space.

```css
border-inline-start-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */
```

```css
border-inline-start-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */
```

```css
border-inline-start-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */
```

```css
border-inline-start-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */
```

```css
border-inline-start-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */
```

```css
border-inline-start-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */
```

```css
border-inline-start-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */
```

```css
border-inline-start-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */
```

```css
border-inline-start-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */
```

```css
border-inline-start-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */
```

```css
border-inline-start-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */
```

```css
border-inline-start-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */
```

```css
border-inline-start-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */
```

```css
border-inline-start-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */
```

```css
border-inline-start-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */
```

```css
border-inline-start-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */
```

```css
border-inline-start-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */
```

```css
border-inline-start-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */
```

```css
border-inline-start-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */
```

```css
border-inline-start-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */
```

```css
border-inline-start-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */
```

```css
border-inline-start-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */
```

```css
border-inline-start-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */
```

```css
border-inline-start-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */
```

```css
border-inline-start-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */
```

```css
border-inline-start-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */
```

```css
border-inline-start-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */
```

```css
border-inline-start-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */
```

```css
border-inline-start-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */
```

```css
border-inline-start-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */
```

```css
border-inline-start-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */
```

```css
border-inline-start-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */
```

```css
border-inline-start-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */
```

```css
border-inline-start-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */
```

```css
border-inline-start-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */
```

```css
border-inline-start-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */
```

```css
border-inline-start-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */
```

```css
border-inline-start-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */
```

```css
border-inline-start-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */
```

```css
border-inline-start-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */
```

```css
border-inline-start-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */
```

```css
border-inline-start-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */
```

```css
border-inline-start-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */
```

```css
border-inline-start-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */
```

```css
border-inline-start-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */
```

```css
border-inline-start-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */
```

--------------------------------

### Set custom mask-size value using bracket notation

Source: https://tailwindcss.com/docs/mask-size

Uses the mask-size-[<value>] syntax to set a completely custom mask image size. The example demonstrates setting the mask size to 'auto 100px' using Tailwind's bracket notation for arbitrary values.

```html
<div class="mask-size-[auto_100px] ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Background Color with Tailwind Breakpoint Variants

Source: https://tailwindcss.com/docs/background-color

Use Tailwind CSS breakpoint variants to conditionally apply background-color utilities at specific screen sizes. This example applies `bg-blue-500` by default and switches to `bg-green-500` at medium screen sizes and above. Requires Tailwind CSS framework with variant support enabled.

```html
<div class="bg-blue-500 md:bg-green-500 ...">  <!-- ... --></div>
```

--------------------------------

### Apply Margin to All Sides with Tailwind CSS `m-<number>` Utility

Source: https://tailwindcss.com/docs/margin

Use the `m-<number>` utility in Tailwind CSS to apply a uniform margin to all four sides of an element. This example demonstrates `m-8` which sets a margin of 8 units around the div element.

```html
<div class="m-8 ...">m-8</div>
```

--------------------------------

### Set Individual Margins with Tailwind CSS `mt/mr/mb/ml-<number>` Utilities

Source: https://tailwindcss.com/docs/margin

Control margin on a single side of an element using specific Tailwind CSS utilities. This example shows `mt-6` (margin-top), `mr-4` (margin-right), `mb-8` (margin-bottom), and `ml-2` (margin-left) to apply margins independently.

```html
<div class="mt-6 ...">mt-6</div><div class="mr-4 ...">mr-4</div><div class="mb-8 ...">mb-8</div><div class="ml-2 ...">ml-2</div>
```

--------------------------------

### Apply Pointer Device Variants in Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Uses pointer-fine and pointer-coarse variants to target accurate (mouse/trackpad) or less accurate (touchscreen) pointing devices respectively. The example demonstrates providing larger click targets on touch devices by adjusting padding and grid layout for coarse pointers.

```html
<fieldset aria-label="Choose a memory option">
  <div class="flex items-center justify-between">
    <div>RAM</div>
    <a href="#">See performance specs</a>
  </div>
  <div class="mt-4 grid grid-cols-6 gap-2 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
    <label class="p-2 pointer-coarse:p-4 ...">
      <input type="radio" name="memory-option" value="4 GB" className="sr-only" />
      <span>4 GB</span>
    </label>
  </div>
</fieldset>
```

--------------------------------

### Create conic gradient mask for circular progress indicator Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Uses conic gradient mask utilities to create a circular progress indicator showing storage usage. The mask-conic-from-75% and mask-conic-to-75% utilities create the colored arc effect, transitioning from black to transparent by default. This example displays 75% storage usage with custom styling.

```html
<div class="flex items-center gap-5 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 dark:bg-gray-800">
  <div class="grid grid-cols-1 grid-rows-1">
    <div class="border-4 border-gray-100 dark:border-gray-700 ..."></div>
    <div class="border-4 border-amber-500 mask-conic-from-75% mask-conic-to-75% dark:border-amber-400 ..."></div>
  </div>
  <div class="w-0 flex-1 text-sm text-gray-950 dark:text-white">
    <p class="font-medium">Storage used: 75%</p>
    <p class="mt-1 text-gray-500 dark:text-gray-400"><span class="font-medium">0.48 GB</span> out of 2 GB remaining</p>
  </div>
</div>
```

--------------------------------

### Define Conic Mask Properties and Variables with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

This section details how Tailwind CSS utilities control the `mask-image` property for conic gradients. It includes setting the starting angle (`from <number>deg`), and defining the `from` and `to` gradient stop values using numbers, percentages, colors, or custom CSS properties.

```css
mask-image: conic-gradient(from <number>deg, black var(--tw-mask-conic-from), transparent var(--tw-mask-conic-to));
```

```css
mask-image: conic-gradient(from calc(<number>deg * -1), black var(--tw-mask-conic-from), transparent var(--tw-mask-conic-to));
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black calc(var(--spacing) * <number>), transparent var(--tw-mask-conic-to));
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black <percentage>, transparent var(--tw-mask-conic-to));
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), <color> var(--tw-mask-conic-from), transparent var(--tw-mask-conic-to));
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black var(<custom-property>), transparent var(--tw-mask-conic-to));
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black <value>, transparent var(--tw-mask-conic-to));
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black var(--tw-mask-conic-from), transparent calc(var(--spacing) * <number>));
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black var(--tw-mask-conic-from), transparent <percentage>);
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black var(--tw-mask-conic-from), <color> var(--tw-mask-conic-to);
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black var(--tw-mask-conic-from), transparent var(<custom-property>);
```

```css
mask-image: conic-gradient(from var(--tw-mask-conic-position), black var(--tw-mask-conic-from), transparent <value>);
```

--------------------------------

### Balance Text Wrapping with Tailwind CSS `text-balance`

Source: https://tailwindcss.com/docs/text-wrap

This example illustrates the use of the `text-balance` utility class on an `h3` element to distribute text evenly across each line. This utility is best suited for headings or short blocks of text (typically 6 lines or less) for improved readability and visual appeal.

```html
<article>  <h3 class="text-balance">Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

--------------------------------

### Customize Tailwind CSS Fill Colors via Theme Configuration

Source: https://tailwindcss.com/docs/fill

This set of examples shows how to extend Tailwind CSS's color palette by defining custom CSS variables within the `@theme` block. Once defined, a new utility class like `fill-regal-blue` becomes available for use in your HTML, allowing for project-specific branding and color schemes.

```css
@theme {  --color-regal-blue: #243c5a; }
```

```html
<svg class="fill-regal-blue">  <!-- ... --></svg>
```

--------------------------------

### Use responsive breakpoint variants with transform-style

Source: https://tailwindcss.com/docs/transform-style

Apply transform-style utilities conditionally at different screen sizes using breakpoint prefixes like md:, lg:, etc. This example applies transform-3d by default and switches to transform-flat at medium screen sizes and above, enabling different 3D rendering behaviors across responsive breakpoints.

```HTML
<div class="transform-3d md:transform-flat ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply radial mask with custom position and gradient Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Creates a radial gradient mask on an image element using Tailwind utilities. The mask transitions from black to transparent by default and can be customized with position utilities like mask-radial-at-left and size utilities like mask-radial-from-75%. This example shows a masked keyboard image with accompanying text content.

```html
<div class="flex items-center gap-4">
  <img class="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left ..." src="/img/keyboard.png" />
  <div class="font-medium">
    <p class="font-mono text-xs text-blue-500 uppercase dark:text-blue-400">Speed</p>
    <p class="mt-2 text-base text-gray-700 dark:text-gray-300">Built for power users</p>
    <p class="mt-1 text-sm leading-relaxed text-balance text-gray-500">
      Work faster than ever with customizable keyboard shortcuts
    </p>
  </div>
</div>
```

--------------------------------

### Tailwind CSS Horizontal Margin Utility Classes

Source: https://tailwindcss.com/docs/margin

Control left and right margins (margin-inline) using the mx- prefix. Applies margin to both inline start and end directions. Supports numeric multipliers, pixel values, auto alignment, custom properties, and arbitrary values.

```css
/* Numeric multiplier */
.mx-4 {
  margin-inline: calc(var(--spacing) * 4);
}

/* Negative margin */
.-mx-4 {
  margin-inline: calc(var(--spacing) * -4);
}

/* Auto margin */
.mx-auto {
  margin-inline: auto;
}

/* Pixel value */
.mx-px {
  margin-inline: 1px;
}

/* Negative pixel value */
.-mx-px {
  margin-inline: -1px;
}

/* Custom property */
.mx-\(--custom\) {
  margin-inline: var(--custom-property);
}

/* Arbitrary value */
.mx-\[50px\] {
  margin-inline: 50px;
}
```

--------------------------------

### Add Borders Between Child Elements with divide-x and divide-y

Source: https://tailwindcss.com/docs/border-width

Use divide-x and divide-y utilities to add borders between child elements in a grid or flex container. The example demonstrates a 3-column grid with 4px vertical dividers. Apply divide-x for vertical dividers between columns and divide-y for horizontal dividers between rows.

```html
<div class="grid grid-cols-3 divide-x-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Apply text shadow sizes with Tailwind CSS utilities

Source: https://tailwindcss.com/docs/text-shadow

Demonstrates how to apply different sized text shadows to text elements using Tailwind CSS size modifier classes. The example shows five text elements with progressively larger shadow sizes ranging from 2xs to lg. Each class applies a predefined shadow size to create visual depth variations.

```html
<p class="text-shadow-2xs ...">The quick brown fox...</p>
<p class="text-shadow-xs ...">The quick brown fox...</p>
<p class="text-shadow-sm ...">The quick brown fox...</p>
<p class="text-shadow-md ...">The quick brown fox...</p>
<p class="text-shadow-lg ...">The quick brown fox...</p>
```

--------------------------------

### Basic mask-repeat with bidirectional repetition

Source: https://tailwindcss.com/docs/mask-repeat

Applies the mask-repeat utility to repeat a mask image both vertically and horizontally on a div element. The example combines mask-repeat with mask image URL, mask size dimensions, and background image properties to create a masked background effect.

```html
<div class="mask-repeat mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Implement Tailwind CSS v4 Prefixes

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 introduces a new syntax for prefixes, which now act like variants and appear at the beginning of class names (e.g., `tw:flex`). When configuring your theme, variables should be defined without the prefix, but the generated CSS variables will automatically include the prefix (e.g., `--tw-font-display`) to prevent conflicts.

```html
<div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600">  <!-- ... --></div>
```

```css
@import "tailwindcss" prefix(tw);@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 120rem;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  /* ... */
}
```

```css
:root {
  --tw-font-display: "Satoshi", "sans-serif";
  --tw-breakpoint-3xl: 120rem;
  --tw-color-avocado-100: oklch(0.99 0 0);
  --tw-color-avocado-200: oklch(0.98 0.04 113.22);
  --tw-color-avocado-300: oklch(0.94 0.11 115.03);
  /* ... */
}
```

--------------------------------

### Custom order values with arbitrary syntax

Source: https://tailwindcss.com/docs/order

Use the order-[<value>] syntax to set order based on completely custom values or expressions. Also supports CSS variables with order-(<custom-property>) shorthand syntax.

```HTML
<div class="order-[min(var(--total-items),10)] ...">
  <!-- ... -->
</div>
```

```HTML
<div class="order-(--my-order) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Set custom backdrop contrast value with arbitrary syntax

Source: https://tailwindcss.com/docs/backdrop-filter-contrast

Use the backdrop-contrast-[<value>] syntax to apply a completely custom backdrop contrast value that isn't available in predefined Tailwind utilities. This allows for precise control over contrast filtering.

```html
<div class="backdrop-contrast-[.25] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Tailwind Border Inline Start Color - Rose Shades

Source: https://tailwindcss.com/docs/border-color

CSS utility classes for styling the inline-start border with rose color variants. Offers comprehensive shade options from 50 (lightest) to 950 (darkest) with OKLCH color space definitions for modern, perceptually accurate color rendering.

```css
.border-s-rose-50 {
  border-inline-start-color: var(--color-rose-50);
  /* oklch(96.9% 0.015 12.422) */
}

.border-s-rose-200 {
  border-inline-start-color: var(--color-rose-200);
  /* oklch(89.2% 0.058 10.001) */
}

.border-s-rose-500 {
  border-inline-start-color: var(--color-rose-500);
  /* oklch(64.5% 0.246 16.439) */
}

.border-s-rose-900 {
  border-inline-start-color: var(--color-rose-900);
  /* oklch(41% 0.159 10.272) */
}
```

--------------------------------

### Apply color utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/colors

Demonstrates using Tailwind CSS color utilities like bg-white, border-pink-300, and text-gray-950 to set background, border, and text colors on HTML elements. This example shows a notification card with multiple color utilities applied.

```html
<div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
  <span class="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
    <svg class="size-6 stroke-pink-700 dark:stroke-pink-500"><!-- ... --></svg>
  </span>
  <div>
    <p class="text-gray-700 dark:text-gray-400">
      <span class="font-medium text-gray-950 dark:text-white">Tom Watson</span> mentioned you in
      <span class="font-medium text-gray-950 dark:text-white">Logo redesign</span>
    </p>
    <time class="mt-1 block text-gray-500" datetime="9:37">9:37am</time>
  </div>
</div>
```

--------------------------------

### Tailwind CSS Vertical Margin Utility Classes

Source: https://tailwindcss.com/docs/margin

Control top and bottom margins (margin-block) using the my- prefix. Applies margin to both block start and end directions. Supports numeric multipliers, pixel values, auto alignment, custom properties, and arbitrary values.

```css
/* Numeric multiplier */
.my-4 {
  margin-block: calc(var(--spacing) * 4);
}

/* Negative margin */
.-my-4 {
  margin-block: calc(var(--spacing) * -4);
}

/* Auto margin */
.my-auto {
  margin-block: auto;
}

/* Pixel value */
.my-px {
  margin-block: 1px;
}

/* Negative pixel value */
.-my-px {
  margin-block: -1px;
}

/* Custom property */
.my-\(--custom\) {
  margin-block: var(--custom-property);
}

/* Arbitrary value */
.my-\[60px\] {
  margin-block: 60px;
}
```

--------------------------------

### Apply Horizontal Margin with Tailwind CSS `mx-<number>` Utility

Source: https://tailwindcss.com/docs/margin

Use the `mx-<number>` utility in Tailwind CSS to set horizontal margins (margin-left and margin-right) simultaneously. This example demonstrates `mx-8` to apply 8 units of margin on both the left and right sides of the element.

```html
<div class="mx-8 ...">mx-8</div>
```

--------------------------------

### Apply Custom Flex Shrink Values with Tailwind CSS

Source: https://tailwindcss.com/docs/flex-shrink

Explains how to use arbitrary values and CSS variables with the `shrink-[<value>]` and `shrink-(<custom-property>)` syntax in Tailwind CSS to define custom flex shrink factors for flex items.

```html
<div class="shrink-[calc(100vw-var(--sidebar))] ...">  <!-- ... --></div>
```

```html
<div class="shrink-(--my-shrink) ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Grayscale Utilities in HTML

Source: https://tailwindcss.com/docs/filter-grayscale

Demonstrates using responsive breakpoint variants with grayscale utilities by prefixing with md: to apply the grayscale filter only at medium screen sizes and above. The element has grayscale applied by default and switches to grayscale-0 (no effect) at md breakpoint.

```html
<img class="grayscale md:grayscale-0 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Enable Smooth Scrolling for HTML Document with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-behavior

This example demonstrates applying the `scroll-smooth` utility class to the `<html>` element to enable smooth scrolling behavior for the entire document. This class sets the CSS `scroll-behavior` property to `smooth`, causing browser-triggered scroll events to animate rather than jump. It's important to note that this only affects scrolling initiated by the browser.

```html
<html class="scroll-smooth">  <!-- ... --></html>
```

--------------------------------

### Apply Tailwind CSS Classes in Ember.js Handlebars Template

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

This Handlebars template snippet demonstrates how to use Tailwind CSS utility classes within an Ember.js component or template. It applies `text-3xl`, `font-bold`, and `underline` classes to an `<h1>` element, showcasing basic styling with Tailwind.

```handlebars
{{page-title "MyProject"}}
<h1 class="text-3xl font-bold underline">
  Hello world!</h1>{{outlet}}
```

--------------------------------

### Apply Custom CSS Animation Value with Tailwind CSS

Source: https://tailwindcss.com/docs/animation

Set a custom CSS animation directly using the `animate-[<value>]` arbitrary value syntax, allowing full control over animation properties like name, duration, and timing. This example applies a custom `wiggle` animation definition.

```html
<div class="animate-[wiggle_1s_ease-in-out_infinite] ...">  <!-- ... --></div>
```

--------------------------------

### Tailwind Border Inline Start Color - Purple Shades

Source: https://tailwindcss.com/docs/border-color

CSS utility classes for applying purple color variants to the inline-start border. Provides a complete range from light (50) to dark (950) shades using CSS custom properties with OKLCH color space values for consistent color rendering.

```css
.border-s-purple-50 {
  border-inline-start-color: var(--color-purple-50);
  /* oklch(97.7% 0.014 308.299) */
}

.border-s-purple-100 {
  border-inline-start-color: var(--color-purple-100);
  /* oklch(94.6% 0.033 307.174) */
}

.border-s-purple-500 {
  border-inline-start-color: var(--color-purple-500);
  /* oklch(62.7% 0.265 303.9) */
}

.border-s-purple-950 {
  border-inline-start-color: var(--color-purple-950);
  /* oklch(29.1% 0.149 302.717) */
}
```

--------------------------------

### Update Tailwind CSS v4 Important Modifier Syntax

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4, the `important` modifier (`!`) has moved from the beginning to the end of the class name (e.g., `flex!`). While the old syntax is still supported for compatibility, the new placement is the recommended approach.

```html
<div class="flex! bg-red-500! hover:bg-red-600/50!">  <!-- ... --></div>
```

--------------------------------

### Apply mask-origin utilities in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-origin

Use mask-origin utility classes to control where an element's mask image is rendered relative to different box models. These examples demonstrate basic usage with border, padding, and content origins on elements with borders, padding, and background images.

```html
<div class="mask-origin-border border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-origin-padding border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-origin-content border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### grid-auto-rows responsive design with breakpoint variants

Source: https://tailwindcss.com/docs/grid-auto-rows

Demonstrates responsive grid row sizing using breakpoint prefixes. The md: prefix applies auto-rows-min only at medium screen sizes and above, while defaulting to auto-rows-max on smaller screens.

```html
<div class="grid grid-flow-row auto-rows-max md:auto-rows-min ...">
  <!-- ... -->
</div>
```

--------------------------------

### Adjust text shadow opacity with Tailwind CSS modifiers

Source: https://tailwindcss.com/docs/text-shadow

Shows how to use opacity modifiers with text shadow utilities to control shadow transparency. The example applies the same base shadow size (lg) with three different opacity levels (default, 20%, 30%) to create varying shadow intensities.

```html
<p class="text-shadow-lg ...">The quick brown fox...</p>
<p class="text-shadow-lg/20 ...">The quick brown fox...</p>
<p class="text-shadow-lg/30 ...">The quick brown fox...</p>
```

--------------------------------

### flex-auto Utility for Growing and Shrinking with Size in Tailwind CSS

Source: https://tailwindcss.com/docs/flex

Demonstrates flex-auto behavior where flex items grow and shrink while accounting for their initial size. This provides more flexible scaling compared to flex-1 which distributes space equally.

```html
<div class="flex ...">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-auto ...">02</div>
  <div class="w-32 flex-auto ...">03</div>
</div>
```

--------------------------------

### Customize Container Sizes with Tailwind CSS Theme Variables

Source: https://tailwindcss.com/docs/responsive-design

Add custom container query variants by defining theme variables in your CSS configuration. This example adds an 8xl container variant set to 96rem, allowing responsive layout adjustments based on container width rather than viewport width.

```css
@import "tailwindcss";
@theme {
  --container-8xl: 96rem;
}
```

--------------------------------

### Force Scroll Snap Position Stops with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-stop

Use the `snap-always` utility with `snap-mandatory` to ensure a scroll container always stops at each defined snap position. This forces the user to pause at every item, ideal for guided navigation in carousels or image viewers.

```html
<div class="snap-x snap-mandatory ...">  <div class="snap-center snap-always ...">    <img src="/img/vacation-01.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-02.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-03.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-04.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-05.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-06.jpg" />  </div></div>
```

--------------------------------

### Update CSS Variables in Arbitrary Values - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Replace the old square bracket syntax for CSS variables with new parentheses syntax. CSS variable shorthand now uses parentheses instead of square brackets for clarity and to avoid ambiguity with recent CSS updates.

```html
<div class="bg-(--brand-color)"></div>
```

--------------------------------

### align-self Responsive Design - HTML

Source: https://tailwindcss.com/docs/align-self

Demonstrates responsive design patterns with align-self utilities using breakpoint variants. The md: prefix applies self-end alignment only at medium screen sizes and above.

```html
<div class="self-auto md:self-end ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Tailwind CSS mask-type utilities to SVG elements

Source: https://tailwindcss.com/docs/mask-type

This example demonstrates how to apply `mask-type-alpha` and `mask-type-luminance` Tailwind CSS utilities within SVG masks. It shows two separate SVG mask definitions, one using `mask-type-alpha` and another using `mask-type-luminance`, to control the visibility of an image based on the mask's properties.

```html
<svg>  <mask id="blob1" class="mask-type-alpha fill-gray-700/70">    <path d="..."></path>  </mask>  <image href="/img/mountains.jpg" height="100%" width="100%" mask="url(#blob1)" /></svg><svg>  <mask id="blob2" class="mask-type-luminance fill-gray-700/70">    <path d="..."></path>  </mask>  <image href="/img/mountains.jpg" height="100%" width="100%" mask="url(#blob2)" /></svg>
```

--------------------------------

### Round specific sides of an element using Tailwind CSS

Source: https://tailwindcss.com/docs/border-radius

This HTML example showcases how to selectively round only one side of an element using Tailwind CSS utilities like `rounded-t-lg` (top), `rounded-r-lg` (right), `rounded-b-lg` (bottom), and `rounded-l-lg` (left).

```html
<div class="rounded-t-lg ..."></div><div class="rounded-r-lg ..."></div><div class="rounded-b-lg ..."></div><div class="rounded-l-lg ..."></div>
```

--------------------------------

### CSS Variable z-index with Custom Property Syntax

Source: https://tailwindcss.com/docs/z-index

Shows how to use the z-(<custom-property>) shorthand syntax to reference CSS custom properties for z-index values. This is equivalent to z-[var(<custom-property>)] but with automatic var() function wrapping.

```html
<div class="z-(--my-z) ...">  <!-- ... --></div>
```

--------------------------------

### Adjust Tailwind CSS Box Shadow Opacity

Source: https://tailwindcss.com/docs/box-shadow

This HTML example shows how to modify the opacity of a box shadow using Tailwind CSS's opacity modifiers. Appending a forward slash followed by a percentage to a shadow utility (e.g., `shadow-xl/20`) allows for finer control over the shadow's visibility, making them more pronounced if desired.

```html
<div class="shadow-xl ..."></div><div class="shadow-xl/20 ..."></div><div class="shadow-xl/30 ..."></div>
```

--------------------------------

### Apply responsive mask-position with Tailwind CSS variants

Source: https://tailwindcss.com/docs/mask-position

Shows how to make mask position utilities responsive by prefixing them with breakpoint variants, such as `md:`, allowing the mask's position to adapt to different screen sizes. This ensures an optimal layout across various devices by applying the utility only at the specified breakpoint and above.

```html
<div class="mask-center md:mask-top ...">  <!-- ... --></div>
```

--------------------------------

### Style Inert Elements with inert Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the `inert` variant to style elements marked with the `inert` attribute, useful for adding visual cues that sections of content aren't interactive. The example shows a notification preferences form where inactive fieldsets are styled with reduced opacity.

```html
<form>
  <legend>Notification preferences</legend>
  <fieldset>
    <input type="radio" />
    <label> Custom </label>
    <fieldset inert class="inert:opacity-50">
      <!-- ... -->
    </fieldset>
    <input type="radio" />
    <label> Everything </label>
  </fieldset>
</form>
```

--------------------------------

### Set specific colors for Tailwind CSS drop-shadows

Source: https://tailwindcss.com/docs/filter-drop-shadow

This example shows how to apply specific colors to drop shadows using Tailwind CSS color utilities, such as `drop-shadow-cyan-500` or `drop-shadow-indigo-500`. It also demonstrates combining color utilities with opacity modifiers (e.g., `/50`) to create custom-colored and semi-transparent shadows for elements.

```html
<svg class="fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 ...">...</svg><svg class="fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 ...">...</svg>
```

--------------------------------

### Apply basic saturation filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-saturate

Demonstrates how to apply standard saturation levels (e.g., 50%, 100%, 150%, 200%) to an image element using Tailwind CSS utility classes like `saturate-50`. These classes directly set the CSS `filter` property with a `saturate()` function.

```html
<img class="saturate-50 ..." src="/img/mountains.jpg" /><img class="saturate-100 ..." src="/img/mountains.jpg" /><img class="saturate-150 ..." src="/img/mountains.jpg" /><img class="saturate-200 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Using flex-basis container scale utilities in HTML

Source: https://tailwindcss.com/docs/flex-basis

Set the initial size of flex items using container scale utilities like basis-3xs, basis-2xs, basis-xs, and basis-sm. These utilities apply predefined container width values from the theme variables.

```html
<div class="flex flex-row">
  <div class="basis-3xs">01</div>
  <div class="basis-2xs">02</div>
  <div class="basis-xs">03</div>
  <div class="basis-sm">04</div>
</div>
```

--------------------------------

### Block and Inline Display Utilities HTML

Source: https://tailwindcss.com/docs/display

Demonstrates how to use inline, inline-block, and block display utilities to control text flow and element wrapping. The inline class allows normal text wrapping, inline-block prevents text overflow, and block places elements on separate lines.

```html
<p>When controlling the flow of text, using the CSS property <span class="inline">display: inline</span> will cause the text inside the element to wrap normally.</p>
<p>While using the property <span class="inline-block">display: inline-block</span> will wrap the element to prevent the text inside from extending beyond its parent.</p>
<p>Lastly, using the property <span class="block">display: block</span> will put the element on its own line and fill its parent.</p>
```

--------------------------------

### Change text shadow color with Tailwind CSS color utilities

Source: https://tailwindcss.com/docs/text-shadow

Demonstrates how to apply specific colors to text shadows using color variant classes. The example shows buttons with different text colors and corresponding shadow colors, including dark mode support with the dark: modifier.

```html
<button class="text-sky-950 text-shadow-2xs text-shadow-sky-300 ...">Book a demo</button>
<button class="text-gray-950 dark:text-white dark:text-shadow-2xs ...">See pricing</button>
```

--------------------------------

### Apply Hover and Focus Styles in Tailwind CSS

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This snippet demonstrates how to apply styling to elements based on their state, such as hover or focus, using Tailwind CSS utility classes. By prefixing utilities like `bg-sky-700` with `hover:`, the styles are conditionally applied. The example includes both the HTML with Tailwind classes and the corresponding generated CSS, showing the difference from traditional CSS.

```HTML
<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
```

```CSS
.hover\:bg-sky-700 {  &:hover {    background-color: var(--color-sky-700);  }}
```

```HTML
<button class="btn">Save changes</button><style>  .btn {    background-color: var(--color-sky-500);    &:hover {      background-color: var(--color-sky-700);    }  }</style>
```

--------------------------------

### Remove text shadow with Tailwind CSS none utility

Source: https://tailwindcss.com/docs/text-shadow

Shows how to remove text shadows from elements using the text-shadow-none utility. The example demonstrates removing a shadow at a specific breakpoint or theme variant, with the dark mode removing the large shadow while maintaining other styling.

```html
<p class="text-shadow-lg dark:text-shadow-none">  <!-- ... --></p>
```

--------------------------------

### Style Parent or Sibling Elements with Group/Peer ARIA Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This HTML example illustrates how to use `group-aria-*` variants to apply styles to child elements based on a parent's ARIA attribute. The SVG icon rotates based on the `aria-sort` attribute of its parent `<th>` element.

```html
<table>  <thead>    <tr>    <th aria-sort="ascending" class="group">      Invoice #      <svg class="group-aria-[sort=ascending]:rotate-0 group-aria-[sort=descending]:rotate-180"><!-- ... --></svg>    </th>    <!-- ... -->    </tr>  </thead>  <!-- ... --></table>
```

--------------------------------

### Basic Text Decoration Color with HTML

Source: https://tailwindcss.com/docs/text-decoration-color

Apply text decoration colors to HTML anchor elements using Tailwind utility classes. The example demonstrates using decoration-sky-500, decoration-pink-500, and decoration-indigo-500 classes combined with the underline class to style link text colors.

```html
<p>
  I'm Derek, an astro-engineer based in Tattooine. I like to build X-Wings
  at <a class="underline decoration-sky-500">My Company, Inc</a>. Outside
  of work, I like to <a class="underline decoration-pink-500">watch pod-racing</a>
  and have <a class="underline decoration-indigo-500">light-saber</a> fights.
</p>
```

--------------------------------

### Configure Hover Variant for Touch Devices - CSS

Source: https://tailwindcss.com/docs/upgrade-guide

The hover variant now only applies when the primary input device supports hover. Override with a custom variant using @custom-variant if you need the old behavior for touch devices, though treating hover as an enhancement is recommended.

```css
@media (hover: hover) {
  .hover\:underline:hover {
    text-decoration: underline;
  }
}
```

```css
@custom-variant hover (&:hover);
```

--------------------------------

### Import Google Fonts in Tailwind CSS project

Source: https://tailwindcss.com/docs/font-family

Load external fonts from Google Fonts service using @import statement placed at the top of CSS file before other imports. Combines font import with Tailwind CSS configuration and custom theme variables for complete font setup.

```CSS
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "tailwindcss";
@theme {
  --font-roboto: "Roboto", sans-serif;
}
```

--------------------------------

### Apply custom backdrop filter values in Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter

Demonstrates using arbitrary values and CSS variables with backdrop-filter utilities. Shows bracket notation syntax for custom SVG filter URLs and parentheses syntax for CSS custom properties, which automatically wraps values with the var() function.

```html
<div class="backdrop-filter-[url('filters.svg#filter-id')] ...">
  <!-- ... -->
</div>
<div class="backdrop-filter-(--my-backdrop-filter) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Tailwind Border Inline Start Color - Violet Shades

Source: https://tailwindcss.com/docs/border-color

CSS utility classes for applying violet color variants to the inline-start border using the border-inline-start-color property. Supports shades from 900 (dark) to 950 (darkest) with OKLCH color space definitions for modern color accuracy.

```css
.border-s-violet-900 {
  border-inline-start-color: var(--color-violet-900);
  /* oklch(38% 0.189 293.745) */
}

.border-s-violet-950 {
  border-inline-start-color: var(--color-violet-950);
  /* oklch(28.3% 0.141 291.089) */
}
```

--------------------------------

### Applying Custom Values for Tailwind CSS Inset (HTML)

Source: https://tailwindcss.com/docs/top-right-bottom-left

This snippet shows how to use arbitrary values for Tailwind CSS positioning utilities like `inset-[<value>]` to apply specific, non-predefined pixel or other unit values. This provides maximum flexibility for unique layout requirements.

```html
<div class="inset-[3px] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Tailwind CSS Outline Color Utility Mappings to CSS

Source: https://tailwindcss.com/docs/outline-color

This snippet illustrates the direct CSS output generated by various Tailwind CSS `outline-color` utility classes. It demonstrates how classes like `outline-gray-500`, `outline-zinc-100`, `outline-neutral-500`, and `outline-stone-950` map to specific `outline-color` CSS properties, typically using CSS variables for color values. It also includes examples for custom CSS properties and arbitrary color values.

```css
outline-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */
outline-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */
outline-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */
outline-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */
outline-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */
outline-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */
outline-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */
outline-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */
outline-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */
outline-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */
outline-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */
outline-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */
outline-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */
outline-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */
outline-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */
outline-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */
outline-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */
outline-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */
outline-color: var(--color-neutral-100); /* oklch(97% 0 0) */
outline-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */
outline-color: var(--color-neutral-300); /* oklch(87% 0 0) */
outline-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */
outline-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */
outline-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */
outline-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */
outline-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */
outline-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */
outline-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */
outline-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */
outline-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */
outline-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */
outline-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */
outline-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */
outline-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */
outline-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */
outline-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */
outline-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */
outline-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */
outline-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */
outline-color: var(<custom-property>);
outline-color: <value>;
```

--------------------------------

### Define Custom Variants with Shorthand Syntax

Source: https://tailwindcss.com/docs/adding-custom-styles

Creates custom variants using shorthand notation when nesting is not required. Provides concise syntax for simple selector-based variants without nested structures.

```CSS
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

--------------------------------

### Using custom flex-basis values in HTML

Source: https://tailwindcss.com/docs/flex-basis

Set the initial size of flex items using basis-[<value>] syntax for completely custom values, or basis-(<custom-property>) syntax as shorthand for CSS variables. Both approaches allow flexible sizing beyond predefined utilities.

```html
<div class="basis-[30vw] ...">
  <!-- ... -->
</div>

<div class="basis-(--my-basis) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Control Tailwind Outline Color Opacity on Buttons

Source: https://tailwindcss.com/docs/outline-color

This example illustrates how to modify the opacity of Tailwind CSS outline colors using the color opacity modifier syntax. It applies `outline-blue-500` with varying opacities (`/100`, `/75`, `/50`) to HTML buttons, demonstrating how to achieve different levels of transparency for the outline.

```html
<button class="outline-2 outline-blue-500/100 ...">Button A</button><button class="outline-2 outline-blue-500/75 ...">Button B</button><button class="outline-2 outline-blue-500/50 ...">Button C</button>
```

--------------------------------

### Tailwind Border Inline Start Color - Pink Shades

Source: https://tailwindcss.com/docs/border-color

CSS utility classes for applying pink color variants to the inline-start border. Spans from light pink (50) through medium tones to deep pink (950) with OKLCH color specifications for precise color control across different text directions.

```css
.border-s-pink-50 {
  border-inline-start-color: var(--color-pink-50);
  /* oklch(97.1% 0.014 343.198) */
}

.border-s-pink-300 {
  border-inline-start-color: var(--color-pink-300);
  /* oklch(82.3% 0.12 346.018) */
}

.border-s-pink-600 {
  border-inline-start-color: var(--color-pink-600);
  /* oklch(59.2% 0.249 0.584) */
}

.border-s-pink-950 {
  border-inline-start-color: var(--color-pink-950);
  /* oklch(28.4% 0.109 3.907) */
}
```

--------------------------------

### Responsive break-inside with Breakpoint Variants

Source: https://tailwindcss.com/docs/break-inside

Shows how to apply break-inside utilities responsively using Tailwind breakpoint prefixes. The break-inside-avoid-column class is applied by default, then overridden to break-inside-auto at medium screen sizes and above.

```html
<div class="break-inside-avoid-column md:break-inside-auto ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Custom CSS Variable Background Colors in Tailwind CSS

Source: https://tailwindcss.com/docs/background-color

This example demonstrates how to use a CSS custom property (variable) to define an element's background color with Tailwind CSS's `bg-(<custom-property>)` syntax. This is a convenient shorthand for `bg-[var(<custom-property>)]`, allowing for dynamic color assignments via CSS variables.

```html
<div class="bg-(--my-color) ...">  <!-- ... --></div>
```

--------------------------------

### Apply custom padding values with Tailwind CSS

Source: https://tailwindcss.com/docs/padding

This demonstrates applying custom padding values using arbitrary value syntax in Tailwind CSS, such as `p-[5px]`. It also shows using a CSS custom property with the shorthand `p-(--my-padding)` syntax. This provides flexibility for values not available in the default spacing scale or for dynamic sizing.

```html
<div class="p-[5px] ...">  <!-- ... --></div>
```

```html
<div class="p-(--my-padding) ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive font-family utilities with breakpoints

Source: https://tailwindcss.com/docs/font-family

Use breakpoint variants with font-family utilities to apply different fonts at specific screen sizes. Combines utilities like font-sans with responsive prefixes such as md: for medium and larger screens.

```HTML
<p class="font-sans md:font-serif ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Specify Border Color for Tailwind CSS v4 Utilities

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 changes the default border color for `border-*` and `divide-*` utilities from `gray-200` to `currentColor` to align with browser defaults. You must now explicitly specify a color to achieve the v3 behavior.

```html
<div class="border border-gray-200 px-2 py-3 ...">  <!-- ... --></div>
```

--------------------------------

### Viewport Width Matching

Source: https://tailwindcss.com/docs/width

Make elements span the full viewport width using w-screen for standard viewport or w-lvw, w-svw, w-dvw for large, small, and dynamic viewport variants. Useful for full-bleed sections and modal overlays.

```html
<div class="w-screen">
  <!-- Full viewport width -->
</div>
```

--------------------------------

### Apply Tailwind CSS utility classes in a React/JSX component

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

This JSX code snippet demonstrates how to use Tailwind CSS utility classes directly within a React component (e.g., `App.jsx`). It applies styles like `text-3xl` (font size), `font-bold` (font weight), and `underline` to an `<h1>` element, showcasing immediate styling with Tailwind.

```jsx
export const App = () => (  <h1 className="text-3xl font-bold underline">    Hello world!  </h1>)
```

--------------------------------

### Apply Separate Borders to HTML Tables using Tailwind CSS

Source: https://tailwindcss.com/docs/border-collapse

This example shows how to use the `border-separate` utility class in Tailwind CSS to force each cell in an HTML table to display its own distinct borders. It involves applying `border-separate` and `border` classes to the table element and `border` classes to cells. This class prevents borders from merging.

```html
<table class="border-separate border border-gray-400 ...">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">State</th>
      <th class="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 ...">Indiana</td>
      <td class="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Ohio</td>
      <td class="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Michigan</td>
      <td class="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
```

--------------------------------

### Tailwind CSS v4 Gradient Overrides with Variants Preservation

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4, overriding part of a gradient with a variant (e.g., `dark:from-blue-500`) now preserves other gradient values, unlike v3 where the entire gradient might reset. This ensures more consistent behavior with other utilities.

```html
<div class="bg-gradient-to-r from-red-500 to-yellow-400 dark:from-blue-500">  <!-- ... --></div>
```

--------------------------------

### Style element based on peer sibling descendants with peer-has variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Mark a sibling element with the peer class and use peer-has-* variants to conditionally style the target element based on the sibling's descendants. In this example, an SVG is hidden when a checkbox input within a peer-labeled element is checked.

```html
<div>
  <label class="peer ...">
    <input type="checkbox" name="todo[1]" checked />
    Create a to do list
  </label>
  <svg class="peer-has-checked:hidden ...">
    <!-- ... -->
  </svg>
</div>
```

--------------------------------

### Restore v3 Placeholder Color in Tailwind CSS v4 Preflight

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 Preflight now sets placeholder text color to 50% opacity of the current text color. To revert to the v3 behavior of using `gray-400`, add the provided CSS to your project's base layer.

```css
@layer base {
  input::placeholder,
  textarea::placeholder {
    color: var(--color-gray-400);
  }
}
```

--------------------------------

### Apply Tailwind CSS v4 Theme Variables Directly in Vue/Svelte/CSS Modules

Source: https://tailwindcss.com/docs/upgrade-guide

As an alternative to `@apply` for isolated stylesheet contexts in Tailwind CSS v4, this snippet demonstrates using CSS theme variables directly. By applying `var(--text-red-500)` for colors, performance improves as Tailwind no longer needs to process these styles. This method is simpler and reduces overhead for specific components.

```Vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  h1 {
    color: var(--text-red-500);
  }
</style>
```

--------------------------------

### Style List Markers with Tailwind CSS `marker` Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example demonstrates styling the bullets or counters of a list using the Tailwind CSS `marker` variant. The `marker` variant is inheritable, allowing it to be applied to a parent element like `<ul>` to style all child `<li>` markers, preventing repetition.

```html
<ul role="list" class="list-disc marker:text-sky-400 ...">  <li>5 cups chopped Porcini mushrooms</li>  <li>1/2 cup of olive oil</li>  <li>3lb of celery</li></ul>
```

--------------------------------

### Update Tailwind CSS v4 Space-Between Utilities Selector for Performance

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 updates the CSS selector used by `space-x-*` and `space-y-*` utilities to resolve performance issues on large pages. The new selector `>:not(:last-child)` replaces the previous `>:not([hidden]) ~ :not([hidden])` pattern.

```css
/* Before */.space-y-4 > :not([hidden]) ~ :not([hidden]) {  margin-top: 1rem;}/* Now */.space-y-4 > :not(:last-child) {  margin-bottom: 1rem;}
```

--------------------------------

### Stack Multiple Variants for Conditional Styling in Tailwind CSS

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This example illustrates how to combine multiple Tailwind CSS variants, such as `disabled:` and `hover:`, to apply styles when all specified conditions are met simultaneously. The utility `disabled:hover:bg-sky-500` ensures the background color changes only when the button is both disabled and hovered.

```HTML
<button class="bg-sky-500 disabled:hover:bg-sky-500 ...">Save changes</button>
```

--------------------------------

### Apply Tailwind CSS Styles with Arbitrary ARIA Sort Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This HTML example demonstrates using an arbitrary `aria-[sort=value]` variant in Tailwind CSS to apply styles based on the `aria-sort` attribute. It conditionally changes background images based on ascending or descending sort order.

```html
<table>  <thead>    <tr>      <th        aria-sort="ascending"        class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')] aria-[sort=descending]:bg-[url('/img/up-arrow.svg')]"      >        Invoice #      </th>      <!-- ... -->    </tr>  </thead>  <!-- ... --></table>
```

--------------------------------

### Safelist Specific Utilities with @source inline() in Tailwind CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Force Tailwind to generate specific class names that may not exist in content files using `@source inline()`. This example generates the `underline` utility class with text-decoration styling. Useful for dynamically applied classes or utilities not detected in static analysis.

```css
@import "tailwindcss";
@source inline("underline");
```

```css
.underline {
  text-decoration-line: underline;
}
```

--------------------------------

### Update Tailwind CSS v4 Divide Utilities Selector for Performance

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 modifies the CSS selector for `divide-x-*` and `divide-y-*` utilities to address performance concerns on large pages. The new selector `>:not(:last-child)` replaces the older `>:not([hidden]) ~ :not([hidden])` pattern.

```css
/* Before */.divide-y-4 > :not([hidden]) ~ :not([hidden]) {  border-top-width: 4px;}/* Now */.divide-y-4 > :not(:last-child) {  border-bottom-width: 4px;}
```

--------------------------------

### Tailwind CSS Divide Lime Color Utilities

Source: https://tailwindcss.com/docs/border-color

Apply lime border colors to divided child elements using Tailwind's divide utilities. Provides lime color variants starting from 50 (lightest) through 100 with OKLCH color definitions for consistent, accessible color application.

```CSS
& > :not(:last-child) {
  border-color: var(--color-lime-50);
  /* oklch(98.6% 0.031 120.757) */
}
& > :not(:last-child) {
  border-color: var(--color-lime-100);
  /* oklch(96.7% 0.067 122.328) */
}
```

--------------------------------

### Re-enable Pointer Cursor for Buttons in Tailwind CSS v4 Preflight

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4, buttons in Preflight now default to `cursor: default` to match browser behavior. To continue using `cursor: pointer` for buttons, apply the provided CSS styles to your project's base layer.

```css
@layer base {
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
}
```

--------------------------------

### Add Space Between Child Elements with Tailwind CSS `space-x/y-<number>`

Source: https://tailwindcss.com/docs/margin

Use `space-x-<number>` or `space-y-<number>` utilities to consistently add horizontal or vertical space between child elements in a flex container. This example applies `space-x-4` to create 4 units of horizontal space between the three `div` children.

```html
<div class="flex space-x-4 ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Apply custom backdrop-sepia values with bracket notation

Source: https://tailwindcss.com/docs/backdrop-filter-sepia

Use the bracket notation syntax `backdrop-sepia-[<value>]` to apply custom sepia filter values not included in the predefined utility set. Allows arbitrary numeric values for precise sepia intensity control.

```HTML
<div class="backdrop-sepia-[.25] ..">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Tailwind CSS line-clamp with a dynamic CSS calc value

Source: https://tailwindcss.com/docs/line-clamp

This HTML snippet illustrates setting the number of clamped lines using a dynamic CSS `calc()` value within the `line-clamp-[<value>]` syntax. This allows for more flexible and computed line clamping based on other CSS properties or variables.

```html
<p class="line-clamp-[calc(var(--characters)/100)] ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Default Tailwind CSS Theme Variables (CSS)

Source: https://tailwindcss.com/docs/theme

This CSS code block provides examples of the default theme variables found in Tailwind CSS's `theme.css` file. It includes definitions for various properties such as font families, specific color shades, and box shadows, which drive the out-of-the-box utility classes.

```css
@theme {  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;  --color-red-50: oklch(0.971 0.013 17.38);  --color-red-100: oklch(0.936 0.032 17.717);  --color-red-200: oklch(0.885 0.062 18.334);  /* ... */  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);  /* ... */}
```

--------------------------------

### Create Conic Gradients with Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Apply bg-conic and bg-conic-<angle> utilities with color stops to create conic (sweep) gradients rotating around a center point. Supports angle customization and color stop positioning for dynamic radial color transitions.

```html
<div class="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
<div class="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
<div class="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
```

--------------------------------

### Use Tailwind CSS Theme Variables with calc() in HTML

Source: https://tailwindcss.com/docs/theme

Illustrates the application of Tailwind CSS theme variables within arbitrary HTML classes, particularly when combined with the `calc()` CSS function. This example creates a concentric border effect by subtracting 1px from a theme-defined radius variable for a nested inset element.

```html
<div class="relative rounded-xl">  <div class="absolute inset-px rounded-[calc(var(--radius-xl)-1px)]">    <!-- ... -->  </div>  <!-- ... --></div>
```

--------------------------------

### Safely center align grid item with Tailwind CSS justify-self-center-safe

Source: https://tailwindcss.com/docs/justify-self

This HTML snippet demonstrates the `justify-self-center-safe` utility in Tailwind CSS, which aligns a grid item to the center of its inline axis while ensuring it doesn't overflow by falling back to `start` alignment if space is insufficient. The `div` with this class will behave responsively. This requires a parent `div` with `display: grid` and `justify-items-stretch`.

```html
<div class="grid justify-items-stretch ...">  <!-- ... -->  <div class="justify-self-center-safe ...">02</div>  <!-- ... --></div>
```

--------------------------------

### Apply Border Inline Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Tailwind CSS utility classes for setting border-inline-start-color using predefined color palettes. These classes use CSS custom properties and oklch color values to provide consistent, accessible colors across different color families (rose, slate, gray, zinc, neutral, stone). Supports RTL and logical CSS properties for better internationalization.

```css
.border-s-rose-950 {
  border-inline-start-color: var(--color-rose-950);
  /* oklch(27.1% 0.105 12.094) */
}

.border-s-slate-50 {
  border-inline-start-color: var(--color-slate-50);
  /* oklch(98.4% 0.003 247.858) */
}

.border-s-slate-100 {
  border-inline-start-color: var(--color-slate-100);
  /* oklch(96.8% 0.007 247.896) */
}

.border-s-slate-200 {
  border-inline-start-color: var(--color-slate-200);
  /* oklch(92.9% 0.013 255.508) */
}

.border-s-gray-50 {
  border-inline-start-color: var(--color-gray-50);
  /* oklch(98.5% 0.002 247.839) */
}

.border-s-zinc-50 {
  border-inline-start-color: var(--color-zinc-50);
  /* oklch(98.5% 0 0) */
}

.border-s-neutral-50 {
  border-inline-start-color: var(--color-neutral-50);
  /* oklch(98.5% 0 0) */
}

.border-s-stone-50 {
  border-inline-start-color: var(--color-stone-50);
  /* oklch(98.5% 0.001 106.423) */
}
```

```html
<div class="border-s-2 border-s-rose-950">Rose 950 Border Start</div>
<div class="border-s-2 border-s-slate-500">Slate 500 Border Start</div>
<div class="border-s-2 border-s-gray-700">Gray 700 Border Start</div>
<div class="border-s-2 border-s-zinc-900">Zinc 900 Border Start</div>
<div class="border-s-2 border-s-neutral-600">Neutral 600 Border Start</div>
<div class="border-s-2 border-s-stone-800">Stone 800 Border Start</div>
```

--------------------------------

### Get Resolved Tailwind CSS Theme Variable Values in JavaScript

Source: https://tailwindcss.com/docs/theme

Explains how to programmatically retrieve the resolved value of a CSS variable (like those defined by Tailwind CSS themes) in JavaScript. It uses `getComputedStyle` on the document root to access the computed value of a theme variable, such as `--shadow-xl`.

```javascript
let styles = getComputedStyle(document.documentElement);let shadow = styles.getPropertyValue("--shadow-xl");
```

--------------------------------

### Define Blue Inset Ring Colors in Tailwind CSS

Source: https://tailwindcss.com/docs/box-shadow

CSS custom properties for blue-colored inset rings in Tailwind CSS, starting from blue-50 through blue-400. Each class assigns --tw-inset-ring-color with OKLCH color values for consistent blue inset ring application across components.

```css
.inset-ring-blue-50 {
  --tw-inset-ring-color: var(--color-blue-50);
  /* oklch(97% 0.014 254.604) */
}

.inset-ring-blue-100 {
  --tw-inset-ring-color: var(--color-blue-100);
  /* oklch(93.2% 0.032 255.585) */
}

.inset-ring-blue-200 {
  --tw-inset-ring-color: var(--color-blue-200);
  /* oklch(88.2% 0.059 254.128) */
}

.inset-ring-blue-300 {
  --tw-inset-ring-color: var(--color-blue-300);
  /* oklch(80.9% 0.105 251.813) */
}

.inset-ring-blue-400 {
  --tw-inset-ring-color: var(--color-blue-400);
  /* oklch(70.7% 0.165 254.624) */
}
```

--------------------------------

### Flex Display Container HTML

Source: https://tailwindcss.com/docs/display

Creates a block-level flex container using the flex utility class combined with flex alignment utilities like items-center. Enables flexible layout for aligning items horizontally or vertically.

```html
<div class="flex items-center">
  <img src="path/to/image.jpg" />
  <div>
    <strong>Andrew Alfred</strong>
    <span>Technical advisor</span>
  </div>
</div>
```

--------------------------------

### Apply Default Text Wrapping with Tailwind CSS `text-wrap`

Source: https://tailwindcss.com/docs/text-wrap

This example demonstrates how to use the `text-wrap` utility class to allow text to wrap onto multiple lines at logical break points within an HTML article element. It's suitable for general paragraph text where natural word breaks are desired.

```html
<article class="text-wrap">  <h3>Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

--------------------------------

### Responsive user-select with breakpoint variants

Source: https://tailwindcss.com/docs/user-select

Combines user-select utilities with Tailwind CSS breakpoint variants to apply different text selection behaviors at different screen sizes. Use prefixes like md: to target medium screens and above.

```html
<div class="select-none md:select-all ...">  <!-- ... --></div>
```

--------------------------------

### Reference Tailwind CSS Theme Variables with Inline Option

Source: https://tailwindcss.com/docs/theme

This CSS example illustrates how to define theme variables that reference other variables using the `inline` option within `@theme`. When `inline` is used, the utility class will directly use the *value* of the referenced variable (`--font-inter`) instead of a dynamic CSS `var()` reference, preventing unexpected resolution issues in the cascade.

```css
@import "tailwindcss";@theme inline {\n  --font-sans: var(--font-inter);\n}
```

--------------------------------

### Safely end align grid item with Tailwind CSS justify-self-end-safe

Source: https://tailwindcss.com/docs/justify-self

This HTML snippet shows the `justify-self-end-safe` utility in Tailwind CSS, which aligns a grid item to the end of its inline axis, but will fall back to `start` alignment if there isn't enough space to prevent overflow. The `div` will adapt its position. This requires a parent `div` with `display: grid` and `justify-items-stretch`.

```html
<div class="grid justify-items-stretch ...">  <!-- ... -->  <div class="justify-self-end-safe ...">02</div>  <!-- ... --></div>
```

--------------------------------

### Apply custom minimum height values in HTML

Source: https://tailwindcss.com/docs/min-height

Use the min-h-[<value>] syntax for arbitrary custom values or min-h-(<custom-property>) for CSS custom properties. The latter automatically wraps the property in the var() function.

```html
<div class="min-h-[220px] ...">
  <!-- ... -->
</div>
```

```html
<div class="min-h-(--my-min-height) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Style Active Text Selection with Tailwind CSS `selection` Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

These examples illustrate styling the active text selection using the Tailwind CSS `selection` variant. It shows how to apply custom background and text colors to selected text within a `div` and globally by applying the variant to the `<body>` tag, leveraging its inheritable nature.

```html
<div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">  <p>    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my    way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all    living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.  </p></div>
```

```html
<html>  <head>    <!-- ... -->  </head>  <body class="selection:bg-pink-300">    <!-- ... -->  </body></html>
```

--------------------------------

### Tailwind CSS Preflight Image and Video Sizing Constraint

Source: https://tailwindcss.com/docs/preflight

Preflight applies `max-width: 100%` and `height: auto` to images and videos. This ensures they are constrained to their parent's width while preserving their aspect ratio, making them responsive by default and preventing overflow.

```css
img,video {  max-width: 100%;  height: auto;}
```

--------------------------------

### Control Background Color Opacity with Tailwind CSS

Source: https://tailwindcss.com/docs/background-color

This example illustrates how to modify the opacity of an element's background color using Tailwind CSS color opacity modifiers (e.g., `bg-sky-500/100`, `bg-sky-500/75`, `bg-sky-500/50`). These utilities allow for creating semi-transparent backgrounds without affecting the base color or text opacity.

```html
<button class="bg-sky-500/100 ..."></button><button class="bg-sky-500/75 ..."></button><button class="bg-sky-500/50 ..."></button>
```

--------------------------------

### Set radial mask position with Tailwind CSS utilities

Source: https://tailwindcss.com/docs/mask-image

Demonstrates setting the center position of a radial gradient mask using nine different position utilities (top-left, top, top-right, left, center, right, bottom-left, bottom, bottom-right). Each utility controls where the radial gradient originates, different from mask-position which sets the mask image position itself.

```html
<div class="mask-radial-at-top-left mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-top mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-top-right mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-left mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-center mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-right mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-bottom-left mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-bottom mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-bottom-right mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Style Elements Based on Descendant State with has-* Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the `has-*` variant to style a label element based on the state of a checked radio input within it. This example applies indigo background, text color, and ring styling to a label when its descendant input is checked. The variant works with both pseudo-classes like `:checked` and element selectors.

```html
<label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
  <svg fill="currentColor">
    <!-- ... -->
  </svg>
  Google Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label>
```

--------------------------------

### Style child elements based on parent state with group variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Mark a parent element with the group class and use group-* variants (like group-hover, group-focus, group-active) to style child elements based on the parent's state. This example changes text and icon colors when hovering over a parent link.

```html
<a href="#" class="group ...">
  <div>
    <svg class="stroke-sky-500 group-hover:stroke-white ..." fill="none" viewBox="0 0 24 24">
      <!-- ... -->
    </svg>
    <h3 class="text-gray-900 group-hover:text-white ...">New project</h3>
  </div>
  <p class="text-gray-500 group-hover:text-white ...">Create a new project from a variety of starting templates.</p>
</a>
```

--------------------------------

### Prevent Text Wrapping with Tailwind CSS `text-nowrap`

Source: https://tailwindcss.com/docs/text-wrap

This example shows how to apply the `text-nowrap` utility class to prevent text from wrapping within an HTML article element. This can cause text to overflow its container if the content is too long for a single line, useful for specific layout requirements.

```html
<article class="text-nowrap">  <h3>Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

--------------------------------

### Apply Custom CSS Property Transitions in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/transition-property

Illustrates the use of arbitrary values with `transition-[<value>]` to apply a transition to a specific CSS property, such as `height`. This allows for fine-grained control over which properties animate.

```HTML
<button class="transition-[height] ...">  <!-- ... --></button>
```

--------------------------------

### Combine Theme, Bare, and Arbitrary Values

Source: https://tailwindcss.com/docs/adding-custom-styles

Uses multiple --value() declarations within a single rule to support theme values, bare values, and arbitrary values simultaneously. Failed resolutions are omitted from output. Allows different handling of values in each case or fallback resolution from left to right.

```CSS
@theme {
  --tab-size-github: 8;
}

@utility tab-* {
  tab-size: --value([integer]);
  tab-size: --value(integer);
  tab-size: --value(--tab-size-*);
}
```

```CSS
@utility opacity-* {
  opacity: --value([percentage]);
  opacity: calc(--value(integer) * 1%);
  opacity: --value(--opacity-*);
}
```

```CSS
@theme {
  --tab-size-github: 8;
}

@utility tab-* {
  tab-size: --value(--tab-size-*, integer, [integer]);
}

@utility opacity-* {
  opacity: calc(--value(integer) * 1%);
  opacity: --value(--opacity-*, [percentage]);
}
```

--------------------------------

### Explicitly Exclude Classes from Generation in Tailwind CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Use `@source not inline()` to prevent specific classes from being generated, even if detected in source files. This example excludes all red background utilities and their hover and focus variants. Useful for preventing unwanted utilities in the final CSS output.

```css
@import "tailwindcss";
@source not inline("{hover:,focus:,}bg-red-{50,{100..900..100},950}");
```

--------------------------------

### Update Tailwind CSS v3 Ring Utility to v4 `ring-3` for Default Width

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 changes the default `ring` utility width from `3px` to `1px` to align with borders and outlines. To preserve the v3 `3px` ring behavior, explicitly replace the `ring` utility with `ring-3`.

```html
<input class="ring ring-blue-500" /><input class="ring-3 ring-blue-500" />
```

--------------------------------

### Explicitly Unset Tailwind CSS v4 Three-Stop Gradients with `via-none`

Source: https://tailwindcss.com/docs/upgrade-guide

Due to v4's gradient preservation behavior, you might need to explicitly unset a three-stop gradient back to a two-stop gradient for specific states. Use `via-none` within a variant to remove the middle color stop.

```html
<div class="bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 dark:via-none dark:from-blue-500 dark:to-teal-400">  <!-- ... --></div>
```

--------------------------------

### Migrate Tailwind CSS v3 `outline-none` to v4 `outline-hidden`

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4, the `outline-none` utility is renamed to `outline-hidden` to clarify its behavior of setting an invisible outline for accessibility. A new `outline-none` utility is introduced to genuinely set `outline-style: none`. Update existing `outline-none` usages to `outline-hidden`.

```html
<input class="focus:outline-none" /><input class="focus:outline-hidden" />
```

--------------------------------

### Custom value min-width with bracket notation

Source: https://tailwindcss.com/docs/min-width

Uses the min-w-[<value>] syntax to set minimum width with arbitrary custom values not available in the predefined scale.

```html
<div class="min-w-[220px] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Center Dialog Elements in Tailwind CSS v4 Preflight

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 Preflight removes default margins from `<dialog>` elements for consistency. To restore the default centered behavior, add the provided CSS to set `margin: auto` within your project's base layer.

```css
@layer base {
  dialog {
    margin: auto;
  }
}
```

--------------------------------

### Add Custom Utilities with Tailwind CSS v4 `@utility` API

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 introduces the new `@utility` API as a replacement for `@layer utilities` and `@layer components` for defining custom utility classes. This new API integrates with native cascade layers and automatically sorts utilities based on property count, allowing component utilities to be easily overridden by other Tailwind utilities.

```css
@layer utilities {
  .tab-4 {
    tab-size: 4;
  }}
@utility tab-4 {
  tab-size: 4;
}
```

```css
@layer components {
  .btn {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ButtonFace;
  }}
@utility btn {
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ButtonFace;
}
```

--------------------------------

### Hide Element While Maintaining Layout with Tailwind CSS `invisible`

Source: https://tailwindcss.com/docs/visibility

This example demonstrates how to use the Tailwind CSS `invisible` utility class to hide an HTML element. The element becomes invisible but still occupies its space in the document flow, affecting the layout of other elements. This is useful when you want to hide content without disrupting the surrounding layout.

```html
<div class="grid grid-cols-3 gap-4">  <div>01</div>  <div class="invisible ...">02</div>  <div>03</div></div>
```

--------------------------------

### Apply Custom Grayscale Values in HTML

Source: https://tailwindcss.com/docs/filter-grayscale

Demonstrates using arbitrary value syntax grayscale-[<value>] to apply a custom grayscale filter value (0.5) directly without relying on predefined Tailwind utility classes. This provides flexibility for non-standard grayscale intensities.

```html
<img class="grayscale-[0.5] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Define Drop Shadow Color with Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/filter-drop-shadow

This set of examples illustrates how Tailwind CSS utility classes are used to assign specific colors to drop shadows by setting the `--tw-drop-shadow-color` CSS variable. Each class, such as `drop-shadow-pink-500`, corresponds to a particular shade from a defined color palette, ensuring consistent color application across a project. The value references another CSS variable (e.g., `var(--color-pink-500)`), which holds the precise Oklch color definition.

```CSS
--tw-drop-shadow-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */
```

```CSS
--tw-drop-shadow-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */
```

```CSS
--tw-drop-shadow-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */
```

```CSS
--tw-drop-shadow-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */
```

```CSS
--tw-drop-shadow-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */
```

--------------------------------

### Style Odd and Even Child Elements with Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the `odd` and `even` variants to apply different styles to alternating rows in a table. This example applies white background to odd rows and gray background to even rows, with dark mode variants for both. The code iterates over a people array to generate table rows dynamically.

```svelte
<table>
  <!-- ... -->
  <tbody>
    {#each people as person}
      <!-- Use different background colors for odd and even rows -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
    {/each}
  </tbody>
</table>
```

--------------------------------

### Style First and Last Child Elements with Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the `first` and `last` variants to style elements that are the first or last child of their parent. This example removes top padding from the first list item and bottom padding from the last item using Tailwind classes. The code uses Svelte syntax with an each loop to iterate over a people array.

```svelte
<ul role="list">
  {#each people as person}
    <!-- Remove top/bottom padding when first/last child -->
    <li class="flex py-4 first:pt-0 last:pb-0">
      <img class="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">{person.email}</p>
      </div>
    </li>
  {/each}
</ul>
```

--------------------------------

### Extend Tailwind CSS Theme with New Font Family (CSS, HTML)

Source: https://tailwindcss.com/docs/theme

This example shows how to extend the default Tailwind CSS theme by introducing a new custom font family variable using the `@theme` directive in CSS. Once defined, the new `font-script` utility class becomes available for use in HTML, applying the specified font to elements.

```css
@import "tailwindcss";@theme {  --font-script: Great Vibes, cursive;}
```

```html
<p class="font-script">This will use the Great Vibes font family.</p>
```

--------------------------------

### Adjust Tailwind CSS v4 Outline Utility for Default Width and Style

Source: https://tailwindcss.com/docs/upgrade-guide

The `outline` utility in Tailwind CSS v4 now sets `outline-width: 1px` by default for consistency. Additionally, `outline-<number>` utilities implicitly set `outline-style` to `solid`, removing the need to combine them with a bare `outline` class.

```html
<input class="outline outline-2" /><input class="outline-2" />
```

--------------------------------

### Applying Border Bottom Colors with Tailwind CSS and Corresponding CSS

Source: https://tailwindcss.com/docs/border-color

These code examples demonstrate how Tailwind CSS utility classes map to standard CSS `border-bottom-color` properties. Each utility class, such as `border-b-emerald-500`, sets the bottom border color using a CSS variable defined within the Tailwind color palette. These classes are used for quickly applying consistent styling in web development.

```tailwindcss
border-b-green-900
```

```css
border-bottom-color: var(--color-green-900);
```

```tailwindcss
border-b-green-950
```

```css
border-bottom-color: var(--color-green-950);
```

```tailwindcss
border-b-emerald-50
```

```css
border-bottom-color: var(--color-emerald-50);
```

```tailwindcss
border-b-emerald-100
```

```css
border-bottom-color: var(--color-emerald-100);
```

```tailwindcss
border-b-emerald-200
```

```css
border-bottom-color: var(--color-emerald-200);
```

```tailwindcss
border-b-emerald-300
```

```css
border-bottom-color: var(--color-emerald-300);
```

```tailwindcss
border-b-emerald-400
```

```css
border-bottom-color: var(--color-emerald-400);
```

```tailwindcss
border-b-emerald-500
```

```css
border-bottom-color: var(--color-emerald-500);
```

```tailwindcss
border-b-emerald-600
```

```css
border-bottom-color: var(--color-emerald-600);
```

```tailwindcss
border-b-emerald-700
```

```css
border-bottom-color: var(--color-emerald-700);
```

```tailwindcss
border-b-emerald-800
```

```css
border-bottom-color: var(--color-emerald-800);
```

```tailwindcss
border-b-emerald-900
```

```css
border-bottom-color: var(--color-emerald-900);
```

```tailwindcss
border-b-emerald-950
```

```css
border-bottom-color: var(--color-emerald-950);
```

```tailwindcss
border-b-teal-50
```

```css
border-bottom-color: var(--color-teal-50);
```

```tailwindcss
border-b-teal-100
```

```css
border-bottom-color: var(--color-teal-100);
```

```tailwindcss
border-b-teal-200
```

```css
border-bottom-color: var(--color-teal-200);
```

```tailwindcss
border-b-teal-300
```

```css
border-bottom-color: var(--color-teal-300);
```

```tailwindcss
border-b-teal-400
```

```css
border-bottom-color: var(--color-teal-400);
```

```tailwindcss
border-b-teal-500
```

```css
border-bottom-color: var(--color-teal-500);
```

```tailwindcss
border-b-teal-600
```

```css
border-bottom-color: var(--color-teal-600);
```

```tailwindcss
border-b-teal-700
```

```css
border-bottom-color: var(--color-teal-700);
```

```tailwindcss
border-b-teal-800
```

```css
border-bottom-color: var(--color-teal-800);
```

```tailwindcss
border-b-teal-900
```

```css
border-bottom-color: var(--color-teal-900);
```

```tailwindcss
border-b-teal-950
```

```css
border-bottom-color: var(--color-teal-950);
```

```tailwindcss
border-b-cyan-50
```

```css
border-bottom-color: var(--color-cyan-50);
```

```tailwindcss
border-b-cyan-100
```

```css
border-bottom-color: var(--color-cyan-100);
```

```tailwindcss
border-b-cyan-200
```

```css
border-bottom-color: var(--color-cyan-200);
```

```tailwindcss
border-b-cyan-300
```

```css
border-bottom-color: var(--color-cyan-300);
```

```tailwindcss
border-b-cyan-400
```

```css
border-bottom-color: var(--color-cyan-400);
```

```tailwindcss
border-b-cyan-500
```

```css
border-bottom-color: var(--color-cyan-500);
```

```tailwindcss
border-b-cyan-600
```

```css
border-bottom-color: var(--color-cyan-600);
```

```tailwindcss
border-b-cyan-700
```

```css
border-bottom-color: var(--color-cyan-700);
```

```tailwindcss
border-b-cyan-800
```

```css
border-bottom-color: var(--color-cyan-800);
```

```tailwindcss
border-b-cyan-900
```

```css
border-bottom-color: var(--color-cyan-900);
```

```tailwindcss
border-b-cyan-950
```

```css
border-bottom-color: var(--color-cyan-950);
```

```tailwindcss
border-b-sky-50
```

```css
border-bottom-color: var(--color-sky-50);
```

```tailwindcss
border-b-sky-100
```

```css
border-bottom-color: var(--color-sky-100);
```

```tailwindcss
border-b-sky-200
```

```css
border-bottom-color: var(--color-sky-200);
```

```tailwindcss
border-b-sky-300
```

```css
border-bottom-color: var(--color-sky-300);
```

```tailwindcss
border-b-sky-400
```

```css
border-bottom-color: var(--color-sky-400);
```

```tailwindcss
border-b-sky-500
```

```css
border-bottom-color: var(--color-sky-500);
```

```tailwindcss
border-b-sky-600
```

```css
border-bottom-color: var(--color-sky-600);
```

```tailwindcss
border-b-sky-700
```

```css
border-bottom-color: var(--color-sky-700);
```

```tailwindcss
border-b-sky-800
```

```css
border-bottom-color: var(--color-sky-800);
```

```tailwindcss
border-b-sky-900
```

```css
border-bottom-color: var(--color-sky-900);
```

```tailwindcss
border-b-sky-950
```

```css
border-bottom-color: var(--color-sky-950);
```

```tailwindcss
border-b-blue-50
```

```css
border-bottom-color: var(--color-blue-50);
```

```tailwindcss
border-b-blue-100
```

```css
border-bottom-color: var(--color-blue-100);
```

--------------------------------

### Center and Pad Tailwind CSS Container

Source: https://tailwindcss.com/docs/max-width

To center the `container` utility and add horizontal padding, combine it with `mx-auto` for auto-margins and `px-<number>` utilities for padding. This provides a more traditional container behavior.

```html
<div class="container mx-auto px-4">  <!-- ... --></div>
```

--------------------------------

### Style Parent Based on Descendant Content with group-has-* Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the `group` class on a parent element and `group-has-*` variant on a child to style the child based on descendants of the parent. This example shows a hidden SVG that becomes visible when the parent group contains an anchor element, using the `group-has-[a]:block` variant.

```html
<div class="group ...">
  <img src="..." />
  <h4>Spencer Sharp</h4>
  <svg class="hidden group-has-[a]:block ..."><!-- ... --></svg>
  <p>Product Designer at <a href="...">planeteria.tech</a></p>
</div>
```

--------------------------------

### HTML: Ignore Pointer Events with Tailwind CSS

Source: https://tailwindcss.com/docs/pointer-events

This HTML snippet demonstrates how to use the `pointer-events-none` utility class in Tailwind CSS. It makes an element, such as an overlaid icon, ignore pointer events like clicks, allowing interaction with underlying elements. The example shows a search icon that passes clicks through to an input field.

```html
<div class="relative ...">  <div class="pointer-events-auto absolute ...">    <svg class="absolute h-5 w-5 text-gray-400">      <!-- ... -->    </svg>  </div>  <input type="text" placeholder="Search" class="..." /></div><div class="relative ...">  <div class="pointer-events-none absolute ...">    <svg class="absolute h-5 w-5 text-gray-400">      <!-- ... -->    </svg>  </div>  <input type="text" placeholder="Search" class="..." /></div>
```

--------------------------------

### Flow Root Display Utility HTML

Source: https://tailwindcss.com/docs/display

Creates a block-level element with its own block formatting context using the flow-root utility. Useful for establishing a new block formatting context to contain floated or positioned content without affecting surrounding elements.

```html
<div class="p-4">
  <div class="flow-root ...">
    <div class="my-4 ...">Well, let me tell you something, ...</div>
  </div>
  <div class="flow-root ...">
    <div class="my-4 ...">Sure, go ahead, laugh if you want...</div>
  </div>
</div>
```

--------------------------------

### Apply various sizes of Tailwind CSS drop-shadow to elements

Source: https://tailwindcss.com/docs/filter-drop-shadow

This example demonstrates how to apply different sizes of drop shadows (medium, large, extra-large) to SVG elements using Tailwind CSS utility classes. These utilities are particularly effective for adding shadows to irregular shapes like SVG graphics or text, where standard box-shadow might not be suitable.

```html
<svg class="drop-shadow-md ...">  <!-- ... --></svg><svg class="drop-shadow-lg ...">  <!-- ... --></svg><svg class="drop-shadow-xl ...">  <!-- ... --></svg>
```

--------------------------------

### Set custom background-size value with arbitrary bracket syntax

Source: https://tailwindcss.com/docs/background-size

Use the bg-size-[<value>] syntax to apply a completely custom background-size value using Tailwind's arbitrary value feature. This allows for specific measurements like auto 100px.

```html
<div class="bg-size-[auto_100px] ...">  <!-- ... --></div>
```

--------------------------------

### Span Columns with Tailwind CSS `col-span-<number>`

Source: https://tailwindcss.com/docs/grid-column

Demonstrates how to use `col-span-<number>` utilities in Tailwind CSS to make an element span a specified number of grid columns within a grid container. This example applies `col-span-2` to elements 04 and 07, causing them to occupy two columns each in a three-column grid.

```html
<div class="grid grid-cols-3 gap-4">
  <div class="...">01</div>
  <div class="...">02</div>
  <div class="...">03</div>
  <div class="col-span-2 ...">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div>
</div>
```

--------------------------------

### Implement Reduced Motion Transitions in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/transition-property

Shows how to use Tailwind CSS `motion-reduce` and `motion-safe` variants to conditionally apply or disable transitions based on user preferences. This ensures accessibility by respecting user's system-level motion settings.

```HTML
<button class="transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">  <!-- ... --></button>
```

--------------------------------

### Distribute Grid Content with Space Between using Tailwind CSS

Source: https://tailwindcss.com/docs/place-content

The `place-content-between` utility distributes grid items so that there is an equal amount of space between each row and column. This maximizes the spacing between items while keeping them flush with the edges of the container.

```html
<div class="grid h-48 grid-cols-2 place-content-between gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Apply basic Tailwind CSS backdrop saturation utilities

Source: https://tailwindcss.com/docs/backdrop-filter-saturate

Demonstrates applying different levels of backdrop saturation to elements using predefined Tailwind CSS utility classes like `backdrop-saturate-50`, `backdrop-saturate-125`, and `backdrop-saturate-200`.

```html
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-saturate-50 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-saturate-125 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-saturate-200 ..."></div></div>
```

--------------------------------

### Style Elements Based on Parent Width with Tailwind CSS Container Queries

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example shows how to style an element based on the width of its parent container using Tailwind CSS's container queries (`@md`). It changes the flex direction of a child element from a vertical column layout to a horizontal row layout when the parent container reaches a medium width.

```html
<div class="@container">  <div class="flex flex-col @md:flex-row">    <!-- ... -->  </div></div>
```

--------------------------------

### Inline Grid Display Container HTML

Source: https://tailwindcss.com/docs/display

Creates an inline grid container using the inline-grid utility that flows with surrounding content while maintaining grid layout. Combines grid layout capabilities with inline display behavior.

```html
<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
```

--------------------------------

### Apply transform-style utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/transform-style

Use transform-3d to position child elements in 3D space or transform-flat to keep them in 2D space. The example demonstrates a 3D cube-like structure with six child divs positioned using 3D transforms (translate-z, rotate-x, rotate-y) and 3D perspective. Without transform-3d, children remain in 2D space regardless of 3D transform properties applied.

```HTML
<div class="size-20 transform-flat ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
<div class="size-20 transform-3d ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
```

--------------------------------

### Apply Responsive Text Alignment with Tailwind CSS

Source: https://tailwindcss.com/docs/text-align

Shows how to apply text alignment utilities responsively using breakpoint variants. The `md:text-center` utility centers text only on medium screen sizes and above, overriding the default `text-left`.

```html
<p class="text-left md:text-center ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Use Custom font-weight Utility HTML

Source: https://tailwindcss.com/docs/font-weight

Shows how to use a custom font-weight utility defined in the theme configuration. After defining the custom theme variable, the corresponding utility class becomes available for use in HTML markup.

```html
<div class="font-extrablack"><!-- ... --></div>
```

--------------------------------

### Apply responsive justify-self alignment with Tailwind CSS

Source: https://tailwindcss.com/docs/justify-self

This HTML snippet illustrates how to apply responsive `justify-self` alignment using Tailwind CSS breakpoint variants. The `justify-self-start` class is applied by default, and then `md:justify-self-end` overrides it for medium screen sizes and above, aligning the item to the end. This allows for adaptive layouts.

```html
<div class="justify-self-start md:justify-self-end ...">  <!-- ... --></div>
```

--------------------------------

### Apply object-cover utility to resize content (HTML)

Source: https://tailwindcss.com/docs/object-fit

Uses the `object-cover` utility class in HTML to resize an element's content so that it covers its container while maintaining its aspect ratio. This is useful for images where you want to fill the entire space.

```html
<img class="h-48 w-96 object-cover ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply various perspective values to elements with Tailwind CSS

Source: https://tailwindcss.com/docs/perspective

Demonstrates how to use `perspective-dramatic` and `perspective-normal` utilities to control the Z-plane distance of elements in 3D space, showcasing the visual effect of different perspective strengths on a set of transformed divs.

```html
<div class="size-20 perspective-dramatic ...">  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div><div class="size-20 perspective-normal ...">  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div>
```

--------------------------------

### Update Tailwind CSS v3 Shadow and Scale Utilities to v4

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 renames default shadow, radius, and blur scales. To maintain the visual appearance of v3's `shadow-sm`, update it to `shadow-xs` in v4. Similarly, v3's default `shadow` utility should be replaced with `shadow-sm` in v4.

```html
<input class="shadow-sm" /><input class="shadow-xs" /><input class="shadow" /><input class="shadow-sm" />
```

--------------------------------

### Apply object-none utility for original size content (HTML)

Source: https://tailwindcss.com/docs/object-fit

Uses the `object-none` utility class in HTML to display an element's content at its original size, ignoring the container's dimensions. Content that overflows the container will be clipped.

```html
<img class="h-48 w-96 object-none ..." src="/img/mountains.jpg" />
```

--------------------------------

### Set width and height simultaneously using size utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/height

Apply size-* utilities to set both width and height properties at the same time. Supports fixed spacing (size-16, size-20), full coverage (size-full), viewport units (size-dvh, size-lvh, size-svh), and content-based sizing.

```html
<div class="size-16 ...">size-16</div>
<div class="size-20 ...">size-20</div>
<div class="size-24 ...">size-24</div>
<div class="size-32 ...">size-32</div>
<div class="size-40 ...">size-40</div>
```

--------------------------------

### Float using logical properties with Tailwind CSS

Source: https://tailwindcss.com/docs/float

The float-start and float-end utilities use CSS logical properties (float: inline-start; and float: inline-end;) to automatically adapt to text direction. They map to left/right based on whether the document is left-to-right or right-to-left, making layouts responsive to language direction.

```html
<article>
  <img class="float-start ..." src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>
<article dir="rtl">
  <img class="float-start ..." src="/img/mountains.jpg" />
  <p>... ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد</p>
</article>
```

--------------------------------

### Restore Tailwind CSS v3 Default Border Color Behavior

Source: https://tailwindcss.com/docs/upgrade-guide

To maintain the Tailwind CSS v3 default border color behavior for `border-*` and `divide-*` utilities, which used `gray-200`, add the provided CSS to your project's base styles. This ensures `border-color` defaults to a gray color when not explicitly set.

```css
@layer base {  *,  ::after,  ::before,  ::backdrop,  ::file-selector-button {    border-color: var(--color-gray-200, currentColor);  }}
```

--------------------------------

### Apply Hardware Acceleration with transform-gpu

Source: https://tailwindcss.com/docs/transform

Force GPU rendering of transform animations using the transform-gpu utility class. This improves performance for transitions that benefit from hardware acceleration. The utility applies translateZ(0) along with transform variable properties.

```html
<div class="scale-150 transform-gpu">  <!-- ... --></div>
```

--------------------------------

### Apply bg-auto utility to display background image at default size

Source: https://tailwindcss.com/docs/background-size

Use the bg-auto class to display the background image at its intrinsic default size without scaling. Combine with bg-no-repeat to prevent tiling of the image.

```html
<div class="bg-[url(/img/mountains.jpg)] bg-auto bg-center bg-no-repeat"></div>
```

--------------------------------

### Prefix option compiled output with namespaced classes

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Demonstrates the resulting compiled CSS after applying a prefix. All Tailwind classes and CSS variables are namespaced with the specified prefix (tw:) to avoid naming collisions.

```css
@layer theme {
  :root {
    --tw-color-red-500: oklch(0.637 0.237 25.331);
  }
}
@layer utilities {
  .tw\:text-red-500 {
    color: var(--tw-color-red-500);
  }
}
```

--------------------------------

### Define Inset Shadow Zinc Color Variables in CSS

Source: https://tailwindcss.com/docs/box-shadow

CSS custom properties that define inset shadow colors for the zinc palette in Tailwind CSS. Provides neutral zinc color stops starting from zinc-50 (lightest) to zinc-100 using OKLCH color space values. Zinc offers a cooler neutral alternative for inset shadow styling.

```css
--tw-inset-shadow-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */
--tw-inset-shadow-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */
```

--------------------------------

### Create Linear Gradients with Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Combine directional gradient utilities (bg-linear-to-r, bg-linear-to-t, etc.) with color stop utilities (from-*, to-*) to create linear gradients. Supports 8 cardinal directions and custom angles for precise gradient control.

```html
<div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
<div class="h-14 bg-linear-to-t from-sky-500 to-indigo-500"></div>
<div class="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
<div class="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>
```

--------------------------------

### Create Radial Gradients with Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Use bg-radial and bg-radial-[<position>] utilities combined with color stops to create radial gradients emanating from a center point. Supports positioning syntax to control gradient origin and color stop percentages.

```html
<div class="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
<div class="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
<div class="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
```

--------------------------------

### Apply box-border utility in HTML

Source: https://tailwindcss.com/docs/box-sizing

Use the box-border class to include borders and padding in the element's total size calculations. This utility sets box-sizing to border-box, making a 100px element render at exactly 100px regardless of padding or border width.

```html
<div class="box-border size-32 border-4 p-4 ...">  <!-- ... --></div>
```

--------------------------------

### justify-content - Responsive breakpoint variant usage

Source: https://tailwindcss.com/docs/justify-content

Prefix a justify-content utility with a breakpoint variant like md: to apply the utility only at medium screen sizes and above. Enables responsive alignment behavior.

```html
<div class="flex justify-start md:justify-between ...">
  <!-- ... -->
</div>
```

--------------------------------

### Style Form Elements in Different States with Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use variants like `invalid`, `disabled`, `required`, and `focus` to style form inputs based on their validation state and user interaction. This example shows an input field with styles for invalid state (pink border and text), disabled state (gray styling), and focus state with color changes. The styles are applied conditionally based on input attributes.

```html
<input
  type="text"
  value="tbone"
  disabled
  class="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
/>
```

--------------------------------

### Update Tailwind CSS Ring Styles for v4

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 reduces the default ring width from 3px to 1px and changes the color from `blue-500` to `currentColor`. To migrate, replace `ring` with `ring-3` and explicitly add `ring-blue-500` if the default blue color is desired. Alternatively, set custom theme variables in CSS to maintain v3 behavior, though this is for compatibility only.

```html
<button class="focus:ring ..."><button class="focus:ring-3 ...">  <!-- ... --></button>
```

```html
<button class="focus:ring-3 focus:ring-blue-500 ...">  <!-- ... --></button>
```

```css
@theme {
  --default-ring-width: 3px;
  --default-ring-color: var(--color-blue-500);
}
```

--------------------------------

### Apply custom easing utility in markup - HTML/Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Demonstrates using a custom easing utility that was defined in the theme configuration. The ease-in-expo class applies the custom cubic-bezier timing function to the element's transition.

```html
<button class="ease-in-expo">  <!-- ... --></button>
```

--------------------------------

### Responsive backdrop-invert Design

Source: https://tailwindcss.com/docs/backdrop-filter-invert

Shows how to apply backdrop-invert utilities responsively using breakpoint variants like md:. The backdrop inversion effect only applies at medium screen sizes and above, allowing for responsive visual adjustments.

```html
<div class="backdrop-invert-0 md:backdrop-invert ...">
  <!-- ... -->
</div>
```

--------------------------------

### Set Custom Contrast Value with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-contrast

This snippet illustrates how to apply a completely custom contrast value using Tailwind CSS's arbitrary value syntax. By using `contrast-[<value>]`, you can specify any valid CSS contrast percentage, such as `contrast-[.25]` for 25% contrast.

```html
<img class="contrast-[.25] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Extend Tailwind CSS Preflight with Custom Base Styles (CSS)

Source: https://tailwindcss.com/docs/preflight

This CSS snippet demonstrates how to add custom base styles on top of Tailwind CSS Preflight. By placing styles within `@layer base`, they are integrated into the base layer, allowing for global styling adjustments for elements like headings and links.

```css
@layer base {  h1 {    font-size: var(--text-2xl);  }  h2 {    font-size: var(--text-xl);  }  h3 {    font-size: var(--text-lg);  }  a {    color: var(--color-blue-600);    text-decoration-line: underline;  }}
```

--------------------------------

### Apply Custom CSS Variable Transitions in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/transition-property

Demonstrates how to use Tailwind CSS `transition-(<custom-property>)` syntax to apply transitions based on a custom CSS variable. This shorthand automatically wraps the variable name with `var()`, simplifying custom property transitions.

```HTML
<button class="transition-(--my-properties) ...">  <!-- ... --></button>
```

--------------------------------

### Inline Flex Display Container HTML

Source: https://tailwindcss.com/docs/display

Creates an inline flex container using the inline-flex utility that flows with surrounding text. Allows flex layout behavior while maintaining inline text flow characteristics.

```html
<p>
  Today I spent most of the day researching ways to ...
  <span class="inline-flex items-baseline">
    <img src="/img/kramer.jpg" class="mx-1 size-5 self-center rounded-full" />
    <span>Kramer</span>
  </span>
  keeps telling me there is no way to make it work, that ...
</p>
```

--------------------------------

### Apply Custom Gradient Values in Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Use bracket notation with bg-linear-[<value>] and from-[<value>] utilities to define completely custom gradient values. Additionally, use the bg-linear-(<custom-property>) syntax for CSS variables, which automatically wraps the value in the var() function.

```html
<div class="bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] ...">  <!-- ... --></div>
<div class="bg-linear-(--my-gradient) ...">  <!-- ... --></div>
```

--------------------------------

### Apply backdrop filters with responsive breakpoints in Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter

Demonstrates using breakpoint variants like md: with backdrop-filter utilities to apply different filters at different screen sizes. Shows conditional filter removal at medium breakpoints and above for responsive design.

```html
<div class="backdrop-blur-sm md:backdrop-filter-none ..."></div>
```

--------------------------------

### Enable @apply with global styles in Tailwind CSS Modules

Source: https://tailwindcss.com/docs/compatibility

This CSS snippet demonstrates how to import global styles using `@reference` in a CSS module (e.g., `Button.module.css`). This is necessary to enable Tailwind's `@apply` directive to access theme variables when CSS modules are processed separately by build tools.

```css
@reference "../app.css";
button {  @apply bg-blue-500;}
```

--------------------------------

### Apply Responsive Grid Layouts with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This code demonstrates how to create responsive grid layouts using Tailwind CSS's predefined breakpoints (`md`, `lg`). It defines a 3-column grid for mobile devices, transitions to a 4-column grid on medium-width screens, and expands to a 6-column grid on large-width screens.

```html
<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS transition duration conditionally for reduced motion

Source: https://tailwindcss.com/docs/transition-duration

Shows how to use the `motion-reduce:` variant to set a transition duration of 0ms for users who prefer reduced motion, overriding a default duration. This ensures accessibility by respecting user preferences for animations.

```html
<button type="button" class="duration-300 motion-reduce:duration-0 ...">  <!-- ... --></button>
```

--------------------------------

### Define Custom Color Palette from Scratch

Source: https://tailwindcss.com/docs/colors

Replace all default colors with a completely custom palette by setting --color-* to initial and defining new colors.

```css
@import "tailwindcss";
@theme {
  --color-*: initial;
  --color-white: #fff;
  --color-purple: #3f3cbb;
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

--------------------------------

### Responsive background-repeat with breakpoint variants

Source: https://tailwindcss.com/docs/background-repeat

Apply background-repeat utilities conditionally at different screen sizes using Tailwind breakpoint prefixes. Use md: prefix to apply utilities at medium screen sizes and above.

```html
<div class="bg-repeat md:bg-repeat-x ...">  <!-- ... --></div>
```

--------------------------------

### Apply Text Decoration Thickness Using CSS Variables in Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-thickness

This snippet illustrates how to define text decoration thickness using a CSS variable through the `decoration-(length:<custom-property>)` syntax in Tailwind CSS. This allows for dynamic and reusable thickness values across a project, enhancing maintainability.

```html
<p class="decoration-(length:--my-decoration-thickness) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Responsive stroke-width utilities with breakpoint variants

Source: https://tailwindcss.com/docs/stroke-width

Apply stroke-width utilities responsively by prefixing with breakpoint variants like md:, lg:, etc. This allows different stroke widths at different screen sizes.

```html
<div class="stroke-1 md:stroke-2 ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive white-space in Tailwind CSS

Source: https://tailwindcss.com/docs/white-space

Prefix a `white-space` utility with a breakpoint variant like `md:` to apply the utility only at medium screen sizes and above. This allows for adaptive text wrapping behavior based on screen dimensions.

```html
<p class="whitespace-pre md:whitespace-normal ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply responsive field-sizing with Tailwind CSS variants

Source: https://tailwindcss.com/docs/field-sizing

Demonstrates how to apply `field-sizing` utilities conditionally based on screen size using Tailwind CSS responsive variants. The `md:field-sizing-fixed` class ensures the input becomes fixed-size on medium screens and larger, while defaulting to content-sizing on smaller screens for adaptive layouts.

```html
<input class="field-sizing-content md:field-sizing-fixed ..." />
```

--------------------------------

### Add custom utilities using Tailwind @utility directive

Source: https://tailwindcss.com/docs/functions-and-directives

The `@utility` directive enables the creation of custom utility classes that inherently support Tailwind's variants like `hover`, `focus`, or responsive prefixes (`lg`). This extends Tailwind's utility-first approach by allowing you to define project-specific styling patterns.

```CSS
@utility tab-4 {  tab-size: 4;}
```

--------------------------------

### Apply uniform gap in Tailwind CSS Grid

Source: https://tailwindcss.com/docs/gap

Demonstrates how to use `gap-<number>` utilities like `gap-4` to apply a uniform gap between both rows and columns within a Tailwind CSS grid layout. This class sets the `gap` CSS property.

```html
<div class="grid grid-cols-2 gap-4">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Apply Responsive Contrast Filter in Tailwind CSS

Source: https://tailwindcss.com/docs/filter-contrast

This code demonstrates how to apply contrast filters conditionally based on screen size using Tailwind CSS's responsive variants. By prefixing a utility like `contrast-150` with a breakpoint variant such as `md:`, the filter will only apply at medium screen sizes and above.

```html
<img class="contrast-125 md:contrast-150 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Custom font-weight Value HTML

Source: https://tailwindcss.com/docs/font-weight

Shows how to apply arbitrary font-weight values using the bracket notation syntax font-[<value>]. This allows setting any numeric weight value not covered by predefined utilities, useful for non-standard font weights.

```html
<p class="font-[1000] ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Distribute Grid Content with Space Around using Tailwind CSS

Source: https://tailwindcss.com/docs/place-content

Apply `place-content-around` to distribute grid items with equal space around each row and column. This results in space at the beginning and end of the container, as well as between items themselves.

```html
<div class="grid h-48 grid-cols-2 place-content-around gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Apply Custom Transform Values

Source: https://tailwindcss.com/docs/transform

Set custom transform values using arbitrary value syntax transform-[<value>] or CSS variable syntax transform-(<custom-property>). Both approaches allow complete control over the transform property with custom matrix functions or CSS variables.

```html
<div class="transform-[matrix(1,2,3,4,5,6)] ...">  <!-- ... --></div>
```

```html
<div class="transform-(--my-transform) ...">  <!-- ... --></div>
```

--------------------------------

### Container scale min-width utilities

Source: https://tailwindcss.com/docs/min-width

Applies container-based min-width utilities (min-w-3xs through min-w-lg) to set fixed minimum widths based on predefined container breakpoints.

```html
<div class="w-40 ...">
  <div class="min-w-lg ...">min-w-lg</div>
  <div class="min-w-md ...">min-w-md</div>
  <div class="min-w-sm ...">min-w-sm</div>
  <div class="min-w-xs ...">min-w-xs</div>
  <div class="min-w-2xs ...">min-w-2xs</div>
  <div class="min-w-3xs ...">min-w-3xs</div>
</div>
```

--------------------------------

### Grid Display Container HTML

Source: https://tailwindcss.com/docs/display

Creates a grid container using the grid utility with grid-cols and grid-rows utilities to define layout structure. Enables CSS Grid layout with automatic gap spacing between grid items.

```html
<div class="grid grid-cols-3 grid-rows-3 gap-4">
  <!-- ... -->
</div>
```

--------------------------------

### Set Custom Maximum Width with Tailwind CSS Arbitrary Values

Source: https://tailwindcss.com/docs/max-width

This snippet demonstrates how to use arbitrary value syntax `max-w-[<value>]` to set a completely custom maximum width for an element. This allows for fine-grained control over sizing not covered by predefined scales.

```html
<div class="max-w-[220px] ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Background Utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Prefix background-image utilities with breakpoint variants like md: to apply styles only at specific screen sizes. This enables responsive design patterns where background gradients and images adapt to different viewport widths.

```html
<div class="from-purple-400 md:from-yellow-500 ...">  <!-- ... --></div>
```

--------------------------------

### Translate Both Axes Using Percentages - Tailwind CSS

Source: https://tailwindcss.com/docs/translate

Apply translate utilities using fractional percentages to move elements on both axes by a percentage of the element's own size. Use values like `translate-1/4`, `translate-1/6`, `translate-1/2`, or `-translate-full` for percentage-based offsets.

```html
<img class="-translate-1/4 ..." src="/img/mountains.jpg" />
<img class="translate-1/6 ..." src="/img/mountains.jpg" />
<img class="translate-1/2 ..." src="/img/mountains.jpg" />
```

--------------------------------

### place-self with responsive breakpoint variants

Source: https://tailwindcss.com/docs/place-self

Applies place-self utilities conditionally at different screen sizes using breakpoint prefixes like md:. Enables responsive alignment adjustments across device sizes.

```html
<div class="place-self-start md:place-self-end ...">
  <!-- ... -->
</div>
```

--------------------------------

### Tailwind CSS transition-property Utility Definitions

Source: https://tailwindcss.com/docs/transition-property

This snippet outlines the CSS properties targeted by various Tailwind CSS `transition-property` utility classes. It provides a quick reference for the default behaviors and how each class configures the `transition-property`, `transition-timing-function`, and `transition-duration` CSS properties.

```CSS
transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events; transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */ transition-duration: var(--default-transition-duration); /* 150ms */
```

```CSS
transition-property: all; transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */ transition-duration: var(--default-transition-duration); /* 150ms */
```

```CSS
transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to; transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */ transition-duration: var(--default-transition-duration); /* 150ms */
```

```CSS
transition-property: opacity; transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */ transition-duration: var(--default-transition-duration); /* 150ms */
```

```CSS
transition-property: box-shadow; transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */ transition-duration: var(--default-transition-duration); /* 150ms */
```

```CSS
transition-property: transform, translate, scale, rotate; transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */ transition-duration: var(--default-transition-duration); /* 150ms */
```

```CSS
transition-property: none;
```

```CSS
transition-property: var(<custom-property>); transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */ transition-duration: var(--default-transition-duration); /* 150ms */
```

```CSS
transition-property: <value>; transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */ transition-duration: var(--default-transition-duration); /* 150ms */
```

--------------------------------

### Allow Flex Items to Shrink with Tailwind CSS `shrink`

Source: https://tailwindcss.com/docs/flex-shrink

Demonstrates how to use the `shrink` utility class in Tailwind CSS to allow a flex item to shrink when space is limited. This ensures the item adjusts its size within a flex container.

```html
<div class="flex ...">  <div class="h-14 w-14 flex-none ...">01</div>  <div class="h-14 w-64 shrink ...">02</div>  <div class="h-14 w-14 flex-none ...">03</div></div>
```

--------------------------------

### Custom backdrop-invert Value with Bracket Notation

Source: https://tailwindcss.com/docs/backdrop-filter-invert

Shows how to apply a completely custom backdrop inversion value using the bracket notation syntax backdrop-invert-[<value>]. This allows arbitrary percentage values not covered by preset utilities.

```html
<div class="backdrop-invert-[.25] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Specify Grid Rows with Numbered Utility

Source: https://tailwindcss.com/docs/grid-template-rows

Create grids with equally sized rows using grid-rows-<number> utilities. The grid-rows-2 and grid-rows-4 classes use CSS Grid's repeat() function with minmax(0, 1fr) to distribute space evenly. Combine with grid-flow-col and gap utilities for layout control.

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

--------------------------------

### Apply custom gap using CSS variable in Tailwind CSS

Source: https://tailwindcss.com/docs/gap

Demonstrates the `gap-(<custom-property>)` syntax to use a CSS variable for gap values. This is a convenient shorthand for `gap-[var(<custom-property>)]`, automatically wrapping the custom property in `var()` for cleaner syntax.

```html
<div class="gap-(--my-gap) ...">  <!-- ... --></div>
```

--------------------------------

### Apply Source Detection to Tailwind CSS Utilities (CSS)

Source: https://tailwindcss.com/docs/preflight

This CSS snippet shows how to apply the `source()` function to the `tailwindcss/utilities.css` import. This function affects generated utilities, allowing for specific source detection configurations, such as disabling it with `source(none)`.

```css
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import "tailwindcss/utilities.css" layer(utilities) source(none);
```

--------------------------------

### Set custom perspective value in Tailwind CSS

Source: https://tailwindcss.com/docs/perspective

Shows how to define a precise perspective value using arbitrary values with the `perspective-[<value>]` syntax in Tailwind CSS, allowing for granular control over the perspective effect.

```html
<div class="perspective-[750px] ...">  <!-- ... --></div>
```

--------------------------------

### Apply Grayscale with CSS Custom Property in HTML

Source: https://tailwindcss.com/docs/filter-grayscale

Shows how to use the grayscale-(<custom-property>) syntax to apply a grayscale filter with a CSS custom property variable (--my-grayscale). This is shorthand for grayscale-[var(<custom-property>)] and automatically wraps the variable in the var() function.

```html
<img class="grayscale-(--my-grayscale) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Tailwind Accent Color CSS Variable Reference

Source: https://tailwindcss.com/docs/accent-color

Shows the generated CSS for accent color utilities across gray, zinc, neutral, and stone palettes using OKLCH color space. Each class maps to a CSS custom property with OKLCH color values.

```css
.accent-gray-900 {
  accent-color: var(--color-gray-900);
  /* oklch(21% 0.034 264.665) */
}

.accent-zinc-500 {
  accent-color: var(--color-zinc-500);
  /* oklch(55.2% 0.016 285.938) */
}

.accent-neutral-600 {
  accent-color: var(--color-neutral-600);
  /* oklch(43.9% 0 0) */
}

.accent-stone-400 {
  accent-color: var(--color-stone-400);
  /* oklch(70.9% 0.01 56.259) */
}

.accent-[<value>] {
  accent-color: <value>;
}
```

--------------------------------

### Apply Font Size and Line Height Together (Tailwind CSS HTML)

Source: https://tailwindcss.com/docs/line-height

Demonstrates how to use Tailwind CSS `text-<size>/<number>` utility classes to simultaneously set the font size and line height of an HTML element. This approach provides a concise way to define typographic styles.

```html
<p class="text-base/6 ...">So I started to walk into the water...</p><p class="text-base/7 ...">So I started to walk into the water...</p><p class="text-base/8 ...">So I started to walk into the water...</p>
```

--------------------------------

### Set custom mask-position values in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-position

Illustrates how to apply arbitrary mask position values using bracket notation, `mask-position-[<value>]`, or leverage CSS variables with the `mask-position-(<custom-property>)` syntax for dynamic positioning. These methods provide flexibility beyond predefined utilities, directly mapping to the `mask-position` CSS property.

```html
<div class="mask-position-[center_top_1rem] ...">  <!-- ... --></div>
```

```html
<div class="mask-position-(--my-mask-position) ...">  <!-- ... --></div>
```

--------------------------------

### Tailwind CSS backdrop-sepia class reference

Source: https://tailwindcss.com/docs/backdrop-filter-sepia

Reference table of all available backdrop-sepia utility classes. Includes standard utilities (backdrop-sepia, backdrop-sepia-<number>), arbitrary value syntax with brackets, and CSS custom property syntax. Each class generates a backdrop-filter CSS property with sepia function.

```CSS
/* Standard utilities */
.backdrop-sepia {
  backdrop-filter: sepia(100%);
}

.backdrop-sepia-<number> {
  backdrop-filter: sepia(<number>%);
}

/* Arbitrary values with brackets */
.backdrop-sepia-[<value>] {
  backdrop-filter: sepia(<value>);
}

/* CSS custom properties */
.backdrop-sepia-(<custom-property>) {
  backdrop-filter: sepia(var(<custom-property>));
}
```

--------------------------------

### Apply saturation filter using CSS variable with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-saturate

Illustrates how to dynamically set the saturation filter using a CSS custom property (variable) with Tailwind CSS's `saturate-(<custom-property>)` syntax. This provides a shorthand for `saturate-[var(<custom-property>)]`.

```html
<img class="saturate-(--my-saturation) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply box-content utility in HTML

Source: https://tailwindcss.com/docs/box-sizing

Use the box-content class to exclude borders and padding from the element's total size calculations. This utility sets box-sizing to content-box, causing padding and borders to be added on top of the specified dimensions.

```html
<div class="box-content size-32 border-4 p-4 ...">  <!-- ... --></div>
```

--------------------------------

### Relative Positioning with Tailwind CSS

Source: https://tailwindcss.com/docs/position

Shows how to use the `relative` utility to position an element within the normal document flow while calculating offsets relative to its normal position. Relatively positioned elements act as position references for absolutely positioned children.

```html
<div class="relative ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

--------------------------------

### Use CSS custom properties with text shadow Tailwind utilities

Source: https://tailwindcss.com/docs/text-shadow

Shows how to reference custom CSS properties in text shadow utilities using the parentheses syntax. This approach provides a shorthand for applying text-shadow values stored in CSS variables, automatically wrapping the property name with the var() function.

```html
<p class="text-shadow-(--my-text-shadow) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### JavaScript for Dynamic Dark Mode Toggling with System Preference

Source: https://tailwindcss.com/docs/dark-mode

This JavaScript code provides a robust solution for managing dark mode, supporting light, dark, and system preference settings. It applies or removes the 'dark' class on the `documentElement` based on `localStorage` preferences and the `window.matchMedia` API for system theme detection, preventing Flash of Unstyled Content (FOUC) by being placed inline in the `head`.

```javascript
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
```

--------------------------------

### Custom scroll-padding values with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-padding

Shows two approaches for using custom scroll-padding values: arbitrary values with square brackets and CSS variables with parentheses syntax. The parentheses syntax is shorthand that automatically adds the var() function.

```html
<div class="scroll-pl-[24rem] ...">
  <!-- ... -->
</div>

<div class="scroll-pl-(--my-scroll-padding) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Implement Subgrid Layout

Source: https://tailwindcss.com/docs/grid-template-rows

Use grid-rows-subgrid utility to adopt row tracks from the parent grid. Nested grids inherit parent row definitions while maintaining independent column layouts. Combine with row-span and row-start utilities for precise item placement.

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>05</div>
  <div class="row-span-3 grid grid-rows-subgrid gap-4">
    <div class="row-start-2">06</div>
  </div>
  <div>07</div>
  <!-- ... -->
  <div>10</div>
</div>
```

--------------------------------

### CSS custom property min-width

Source: https://tailwindcss.com/docs/min-width

Applies min-w-(<custom-property>) syntax as shorthand for min-w-[var(<custom-property>)] to reference CSS variables for dynamic minimum width values.

```html
<div class="min-w-(--my-min-width) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Define custom Tailwind CSS transition durations

Source: https://tailwindcss.com/docs/transition-duration

Illustrates using arbitrary values like `duration-[1s,15s]` or CSS variables with `duration-(--my-duration)` to set custom transition durations. This provides flexibility beyond predefined utility classes for specific timing requirements.

```html
<button class="duration-[1s,15s] ...">  <!-- ... --></button>
```

```html
<button class="duration-(--my-duration) ...">  <!-- ... --></button>
```

--------------------------------

### Apply Inset Ring Utilities - Tailwind CSS

Source: https://tailwindcss.com/docs/box-shadow

Use inset-ring or inset-ring-<number> utilities to apply solid inset box-shadow rings. Available sizes include inset-ring (default), inset-ring-2, and inset-ring-4. Inset rings match currentColor by default.

```html
<button class="inset-ring ...">Subscribe</button>
<button class="inset-ring-2 ...">Subscribe</button>
<button class="inset-ring-4 ...">Subscribe</button>
```

--------------------------------

### Utilize `wrap-anywhere` in Flex Containers (HTML/Tailwind CSS)

Source: https://tailwindcss.com/docs/overflow-wrap

The `wrap-anywhere` utility allows mid-word line breaks and factors these breaks into the element's intrinsic size calculation. This is crucial when working with `flex` containers, as it helps child elements shrink below their content size without needing `min-width: 0`.

```html
<div class="flex max-w-sm">  <img class="size-16 rounded-full" src="/img/profile.jpg" />  <div class="wrap-break-word">    <p class="font-medium">Jay Riemenschneider</p>    <p>jason.riemenschneider@vandelayindustries.com</p>  </div></div><div class="flex max-w-sm">  <img class="size-16 rounded-full" src="/img/profile.jpg" />  <div class="wrap-anywhere">    <p class="font-medium">Jay Riemenschneider</p>    <p>jason.riemenschneider@vandelayindustries.com</p>  </div></div>
```

--------------------------------

### Basic transition delay with HTML buttons

Source: https://tailwindcss.com/docs/transition-delay

Apply transition delay utilities to HTML button elements using classes like delay-150, delay-300, and delay-700 to set transition delays in milliseconds. Combine with transition, duration, and ease-in-out utilities for complete animation control.

```html
<button class="transition delay-150 duration-300 ease-in-out ...">Button A</button>
<button class="transition delay-300 duration-300 ease-in-out ...">Button B</button>
<button class="transition delay-700 duration-300 ease-in-out ...">Button C</button>
```

--------------------------------

### Linear Gradient Backgrounds

Source: https://tailwindcss.com/docs/background-image

Utilities for applying linear gradients as an element's background image, with various directions, custom angle support, and integration with color stop utilities.

```APIDOC
## Utility: Linear Gradients

### Description
These utilities apply a linear gradient to an element's background, allowing specification of direction or angle. They work in conjunction with color stop utilities.

### Method
Apply CSS Class

### Endpoint
N/A (Applies to HTML elements)

### Parameters
#### Utility Classes
- **`bg-linear-to-t`** (keyword) - Sets `background-image: linear-gradient(to top, var(--tw-gradient-stops));`
- **`bg-linear-to-tr`** (keyword) - Sets `background-image: linear-gradient(to top right, var(--tw-gradient-stops));`
- **`bg-linear-to-r`** (keyword) - Sets `background-image: linear-gradient(to right, var(--tw-gradient-stops));`
- **`bg-linear-to-br`** (keyword) - Sets `background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));`
- **`bg-linear-to-b`** (keyword) - Sets `background-image: linear-gradient(to bottom, var(--tw-gradient-stops));`
- **`bg-linear-to-bl`** (keyword) - Sets `background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));`
- **`bg-linear-to-l`** (keyword) - Sets `background-image: linear-gradient(to left, var(--tw-gradient-stops));`
- **`bg-linear-to-tl`** (keyword) - Sets `background-image: linear-gradient(to top left, var(--tw-gradient-stops));`
- **`bg-linear-<angle>`** (angle) - Sets `background-image: linear-gradient(<angle> in oklab, var(--tw-gradient-stops));`
- **`-bg-linear-<angle>`** (angle) - Sets `background-image: linear-gradient(-<angle> in oklab, var(--tw-gradient-stops));`
- **`bg-linear-(<custom-property>)`** (string) - Sets `background-image: linear-gradient(var(--tw-gradient-stops, var(<custom-property>)));`
- **`bg-linear-[<value>]`** (string) - Sets `background-image: linear-gradient(var(--tw-gradient-stops, <value>));`

### Request Example
```html
<div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
<div class="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>
```

### Response
#### Resulting CSS
```css
.bg-linear-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-cyan-500 {
  --tw-gradient-from: #06b6d4; /* Example color value */
}
.to-blue-500 {
  --tw-gradient-to: #3b82f6; /* Example color value */
}
/* For custom angles like bg-linear-65, the angle is applied directly */
```
#### Description
The element will display a linear gradient background, transitioning colors in the specified direction or angle.
```

--------------------------------

### Radial Gradient Backgrounds

Source: https://tailwindcss.com/docs/background-image

Utilities for applying radial gradients as an element's background image, with options for custom positions and integration with color stop utilities.

```APIDOC
## Utility: Radial Gradients

### Description
These utilities apply a radial gradient to an element's background, originating from the center by default or from a custom position. They are used with color stop utilities.

### Method
Apply CSS Class

### Endpoint
N/A (Applies to HTML elements)

### Parameters
#### Utility Classes
- **`bg-radial`** (keyword) - Sets `background-image: radial-gradient(in oklab, var(--tw-gradient-stops));`
- **`bg-radial-(<custom-property>)`** (string) - Sets `background-image: radial-gradient(var(--tw-gradient-stops, var(<custom-property>)));`
- **`bg-radial-[<value>]`** (string) - Sets `background-image: radial-gradient(var(--tw-gradient-stops, <value>));`

### Request Example
```html
<div class="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
<div class="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
```

### Response
#### Resulting CSS
```css
.bg-radial {
  background-image: radial-gradient(in oklab, var(--tw-gradient-stops));
}
.bg-radial-\[at_50\%_75\%\] {
  background-image: radial-gradient(at 50% 75%, var(--tw-gradient-stops));
}
```
#### Description
The element will display a radial gradient background, spreading out from a central or specified point.
```

--------------------------------

### Support Literal Values with Quoted Syntax

Source: https://tailwindcss.com/docs/adding-custom-styles

Uses --value('literal') syntax with quoted strings to match specific literal values. Enables utilities like tab-inherit, tab-initial, and tab-unset by defining supported literal keywords.

```CSS
@utility tab-* {
  tab-size: --value("inherit", "initial", "unset");
}
```

--------------------------------

### Apply custom vertical alignment values with Tailwind CSS

Source: https://tailwindcss.com/docs/vertical-align

Demonstrates using arbitrary values with `align-[<value>]` for specific pixel-based or other units, and `align-(<custom-property>)` for CSS variables to set precise vertical alignment.

```html
<span class="align-[4px] ...">  <!-- ... --></span>
```

```html
<span class="align-(--my-alignment) ...">  <!-- ... --></span>
```

--------------------------------

### Increase Contrast with prefers-contrast Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the contrast-more variant to enhance visibility for users who request increased contrast in their system settings. Apply contrast-less for users requesting less contrast. This improves readability and accessibility for users with vision impairments.

```html
<label class="block">
  <span class="block text-sm font-medium text-gray-700">Social Security Number</span>
  <input
    class="border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 ..."
  />
  <p class="text-gray-600 opacity-10 contrast-more:opacity-100 ...">We need this to steal your identity.</p>
</label>
```

--------------------------------

### Configure Tailwind CSS Theme Variables with `theme()` (CSS)

Source: https://tailwindcss.com/docs/preflight

This CSS snippet illustrates how to apply `theme(static)` or `theme(inline)` to the `tailwindcss/theme.css` import. These functions affect the generated theme variables, allowing for specific configurations of how theme values are processed or inlined.

```css
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/theme.css" layer(theme) theme(static);
@import "tailwindcss/utilities.css" layer(utilities);
```

--------------------------------

### Generate theme-based spacing values with Tailwind --spacing() function

Source: https://tailwindcss.com/docs/functions-and-directives

The `--spacing()` function generates spacing values based on your Tailwind theme configuration, ensuring consistent design. It simplifies applying uniform spacing in custom CSS and can be combined with `calc()` for creating arbitrary, dynamic values.

```CSS
.my-element {  margin: --spacing(4);}
```

```HTML
<div class="py-[calc(--spacing(4)-1px)]">  <!-- ... --></div>
```

--------------------------------

### Reference CSS custom property for background-size value

Source: https://tailwindcss.com/docs/background-size

Use the bg-size-(<custom-property>) syntax to reference a CSS custom property for the background-size value. This is shorthand for bg-size-[var(<custom-property>)] and automatically adds the var() function.

```html
<div class="bg-size-(--my-image-size) ...">  <!-- ... --></div>
```

--------------------------------

### Using flex-basis spacing scale utilities in HTML

Source: https://tailwindcss.com/docs/flex-basis

Set the initial size of flex items using basis-<number> utilities like basis-64 and basis-128, which are calculated from the spacing scale theme variable. These utilities apply the flex-basis CSS property with spacing multipliers.

```html
<div class="flex flex-row">
  <div class="basis-64">01</div>
  <div class="basis-64">02</div>
  <div class="basis-128">03</div>
</div>
```

--------------------------------

### Apply fixed minimum height with spacing scale in HTML

Source: https://tailwindcss.com/docs/min-height

Use min-h-<number> utilities to set fixed minimum heights based on Tailwind's spacing scale. These utilities apply calculated heights using the --spacing theme variable multiplied by the specified number.

```html
<div class="h-20 ...">
  <div class="min-h-80 ...">min-h-80</div>
  <div class="min-h-64 ...">min-h-64</div>
  <div class="min-h-48 ...">min-h-48</div>
  <div class="min-h-40 ...">min-h-40</div>
  <div class="min-h-32 ...">min-h-32</div>
  <div class="min-h-24 ...">min-h-24</div>
</div>
```

--------------------------------

### Load Legacy Tailwind CSS Configuration with @config Directive (CSS)

Source: https://tailwindcss.com/docs/functions-and-directives

Use the `@config` directive to load a legacy JavaScript-based configuration file for Tailwind CSS v3.x compatibility. Note that `corePlugins`, `safelist`, and `separator` options are not supported in v4.0.

```css
@config "../../tailwind.config.js";
```

--------------------------------

### Apply object-scale-down utility for conditional scaling (HTML)

Source: https://tailwindcss.com/docs/object-fit

Uses the `object-scale-down` utility class in HTML to display content at its original size or scale it down to fit the container if it's larger. It behaves like `none` or `contain` depending on which results in a smaller concrete object size.

```html
<img class="h-48 w-96 object-scale-down ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Responsive Text Decoration with Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-line

This snippet demonstrates how to apply text decoration responsively using Tailwind CSS breakpoint variants. The `md:underline` utility class ensures the underline is only applied on medium screen sizes and above, while `no-underline` removes it on smaller screens.

```html
<a class="no-underline md:underline ..." href="...">  <!-- ... --></a>
```

--------------------------------

### Set perspective using CSS variable in Tailwind CSS

Source: https://tailwindcss.com/docs/perspective

Demonstrates how to apply a perspective value from a CSS custom property using the `perspective-(<custom-property>)` syntax, which automatically wraps the custom property in `var()` for convenience.

```html
<div class="perspective-(--my-perspective) ...">  <!-- ... --></div>
```

--------------------------------

### Dynamic Inline Styles with Tailwind CSS Components

Source: https://tailwindcss.com/docs/styling-with-utility-classes

React component demonstrating inline styles for dynamic color values from props combined with Tailwind utility classes. Useful when values come from external sources like databases or APIs and cannot be known at build time.

```jsx
export function BrandedButton({ buttonColor, textColor, children }) {
  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: textColor,
      }}
      className="rounded-md px-3 py-1.5 font-medium"
    >
      {children}
    </button>
  );
}
```

--------------------------------

### Implement functional custom utilities with `@utility` (CSS)

Source: https://tailwindcss.com/docs/adding-custom-styles

Register functional custom utilities that accept arguments using the `@utility` directive, leveraging the special `--value()` function. This enables the creation of dynamic utilities where the property value is determined at runtime based on the argument provided.

```css
@utility tab-* {
  tab-size: --value(--tab-size-*);
}
```

--------------------------------

### CSS Custom Property Flex Utility in Tailwind CSS

Source: https://tailwindcss.com/docs/flex

Shows how to use flex-(<custom-property>) syntax to apply flex values from CSS custom properties. Automatically wraps the custom property in var() function for cleaner syntax.

```html
<div class="flex-(--my-flex) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Use Arbitrary Values with Square Bracket Notation in HTML

Source: https://tailwindcss.com/docs/adding-custom-styles

Generate custom utility classes on-the-fly using square bracket notation for pixel-perfect designs. Supports combining with interactive modifiers (hover, focus) and responsive modifiers (lg, md).

```html
<div class="top-[117px]">  <!-- ... --></div>
```

```html
<div class="top-[117px] lg:top-[344px]">  <!-- ... --></div>
```

```html
<div class="bg-[#bada55] text-[22px] before:content-['Festivus']">  <!-- ... --></div>
```

```html
<div class="fill-(--my-brand-color) ...">  <!-- ... --></div>
```

--------------------------------

### Differentiate nested groups with named group variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Create named groups using group/{name} syntax and reference them with group-{variant}/{name} to style elements based on specific parent group states in nested contexts. This enables fine-grained control over which parent's state triggers styling.

```html
<ul role="list">
  {#each people as person}
    <li class="group/item ...">
      <!-- ... -->
      <a class="group/edit invisible group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-gray-500 ..."><!-- ... --></svg>
      </a>
    </li>
  {/each}
</ul>
```

--------------------------------

### Logical scroll-margin properties for bidirectional text

Source: https://tailwindcss.com/docs/scroll-margin

Demonstrates scroll-ms (scroll-margin-inline-start) and scroll-me (scroll-margin-inline-end) utilities that automatically map to left or right based on text direction. Works with both ltr and rtl layouts for internationalized applications.

```html
<div dir="ltr">
  <div class="snap-x ...">
    <div class="snap-start scroll-ms-6 ...">
      <img src="/img/vacation-01.jpg"/>
    </div>
    <!-- ... -->
  </div>
</div>
<div dir="rtl">
  <div class="snap-x ...">
    <div class="snap-start scroll-ms-6 ...">
      <img src="/img/vacation-01.jpg"/>
    </div>
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Apply percentage-based height using fractions in Tailwind CSS

Source: https://tailwindcss.com/docs/height

Set element height to percentage values using h-full or h-<fraction> utilities like h-1/2, h-2/5, h-3/4. Height is calculated as calc(<fraction> * 100%) allowing responsive proportional sizing.

```html
<div class="h-full ...">h-full</div>
<div class="h-9/10 ...">h-9/10</div>
<div class="h-3/4 ...">h-3/4</div>
<div class="h-1/2 ...">h-1/2</div>
<div class="h-1/3 ...">h-1/3</div>
```

--------------------------------

### Implement Responsive Design with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This snippet shows how to apply responsive styling using Tailwind CSS breakpoint prefixes. By adding `sm:` to a utility like `grid-cols-3`, the layout changes only when the screen size meets or exceeds the `sm` breakpoint (40rem). This provides a concise way to handle media queries directly in HTML.

```HTML
<div class="grid grid-cols-2 sm:grid-cols-3">  <!-- ... --></div>
```

```CSS
.sm\:grid-cols-3 {  @media (width >= 40rem) {    grid-template-columns: repeat(3, minmax(0, 1fr));  }}
```

--------------------------------

### grid-auto-rows with custom bracket syntax

Source: https://tailwindcss.com/docs/grid-auto-rows

Uses the auto-rows-[<value>] syntax to set implicit grid row sizing with a custom minmax value. This approach allows complete control over row sizing without predefined utility classes.

```html
<div class="auto-rows-[minmax(0,2fr)] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Custom transition delay values with arbitrary syntax

Source: https://tailwindcss.com/docs/transition-delay

Use the delay-[<value>] arbitrary value syntax to set custom transition delays not covered by standard utilities. Accepts any valid CSS time value.

```html
<button class="delay-[1s,250ms] ...">  <!-- ... --></button>
```

--------------------------------

### Custom Font-size Values - HTML

Source: https://tailwindcss.com/docs/font-size

Use arbitrary value syntax text-[<value>] to apply custom font-size values not in the preset scale. Also supports CSS custom properties with text-(length:--variable) syntax for dynamic styling.

```html
<p class="text-[14px] ...">Lorem ipsum dolor sit amet...</p>
<p class="text-(length:--my-text-size) ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply responsive object-fit utilities with Tailwind CSS (HTML)

Source: https://tailwindcss.com/docs/object-fit

Demonstrates how to apply responsive `object-fit` utilities using Tailwind CSS breakpoint variants. The `object-contain` class is applied by default, but at medium screen sizes and above, it switches to `object-cover`.

```html
<img class="object-contain md:object-cover" src="/img/mountains.jpg" />
```

--------------------------------

### Basic grid-auto-columns with auto-cols-max

Source: https://tailwindcss.com/docs/grid-auto-columns

Demonstrates using Tailwind's auto-cols-max utility class to control the size of implicitly-created grid columns. The grid automatically creates columns based on content size, with grid-flow-col enabling horizontal flow.

```html
<div class="grid auto-cols-max grid-flow-col">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Enable Arbitrary Values with Square Bracket Syntax

Source: https://tailwindcss.com/docs/adding-custom-styles

Uses --value([{type}]) syntax with square brackets to support arbitrary values. Available types include absolute-size, angle, bg-size, color, family-name, generic-name, image, integer, length, line-width, number, percentage, position, ratio, relative-size, url, vector, and wildcard (*). Matches utilities like tab-[1] and tab-[76].

```CSS
@utility tab-* {
  tab-size: --value([integer]);
}
```

--------------------------------

### Create table layout with Tailwind CSS display utilities

Source: https://tailwindcss.com/docs/display

Use table display utilities (`table`, `table-row`, `table-cell`, `table-header-group`, `table-row-group`) to create elements that behave like native HTML table elements. This provides semantic table structure without using actual table markup, useful for responsive designs and complex layouts.

```html
<div class="table w-full ...">
  <div class="table-header-group ...">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div class="table-cell ...">Malcolm Lockyer</div>
      <div class="table-cell ...">1961</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Witchy Woman</div>
      <div class="table-cell ...">The Eagles</div>
      <div class="table-cell ...">1972</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Shining Star</div>
      <div class="table-cell ...">Earth, Wind, and Fire</div>
      <div class="table-cell ...">1975</div>
    </div>
  </div>
</div>
```

--------------------------------

### Using negative order values

Source: https://tailwindcss.com/docs/order

Prefix the order class name with a dash to convert it to a negative order value. This allows items to be positioned before items with positive or zero order values.

```HTML
<div class="-order-1">
  <!-- ... -->
</div>
```

--------------------------------

### Responsive Scroll Snap Alignment - Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-align

Applies responsive scroll-snap-align utilities using breakpoint prefixes like md: to conditionally apply snap alignment at different screen sizes. Enables adaptive snap behavior across mobile, tablet, and desktop viewports.

```html
<div class="snap-center md:snap-start ...">
  <!-- Content -->
</div>
```

--------------------------------

### Focus variant outline-width HTML

Source: https://tailwindcss.com/docs/outline-width

Demonstrates applying outline-width utility with focus variant using focus:outline-2 to apply the outline only when the button receives focus. Combines outline color (outline-sky-500) and outline offset for a styled focus state.

```html
<button class="outline-offset-2 outline-sky-500 focus:outline-2 ...">Save Changes</button>
```

--------------------------------

### Responsive mask-repeat with breakpoint variants

Source: https://tailwindcss.com/docs/mask-repeat

Demonstrates responsive design by prefixing the mask-repeat-x utility with the md: breakpoint variant. This applies horizontal mask repetition only at medium screen sizes and above, while default behavior applies at smaller breakpoints.

```html
<div class="mask-repeat md:mask-repeat-x ...">  <!-- ... --></div>
```

--------------------------------

### Apply Basic Numeric Text Decoration Thickness in Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-thickness

This snippet demonstrates how to set the text decoration thickness using predefined numeric utilities like `decoration-1`, `decoration-2`, and `decoration-4` in Tailwind CSS. These classes apply a fixed pixel thickness to an `underline` text decoration, offering quick control over visual weight.

```html
<p class="underline decoration-1">The quick brown fox...</p><p class="underline decoration-2">The quick brown fox...</p><p class="underline decoration-4">The quick brown fox...</p>
```

--------------------------------

### Apply hue rotation using CSS variables with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-hue-rotate

Demonstrates applying hue rotation using a CSS variable through the `hue-rotate-(<custom-property>)` syntax in Tailwind CSS, like `hue-rotate-(--my-hue-rotate)`. This is a shorthand for `hue-rotate-[var(<custom-property>)]`.

```html
<img class="hue-rotate-(--my-hue-rotate) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Responsive Grid Row Variants

Source: https://tailwindcss.com/docs/grid-template-rows

Prefix grid-template-rows utilities with breakpoint variants like md: to conditionally apply different row configurations at specific screen sizes. Enables adaptive layouts that change grid structure from mobile to desktop views.

```html
<div class="grid grid-rows-2 md:grid-rows-6 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Responsive Caret Color with Breakpoint Variants

Source: https://tailwindcss.com/docs/caret-color

Apply different caret colors at different screen sizes using breakpoint prefixes like `md:`. Combine multiple breakpoint variants in a single class list to create responsive color schemes that adapt to viewport width.

```html
<textarea class="caret-rose-500 md:caret-lime-600 ..."></textarea>
```

--------------------------------

### Load Legacy Tailwind CSS Plugin with @plugin Directive (CSS)

Source: https://tailwindcss.com/docs/functions-and-directives

Utilize the `@plugin` directive to load a legacy JavaScript-based plugin, supporting compatibility with Tailwind CSS v3.x. This directive accepts either a package name or a local file path.

```css
@plugin "@tailwindcss/typography";
```

--------------------------------

### Gradient Color Stop Utilities

Source: https://tailwindcss.com/docs/background-image

Utilities to define the colors for the gradient stops (from, via, to) for linear, radial, and conic gradients, populating the `--tw-gradient-stops` CSS variable.

```APIDOC
## Utility: Gradient Color Stops

### Description
These utilities define the starting, middle, and ending colors for gradients. They populate the `--tw-gradient-stops` CSS variable.

### Method
Apply CSS Class

### Endpoint
N/A (Applies to HTML elements)

### Parameters
#### Utility Classes
- **`from-<color>`** (color) - Sets `--tw-gradient-from: <color>;`
- **`from-(<custom-property>)`** (string) - Sets `--tw-gradient-from: var(<custom-property>);`
- **`from-[<value>]`** (string) - Sets `--tw-gradient-from: <value>;`
- **`via-<color>`** (color) - Sets `--tw-gradient-via: <color>;`
- **`via-(<
```

--------------------------------

### Fixed Positioning with Tailwind CSS

Source: https://tailwindcss.com/docs/position

Demonstrates using the `fixed` utility to position an element relative to the browser viewport. Fixed positioned elements remain in place when scrolling and calculate offsets from the viewport edges.

```html
<div class="relative">
  <div class="fixed top-0 right-0 left-0">Contacts</div>
  <div>
    <div>
      <img src="/img/andrew.jpg" />
      <strong>Andrew Alfred</strong>
    </div>
    <div>
      <img src="/img/debra.jpg" />
      <strong>Debra Houston</strong>
    </div>
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### grid-auto-flow CSS class reference

Source: https://tailwindcss.com/docs/grid-auto-flow

Reference table of Tailwind CSS grid-auto-flow utility classes and their corresponding CSS grid-auto-flow property values. Includes row, column, and dense variants for controlling grid auto-placement behavior.

```css
/* grid-flow-row */
grid-auto-flow: row;

/* grid-flow-col */
grid-auto-flow: column;

/* grid-flow-dense */
grid-auto-flow: dense;

/* grid-flow-row-dense */
grid-auto-flow: row dense;

/* grid-flow-col-dense */
grid-auto-flow: column dense;
```

--------------------------------

### Apply Responsive Visibility with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/visibility

This HTML snippet demonstrates how to apply visibility utilities responsively using Tailwind CSS breakpoint variants. The element is `visible` by default but becomes `invisible` specifically on medium screens (`md:`) and above, allowing for adaptive UI behavior based on screen size.

```html
<div class="visible md:invisible ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Invert Filter with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-invert

This HTML snippet demonstrates applying an invert filter conditionally based on screen size using Tailwind CSS responsive variants. The `md:invert-0` utility ensures that the image is inverted by default but loses its inversion on medium screens and above.

```html
<img class="invert md:invert-0 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply styles with named Tailwind CSS container queries

Source: https://tailwindcss.com/docs/responsive-design

This HTML snippet shows how to use named container queries for complex layouts with nested containers. By assigning a name (e.g., `@container/main`) to a container, child elements can target specific distant containers using variants like `@sm/main:flex-col`. This allows for styling based on a parent container other than the immediate one, improving modularity.

```html
<div class="@container/main">  <!-- ... -->  <div class="flex flex-row @sm/main:flex-col">    <!-- ... -->  </div></div>
```

--------------------------------

### Center Grid Content with Tailwind CSS

Source: https://tailwindcss.com/docs/place-content

This utility class, `place-content-center`, is used to pack grid items in the center of both the inline and block axes. It's applied to a grid container to horizontally and vertically center its content.

```html
<div class="grid h-48 grid-cols-2 place-content-center gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Responsive list marker image with breakpoint variant

Source: https://tailwindcss.com/docs/list-style-image

Prefix a list-style-image utility with a breakpoint variant like md: to apply the utility only at medium screen sizes and above, enabling responsive list styling.

```html
<div class="list-image-none md:list-image-[url(/img/checkmark.png)] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Define basic Tailwind CSS font size theme variable

Source: https://tailwindcss.com/docs/font-size

This snippet demonstrates how to define a custom font size utility, `--text-tiny`, within your Tailwind CSS `@theme` configuration. This allows you to introduce new font sizes that can be referenced in your HTML markup.

```css
@theme {  --text-tiny: 0.625rem; }
```

--------------------------------

### Reset Width with Responsive Breakpoints

Source: https://tailwindcss.com/docs/width

Remove or override element widths at specific breakpoints using responsive utilities like md:w-auto. Enables responsive behavior where width constraints apply at certain screen sizes and reset at others.

```html
<div class="w-full md:w-auto">
  <!-- Full width on mobile, auto width on medium screens and up -->
</div>
```

--------------------------------

### Apply Custom Container Query Variant in HTML

Source: https://tailwindcss.com/docs/responsive-design

Use the custom 8xl container query variant in markup by wrapping content with @container and applying the @8xl:flex-row utility. This changes the layout to flex-row when the container width reaches 96rem.

```html
<div class="@container">
  <div class="flex flex-col @8xl:flex-row">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Configure and use subpath imports for Tailwind directives

Source: https://tailwindcss.com/docs/functions-and-directives

Subpath imports allow defining custom path aliases in `package.json` for easier referencing of files with directives like `@import` or `@reference`. This streamlines file paths in larger projects or monorepos, functioning similarly to bundler or TypeScript path aliases for better organization.

```JSON
{  "imports": {    "#app.css": "./src/css/app.css"  }}
```

```Vue
<template>  <h1>Hello world!</h1></template><style>  @reference "#app.css";  h1 {    @apply text-2xl font-bold text-red-500;  }</style>
```

--------------------------------

### Apply Tailwind CSS Cursor Utilities to HTML Elements

Source: https://tailwindcss.com/docs/cursor

Demonstrates how to apply standard Tailwind CSS `cursor-*` classes like `cursor-pointer`, `cursor-progress`, and `cursor-not-allowed` to HTML button elements. These utilities directly map to CSS `cursor` properties, changing the cursor appearance when the user hovers over the element. Ensure the elements are interactive for the cursor change to be noticeable.

```html
<button class="cursor-pointer ...">Submit</button><button class="cursor-progress ...">Saving...</button><button class="cursor-not-allowed ..." disabled>Confirm</button>
```

--------------------------------

### Apply Styles for Open Popover Element in HTML

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This HTML snippet demonstrates using the `open:` variant to style a popover element when it is open. It changes the popover's opacity from 0 to 100 when the `popovertarget` button is clicked.

```html
<div>  <button popovertarget="my-popover">Open Popover</button>  <div popover id="my-popover" class="opacity-0 open:opacity-100 ...">    <!-- ... -->  </div></div>
```

--------------------------------

### Apply backdrop-sepia with CSS custom properties

Source: https://tailwindcss.com/docs/backdrop-filter-sepia

Use the `backdrop-sepia-(<custom-property>)` syntax to apply sepia filters using CSS variables. This shorthand automatically wraps the custom property in the `var()` function, equivalent to `backdrop-sepia-[var(<custom-property>)]`.

```HTML
<div class="backdrop-sepia-(--my-backdrop-sepia) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Add Custom Colors with @theme Directive

Source: https://tailwindcss.com/docs/colors

Define custom colors in the --color-* theme namespace using @theme to make them available as utility classes like bg-midnight and text-tahiti.

```css
@import "tailwindcss";
@theme {
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

--------------------------------

### Apply Custom Brightness Values with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-brightness

This snippet shows how to set a custom brightness value using arbitrary values within square brackets, such as `brightness-[1.75]`. It also illustrates the use of CSS variables with the `brightness-(<custom-property>)` syntax, which is a shorthand for `brightness-[var(<custom-property>)]`.

```html
<img class="brightness-[1.75] ..." src="/img/mountains.jpg" />
```

```html
<img class="brightness-(--my-brightness) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Custom max-height HTML with bracket notation

Source: https://tailwindcss.com/docs/max-height

Demonstrates using arbitrary custom values with Tailwind CSS bracket notation syntax max-h-[<value>] to set non-standard maximum heights like 220px that aren't part of the default spacing scale.

```html
<div class="max-h-[220px] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply text-violet-600 color with Tailwind CSS

Source: https://tailwindcss.com/docs/text-color

Demonstrates the Tailwind CSS utility class `

--------------------------------

### Apply custom gap value in Tailwind CSS using arbitrary syntax

Source: https://tailwindcss.com/docs/gap

Shows how to use Tailwind CSS's arbitrary value syntax, `gap-[<value>]`, to define a completely custom gap size for grid or flexbox items. This allows direct application of any valid CSS value, such as `gap-[10vw]` for a viewport-width-relative gap.

```html
<div class="gap-[10vw] ...">  <!-- ... --></div>
```

--------------------------------

### Center Text with Tailwind CSS

Source: https://tailwindcss.com/docs/text-align

Shows how to center text using the `text-center` utility class provided by Tailwind CSS. This class applies `text-align: center;` to the element.

```html
<p class="text-center">So I started to walk into the water...</p>
```

--------------------------------

### Select all text on click with select-all

Source: https://tailwindcss.com/docs/user-select

Automatically selects all text content in an element when a user clicks on it using the select-all utility class. Useful for code snippets or copyable content.

```html
<div class="select-all ...">The quick brown fox jumps over the lazy dog.</div>
```

--------------------------------

### CSS Variable Reference for font-size

Source: https://tailwindcss.com/docs/font-size

Tailwind font-size utilities use CSS custom properties for flexible theming. Each preset class (text-xs through text-9xl) references corresponding --text-* variables with automatic line-height calculations based on the font-size value.

```css
/* text-xs */
font-size: var(--text-xs); /* 0.75rem (12px) */
line-height: var(--text-xs--line-height); /* calc(1 / 0.75) */

/* text-sm */
font-size: var(--text-sm); /* 0.875rem (14px) */
line-height: var(--text-sm--line-height); /* calc(1.25 / 0.875) */

/* text-base */
font-size: var(--text-base); /* 1rem (16px) */
line-height: var(--text-base--line-height); /* calc(1.5 / 1) */

/* text-lg */
font-size: var(--text-lg); /* 1.125rem (18px) */
line-height: var(--text-lg--line-height); /* calc(1.75 / 1.125) */

/* text-xl */
font-size: var(--text-xl); /* 1.25rem (20px) */
line-height: var(--text-xl--line-height); /* calc(1.75 / 1.25) */

/* text-2xl through text-9xl follow similar patterns */
```

--------------------------------

### Static Class Names Pattern in React

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Demonstrates the correct React component pattern using a colorVariants object to map props to complete, static Tailwind class names. This ensures all classes are statically detectable and allows Tailwind to generate complete CSS.

```jsx
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500",
    red: "bg-red-600 hover:bg-red-500",
  };
  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

--------------------------------

### Create arbitrary group variants with custom selectors

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use arbitrary group-* variants with custom selectors in square brackets to create one-off group styling rules without pre-configuration. The & character can mark where the .group selector should be positioned in the final CSS selector.

```html
<div class="group is-published">
  <div class="hidden group-[.is-published]:block">
    Published
  </div>
</div>
```

```html
<div class="group">
  <div class="group-[:nth-of-type(3)_&]:block">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Tailwind CSS All-Sides Margin Utility Classes

Source: https://tailwindcss.com/docs/margin

Apply margin to all sides of an element using the m- prefix. Supports numeric multipliers based on spacing scale, pixel values, custom CSS properties, and arbitrary values. Negative margins are supported with the -m- prefix.

```css
/* Numeric multiplier */
.m-4 {
  margin: calc(var(--spacing) * 4);
}

/* Negative margin */
.-m-4 {
  margin: calc(var(--spacing) * -4);
}

/* Auto margin */
.m-auto {
  margin: auto;
}

/* Pixel value */
.m-px {
  margin: 1px;
}

/* Negative pixel value */
.-m-px {
  margin: -1px;
}

/* Custom property */
.m-\(--custom\) {
  margin: var(--custom-property);
}

/* Arbitrary value */
.m-\[100px\] {
  margin: 100px;
}
```

--------------------------------

### Apply mask-clip Utilities in HTML

Source: https://tailwindcss.com/docs/mask-clip

This snippet demonstrates how to apply `mask-clip` utilities like `mask-clip-border`, `mask-clip-padding`, and `mask-clip-content` directly in HTML to control the bounding box of an element's mask. These utilities are part of Tailwind CSS and require its configuration.

```html
<div class="mask-clip-border border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-clip-padding border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-clip-content border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Tailwind CSS: Responsive Pseudo-element Content (`md:before:content-[value]`)

Source: https://tailwindcss.com/docs/content

This snippet shows how to apply responsive variants like `md:` with Tailwind CSS `content` utilities to change pseudo-element content based on screen size. This enables adaptive UI elements, displaying different content for various breakpoints.

```html
<p class="before:content-['Mobile'] md:before:content-['Desktop'] ..."></p>
```

--------------------------------

### Tailwind CSS Stroke Utility Class Reference

Source: https://tailwindcss.com/docs/stroke

Provides a quick reference of Tailwind CSS `stroke` utility classes, demonstrating their mapping to corresponding CSS `stroke` properties using CSS variables for neutral and stone color palettes. Each entry includes the generated OKLCH color value.

```css
stroke: var(--color-neutral-300); /* oklch(87% 0 0) */
stroke: var(--color-neutral-400); /* oklch(70.8% 0 0) */
stroke: var(--color-neutral-500); /* oklch(55.6% 0 0) */
stroke: var(--color-neutral-600); /* oklch(43.9% 0 0) */
stroke: var(--color-neutral-700); /* oklch(37.1% 0 0) */
stroke: var(--color-neutral-800); /* oklch(26.9% 0 0) */
stroke: var(--color-neutral-900); /* oklch(20.5% 0 0) */
stroke: var(--color-neutral-950); /* oklch(14.5% 0 0) */
stroke: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */
stroke: var(--color-stone-100); /* oklch(97% 0.001 106.424) */
stroke: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */
stroke: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */
stroke: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */
stroke: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */
stroke: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */
stroke: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */
stroke: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */
stroke: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */
stroke: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */
stroke: var(<custom-property>);
stroke: <color>;
```

--------------------------------

### Apply Custom Border Width Using CSS Variables

Source: https://tailwindcss.com/docs/border-width

Use the border-(length:<custom-property>) syntax to apply custom border widths via CSS variables. This is shorthand that automatically wraps the custom property in the var() function, equivalent to border-[length:var(<custom-property>)].

```html
<div class="border-(length:--my-border-width) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Define comprehensive Tailwind CSS font size with line-height, letter-spacing, and font-weight

Source: https://tailwindcss.com/docs/font-size

This advanced theme configuration snippet illustrates how to define a font size utility, `--text-tiny`, along with its default `line-height`, `letter-spacing`, and `font-weight` values. This provides a complete typography definition for a single utility, ensuring consistent styling when applied.

```css
@theme {  --text-tiny: 0.625rem;  --text-tiny--line-height: 1.5rem;   --text-tiny--letter-spacing: 0.125rem;   --text-tiny--font-weight: 500; }
```

--------------------------------

### Customize Text Color Theme with CSS Variables

Source: https://tailwindcss.com/docs/color

Define custom color utilities using @theme directive with --color-* CSS variables. Custom colors become available as text-* classes immediately without rebuilding. Follows OKLCH color space format in comments.

```css
@theme {
  --color-regal-blue: #243c5a;
}
```

```html
<p class="text-regal-blue">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Custom property background-position with CSS variables in Tailwind CSS

Source: https://tailwindcss.com/docs/background-position

Demonstrates the use of Tailwind's custom property syntax bg-position-(<custom-property>) to reference CSS variables for background positioning. This syntax automatically wraps the custom property in the var() function.

```html
<div class="bg-position-(--my-bg-position) ...">  <!-- ... --></div>
```

--------------------------------

### Apply basic mask-position utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-position

Demonstrates how to use predefined Tailwind CSS classes like `mask-top-left`, `mask-center`, and `mask-bottom-right` to position an element's mask image. These utilities set the `mask-position` CSS property to common values, often used in conjunction with `mask-[url(...)]` and `mask-size-[...]`.

```html
<div class="mask-top-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-top mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-top-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-center mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Enable bidirectional resizing with Tailwind CSS `resize` utility

Source: https://tailwindcss.com/docs/resize

Use the `resize` utility class to make an HTML element, such as a textarea, resizable both horizontally and vertically. This allows users to drag the element's handle to adjust its dimensions in any direction.

```HTML
<textarea class="resize rounded-md ..."></textarea>
```

--------------------------------

### Add Viewport Meta Tag for Responsive Pages (HTML)

Source: https://tailwindcss.com/docs/responsive-design

To ensure proper responsive behavior across devices, include the viewport meta tag in the <head> section of your HTML document. This tag configures the browser's viewport, enabling responsive scaling.

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

--------------------------------

### Create complex custom utilities using `@utility` with nesting (CSS)

Source: https://tailwindcss.com/docs/adding-custom-styles

Define more complex custom utilities involving nested CSS selectors (e.g., pseudo-elements) using the `@utility` directive. This allows for custom utilities that apply styles to specific parts of an element, such as scrollbars.

```css
@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
}
```

--------------------------------

### Negative scroll-padding values in Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-padding

Demonstrates applying negative scroll-padding values by prefixing the class name with a dash. Useful for adjusting scroll offset in the opposite direction.

```html
<div class="-scroll-ps-6 snap-x ...">
  <!-- ... -->
</div>
```

--------------------------------

### Customize flex-basis theme variables in CSS

Source: https://tailwindcss.com/docs/flex-basis

Customize the fixed-width basis utilities by setting the --container-* theme variables. The basis-<number> utilities are driven by the --spacing variable, which can also be customized for the spacing scale.

```css
@theme {
  --container-4xs: 14rem;
}

@theme {
  --spacing: 1px;
}
```

--------------------------------

### Apply independent row and column gaps in Tailwind CSS Grid

Source: https://tailwindcss.com/docs/gap

Illustrates using `gap-x-<number>` and `gap-y-<number>` utilities, such as `gap-x-8` and `gap-y-4`, to set different gaps for columns and rows independently. These classes map to `column-gap` and `row-gap` CSS properties, respectively.

```html
<div class="grid grid-cols-3 gap-x-8 gap-y-4">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

--------------------------------

### Apply Responsive Outline Offset with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/outline-offset

This code snippet shows how to apply an `outline-offset` utility conditionally based on screen size using Tailwind CSS responsive prefixes. The `md:outline-offset-2` class applies an offset of 2 only for medium screen sizes and above, enabling responsive outline styling.

```html
<div class="outline md:outline-offset-2 ...">  <!-- ... --></div>
```

--------------------------------

### place-items-stretch - Grid Item Stretch Alignment

Source: https://tailwindcss.com/docs/place-items

Stretches grid items to fill their entire grid areas on both axes using place-items-stretch. Applied to a 3-column grid with full height and gap spacing for visual separation.

```html
<div class="grid h-56 grid-cols-3 place-items-stretch gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

--------------------------------

### Use CSS custom property for backdrop contrast value

Source: https://tailwindcss.com/docs/backdrop-filter-contrast

Apply backdrop contrast using CSS custom properties with the backdrop-contrast-(<custom-property>) syntax, which automatically wraps the property in the var() function for dynamic theming.

```html
<div class="backdrop-contrast-(--my-backdrop-contrast) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Custom Invert Filter Value with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-invert

This HTML snippet shows how to apply a custom color inversion value using Tailwind CSS's arbitrary value syntax `invert-[<value>]`. It demonstrates setting a specific inversion percentage for an image.

```html
<img class="invert-[.25] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Ring Utilities - Tailwind CSS

Source: https://tailwindcss.com/docs/box-shadow

Use ring or ring-<number> utilities to apply solid box-shadow rings to elements. Ring sizes include ring (default), ring-2, and ring-4. Rings match the currentColor of the element by default.

```html
<button class="ring ...">Subscribe</button>
<button class="ring-2 ...">Subscribe</button>
<button class="ring-4 ...">Subscribe</button>
```

--------------------------------

### Apply object-fill utility to stretch content (HTML)

Source: https://tailwindcss.com/docs/object-fit

Uses the `object-fill` utility class in HTML to stretch an element's content to completely fill its container, regardless of its aspect ratio. This can distort the content.

```html
<img class="h-48 w-96 object-fill ..." src="/img/mountains.jpg" />
```

--------------------------------

### justify-normal - Use default justify-content behavior

Source: https://tailwindcss.com/docs/justify-content

Use the justify-normal utility to pack flex items in their default position as if no justify-content value was explicitly set on the container.

```html
<div class="flex justify-normal ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Static Class Names Pattern in HTML

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Demonstrates the correct approach to conditionally apply Tailwind classes in HTML templates. By using complete, static class names within the template expression, Tailwind can detect and generate all necessary CSS.

```html
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

--------------------------------

### Implement Dark Mode UI with Tailwind CSS Variants

Source: https://tailwindcss.com/docs/dark-mode

This HTML snippet demonstrates how to apply Tailwind CSS `dark:` variants to elements, allowing them to adapt their styles (e.g., background and text color) based on the browser's `prefers-color-scheme` setting. It showcases a typical card component with dynamic light and dark theme styling, using utility classes like `dark:bg-gray-800` and `dark:text-white`.

```html
<div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">  <div>    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">      <svg class="h-6 w-6 stroke-white" ...>        <!-- ... -->      </svg>    </span>  </div>  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.  </p></div>
```

--------------------------------

### Apply styles at a single Tailwind CSS breakpoint

Source: https://tailwindcss.com/docs/responsive-design

To target a style for a single breakpoint, stack a responsive variant with the `max-*` variant of the *next* breakpoint. The `md:max-lg:flex` class applies `flex` layout specifically for the `md` breakpoint, effectively limiting the style to that exact size range. This allows for fine-grained control over responsiveness.

```html
<div class="md:max-lg:flex">  <!-- ... --></div>
```

--------------------------------

### Use Custom Variants in HTML with Colon Syntax

Source: https://tailwindcss.com/docs/adding-custom-styles

Applies custom variants to utilities in HTML markup using colon notation (variant:utility). Enables dynamic styling based on custom variant conditions.

```HTML
<html data-theme="midnight">
  <button class="theme-midnight:bg-black ..."></button>
</html>
```

--------------------------------

### Explicitly specify source files with Tailwind @source directive

Source: https://tailwindcss.com/docs/functions-and-directives

The `@source` directive allows you to explicitly include source files that Tailwind's automatic content detection might miss. This ensures all relevant files are scanned for class detection, especially for assets located outside standard project paths.

```CSS
@source "../node_modules/@my-company/ui-lib";
```

--------------------------------

### Apply opacity utilities to HTML elements

Source: https://tailwindcss.com/docs/opacity

Use opacity utility classes on HTML elements to control their transparency. The opacity-<number> utilities apply preset opacity values from 0-100, where opacity-100 is fully opaque and opacity-0 is fully transparent. Multiple opacity values can be applied to different elements.

```html
<button class="bg-indigo-500 opacity-100 ..."></button>
<button class="bg-indigo-500 opacity-75 ..."></button>
<button class="bg-indigo-500 opacity-50 ..."></button>
<button class="bg-indigo-500 opacity-25 ..."></button>
```

--------------------------------

### Position Grid Items with Tailwind CSS `col-start` and `col-end`

Source: https://tailwindcss.com/docs/grid-column

Illustrates the usage of `col-start-<number>` and `col-end-<number>` utilities in Tailwind CSS to explicitly define where a grid item begins and ends on the grid. This can be combined with `col-span-<number>` for precise layout control, as shown with elements positioned across a six-column grid.

```html
<div class="grid grid-cols-6 gap-4">
  <div class="col-span-4 col-start-2 ...">01</div>
  <div class="col-start-1 col-end-3 ...">02</div>
  <div class="col-span-2 col-end-7 ...">03</div>
  <div class="col-start-1 col-end-7 ...">04</div>
</div>
```

--------------------------------

### Apply bg-contain utility to fit background image without cropping

Source: https://tailwindcss.com/docs/background-size

Use the bg-contain class to scale the background image to fit within the outer edges without cropping or stretching. Useful for logos or images that need to remain fully visible.

```html
<div class="bg-[url(/img/mountains.jpg)] bg-contain bg-center"></div>
```

--------------------------------

### Apply Responsive Grid Column Styles with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/grid-column

Explains how to use Tailwind CSS breakpoint variants (e.g., `md:`) to apply grid column utilities conditionally based on screen size. This enables responsive layouts where an element's column span or position can change at different breakpoints, such as spanning 2 columns by default and 6 columns on medium screens and up.

```html
<div class="col-span-2 md:col-span-6 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Tailwind CSS Logical Inline Margin Utility Classes

Source: https://tailwindcss.com/docs/margin

Control directional inline margins using ms- (margin-inline-start) and me- (margin-inline-end) prefixes for language-aware text direction support. Supports numeric multipliers, pixel values, auto alignment, custom properties, and arbitrary values.

```css
/* Margin inline start */
.ms-4 {
  margin-inline-start: calc(var(--spacing) * 4);
}

.ms-auto {
  margin-inline-start: auto;
}

.ms-px {
  margin-inline-start: 1px;
}

/* Margin inline end */
.me-4 {
  margin-inline-end: calc(var(--spacing) * 4);
}

.me-auto {
  margin-inline-end: auto;
}

.me-px {
  margin-inline-end: 1px;
}

/* Negative values */
.-ms-4 {
  margin-inline-start: calc(var(--spacing) * -4);
}

.-me-4 {
  margin-inline-end: calc(var(--spacing) * -4);
}
```

--------------------------------

### Tailwind CSS Directional Bottom/Left Margin Utility Classes

Source: https://tailwindcss.com/docs/margin

Control individual bottom and left margins using mb- and ml- prefixes respectively. Each supports numeric multipliers, pixel values, auto alignment, custom properties, and arbitrary values with optional negative variants.

```css
/* Margin bottom */
.mb-4 {
  margin-bottom: calc(var(--spacing) * 4);
}

.-mb-4 {
  margin-bottom: calc(var(--spacing) * -4);
}

.mb-auto {
  margin-bottom: auto;
}

.mb-px {
  margin-bottom: 1px;
}

/* Margin left */
.ml-4 {
  margin-left: calc(var(--spacing) * 4);
}

.-ml-4 {
  margin-left: calc(var(--spacing) * -4);
}

.ml-auto {
  margin-left: auto;
}

.ml-px {
  margin-left: 1px;
}
```

--------------------------------

### Apply custom hue rotation with arbitrary Tailwind CSS values

Source: https://tailwindcss.com/docs/filter-hue-rotate

Shows how to set a completely custom hue rotation value using arbitrary values within Tailwind CSS, for instance, `hue-rotate-[3.142rad]` to specify non-standard degree or unit values.

```html
<img class="hue-rotate-[3.142rad] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Responsive Box Shadow - Tailwind CSS

Source: https://tailwindcss.com/docs/box-shadow

Use breakpoint variants (e.g., md:) to apply box shadow utilities at specific screen sizes. This enables responsive design patterns for shadow effects across different viewports.

```html
<div class="shadow-none md:shadow-lg ...">  <!-- ... --></div>
```

--------------------------------

### Use Custom Tailwind CSS Theme Animation

Source: https://tailwindcss.com/docs/animation

After defining a custom animation (e.g., `animate-wiggle`) in the Tailwind CSS theme using `@theme` and `@keyframes`, apply it to an HTML element using its corresponding class name. This integrates custom animations seamlessly into your markup.

```html
<div class="animate-wiggle">  <!-- ... --></div>
```

--------------------------------

### Apply background-origin utilities with HTML markup

Source: https://tailwindcss.com/docs/background-origin

Demonstrates how to use Tailwind CSS background-origin utilities (bg-origin-border, bg-origin-padding, bg-origin-content) to control where an element's background image is rendered. Each utility applies the corresponding CSS background-origin value to styled div elements with borders and padding.

```html
<div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-border p-3 ..."></div>
<div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-padding p-3 ..."></div>
<div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-content p-3 ..."></div>
```

--------------------------------

### Avoid `sm:` Prefix for Mobile Targeting in Tailwind CSS (HTML)

Source: https://tailwindcss.com/docs/responsive-design

This snippet illustrates a common misunderstanding in Tailwind's mobile-first approach. Using `sm:text-center` will *not* center text on mobile screens; instead, it will only apply centering from the small breakpoint (640px) and above. For mobile-specific styles, use unprefixed utilities.

```HTML
<!-- This will only center text on screens 640px and wider, not on small screens --><div class="sm:text-center"></div>
```
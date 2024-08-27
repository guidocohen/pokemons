# Pokemons

## Comenzando 🚀

Este proyecto implementa un sistema con un backend en NestJS + TypeORM + SQLite y un frontend en React + Vite + MaterialUI. El objetivo es crear una aplicación que maneje batallas Pokemon, que permita listar Pokemons y guardar los resultados de las batallas.

- **Repositorio del proyecto:** [Pokemons](https://github.com/guidocohen/pokemons)

## Funcionalidades

### Backend
    1. Implementación de migraciones de DB. Populación de tabla con los datos de los pokemons.
    2. Implementación de endpoint para listar todos los pokemons.
    3. Implementación de endpoint para que los pokemons puedan batallar.
    4. Almacenamiento y persistencia de los resultados de las batallas en una tabla independiente.

### Backend
    1. Implementación de UI/UX que lista y permite seleccionar un pokemon.
    2. Implementación de Cards de Pokemons junto con sus stats.
    3. Manejo de batallas de forma automática y aleatoria del pokemon seleccionado contra un contrincante diferente y visualización del resultado de la batalla.
    4. Implementación de responsividad.
    5. Conexión e integración con el Backend.

## Prerrequisitos 📋

Herramientas y versiones necesarias para ejecutar el proyecto:

- **Node.js:** v21.4.0 [Instalación](https://nodejs.org/)
- **NestJS CLI:** v10.0.0 [Instalación](https://docs.nestjs.com/)
- **TypeORM:** v0.3.20
- **SQLite:** v5.1.7
- **React:** v18.3.1
- **Vite:** v5.4.1
- **MaterialUI:** v5.16.7

## Ejecución 🚀

Para ejecutar la aplicación Backend y Frontend se debe seguir los siguientes pasos:

1. Clonar repositorio: 
    * `git clone https://github.com/guidocohen/pokemons.git`
2. Desde directorio del Backend, ejecutar migraciones para levantar SQLite, sus esquemas y datos: 
    * `npm run migration:generate` 
    * `npm run migration:run` 
    * `npm run seed`
3. Establecer las variables de entorno `.env` para el servicio Backend como aparecen en el archivo example.env.
4. Instalar dependencias desde directorio Backend y Frontend:   
    * `npm install`
5. Ubicados en el directorio del Backend, ejecutar servicio desde la terminal: 
    * `npm run start:dev`
6. Ubicados en el directorio del Frontend, ejecutar web app desde la terminal: 
    * `npm run dev`
7. Abrir el navegador e ir a: 
    * `http://localhost:5173`

## Autor ✒️

* **Guido Cohen Semag** - [guidocohen](https://github.com/guidocohen)
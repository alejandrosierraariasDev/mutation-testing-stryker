# 🧪 Mutation Testing con Stryker y Jest

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Stryker](https://img.shields.io/badge/Stryker-8F00FF?style=for-the-badge&logo=stryker-mutator&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

## Lo que Stryker te da

Tener un alto porcentaje de cobertura de código solo te dice que tus pruebas se están ejecutando. No te garantiza que sean buenas. Una prueba puede pasar, pero ser completamente inútil porque no valida la lógica de negocio.

Stryker te ayuda a detectar estas pruebas inútiles. Funciona de la siguiente manera:
- Introduce pequeños "errores" o mutantes en tu código fuente (por ejemplo, cambia un `&&` a un `||` o un `>` a un `>=`).
- Ejecuta tus pruebas unitarias contra este código mutado.
- Si una prueba falla, significa que detectó el error y el mutante es asesinado (¡bien! ✅).
- Si la prueba sigue pasando, significa que no detectó el error. El mutante sobrevive, revelando una debilidad en tu suite de pruebas.

### Por qué es vital para el desarrollo moderno

Las tecnologías de front-end modernas, con su naturaleza reactiva y manejo de estados, son propensas a errores sutiles. Stryker te obliga a escribir pruebas que no solo cubran líneas de código, sino que también validen su comportamiento y lógica.

En resumen, usar Stryker te permite:
- Evaluar la calidad de tus pruebas, no solo la cantidad.
- Encontrar casos de borde que tus tests no cubrieron.
- Mejorar la robustez de tu código base, reduciendo el riesgo de regresiones.

Stryker es la herramienta que convierte tus tests de una simple lista de "pasó/falló" en una poderosa herramienta para garantizar la calidad real de tu software. Es la diferencia entre tener un sistema de seguridad y saber que ese sistema de seguridad realmente funciona. 🛡️

---

Este proyecto demuestra cómo implementar pruebas de mutación en TypeScript utilizando Stryker, Jest y Vue.js. Las pruebas de mutación son una técnica avanzada que ayuda a mejorar la calidad de tus pruebas al introducir pequeños cambios (mutaciones) en tu código y verificar si tus pruebas pueden detectar estos cambios.

## 📋 Características

- Configuración completa de Stryker con Jest y TypeScript
- Ejemplos prácticos de pruebas de mutación
- Soporte para múltiples frameworks: React, Angular y Vue.js
- Componentes React y Vue.js con pruebas unitarias
- Servicios con lógica de negocio testeable
- Generación de informes HTML detallados
- Configuración optimizada de Babel, TypeScript y Jest para pruebas
- Soporte para JSX/TSX en React
- Configuración de TypeScript lista para React y Vue

## 🏗️ Estructura del Proyecto

```
src/
├── angular/             # Código específico de Angular
│   └── services/        # Servicios de Angular
│
├── js/                  # Utilidades JavaScript puras
│   └── utils/           # Funciones de utilidad compartidas
│
├── react/               # Lógica específica de React
│   └── services/        # Servicios para componentes React
│
└── vue/                 # Componentes y lógica de Vue.js
    └── components/      # Componentes Vue reutilizables
```

## 📂 Estructura de pruebas

Las pruebas siguen la convención de estar junto al código que prueban:
- `*.test.js` para pruebas de JavaScript
- `*.test.ts` para pruebas de TypeScript
- `*.spec.ts` para pruebas de Angular
- `__tests__/` para agrupar pruebas relacionadas

## 🚀 Empezando

### Requisitos previos

- Node.js (v16 o superior)
- npm (viene con Node.js)
- TypeScript (v4.9 o superior)

### Instalación



Instala las dependencias:
   ```
   npm install
   ```

## 🧪 Comandos útiles

- **Ejecutar pruebas unitarias**:
  ```
  npm test
  ```

- **Ejecutar pruebas con cobertura**:
  ```
  npm run test:coverage
  ```

- **Ejecutar pruebas de mutación con Stryker**:
  ```
  npx stryker run
  ```

- **Ejecutar pruebas en modo observación**:
  ```
  npm run test:watch
  ```

- **Ejecutar pruebas de mutación con Stryker**:
  ```
  npm run stryker
  ```
  Esto generará un informe detallado en `reports/mutation/mutation.html`

## 🔧 Configuración

### Babel (babel.config.js)
Configuración para soportar las últimas características de JavaScript:
- `@babel/preset-env` para compatibilidad con Node.js actual
- Plugins para características de clase
- Optimizado para pruebas

### Stryker (stryker.conf.json)
- Usa Jest como corredor de pruebas
- Genera informes HTML detallados
- Análisis de cobertura por prueba
- Configuración optimizada para rendimiento

## 📊 Entendiendo los resultados

Después de ejecutar las pruebas de mutación:
1. **Puntuación de mutación**: Porcentaje de mutaciones detectadas
2. **Mutantes sobrevivientes**: Cambios que no fueron detectados por las pruebas
3. **Cobertura de código**: Áreas del código que necesitan más pruebas

## 📚 Recursos

- [Documentación de Stryker](https://stryker-mutator.io/)
- [Guía de Jest](https://jestjs.io/)
- [Introducción a las pruebas de mutación](https://en.wikipedia.org/wiki/Mutation_testing)
- [Babel para pruebas](https://babeljs.io/docs/en/)


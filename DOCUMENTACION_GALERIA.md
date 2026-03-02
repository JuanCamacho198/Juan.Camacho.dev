# Documentación del Proyecto: Galería 3D - Juan.Camacho.dev

## 1. Visión General del Proyecto
Creación de un portafolio web interactivo en 3D que funcione como un videojuego en primera persona. El usuario "aparecerá" (spawn) en el exterior, al estilo GTA, con la galería imponente frente a él mostrando el rótulo **JUAN.CAMACHO.DEV**. Desde allí, podrá caminar libremente, entrar al edificio y explorar los diferentes proyectos expuestos en las paredes, interactuando con ellos para conocer más detalles.

## 2. Stack Tecnológico
*   **Core:** React.js
*   **Motor 3D:** Three.js + React Three Fiber (R3F)
*   **Físicas y Colisiones:** `@react-three/rapier` o `@react-three/drei` (para gravedad y que el jugador no atraviese paredes).
*   **Empaquetador:** Vite (rápido y compatible con R3F).
*   **UI/Estilos:** Tailwind CSS o CSS puro para los modales HTML sobre el canvas 3D.
*   **Despliegue:** GitHub Pages (aprovechando GitHub Copilot para acelerar el desarrollo de Actions/Deploy).

## 3. Experiencia de Usuario (UX)
1.  **El "Spawn" (Inicio):**
    *   La cámara inicia en el exterior.
    *   Frente al usuario hay un edificio de estilo Cyberpunk/Tecnológico.
    *   Letrero grande de luces neón que dice `JUAN.CAMACHO.DEV`.
2.  **Navegación:**
    *   Controles clásicos de PC: **W, A, S, D** para moverse y **Ratón** para mirar alrededor.
    *   Cursor bloqueado (Pointer Lock) al hacer clic en la pantalla para una inmersión total.
3.  **Exploración e Interacción:**
    *   Al entrar a la galería, el jugador verá sus proyectos como "cuadros" o paneles holográficos.
    *   Al acercarse a un proyecto y hacer clic, el cursor se desbloquea temporalmente y se abre un **Modal HTML** superpuesto.
    *   El modal contendrá la descripción, tecnologías usadas y botones hacia el Demo o Repositorio (GitHub).

## 4. Dirección de Arte: Cyberpunk / Tecnológico
*   **Estructura Base:** Generada por código (planos para suelo/paredes y cajas para pilares).
*   **Detalles (Modelos 3D):** Uso de modelos en formato `.glb` o `.gltf` para pequeños detalles (ej. luces de neón, barriles, puertas futuristas, algún robot o terminal).
*   **Iluminación:**
    *   Entorno oscuro general.
    *   Luces de acento (PointLights y SpotLights) en colores cian, magenta y azul.
    *   Uso de *Bloom* (Efecto de resplandor) en post-procesamiento para que los letreros y paneles brillen de forma realista.
*   **Suelo:** Textura que simule metal pulido o concreto con reflejos.

## 5. Arquitectura y Estructura de Directorios
El proyecto seguirá una estructura modular para mantener separado el código de la interfaz 2D, la lógica 3D y la configuración general.

```text
/
├── public/                 # Assets estáticos (Modelos 3D, texturas, sonidos)
│   ├── models/             # Archivos .glb/.gltf
│   └── textures/           # Imágenes de los proyectos y materiales
├── src/
│   ├── components/
│   │   ├── 3D/             # Componentes de React Three Fiber
│   │   │   ├── Player.jsx          # Lógica de movimiento y cámara en primera persona
│   │   │   ├── GalleryBuilding.jsx # Estructura procedural de la galería (paredes, luces)
│   │   │   ├── ProjectPanel.jsx    # Componente de los cuadros expuestos
│   │   │   └── Environment.jsx     # Cielo, luces base, efectos de post-procesamiento
│   │   ├── UI/             # Componentes de React normales (HTML/CSS)
│   │   │   ├── Overlay.jsx         # Menú de pausa o mira en el centro (+)
│   │   │   └── ProjectModal.jsx    # Ventana que se abre al interactuar con un proyecto
│   │   └── App.jsx         # Contenedor principal que une el Canvas 3D y la UI
│   ├── data/
│   │   └── projects.json   # Datos de los proyectos (título, descripción, link, imagen)
│   ├── main.jsx            # Punto de entrada de React
│   └── index.css           # Estilos globales y utilidades
├── index.html              # Plantilla base
├── vite.config.js          # Configuración de Vite
└── package.json
```

## 6. Fases de Implementación (Ruta de Trabajo)

### Fase 1: Setup y Configuración Base
1. Inicializar proyecto con Vite y React.
2. Instalar dependencias (`three`, `@react-three/fiber`, `@react-three/drei`, etc.).
3. Crear el `<Canvas>` básico e implementar controles orbitales de prueba.

### Fase 2: El Mundo Físico y el "Spawn"
1. Crear el suelo y las paredes exteriores usando primitivas (`boxGeometry`, `planeGeometry`).
2. Implementar un texto 3D en la fachada usando `@react-three/drei` para el letrero neón de "JUAN.CAMACHO.DEV".
3. Añadir el efecto *Bloom* de post-procesado para los neones.

### Fase 3: Controles en Primera Persona (El Jugador)
1. Instalar y configurar un motor de físicas ligero (ej. `@react-three/rapier`).
2. Crear el componente `Player` que responda a teclado y ratón con *PointerLockControls*.
3. Asegurar que haya gravedad y colisiones con el suelo y las paredes.

### Fase 4: La Galería e Interacciones
1. Diseñar el interior del edificio (pasillos o una sala grande).
2. Crear un archivo JSON de proyectos y mapearlos para generar `ProjectPanel` dinámicamente en las paredes.
3. Implementar *Raycasting* (rayos invisibles desde la cámara) para detectar cuándo el jugador está mirando y cerca de un proyecto.

### Fase 5: UI (Interfaz 2D)
1. Construir un visor central (el puntito "+" en la pantalla).
2. Crear la lógica de estado (Zustand o Context) para saber qué proyecto está seleccionado.
3. Mostrar el `ProjectModal` en HTML sobre el canvas cuando se interactúa, permitiendo soltar el ratón para hacer clic en los links.

### Fase 6: Pulido y Modelos 3D Extras
1. Añadir modelos `.glb` adicionales en el escenario para la vibra Cyberpunk.
2. Añadir sonido ambiente sutil (opcional).
3. Optimizar el rendimiento y las sombras.

### Fase 7: Despliegue en GitHub Pages
1. Configurar `vite.config.js` con el `base path` del repositorio.
2. Instalar el paquete `gh-pages` o configurar un *GitHub Actions Workflow*.
3. Hacer deploy.

---
*Documentación autogenerada lista para iniciar el desarrollo.*

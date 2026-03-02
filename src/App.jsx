import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import { GalleryBuilding } from './components/3D/GalleryBuilding'
import { Player } from './components/3D/Player'

function App() {
  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ fov: 60 }}>
        {/* Luces y Ambiente */}
        <color attach="background" args={['#020202']} />
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.5} 
          castShadow 
          shadow-bias={-0.0001}
        />
        
        <fog attach="fog" args={['#020202', 10, 50]} />

        {/* Estrellas para el cielo de fondo */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* El Motor de Físicas que envuelve el mundo y al jugador */}
        <Physics gravity={[0, -9.81, 0]}>
          <GalleryBuilding />
          <Player />
        </Physics>
      </Canvas>
      
      {/* Interfaz de Usuario y Mira */}
      <div className="crosshair">+</div>

      <div className="ui-overlay">
        <h1>Juan.Camacho.dev</h1>
        <p>Fase 3: Movimiento y Físicas en 1ra Persona</p>
        <div className="controls-hint">
          <p>🎮 <b>WASD</b> o Flechas para moverte</p>
          <p>🖱️ <b>Ratón</b> para mirar</p>
          <p>👆 <b>Clic</b> en la pantalla para jugar</p>
          <p>⌨️ <b>ESC</b> para soltar el ratón</p>
        </div>
      </div>
    </div>
  )
}

export default App

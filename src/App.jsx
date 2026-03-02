import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { GalleryBuilding } from './components/3D/GalleryBuilding'

function App() {
  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 60 }}>
        {/* Luces y Ambiente */}
        <color attach="background" args={['#020202']} />
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.5} 
          castShadow 
          shadow-bias={-0.0001}
        />
        
        {/* Neblina oscura Cyberpunk */}
        <fog attach="fog" args={['#020202', 10, 50]} />

        {/* Estrellas para el cielo de fondo */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* El edificio y los neones */}
        <GalleryBuilding />

        {/* Post-procesamiento: El efecto Bloom para hacer que los neones brillen */}
        <EffectComposer disableNormalPass>
          <Bloom 
            luminanceThreshold={1} 
            mipmapBlur 
            intensity={1.5} 
          />
        </EffectComposer>

        {/* Controles de cámara temporales (para ver el edificio antes de poner la 1ra persona) */}
        <OrbitControls 
          target={[0, 4, -15]} 
          maxPolarAngle={Math.PI / 2 - 0.05} // No dejar que la cámara pase por debajo del suelo
          minDistance={2} 
          maxDistance={30} 
        />
      </Canvas>
      
      <div className="ui-overlay">
        <h1>Juan.Camacho.dev</h1>
        <p>Fase 2: El Mundo Físico y el Neón de Spawn</p>
        <p style={{fontSize: '0.8rem', color: '#888', marginTop: '10px'}}>
          Arrastra el ratón para rotar y la rueda para hacer zoom.
        </p>
      </div>
    </div>
  )
}

export default App

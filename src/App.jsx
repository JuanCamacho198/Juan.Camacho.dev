import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

function App() {
  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Luces base */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        
        {/* Entorno básico de prueba */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Cubo de prueba */}
        <mesh position={[0, 1, 0]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="cyan" />
        </mesh>

        {/* Suelo de prueba */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Controles de cámara temporales para la Fase 1 */}
        <OrbitControls />
      </Canvas>
      
      <div className="ui-overlay">
        <h1>Juan.Camacho.dev</h1>
        <p>Fase 1: Motor 3D Inicializado</p>
      </div>
    </div>
  )
}

export default App
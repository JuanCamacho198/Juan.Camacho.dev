import { NeonText } from './NeonText'
import { RigidBody } from '@react-three/rapier'

export function GalleryBuilding() {
  return (
    <group>
      {/* Fachada Principal del Edificio (Colisión Fija) */}
      <RigidBody type="fixed">
        <mesh position={[0, 5, -15]} castShadow receiveShadow>
          <boxGeometry args={[40, 10, 1]} />
          <meshStandardMaterial color="#111111" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Paredes laterales (Exterior) */}
      <RigidBody type="fixed">
        <mesh position={[-20, 5, -35]} castShadow receiveShadow>
          <boxGeometry args={[1, 10, 40]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      </RigidBody>
      
      <RigidBody type="fixed">
        <mesh position={[20, 5, -35]} castShadow receiveShadow>
          <boxGeometry args={[1, 10, 40]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      </RigidBody>

      {/* Entrada (Hueco o Puerta falsa por ahora) */}
      <RigidBody type="fixed">
        <mesh position={[0, 2, -14.4]} castShadow receiveShadow>
          <boxGeometry args={[6, 4, 1.2]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </RigidBody>

      {/* Letreros de Neón (Sin físicas, solo visual) */}
      <NeonText position={[0, 8, -14.4]} text="JUAN.CAMACHO.DEV" color="#00ffff" />
      <NeonText position={[0, 6, -14.4]} text="PORTFOLIO GALLERY" color="#ff00ff" />

      {/* Suelo (Muy importante para no caer al vacío) */}
      <RigidBody type="fixed">
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.8} />
        </mesh>
      </RigidBody>
    </group>
  )
}

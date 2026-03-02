import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { usePlayerControls } from '../../hooks/usePlayerControls'

const SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
  const playerRef = useRef()
  const { forward, backward, left, right } = usePlayerControls()

  useFrame((state) => {
    if (!playerRef.current) return

    // Obtener la velocidad y posición actual del RigidBody (el jugador)
    const velocity = playerRef.current.linvel()
    const translation = playerRef.current.translation()

    // Calcular la dirección basada en las teclas
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(state.camera.rotation) // Alinear con hacia donde mira la cámara

    // Aplicar la nueva velocidad al jugador en X y Z (manteniendo Y para la gravedad)
    playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true)

    // Actualizar la posición de la cámara para que siga al RigidBody
    // Le sumamos 1.5 en Y para simular la altura de los ojos
    state.camera.position.set(translation.x, translation.y + 1.5, translation.z)
  })

  return (
    <>
      <PointerLockControls />
      {/* El cuerpo físico del jugador. No puede rotar por físicas, solo la cámara rota */}
      <RigidBody
        ref={playerRef}
        colliders="capsule"
        mass={1}
        type="dynamic"
        position={[0, 5, 5]} // Aparecemos arriba para caer con gracia al suelo
        enabledRotations={[false, false, false]}
      >
        {/* Un cilindro invisible que representa al jugador */}
        <mesh visible={false}>
          <capsuleGeometry args={[0.5, 1]} />
          <meshBasicMaterial color="red" wireframe />
        </mesh>
      </RigidBody>
    </>
  )
}

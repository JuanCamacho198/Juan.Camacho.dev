import { Text } from '@react-three/drei'

export function NeonText({ position, text, color = '#00ffff' }) {
  return (
    <Text
      position={position}
      fontSize={2}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      letterSpacing={0.1}
      textAlign="center"
      outlineWidth={0.05}
      outlineColor={color}
    >
      {text}
      <meshBasicMaterial color="white" toneMapped={false} />
    </Text>
  )
}

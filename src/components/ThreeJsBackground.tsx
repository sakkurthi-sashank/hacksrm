import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";

export const ThreeJsBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export const Stars = (props: any) => {
  const ref = useRef<HTMLInputElement>();

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(4500), { radius: 1.25 })
  );

  useFrame((_state, delta) => {
    // @ts-ignore
    ref.current.rotation.x -= delta / 30;
    // @ts-ignore
    ref.current.rotation.y -= delta / 35;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#6b7280"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

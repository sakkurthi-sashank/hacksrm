import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";

export const BackgroundAnimation = () => {
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
    random.inSphere(new Float32Array(10000), { radius: 3 })
  );

  useFrame((_state, delta) => {
    // @ts-ignore
    ref.current.rotation.x -= delta / 50;
    // @ts-ignore
    ref.current.rotation.y -= delta / 50;
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
          color="white"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

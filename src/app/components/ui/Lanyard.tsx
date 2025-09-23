/* eslint-disable react/no-unknown-property */
"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
  RapierRigidBody,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import { useTheme } from "../providers/ThemeProvider";

extend({ MeshLineGeometry, MeshLineMaterial });

interface RigidBodyWithLerp extends RapierRigidBody {
  lerped?: THREE.Vector3;
}

interface GLTFResult {
  nodes: {
    card: THREE.Mesh;
    clip: THREE.Mesh;
    clamp: THREE.Mesh;
  };
  materials: {
    metal: THREE.Material;
  };
}

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  className?: string;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  className = "",
}: LanyardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center`}
    >
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(
            new THREE.Color(theme === "dark" ? 0x111827 : 0xffffff),
            transparent ? 0 : 1
          )
        }
      >
        {/* ✅ REDUCED AMBIENT LIGHT */}
        <ambientLight
          intensity={theme === "dark" ? Math.PI * 0.2 : Math.PI * 3} // ✅ Reduced from 1 to 0.6
        />

        {/* ✅ SOFTER DIRECTIONAL LIGHT */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={theme === "dark" ? 1 : 1} // ✅ Reduced from 2 to 1.2
          color={theme === "dark" ? "#ffffff" : "#f0f0f0"}
          castShadow={false}
        />

        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>

        <Environment blur={0.75}>
          {/* ✅ REDUCED KEY LIGHT */}
          <Lightformer
            intensity={theme === "dark" ? 2 : 1.5} // ✅ Reduced from 3 to 2
            color={theme === "dark" ? "#FFF8ED" : "#e8e8e8"}
            position={[0, 2, 8]}
            rotation={[0, 0, 0]}
            scale={[20, 20, 1]}
          />

          {/* ✅ REDUCED FILL LIGHT */}
          <Lightformer
            intensity={theme === "dark" ? 1.5 : 1} // ✅ Reduced from 2.5 to 1.5
            color={theme === "dark" ? "#f0f8ff" : "#d0d0d0"}
            position={[3, 1, 6]}
            rotation={[-Math.PI / 6, 0, 0]}
            scale={[15, 15, 1]}
          />

          {/* ✅ REDUCED OPPOSITE FILL LIGHT */}
          <Lightformer
            intensity={theme === "dark" ? 1 : 0.8} // ✅ Reduced from 2 to 1.2
            color={theme === "dark" ? "#f0f8ff" : "#c8c8c8"}
            position={[-3, 1, 6]}
            rotation={[Math.PI / 6, 0, 0]}
            scale={[15, 15, 1]}
          />

          {/* ✅ BACKGROUND/RIM LIGHT */}
          <Lightformer
            intensity={theme === "dark" ? 1 : 2} // ✅ Reduced from 1.5 to 1
            color={theme === "dark" ? "#4f46e5" : "#6b7280"}
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />

          {/* ✅ REDUCED CONTRAST LIGHTS */}
          <Lightformer
            intensity={theme === "dark" ? 1.2 : 3} // ✅ Reduced from 2 to 1.2
            color={theme === "dark" ? "#6366f1" : "#9ca3af"}
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />

          <Lightformer
            intensity={theme === "dark" ? 1.2 : 3} // ✅ Reduced from 2 to 1.2
            color={theme === "dark" ? "#ffffff" : "#6b7280"}
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />

          {/* ✅ SIGNIFICANTLY REDUCED MAIN KEY LIGHT */}
          <Lightformer
            intensity={theme === "dark" ? 6 : 8} // ✅ Reduced from 12 to 6
            color={theme === "dark" ? "#ffffff" : "#8b5cf6"}
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
}

function Band({ maxSpeed = 5, minSpeed = 1.5 }: BandProps = {}) {
  const { theme } = useTheme();
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<RapierRigidBody>(null!);
  const j2 = useRef<RapierRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const { nodes, materials } = useGLTF(
    "/assets/card.glb"
  ) as unknown as GLTFResult;
  const dir = new THREE.Vector3();

  const segmentProps: Partial<RigidBodyProps> = {
    type: "dynamic" as RigidBodyProps["type"],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };
  const lanyardTexture = useTexture("/assets/lanyard.png");
  const cardTexture = useTexture("/assets/teloy.jpeg");

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = (): void => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    [j1, j2, j3].forEach((ref) => {
      const rigidBodyWithLerp = ref.current as RigidBodyWithLerp;
      // ✅ Add null check before accessing properties
      if (!rigidBodyWithLerp) return;

      if (!rigidBodyWithLerp.lerped)
        rigidBodyWithLerp.lerped = new THREE.Vector3().copy(
          rigidBodyWithLerp.translation()
        );
      const clampedDistance = Math.max(
        0.1,
        Math.min(
          1,
          rigidBodyWithLerp.lerped.distanceTo(rigidBodyWithLerp.translation())
        )
      );
      rigidBodyWithLerp.lerped.lerp(
        rigidBodyWithLerp.translation(),
        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
      );
    });

    // ✅ Add null checks for the curve points as well
    if (!j3.current || !j2.current || !j1.current || !fixed.current) return;

    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy((j2.current as RigidBodyWithLerp).lerped!);
    curve.points[2].copy((j1.current as RigidBodyWithLerp).lerped!);
    curve.points[3].copy(fixed.current.translation());

    const points = curve.getPoints(32);
    const flatPoints = points.flatMap((point) => [point.x, point.y, point.z]);
    (band.current!.geometry as unknown as MeshLineGeometry).setPoints(
      flatPoints
    );

    // ✅ Add null check for card.current
    if (!card.current) return;

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel(
      { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
      true
    );
  });

  curve.curveType = "chordal";
  lanyardTexture.wrapS = lanyardTexture.wrapT = THREE.RepeatWrapping;

  useEffect(() => {
    if (cardTexture) {
      // ✅ Try different rotation values to fix orientation
      cardTexture.rotation = -Math.PI; // -90 degrees
      // OR try: cardTexture.rotation = Math.PI / 2; // 90 degrees
      // OR try: cardTexture.rotation = Math.PI; // 180 degrees

      cardTexture.center.set(0.5, 0.5);

      // ✅ Ensure full coverage
      cardTexture.repeat.set(1.8, 1.2); // Slightly larger to ensure coverage
      cardTexture.offset.set(-0.4, -0.1); // Center the larger image

      // ✅ Fix wrapping
      cardTexture.wrapS = THREE.ClampToEdgeWrapping;
      cardTexture.wrapT = THREE.ClampToEdgeWrapping;

      // ✅ Flip settings
      cardTexture.flipY = true; // Try both true and false

      cardTexture.needsUpdate = true;
    }
  }, [cardTexture]);

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody
          ref={fixed}
          {...segmentProps}
          type={"fixed" as RigidBodyProps["type"]}
        />
        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={
            dragged
              ? ("kinematicPosition" as RigidBodyProps["type"])
              : ("dynamic" as RigidBodyProps["type"])
          }
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: React.PointerEvent<THREE.Group>) => {
              (e.target as Element).releasePointerCapture(
                (e.nativeEvent as PointerEvent).pointerId
              );
              drag(false);
            }}
            onPointerDown={(
              e: React.PointerEvent<THREE.Group> & { point: THREE.Vector3 }
            ) => {
              (e.target as Element).setPointerCapture(
                (e.nativeEvent as PointerEvent).pointerId
              );
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            <mesh geometry={(nodes.card as THREE.Mesh).geometry}>
              <meshPhysicalMaterial
                map={cardTexture}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={theme === "dark" ? 0.1 : 0.9}
                metalness={theme === "dark" ? 0.9 : 0.8}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        {/* @ts-expect-error - meshLineGeometry is extended from meshline library */}
        <meshLineGeometry />
        {/* @ts-expect-error - meshLineMaterial is extended from meshline library */}
        <meshLineMaterial
          color={theme === "dark" ? "#6366f1" : "#3b82f6"}
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={lanyardTexture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

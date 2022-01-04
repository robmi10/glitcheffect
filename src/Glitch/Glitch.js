import React, { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import {OrbitControls, Icosahedron, useCubeTexture, useTexture, MeshDistortMaterial, Effects, MeshWobbleMaterial, Sphere } from "@react-three/drei"
import "./styles.css"
import * as THREE from "three";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Colorimg from "../images/MetalPlates013_1K_Color.jpg"
import Ambientimg from "../images/MetalPlates013_1K_AmbientOcclusion.jpg"
import Displacementimg from "../images/MetalPlates013_1K_Displacement.jpg"

import Metalnessimg  from "../images/MetalPlates013_1K_Metalness.jpg"
import Roughnessimg  from "../images/MetalPlates013_1K_Roughness.jpg"

import Normalimg  from "../images/MetalPlates013_1K_NormalDX.jpg"

import NibiruBlack  from "../images/Nibiru_Black.png"

import NibiruRed  from "../images/Nibiru_Red.png"

import Sphereimg from "../images/sphere.png"

extend({ GlitchPass, BloomPass });

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ?  2: 1.5}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

 const MainSphere = ({ material }) => {
    const main = useRef();
    // main sphere rotates following the mouse position
    useFrame(({ clock, mouse }) => {
      main.current.rotation.z = clock.getElapsedTime();
      main.current.rotation.y = THREE.MathUtils.lerp(
        main.current.rotation.y,
        mouse.x * Math.PI,
        0.1
      );
      main.current.rotation.x = THREE.MathUtils.lerp(
        main.current.rotation.x,
        mouse.y * Math.PI,
        0.1
      );
    });
    return (
      <Icosahedron
        args={[1, 4]}
        ref={main}
        material={material}
        position={[1, 0, 0]}
      />
    );
  }
/* 
    
  const Scene = () => {
    const colorMap = useLoader(TextureLoader, metalimg)
    const texture = useTexture(metalimg)
    // We use `useResource` to be able to delay rendering the spheres until the material is ready
    const [material, set] = useState();
    return (
      <>
        <mesh>
        <MainSphere position={[1, 0, 0]} />
        <meshStandardMaterial map={texture} 
        />
      </mesh>
      </>
    );
  }  */


/* 
  function Instances({ material }) {
    return (
      <>
        <MainSphere material={material} />
      </>
    );
  }
  
  function Scene() {
    const bumpMap = useTexture("../images/MetalPlates013_1K_Color.jpg");
    const colorMap = useLoader(TextureLoader, Colorimg)
    // We use `useResource` to be able to delay rendering the spheres until the material is ready
    const [material, set] = useState();
  
    return (
      <>
        <MeshDistortMaterial
          ref={set}
          colorMap={colorMap}
          color={"green"}
          roughness={0.1}
          metalness={1}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={1}
          radius={1}
          distort={0.4}
        />
        {material && <Instances material={material} />}
      </>
    );
  }  */

const name = (type) => `../images/MetalPlates013_1K_AmbientOcclusion${type}.jpg`;
const Scene = () => {
const texture = useLoader(THREE.TextureLoader, Sphereimg)
 
  return (
    <>
   
      <mesh>
      

      <Sphere visible position={[0, 0, 0]} args={[1.5, 16, 200]}>
      <MeshWobbleMaterial
          attach="material"
          color="#fff"
          factor={1} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0.01}
          bumpScale={0.4}
          wireframe
          wireframeLinecap = "butt"
          wireframeLinejoin = "bever"
        />

        </Sphere>
      </mesh>
    </>
  );
}   

const Floor = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -2, 0]}>
              <planeBufferGeometry args={[100, 100, 1]} />
        <meshStandardMaterial  color="white" />
        </mesh>
    );
}

export default function Glitch() {
  return (
    <div className="container">
    <Canvas>
    <Effects>
    
        <glitchPass attachArray="passes" />
      </Effects>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.05} />
      <pointLight intensity={0.2} color="red" />

      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
 
    
    
      <Suspense fallback={null}>

        <Scene />
      </Suspense>
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0}/>§
      
    </Canvas>

    </div>
  )
}


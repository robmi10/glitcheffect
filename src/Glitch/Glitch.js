import React, { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import {OrbitControls, Icosahedron, useCubeTexture, useTexture, MeshDistortMaterial, Effects, MeshWobbleMaterial, Html, Sphere } from "@react-three/drei"
import "./styles.css"
import * as THREE from "three";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";

import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'

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

const header1 = [
  'NIBIRU',
  "NIBIrU"
  ]

const header2 = [
  'SOFTWARE',
  "sOFTwARE"
  ]


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

const name = (type) => `../images/MetalPlates013_1K_AmbientOcclusion${type}.jpg`;
const Scene = () => {
const texture = useLoader(THREE.TextureLoader, NibiruRed)
 
  return (
    <>
   
      <mesh>
      
      <group position={[0,0,0]} rotation={[0,0,0]}>
      <Sphere visible position={[0, 0, 0]} args={[1, 40, 40]}>
      <meshStandardMaterial
      map={texture}
          attach="material"
          color="#fff"
          factor={1} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0.01}
          bumpScale={0.4}
          wireframe
        />



          <Html>
            
            <h1 style={{color: "#ffff", position:"absolute", left: -350}}>NIBIRU</h1>

            <h1 style={{color: "#ffff", position:"absolute", left: 200}}>SOFTWARE</h1>
            
          </Html>

        </Sphere>

   


        </group>
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

      <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />
 
    
    
      <Suspense fallback={null}>
   
        
        <Scene />
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={10}/>§
      
    </Canvas>

    </div>
  )
}


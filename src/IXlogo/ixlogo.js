import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {OrbitControls, Icosahedron, useCubeTexture, useTexture, MeshDistortMaterial, Effects, MeshWobbleMaterial, Html, Sphere } from "@react-three/drei"
import * as THREE from "three";
import ix_logo from "../images/IXT.svg"
import layer1 from "../images/Side-A.png"
import layer2 from "../images/Side-B.png"
import layer3 from "../images/Side-C.png"
import layer4 from "../images/Side-D.png"
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
function Box() {
    
  const texture = useLoader(TextureLoader, layer1)
  const texture1 = useLoader(TextureLoader, layer2)
  const texture2 = useLoader(TextureLoader, layer3)
  const texture3 = useLoader(TextureLoader, layer4)
  const texture4 = useLoader(TextureLoader, ix_logo)
  const texture5 = useLoader(TextureLoader, ix_logo)

  useFrame(() => {
   
  })
  return (
    <mesh >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} attachArray="material"/>
      <meshStandardMaterial map={texture1} attachArray="material"/>
      <meshStandardMaterial map={texture2} attachArray="material"/>
      <meshStandardMaterial map={texture3} attachArray="material"/>
      <meshStandardMaterial map={texture4} attachArray="material"/>
      <meshStandardMaterial map={texture5} attachArray="material"/>
      
    </mesh>
  )
}

export default function IXtoken() {
  return (
    <div className="container">
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <OrbitControls autoRotate autoRotateSpeed={10}/>
      <Box />
    </Canvas>
    </div>
  )
}


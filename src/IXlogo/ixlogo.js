import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {OrbitControls, Icosahedron, useCubeTexture, useTexture, MeshDistortMaterial, Effects, MeshWobbleMaterial, Html, Sphere } from "@react-three/drei"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from "three";
import ix_logo from "../images/IXT.svg"

function Box() {
    
  const texture = useLoader(THREE.TextureLoader, ix_logo)
  const texture1 = useLoader(THREE.TextureLoader, ix_logo)
  const texture2 = useLoader(THREE.TextureLoader, ix_logo)
  const texture3 = useLoader(THREE.TextureLoader, ix_logo)
  const texture4 = useLoader(THREE.TextureLoader, ix_logo)
  const texture5 = useLoader(THREE.TextureLoader, ix_logo)

  const mesh = useRef()
  useFrame(() => {
   
  })
  return (
    <mesh ref={mesh}>
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


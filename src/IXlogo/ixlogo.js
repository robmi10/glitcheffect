import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {OrbitControls, Icosahedron, useCubeTexture, useTexture, MeshDistortMaterial, Effects, MeshWobbleMaterial, Html, Sphere } from "@react-three/drei"
import * as THREE from "three";
import ix_logo from "../images/IXT.svg"
import layer1 from "../images/down_blk.png"
import layer2 from "../images/right_blk.png"
import layer3 from "../images/left_blk.png"
import layer4 from "../images/up_blk.png"

import layer_black_A from "../images/Side-B-blk.png"
import layer_black_B from "../images/Side-A blk.png"
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import "../Glitch/styles.css"
import { PointLight } from 'three';

function Box() {
 /*  const down = useLoader(TextureLoader, layer1)
  const right = useLoader(TextureLoader, layer2)
  const left = useLoader(TextureLoader, layer3)
  const up = useLoader(TextureLoader, layer4)
 */
  const [down, right, left, up] = useLoader(TextureLoader, [layer1, layer2, layer3, layer4]);

  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.00
  })

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>

      <meshBasicMaterial attachArray="material" map={left} />
      <meshBasicMaterial attachArray="material" map={right} />
      <meshBasicMaterial attachArray="material" map={left} />
      <meshBasicMaterial attachArray="material" map={down}/>
     
      <meshBasicMaterial attachArray="material" map={up} />
      <meshBasicMaterial attachArray="material" map={up}/>
     
      
      

      
    </mesh>
  )
}

export default function IXtoken() {
  return (
    <div className ="container">
    <Canvas>
   
      <OrbitControls rotation autoRotateSpeed={8}/>
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
    </div>
  )
}
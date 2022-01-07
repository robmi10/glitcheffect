import React,{useEffect} from 'react'
import { AsciiEffect } from './ascii_effect'
import * as THREE from "three";
import { TrackballControls } from 'three-stdlib';
import sphere from "../images/sphere.png"
import { PlainAnimator } from 'three-plain-animator/lib/plain-animator';
import GifLoader from 'three-gif-loader';

const Ascii = () => {

  useEffect(() => {
    
    let camera, controls, scene, renderer, effect;

    let sphere, plane;

    const start = Date.now();

    init();
    animate();

        function init() {

          camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
          camera.position.y = 150;
          camera.position.z = 500;

          scene = new THREE.Scene();
          scene.background = new THREE.Color(0,0,0);

          const pointLight1 = new THREE.PointLight( 0xffffff );
          pointLight1.position.set( 500, 500, 500 );
          scene.add( pointLight1 );

          const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
          pointLight2.position.set( - 500, - 500, - 500 );
          scene.add( pointLight2 );

          const loading = new GifLoader();
            
            // load a image resource
            const texture = loading.load(
              // resource URL
              'https://media0.giphy.com/media/vETeJc11yHAas/giphy.gif',);

      
          const geometry = new THREE.PlaneGeometry(512, 512);
       
          const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
          let mesh = new THREE.Mesh(geometry, material)
          mesh.position.set(0, 0, 1);

          scene.add( mesh );

       

          renderer = new THREE.WebGLRenderer();
          renderer.setSize( window.innerWidth, window.innerHeight );
          renderer.domElement.style.color = 'green';

          effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
          effect.setSize( window.innerWidth, window.innerHeight );
          effect.domElement.style.color = 'green';
          effect.domElement.style.backgroundColor = 'black';

          // Special case: append effect.domElement, instead of renderer.domElement.
          // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

          document.body.appendChild( effect.domElement );

          controls = new TrackballControls( camera, effect.domElement );

          //

          window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {

          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();

          renderer.setSize( window.innerWidth, window.innerHeight );
          effect.setSize( window.innerWidth, window.innerHeight );

        }

        //

        function animate() {

          requestAnimationFrame( animate );

          render();

        }

        function render() {

          const timer = Date.now() - start;

         /*  sphere.rotation.x = timer * 0.0003;
          sphere.rotation.z = timer * 0.0002; */

          controls.update();

          effect.render( scene, camera );

        }

  }, [])
  return (
    <>

    </>
  )
}

export default Ascii

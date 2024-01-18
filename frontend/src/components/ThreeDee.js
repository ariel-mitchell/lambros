// import React, { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// function ThreeDee(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += 0.005));
//   // Load custom model into the scene
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}
//     >
//       <cylinderGeometry args={[1, 1, 3]} />
//       <meshStandardMaterial
//         wireframe={props.wireframe}
//         color={hovered ? "hotpink" : "orange"}
//       />
//     </mesh>
//   );
// }
 
// export default ThreeDee;

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// function ThreeDee(props) {
//   const { nodes, materials } = useGLTF("/testModel.glb");
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_0.geometry}
//           material={nodes.mesh_0.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_1.geometry}
//           material={nodes.mesh_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_2.geometry}
//           material={nodes.mesh_2.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_3.geometry}
//           material={nodes.mesh_3.material}
//         />
//       </group>
//     </group>
//   );
// }

// export default ThreeDee;

// import React, { useRef, useState } from "react";
// import { useFrame, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// function ThreeDee(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const { nodes, materials } = useLoader(GLTFLoader, '/images/testModel.glb')
//   const ref0 = useRef(0);
//   const ref1 = useRef(1);
//   const ref2 = useRef(2);
//   const ref3 = useRef(3);
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref0.current.rotation.x += 0.005));
//   useFrame((state, delta) => (ref1.current.rotation.x += 0.005));
//   useFrame((state, delta) => (ref2.current.rotation.x += 0.005));
//   useFrame((state, delta) => (ref3.current.rotation.x += 0.005));
//   // Load custom model into the scene
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <group {...props} dispose={null}>
// //       <group rotation={[-Math.PI / 2, 0, 0]} scale={10}>
// //         <mesh
//               ref={ref0}
//               castShadow
//               receiveShadow
//               geometry={nodes.mesh_0.geometry}
//               material={nodes.mesh_0.material}
//             />
//             <mesh
//               ref={ref1}
//               castShadow
//               receiveShadow
//               geometry={nodes.mesh_1.geometry}
//               material={nodes.mesh_1.material}
//             />
//             <mesh
//               ref={ref2}
//               castShadow
//               receiveShadow
//               geometry={nodes.mesh_2.geometry}
//               material={nodes.mesh_2.material}
//             />
//             <mesh
//               ref={ref3}
//               castShadow
//               receiveShadow
//               geometry={nodes.mesh_3.geometry}
//               material={nodes.mesh_3.material}
//             />
//           </group>
//         </group>
//   );
// }
 
// export default ThreeDee;



//this is a deprecated test file for implementing the 3D elements, just holding onto it for polishing the Car3DModel.js file up
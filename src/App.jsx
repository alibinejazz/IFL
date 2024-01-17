import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { MuteProvider, MuteContext } from './components/Avatar';

function App() {
  return (
    <>
      <Loader />
      <Leva hidden />
      <MuteProvider>
        <UI />
      </MuteProvider>
      <Canvas shadows camera={{ position: [0 , 0, 8], fov: 42 }}>
        {/* <mesh position={[2,-0.25,-3]}> */}
          <Experience />
        {/* </mesh> */}
      </Canvas>
    </>
  );
}

export default App;

import Banner from "../components/Banner"
import CarTable from "../components/CarTable"
import Welcome from "../components/Welcome";
import { Canvas } from "@react-three/fiber";
import Car3DModel from '../components/Car3DModel';

function Home() {

    
    return(
        <>
        <Banner/>
        <div className="App">
            <section>
                <div style={{ width: "50vw", height: "50vh" }}>
                <Canvas size={[`2000px`,`3000px`]} camera={{position: [10, 0, 80], rotation: [0,0,0], fov: 45}} style={{width: `100%`, height: `100%`, position: `relative` }}>
                    <pointLight position={[30, 30, 30]} />
                    <ambientLight intensity={[20]}/>
                    {/* <ThreeDee position={[0, 0, 0]} /> */}
                    <Car3DModel position={[0,0,0]} scale={[16,16,16]}/>
                </Canvas>
                </div>
            </section>
        </div>  
        <Welcome/>
        <CarTable cars=""/>
        </>
    )
}

export default Home;
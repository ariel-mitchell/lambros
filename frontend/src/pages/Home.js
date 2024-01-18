import Banner from "../components/Banner"
import CarTable from "../components/CarTable"
import Welcome from "../components/Welcome";
import { Canvas } from "@react-three/fiber";
import Car3DModel from '../components/Car3DModel';

function Home() {

    
    return(
        <>
        <Banner/>
        <div style={{ width: "50vw", height: "50vh", margin:'auto'}}>
            <Canvas id='myCanvas' size={[`1000px`,`3000px`]} camera={{position: [10, 0, 80], rotation: [0,0,0], fov: 45}} style={{width: `100%`, height: `100%`, position: `relative` }}>
                <directionalLight position={[0,5,0]} intensity={[20]}/>
                <Car3DModel position={[0,0,0]}/>               
            </Canvas>
        </div>
        <Welcome/>
        <CarTable cars=""/>
        </>
    )
}

export default Home;
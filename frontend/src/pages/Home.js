import Banner from "../components/Banner"
import CarTable from "../components/CarTable"
import Welcome from "../components/Welcome";

function Home() {

    
    return(
        <>
            <Banner/>
            <Welcome/>
            <CarTable cars=" "/>
        </>
    )
}

export default Home;
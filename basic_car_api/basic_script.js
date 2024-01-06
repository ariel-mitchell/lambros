//Fetching data and returning partial car stats (using API Nijas)
let model = 'Camry';

const basicCarApi = {
    urlCar: 'https://api.api-ninjas.com/v1/',
    typeCar: 'cars?model=' + model,
    apiIdBasic: 'X-Api-Key=zVK9KSQlQVSEYg94EaGOdA==ZEHm4Hc7GHKKAvl4'
}

//Deconstruction for basicCarApi
const {urlCar, typeCar, apiIdBasic} = basicCarApi;

const urlApiBasic = `${urlCar}${typeCar}&${apiIdBasic}`

fetch(urlApiBasic)
.then( (application) => application.json())
.then( (basicData) => displayCars(basicData))

//Displaying vehicles
const displayCars = (application) => {
    
        const basicCarHtml = 
        `
        <div><p>Car Make: ${application[0].make}</p></div>
        <div><p>Car Model: ${application[0].model}</p></div>
        <div><p>Year: ${application[0].year}</p></div>
        <div><p>Fuel: ${application[0].fuel_type}</p></div>
        <div><p>Wheel Transmission: ${application[0].drive}</p></div>
        <div><p>Miles Per Gallon (city): ${application[0].city_mpg}</p></div>
        <div><p>Miles Per Gallon (highway): ${application[0].highway_mpg}</p></div>
        `
        const showCars = document.querySelector('.show-car')
        showCars.innerHTML = basicCarHtml;

}
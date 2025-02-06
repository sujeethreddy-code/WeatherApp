let button = document.getElementById("searchButton");
let input = document.getElementById("cityInput")

let cityName = document.getElementById("city-name");
let cityTime = document.getElementById("city-time");
let cityTemp = document.getElementById("city-temp");


async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3faf7e1b11594484af0123214242011&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}


button.addEventListener("click", async()=>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText=result.location.name;
    cityTime.innerText=result.location.localtime;
    cityTemp.innerText=result.current.temp_c;

})


// First we need to fetch() the weatherApi url using async-await function
// Next we need to call the async-await function in the eventlistener.
// We use this ${} to insert values inside string directly instead of using +
// but to insert this ${} the string should be inside ``.












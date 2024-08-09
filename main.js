const app = document.querySelector('.weather-app')
const temp = document.querySelector('.temp')
const dateoutput = document.querySelector('.date')
const conditionoutput = document.querySelector('.condition')
const nameoutput = document.querySelector('.name')
const icon = document.querySelector('.icon')
const cloudoutput = document.querySelector('.cloud')
const humidityoutput = document.querySelector('.humidity')
const windoutput = document.querySelector('.wind')
const form = document.querySelector('.locationinput')
const search = document.querySelector('.search')
const btn = document.querySelector('.submit')
const cities = document.querySelector('.city')


let cityInput = "London";
cities.forEach((city) => {
    city.addEventListener('click', (e) =>{
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity ="0";
    });
})

form.addEventListener('submit', (e) =>{
    if(search.value.Length == 0){
        alert('please type in a city name');
    } else{
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }
    e.preventDefault();
});

function dayofTheweek(day, month, year){
    const weekday =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new date('${day}/${month}/${year}').getday()];
};

function fetchWeatherData(){
    fetch('http://api.weatherapi.com/v1/current.json?Key=223561e72043418a822111932242903=${cityInput}')
    .then(Response => Response.json())
    .then(data => {
        console.log(data);

        temp.innerHTML = data.current.temp_c + "&#176;";
        conditionoutput.innerHTML = data.current.condition.text;

        const data = data.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5,2));
        const d = parseInt(date.substr(8,2));
        const time = date.substr(11);
        dateoutput.innerHTML='${dayOfTheWeek(d,m,y)} ${d}, ${m} ${y}';
        timeoutput.innerHTML = time;
        nameoutput.innerHTML = date.location.name;
        const iconsId = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);
        iconsId.src = "./icon"


    })
}
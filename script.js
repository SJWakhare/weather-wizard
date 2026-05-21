const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', ()=>{

    const APIKey = 'f2e16e685aec2deb67ad30b334ce3242';
    const city = document.querySelector('.search-box input').value;

    if(city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response=> response.json()).then(json => { 

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        // for image
        switch(json.weather[0].main){
            case 'Clear':
                console.log(json.weather[0])
                image.src = 'images/Sunny.png';
                break;

            case 'Rain':
                console.log(json.weather[0])
                image.src = 'images/Rainy.png';
                break;

            case 'Snow':
                console.log(json.weather[0])
                image.src = 'images/Snowvy.png';
                break;

            case 'Clouds':
                console.log(json.weather[0])
                image.src = 'images/Cloudy.png';
                break;
                
            case 'Partly cloudy':
                console.log(json.weather[0])
                image.src = 'images/PartlyCloudy.png';
                break;

            case 'Mist':
                console.log(json.weather[0])
                image.src = 'images/Misty.png';
                break;

            case 'Haze':
                console.log(json.weather[0])
                image.src = 'images/Misty.png';
                break;

            case 'Wind':
                console.log(json.weather[0])
                image.src = 'images/Windy.png';
                break;

            case 'Clear night':
                console.log(json.weather[0])
                image.src = 'images/ClearNight.png';
                break;

            case 'Cloudy night':
                console.log(json.weather[0])
                image.src = 'images/NightCloudy.png';
                break;

            case 'Lightning':
                console.log(json.weather[0])
                image.src = 'images/Lightning.png';
                break;

            case 'Thunderstorm':
                console.log(json.weather[0])
                image.src = 'images/Thunderstorm.png';
                break;

            case 'Snow rain':
                console.log(json.weather[0])
                image.src = 'images/SnowRainy.png';
                break;

            default:
                console.log(json.weather[0])
                image.src = 'images/Cloudy.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<sup>&deg;c</sup>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)} km/h`;

    });
});
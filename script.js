const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', ()=>{

    const APIKey = 'f2e16e685aec2deb67ad30b334ce3242';
    const city = document.querySelector('.search-box input').value;

    if(city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response=> response.json()).then(json => { 

        if (json.cod == '404') {
            cityHide.textContent = city;
            container.style.height = '415px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        if(cityHide.textContent == city) {
            return;
        }
        else {
            cityHide.textContent = city;

            container.style.height = '555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');
            
            setTimeout(() => {
                                container.classList.remove('active');
                             }, 2500);

            const weatherMain = json.weather[0].main;
            const weatherDescription = json.weather[0].description;
            const icon = json.weather[0].icon;
            
            // for image
            switch(weatherMain){
                case 'Clear':
                    if(icon.includes('n')){
                        image.src = 'images/ClearNight.png';
                    } else {
                        image.src = 'images/Sunny.png';
                    }
                    break;
                    
                case 'Clouds':
                    if(weatherDescription.includes('few clouds')){
                            if(icon.includes('n')){
                                image.src = 'images/NightCloudy.png';
                            } else {
                                image.src = 'images/PartlyCloudy.png';
                            }
                        } else {
                            if(icon.includes('n')){
                                image.src = 'images/NightCloudy.png';
                            } else {
                                image.src = 'images/Cloudy.png';
                            }
                        }
                    break;

                case 'Rain':
                    image.src = 'images/Rainy.png';
                    break;

            case 'Snow':
                    if(weatherDescription.includes('sleet') || weatherDescription.includes('rain and snow')) {
                        image.src = 'images/SnowRainy.png';
                    } else {
                        image.src = 'images/Snowy.png';
                    }
                    break;

                case 'Mist':
                case 'Haze':
                    image.src = 'images/Misty.png';
                    break;

                case 'Wind':
                    image.src = 'images/Windy.png';
                    break;

                case 'Lightning':
                    image.src = 'images/Lightning.png';
                    break;

                case 'Thunderstorm':
                    image.src = 'images/Thunderstorm.png';
                    break;

                default:
                    image.src = 'images/Cloudy.png';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<sup>&deg;c</sup>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} km/h`;

        }

    });
});
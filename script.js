const apiKey = "ee687f22d7b7b5624ed8649a8fbf488a"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" 

const input = document.querySelector('.input')

const search_btn = document.querySelector('.btn')

const weather_icon = document.querySelector('.weather_icon')

// Function To Check Weather Details

const weather = async (city) =>{
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await res.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.tempature').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' ' + "km/h";
    document.querySelector('.humidity').innerHTML = data.main.humidity +  `%`;

    console.log(data)

    if(data.weather[0].main == 'Clouds'){
        weather_icon.src = 'images/clouds.png'
    }
    else if (data.weather[0].main == 'Clear'){
        weather_icon.src = 'images/clear.png'
    }
    else if (data.weather[0].main == 'Rain'){
        weather_icon.src = 'images/rain.png'
    }
    else if (data.weather[0].main == 'Snow'){
        weather_icon.src = 'images/snow.png'
    }
    else if (data.weather[0].main == 'Drizzle'){
        weather_icon.src = 'images/drizzle.png'
    }
    else if (data.weather[0].main == 'Mist'){
        weather_icon.src = 'images/mist.png'
    }


    document.querySelector('.weather_details').style.display = 'block'

}


search_btn.addEventListener('click', ()=>{
    weather(input.value);
})

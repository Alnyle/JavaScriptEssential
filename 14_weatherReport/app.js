// 7d23d03b1f793c21c40892722b631f4b
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


/*
Response handling is being utilized by promise with .then() to
 process the response by first converting it to JSON format response.json(), and then accessing the resulting data.





*/ 

function showWeatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById('city').value;
  const apiKey = '7d23d03b1f793c21c40892722b631f4b';
  const apiUrl  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // use fetch api to fetch weather details
  fetch(apiUrl)
        .then(response => response.json)
        .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');

    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main} &#8451;</p>
    <p>Weather: ${data.weather[0].description}</p>`;     
    // const cityName = document.createElement('h2');
    // cityName.textContent = `Weather in ${data.name}`;

    // const temperature = document.createElement('p');
    // temperature.textContent = `Temperature: ${data.main} &#8451;`;

    // const weather = document.createElement('p');
    // weather.textContent = `Weather: ${data.weather[0].description}`;

    // weatherInfo.append(cityName, temperature, weather);

  })

}


document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
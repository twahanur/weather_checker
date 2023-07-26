// index.js
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');

search.addEventListener('click', () => {
  const APIKey = 'e35a2dd1fca0e0c9832e24f5939ea1f6';
  const city = document.querySelector('.search-box input').value;

  if (city === '') return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.wind.speed);
      if (json.cod === '404') {
        const container = document.querySelector('.container');
        const weatherBox = document.querySelector('.weather-box');
        const weatherDetails = document.querySelector('.weather-details');
        const error404 = document.querySelector('.not-found');

        container.style.height = '400px';
        weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
        console.log("console from iindex : ", json.message);
        return;
      }
      const latitude = json.coord.lat;
      const longitude = json.coord.lon;
      getWeatherByCoords(latitude, longitude);
    });
});

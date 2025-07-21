

const cityDegree = document.querySelector('.city-degree');
const cityName = document.querySelector('.city-name');
const cityHumidity = document.querySelector('.humidity');
const cityWind = document.querySelector('.wind');
const cityImg = document.querySelector('.city-img');
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');


searchBtn.addEventListener('click', () => {
  checkWeather(searchInput.value);
  searchInput.value = '';
});

searchInput.addEventListener('keypress', (e) => {
  if(e.key==='Enter'){
    checkWeather(searchInput.value);
    searchInput.value = '';
  }
});

async function checkWeather(city) {
  const response = await fetch(`/api/weather?city=${city}`);
  try {
    var data = await response.json();

    imgCloud(data.weather[0].main);
    cityDegree.innerHTML = Math.round(data.main.temp) + '°C';
    cityName.innerHTML = data.name;
    cityHumidity.innerHTML = data.main.humidity + '%';
    cityWind.innerHTML = Math.round(data.wind.speed) + ' km/h';
    document.querySelector('.info').style.display = 'block';
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.container').style.width = '70vw';
    document.querySelector('.container').style.height = '70vh';
  }catch (error){
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.info').style.display = 'none';
    return;
  }
  
}

function imgCloud(clude) {
  if (clude === 'Clear') {
    cityImg.src = './images/clear.png';
  }else if (clude === 'Clouds') {
    cityImg.src = './images/clouds.png';
  }else if (clude === 'Drizzle') {
    cityImg.src = './images/drizzle.png';
  }else if (clude === 'Mist') {
    cityImg.src = './images/mist.png';
  }else if (clude === 'Rain') {
    cityImg.src = './images/rain.png';
  }else if (clude === 'Snow') {
    cityImg.src = './images/snow.png';
  }
}
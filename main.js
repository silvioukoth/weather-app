const fetchWeatherData = async () => {

   const city = document.getElementById('city').value
   const apiKey = '4a13e8f119b7017cb4149cad4f19544b';
   const weatherDataDiv = document.getElementById('weatherData');

   try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`)
if(!response.ok) throw new Error('city not found. Please enter a valid city');
const data = await response.json();

// dislay data
weatherDataDiv.innerHTML = 
`<p><strong>Location: ${data.name}, ${data.sys.country},</strong></p>
<p><strong>Temperature: ${data.main.temp} ℃ degree</strong></p>
<p><strong>Condition: ${data.weather[0].description}</strong></p>`
   }catch(error) {
      weatherDataDiv.innerHTML = `<p style="color: red;">${error.message}</p>`
   }
}

fetchWeatherData();
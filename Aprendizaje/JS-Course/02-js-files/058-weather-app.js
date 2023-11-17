const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructure properties it is a new way to store  new info
    // like the smaple below and upper side
    const {cityDets, weather} =data;



    //update the details template

    details.innerHTML = `
      <h5 class="my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
       </div>
    `;

    // update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

    //ternary operator  is the same the xample which we have below but consise
    // and in one line check this out

    let timeSrc =   weather.IsDayTime ?   'img/day.svg' : 'img/night.svg';

    // this down below is the same of what we se up here.

    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    //
    // } else {
    //     timeSrc = 'img/night.svg';
    // }
    time.setAttribute('src',timeSrc);

    //remove the d-none clas if present

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

// const updateCity = async (city) => {
//
//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key);
//
//
//     // when propety name and the value name is the4 same you can deleate one  and
//     // it will do the ame same thin example
//     /*
//     return {
//       cityDets: cityDets,
//       weather: weather
//     };
//
//      */
//
//
//     return {
//       cityDets: cityDets,
//       weather: weather
//     };
// };

cityForm.addEventListener('submit', e => {
    //prevent defualt action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();


    // update the ui with the new city
    // updateCity(city)
        forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}
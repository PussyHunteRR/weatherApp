window.addEventListener('load', ()=>{
    let long;
    let lati;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lati = position.coords.latitude;
            
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=361f2b91211a4a6883d2798f9ebc3478`;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data);

            document.querySelector('.location-timezone').innerHTML = data.name;
            document.querySelector('.temperature-degree').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.temperature-description').innerHTML = data.weather[0]['description'];
            document.querySelector('.icon').innerHTML = '<img src="https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png">';
            
            }) 
        });
    }
});



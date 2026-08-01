// const apiKey = "";
const section=document.querySelector(".weather")
const city = document.querySelector(".city") // User input
const btn=document.querySelector(".btn");
const section1=document.querySelector(".weather_deatils")
btn.onclick=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value},PK&appid=b4ff292b7f8afccbe468fcc1b294a9d1&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
         const div=document.createElement("div");
         section1.append(div);
         div.innerHTML=` <div style=" padding-top: 20px; text-align: center;">
            <p style="color: #FFFFFF; font-size: xx-large; font-weight: bold;">${data.name}</p>
            <p style="color: rgba(255, 255, 255, 0.65); font-size: large; ">Pakistan</p>
        </div>
         <div class="card_outer">
            <div class="card">Wind<br>${data.wind.speed}m/s</div>
            <div class="card">Humidity<br>${data.main.humidity}%</div>
        </div>
        <div class="card_outer">
            <div class="card">Temperature<br>${data.main.temp}°C</div>
            <div class="card">Weather<br> ${data.weather[0].description}</div>
        </div>`
      city.value="";
  })
  .catch(error => console.log(error));
}
const clear=document.querySelector(".clear");
clear.onclick=()=>{
    section1.innerHTML="";
}



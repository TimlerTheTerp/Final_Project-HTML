function Annyang() {
    if (annyang) {
        // Let's define a command.
        const commands = {
          'About Us': () => { 
                window.location.href = "About.html"
            },
            'Simulation': () => {
                window.location.href = "WeatherHistory.html";
            },
  
            'Map': () => {
                window.location.href = "WeatherMap.html";
            }
            }
  
  
      
        // Add our commands to annyang
        annyang.addCommands(commands);
      
        // Start listening.
        annyang.start();
      }
    }
  
  function NoAnnyang() {
    if(annyang) {
      annyang.abort()
    }
  }


async function GetWeather() {
    let query = document.getElementById('city').value;


    let key = "910ff5ae063e6e027f6a48957062c78b";
    let url = `https://api.weatherstack.com/current?access_key=${key}&query=${query}`;


    //This code gets the result and prints out the city and the climate while it erases the label
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("FindWeather").innerHTML =
        `<h2> Weather Results </h2>
        <p>In  ${data.location.name}, ${data.location.country} it is currently ${data.current.temperature} degrees at this time </p>`;
    });
}

windows.onload = function() {
    Annyang();
    NoAnnyang();
}
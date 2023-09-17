document.addEventListener("keypress", function(event) {
    if (event.key=== "Enter") {
        document.getElementById("search-btn").click();
    }
});


document.getElementById("search-btn").addEventListener("click",async function() {
    const input=document.getElementById("input-btn").value;
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+input;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46edeb9cbemsh987ef86483e1a56p1d80fejsn7180177573ac',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        

        document.querySelector(".temp").innerHTML=result.temp +"°C";
        const formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
        
        
        document.querySelector(".place").innerHTML = formattedInput;
        document.querySelector(".feels-like").innerHTML= "Feels Like : " + result.feels_like + "°";
        document.querySelector(".humidity").innerHTML= " "+"Humidity : " + result.humidity + ""; 
        document.querySelector(".wind-speed").innerHTML= " "+"Wind : " + result.wind_speed + "m/s"; 



        console.log(result);
    } catch (error) {
        console.error(error);
    }
});

console.log(date); 

// Call the fetchData function to start the asynchronous operation


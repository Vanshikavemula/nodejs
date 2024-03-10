let WEATHER_DATA;

function Weather(city, temperature, humidity, windSpeed) {
    return {
        City: city,
        Temperature: temperature,
        Humidity: humidity,
        WindSpeed: windSpeed
    };
}

let city1 = Weather('Thailand', 72, 60, 10);
let city2 = Weather('Korea', 62, 75, 15);
let city3 = Weather('Tokyo', 80, 55, 12);

console.log(Array.of(city1, city2, city3)); 

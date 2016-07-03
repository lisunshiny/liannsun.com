$(function() {
  // Docs @ https://www.metaweather.com/api/
  var weatherHexs = {
    c: "#F2F0A1", // clear
    sn: "D9D9D6", // snow
    sl: "B6CFD0", // sleet
    h: "FFB3AB", // hail
    t: "DFA0C9", // thunderstorm
    hr: "9595D2", // heavy rain
    lr: "B4B5DF", // light rain
    s: "5BC2E7", // showers
    hc: "BEC6C4", // heavy clouds
    lc: "D0D3D4" // light clouds
  },
  newYorkWeatherID = 2459115,
  weatherAPIEndPt = "https://www.metaweather.com/api/location/"

  function getWeather() {
    // $.getJSON(weatherAPIEndPt + newYorkWeatherID + "?callback=?", function(response) {
    //   console.log(response);
    // });

    $.ajax({
      method: "GET",
      dataType: "json",
      url: weatherAPIEndPt + newYorkWeatherID,
      success: function(data) {
        console.log(data)
      }
    })
  };

  getWeather()

  function changeFontColor(colorToChange) {
    $("h1, p").style("color", colors[colorToChange]);
  };

});

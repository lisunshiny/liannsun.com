$(function() {
  // Docs @ https://www.metaweather.com/api/
  var weatherHexs = {
    c: "#F2F0A1", // clear
    sn: "#D9D9D6", // snow
    sl: "#B6CFD0", // sleet
    h: "#FFB3AB", // hail
    t: "#DFA0C9", // thunderstorm
    hr: "#9595D2", // heavy rain
    lr: "#B4B5DF", // light rain
    s: "#5BC2E7", // showers
    hc: "#BEC6C4", // heavy clouds
    lc: "#bbbdbe" // light clouds
  },
  weatherCodeMap = [
    [_.range(0, 9), "t"],
    [_.range(9, 13), "lr"],
    [_.range(13, 17), "sn"],
    [_.range(17, 19), "h"],
    [_.range(19, 29), "hc"],
    [_.range(29, 31), "lc"],
    [_.range(31, 37), "c"],
    [_.range(37, 41), "hr"],
    [_.range(41, 44), "sn"],
    [_.range(44, 45), "c"],
    [_.range(45, 48), "t"],
  ],
  textSelector = "a";

  function getWeather() {
    $.ajax({
      method: "GET",
      dataType: "json",
      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(2459115)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      success: function(data) {
        var conditionCode = data.query.results.channel.item.condition.code;
        var cssClass = getClassFromWeatherCode(conditionCode);
        $(textSelector).addClass(cssClass);
      }
    })
  };

  getWeather()

  function getClassFromWeatherCode(code) {
    var cssClass;
    _.each(weatherCodeMap, function(arr) {
      var range = arr[0];
      var mapCode = arr[1];

      if (_.include(range, parseInt(code))) {
        cssClass = mapCode;
      }
    });

    if (typeof cssClass === "string") {
      return cssClass;
    }
    else {
      return "unk";
    }
  };
});

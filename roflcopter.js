$(function() {
  // Docs @ https://openweathermap.org/current
  var weatherCodeMap = [
    [_.range(200, 300), "t"],
    [_.range(300, 400), "lr"],
    [_.range(500, 600), "s"],
    [_.range(600, 700), "sn"],
    [_.range(800, 801), "c"],
    [_.range(801, 900), "cl"],
    [_.range(900, 906), "t"],
    [_.range(906, 907), "h"]
  ];

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
  }

  $.ajax({
    method: "GET",
    dataType: "json",
    url: "//api.openweathermap.org/data/2.5/weather",
    data: {
      q: "new york",
      units: "imperial",
      appid: "e83b3c4c08285bf87b99f9bbc0abe3f0"
    },
    success: function(data) {
      var conditionCode = data.weather[0].id
      conditionText = data.weather[0].description.toLowerCase(),
      smallCopy = "Fun fact: the link colors change with the current weather in NYC (" + conditionText + ").",
      cssClass = getClassFromWeatherCode(conditionCode),
      $info = $("<small>").text(smallCopy);

      $("a").addClass(cssClass);
      $("body").append($info);
    }
  });
});

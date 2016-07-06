$(function() {
  // Docs @ https://developer.yahoo.com/weather/documentation.html#codes
  var weatherCodeMap = [
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
    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(2459115)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    success: function(data) {
      var conditionCode = data.query.results.channel.item.condition.code,
      conditionText = data.query.results.channel.item.condition.text.toLowerCase(),
      smallCopy = "Fun fact: the color of the links changes depending on the current weather in NYC (" + conditionText + ").",
      cssClass = getClassFromWeatherCode(conditionCode),
      $info = $("<small>").text(smallCopy);
      $("a").addClass(cssClass);
      $("body").append($info);
    }
  });
});

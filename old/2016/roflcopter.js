$(function () {
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
    _.each(weatherCodeMap, function (arr) {
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
    success: function (data) {
      var conditionCode = data.weather[0].id
      conditionText = data.weather[0].description.toLowerCase(),
        smallCopy = "Fun fact: the link colors change with the current weather in NYC (" + conditionText + ").",
        cssClass = getClassFromWeatherCode(conditionCode),
        $info = $("<small>").text(smallCopy);

      $("a").addClass(cssClass);
      $(".weather").append($info);
    }
  });


  // add button to change style
  let initialTimeout = 500;
  let delta = 500;
  setTimeout(() => $(".secret-message").append($("<span>").text("...")), initialTimeout);
  setTimeout(() => $(".secret-message").append($("<span>").text("...")), initialTimeout + delta * 2);
  setTimeout(() => $(".secret-message").append($("<span>").text("psst...")), initialTimeout + delta * 4);
  setTimeout(() => $(".secret-message").append($("<span>").text("this website is boring")), initialTimeout + delta * 6.5);
  setTimeout(() => $(".secret-message").append($("<span>").text("=")), initialTimeout + delta * 8);
  setTimeout(() => $(".secret-message").append($("<span>").text("==")), initialTimeout + delta * 8.25);
  setTimeout(() => $(".secret-message").append($("<span>").text("==> ")), initialTimeout + delta * 8.5);
  setTimeout(() => {
    $(".secret-message").append($("<span>").addClass("y2k-click").text("click me!"));
    $(".y2k-click").click(function () {
      $("head").append('<link rel="stylesheet" href="y2k.css" charset="utf-8" />')
    });
  
  }, initialTimeout + delta * 10);
});

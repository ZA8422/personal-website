
    anychart.onDocumentReady(function () {
     var data1 = [
       {x: "AI", value: 75},
       {x: "DB", value: 85},
       {x: "DS", value: 90},
       {x: "SE", value: 70},
       {x: "Networking", value: 70},
       {x: "ML", value: 90}
     ];
     var chart = anychart.radar();
     chart.yScale()
       .minimum(65)
       .maximum(90)
       .ticks({'interval':5});
      chart.yGrid().palette([ "gray 0.1", "gray 0.2"]);
      var series = chart.area(data1);
      series.name('Interests').markers(true).fill("#35D2DC", 0.3).stroke("#5F8DAB");
      var animationSettings = chart.animation();
      animationSettings.duration(3000);
      animationSettings.enabled(true);
      var xAxis = chart.xAxis();
      var labelsSettings = xAxis.labels();
      labelsSettings.fontColor('#DED0F2');
      labelsSettings.fontFamily('cyberfunk');
      var yAxis = chart.yAxis();
      var labelsSetting = yAxis.labels();
      labelsSetting.fontColor('#DED0F2');
      labelsSetting.fontFamily('cyberfunk')
      var title = chart.title();
      title.enabled(true);
      title.text('Interests');
      title.fontColor('#DED0F2');
      title.fontFamily("cyberfunk");
      chart.background().fill("#501639");
      chart.container('chartinterests');
      chart.draw();

    });
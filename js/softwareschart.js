anychart.onDocumentReady(function () {
     var data1 = [
       {x: "Tableau", value: 90},
       {x: "IDE", value: 100},
       {x: "Microsoft", value: 100},
       {x: "Unity", value: 55},
       {x: "SQL", value: 80},
       {x: "AWS", value: 90}
     ];
     var chart = anychart.radar();
     chart.yScale()
       .minimum(50)
       .maximum(100)
       .ticks({'interval':5});
      chart.yGrid().palette(["gray 0.1", "gray 0.2"]);
      chart.area(data1).name('Softwares').markers(true).fill("#a1d1e3", 0.3).stroke("#63B4D1");
      var animationSettings = chart.animation();
      animationSettings.duration(3000);
      animationSettings.enabled(true);
      var xAxis = chart.xAxis();
      var labelsSettings = xAxis.labels();
      labelsSettings.fontColor('#DED0F2');
      labelsSettings.fontFamily('cyberfunk')
      var yAxis = chart.yAxis();
      var labelsSetting = yAxis.labels();
      labelsSetting.fontColor('#DED0F2');
      labelsSetting.fontFamily('cyberfunk')
      var title = chart.title();
      title.enabled(true);
      title.text('Softwares');
      title.fontColor('#DED0F2');
      title.fontFamily("cyberfunk");
      chart.background().fill("#501639");
      chart.container('chartsoftwares');
      chart.draw();
    });
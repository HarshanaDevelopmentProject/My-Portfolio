var options = {
    series: [{
      data: [60, 65, 55, 47, 60, 50]
    }],
    chart: {
      type: 'bar',
      height: 400
    },
    colors: ['#00E396'], 
    plotOptions: {
      bar: {
        borderRadius: 3,
        borderRadiusApplication: 'end',
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: ['html', 'css', 'js', 'java', 'php', 'mySql'],
      max: 100 ,
      labels: {
        style: {
          fontSize: '15px', 
          colors: ['#ffa200'] 
        }
      }
    },
    yaxis: {
      show: true, 
      labels: {
        style: {
          fontSize: '15px', 
          colors: ['#ffa200'] 
        }
      }
    }
  };
  
  var chart = new ApexCharts(document.getElementById('skill-list'), options);
  chart.render();
  
  

    

$(function () {
        $('#container').highcharts({
            title: {
                text: 'Year-wise predictable growth for different career options',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: Linkedin.com',
                x: -20
            },
            xAxis: {
                categories: ['2 years', '4 years', '6 years', '8 years', '10 years']
            },
            yAxis: {
                title: {
                    text: 'Growth'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '',
                valuePrefix: '',
			    animation : true,
				useHTML : true,	
            },
           plotOptions:{
             line: {
                dataLabels:{
                  enabled: false,
                 }
               },
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Academician',
                allowPointSelect: true,
				data: [5, 10,12, 14.5, 18.2],
                title:['Post-doctoral fellow','Post-doctoral fellow','Assistant Professor','Associate Professor','Professor']
            }]
        });
    });
    


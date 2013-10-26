
    

$(function () {
        $('#container').highcharts({
            title: {
                text: 'Average hours per week',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['2 years', '4 years', '6 years', '8 years', '10 years']
            },
            yAxis: {
                title: {
                    text: 'Hours per week'
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
            },
           plotOptions:{
             line: {
                dataLabels:{
                  enabled: false,
                  formatter:function(){
                     return '<b>'+this.series.title+'</b>';
                   }
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
                name: 'Academia',
                data: [42, 54,54,52, 54],
               title:['Post-doctoral fellow','Assistant Professor','Assistant Professor','Associate Professor','Professor']
            },
            {
                name: 'Patent Law',
                data: [50, 50,60, 60, 80],
               title:['Technical specialist','Technical specialist','Patent Agent','Patent Agent','Patent Attorney']
            },
            {
                name: 'Software Engineering',
                data: [48, 48,57, 57, 60],
               title:['Software Engineer','Software Engineer','Lead Software Engineer','Lead Software Engineer','VP Engineering']
            },
              {
                name: 'Data Analytics',
                data: [54, 54,57, 57, 60],
               title:['Data Analyst','Senior Analyst','Senior Analyst','Director of Analytics','CTO']
            },
            ]
        });
    });
    

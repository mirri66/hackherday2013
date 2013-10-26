
    

$(function () {
        $('#container').highcharts({
            title: {
                text: 'Average salary',
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
                    text: 'Salary (thousands)'
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
                data: [46, 65,65,86.8, 115],
               title:['Post-doctoral fellow','Assistant Professor','Assistant Professor','Associate Professor','Professor']
            },
            {
                name: 'Patent Law',
                data: [80, 80,119, 119, 189],
               title:['Technical specialist','Technical specialist','Patent Agent','Patent Agent','Patent Attorney']
            },
            {
                name: 'Software Engineering',
                data: [120, 120,129, 129, 190],
               title:['Software Engineer','Software Engineer','Lead Software Engineer','Lead Software Engineer','VP Engineering']
            },
              {
                name: 'Data Analytics',
                data: [90, 112,112, 140, 223],
               title:['Data Analyst','Senior Analyst','Senior Analyst','Director of Analytics','CTO']
            },
            ]
        });
    });
    


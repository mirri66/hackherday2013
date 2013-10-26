
    

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
                data: [60, 40, 40, 65, 30 ],
               title:['Doctoral Candidate','Post-doctoral fellow','Senior Research Scientist','Assistant Professor','Associate Professor']
            },
            {
                name: 'Patent Law',
                data: [60, 80, 60, 40],
               title:['JD IP Law','Associate','Patent Consultant','IP Attorney']
            },
            {
                name: 'Computer Hardware',
                data: [50, 60, 69, 40],
               title:['Senior Architect','Chip Architect','Lead Architect','Principal Architect']
            },
             {
                name: 'Business Management',
                data: [50, 50, 60, 40],
               title:['MBA', 'Senior Analyst', 'Director', 'VP']
             },
             {
                name: 'Start-ups',
                data: [60, 70, 80, 85],
               title:['Lead Engineer', 'Director of Analytics', 'Cofounder', 'CEO']
            },
            ]
        });
    });
    


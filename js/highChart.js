
    

$(function () {
        $('#container').highcharts({
			chart : {
				type: 'spline'
			},
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
                data: [46, 65, 85, 96.8],
               title:['Doctoral Candidate','Post-doctoral fellow','Senior Research Scientist','Assistant Professor']
            },
            {
                name: 'Patent Law',
                data: [80, 100, 119, 189],
               title:['JD IP Law','Associate','Patent Consultant','IP Attorney']
            },
            {
                name: 'Computer Hardware',
                data: [100, 120, 139, 190],
               title:['Senior Architect','Chip Architect','Lead Architect','Principal Architect']
            },
             {
                name: 'Business Management',
                data: [90, 112, 140, 223],
               title:['MBA', 'Senior Analyst', 'Director', 'VP']
             },
             {
                name: 'Start-ups',
                data: [90, 142, 190, 253],
               title:['Lead Engineer', 'Director of Analytics', 'Cofounder', 'CEO']
            },
            ]
        });
    });
    
  


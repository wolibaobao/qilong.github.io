$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['HTML5+CSS3', 'JAVASCRIPT', 'jQuery', 'Bootstrap', 'Angular']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Master',
            data: [90, 80, 80, 75, 70]
        }]
    });
    $('#container2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Photoshop', 'Illustrator']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Master',
            data: [90, 50]
        }]
    });
});
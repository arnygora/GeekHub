const ReportGraph = {
    chart: {
        type: 'spline',
        inverted: false,
        height: '250',
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        min: 0, max: 80,
        reversed: false,
        maxPadding: 0,
        showLastLabel: true,
        labels:
            {
                enabled: false
            },
      },
    yAxis: {
        min: 0, max: 700,
        title: {
            text: ''
        },
        labels: {
        },
        lineWidth: 1
    },
    legend: {
        enabled: false
    },
    tooltip: {
        // headerFormat: '<b>{series.name}</b><br/>',
        // pointFormat: '{point.x} km: {point.y}°C'
    },
    plotOptions: {
        spline: {
            marker: {
                enable: false
            }
        }
    },
    series: [{
        color: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(0, 0, 153)'],
                [0.2, 'rgb(0, 102, 204)'],
                [0.3, 'rgb(51, 153, 255)'],
                [0.4, 'rgb(153, 153, 255)'],
                [0.5, 'rgb(204, 102, 255)'],
                [0.6, 'rgb(255, 255, 204)'],
                [0.7, 'rgb(255, 153, 102)'],
                [0.8, 'rgb(255, 80, 80)'],
                [0.9, 'rgb(255, 0, 0)']
            ]
        },
        lineWidth: 6,
        data: [[0, 200], [3, 215], [9, 150], [12, 250], [15, 230], [18, 730], [21, 310], [24, 350], [27, 370], [30, 400], [33, 200],
            [36, 250], [39, 300], [42, 700], [45, 630], [48, 600], [51, 550], [54, 500], [57, 400], [60, 450], [75, 350], [80, 300], [80, 300]]
    }],
};

export default ReportGraph;
$(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    let isMobile = window.matchMedia("only screen and (max-width: 920px)").matches;

    if (isMobile) {
        $('.content').removeClass('container-fluid').addClass("container-small");

    }
});

$('#reinvestment-strategy-tab').on('click', function () {
    $('#staticBackdrop .inner-container').css('max-width', '1400px');
});
$('#payment-breakdown-tab ,#closing-costs-tab').on('click', function () {
    $('#staticBackdrop .inner-container').css('max-width', '900px');
});

$(window).resize(function () {
    if (window.innerWidth <= 1280) {
        $('.content').removeClass('container-fluid').addClass("container-small");
    } else {
        $('.content').removeClass('container-small').addClass("container-fluid");

    }

});
///////////////////////////
google.charts.load('current', {'packages': ['corechart']});
google.setOnLoadCallback(drawChart1);

function drawChart1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string');
    data.addColumn('number');

    data.addRows([
        ['OPTION 1 - 5.875%', 365.83],
        ['OPTION 2 - 6.5%', 282.78],
        ['OPTION 3 - 6.75%', 176.25],
        ['OPTION 4 - 7.75%', 0],
    ]);
    let view = new google.visualization.DataView(data);
    let formatter = new google.visualization.NumberFormat({
        prefix: 'Monthly Payment Different: $',
        pattern: '#,##0.00'
    });
    formatter.format(data, 1);
    let options = {
        // title: 'MONTHLY PAYMENT DIFFERENCE',

        hAxis: {
            textStyle: {
                color: 'white'
            }
        },
        chartArea: {'width': '78%', 'height': '70%'},
        legend: {
            position: 'none'
        },
        colors: ['#2AADD0'],
        seriesType: 'bars',
        vAxis: {format: 'short', textStyle: {color: '#FFF'}, minValue: 0},
        bar: {groupWidth: "50%"},
        backgroundColor: '#4C4C4C',
        format: '$#,###',
        dataOpacity: 1.0
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('chart_month'));
    chart.draw(data, options);
    let axisLabels = document.getElementById('chart_month').getElementsByTagName('text');
    for (let i = 0; i < axisLabels.length; i++) {
        if (axisLabels[i].getAttribute('text-anchor') === 'end') {
            axisLabels[i].innerHTML = '$' + axisLabels[i].innerHTML;
        }
    }
    window.addEventListener('resize', function () {
        chart.draw(data, options);
    }, false);

}

///////////////////////////
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
    let data = new google.visualization.DataTable();
    data.addColumn('string');
    data.addColumn('number');

    data.addRows([
        ['OPTION 1 - 5.875%', 10397],
        ['OPTION 2 - 6.5%', 9210],
        ['OPTION 3 - 6.75%', 5882],
        ['OPTION 4 - 7.75%', 0],
    ]);
    let view = new google.visualization.DataView(data);
    let formatter = new google.visualization.NumberFormat({
        prefix: 'Monthly Payment Different: $',
        pattern: '#,##0.00'
    });
    formatter.format(data, 1);
    let options = {
        // title: 'MONTHLY PAYMENT DIFFERENCE',

        hAxis: {
            textStyle: {
                color: 'white'
            }
        },
        chartArea: {'width': '78%', 'height': '70%'},
        legend: {
            position: 'none'
        },
        colors: ['#C5914E'],
        seriesType: 'bars',
        vAxis: {format: 'short', textStyle: {color: '#FFF'}, minValue: 0},
        bar: {groupWidth: "50%"},
        backgroundColor: '#4C4C4C',
        format: '$#,###',
        dataOpacity: 1.0
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('chart_saving'));
    chart.draw(data, options);
    let axisLabels = document.getElementById('chart_saving').getElementsByTagName('text');
    for (let i = 0; i < axisLabels.length; i++) {
        if (axisLabels[i].getAttribute('text-anchor') === 'end') {
            axisLabels[i].innerHTML = '$' + axisLabels[i].innerHTML;
        }
    }
    window.addEventListener('resize', function () {
        chart.draw(data, options);
    }, false);

}

///////////////////////////
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['string', 'number'],
        ['OPTION 1 - 5.875%', 191793],
        ['OPTION 2 - 6.5%', 210831],
        ['OPTION 3 - 6.75%', 234935],
        ['OPTION 4 - 7.75%', 274111],
    ]);


    let formatter = new google.visualization.NumberFormat({
        prefix: 'Monthly Payment Different: $',
        pattern: '#,##0.00'
    });
    formatter.format(data, 1);
    let options = {
        // title: 'MONTHLY PAYMENT DIFFERENCE',

        hAxis: {
            textStyle: {
                color: 'white'
            }
        },
        chartArea: {'width': '78%', 'height': '70%', 'max-width': '900px'},
        legend: {
            position: 'none'
        },

        colors: ['#87AB65'],
        seriesType: 'bars',
        vAxis: {format: 'short', textStyle: {color: '#FFF'}, minValue: 0},
        bar: {groupWidth: "50%"},
        backgroundColor: '#4C4C4C',
        format: '$#,###',
        dataOpacity: 1.0,

    };

    let chart = new google.visualization.ColumnChart(document.getElementById('chart_interest'));
    chart.draw(data, options);
    let axisLabels = document.getElementById('chart_interest').getElementsByTagName('text');
    for (let i = 0; i < axisLabels.length; i++) {
        if (axisLabels[i].getAttribute('text-anchor') === 'end') {
            axisLabels[i].innerHTML = '$' + axisLabels[i].innerHTML;
        }
    }
    window.addEventListener('resize', function () {
        chart.draw(data, options);
    }, false);


}

///////////////////////////
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
    let data = new google.visualization.DataTable();
    data.addColumn('string');
    data.addColumn('number');

    data.addRows([
        ['OPTION 1 - 5.875%', 9067.86],
        ['OPTION 2 - 6.5%', 6351.84],
        ['OPTION 3 - 6.75%', 4791.24],
        ['OPTION 4 - 7.75%', 2834.33],
    ]);
    let view = new google.visualization.DataView(data);
    let formatter = new google.visualization.NumberFormat({
        prefix: 'Monthly Payment Different: $',
        pattern: '#,##0.00'
    });
    formatter.format(data, 1);
    let options = {
        hAxis: {
            textStyle: {
                color: 'white'
            }
        },
        legend: {
            position: 'none'
        },
        colors: ['#C5914E'],
        chartArea: {'width': '78%', 'height': '80%', 'max-width': '900px'},
        seriesType: 'bars',
        vAxis: {format: 'short', textStyle: {color: '#FFF'}},
        bar: {groupWidth: "55%"},
        backgroundColor: '#4C4C4C',
        format: '$#,###',
        dataOpacity: 1.0
    };

    let chart_total_cash = new google.visualization.ColumnChart(document.getElementById('chart_total_cash'));
    chart_total_cash.draw(data, options);

    window.addEventListener('resize', function () {
        chart_total_cash.draw(data, options);
    }, false);
    document.getElementById('closing-costs-tab').addEventListener('click', function () {
        chart_total_cash.draw(data, options);
        let axisLabels = document.getElementById('chart_total_cash').getElementsByTagName('text');
        for (let i = 0; i < axisLabels.length; i++) {
            if (axisLabels[i].getAttribute('text-anchor') === 'end') {
                axisLabels[i].innerHTML = '$' + axisLabels[i].innerHTML;
            }
        }
    });

}
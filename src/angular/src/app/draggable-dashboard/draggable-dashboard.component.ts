import { Component, OnInit } from '@angular/core';

declare var c3: any;
declare var $: any;
declare var google: any;
declare var KosmoCharts: any;
declare var CountUp: any;

@Component({
  selector: 'app-draggable-dashboard',
  templateUrl: './draggable-dashboard.component.html'
})
export class DraggableDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    var memoryRadialProgressChart = new KosmoCharts.RadialProgress('#ks-memory-radial-progress-chart', {
      lineWidth: 8,
      size: 50,
      showAmount: false,
      amount: 25
    });
    memoryRadialProgressChart.render();

    var cpuRadialProgressChart = new KosmoCharts.RadialProgress('#ks-cpu-radial-progress-chart', {
      lineWidth: 8,
      size: 50,
      showAmount: false,
      amount: 50
    });
    cpuRadialProgressChart.render();

    google.charts.load('current', {'packages':['corechart', 'bar', 'line']});
    google.charts.setOnLoadCallback(drawBarChart);
    google.charts.setOnLoadCallback(drawLineChart);
    google.charts.setOnLoadCallback(drawPieChart);
    google.charts.setOnLoadCallback(function () {
      var data = google.visualization.arrayToDataTable([
        ['Memory', 'Usages'],
        [10,  20],
        [11,  50],
        [12,  10],
        [13,  80],
        [14,  20],
        [15,  90],
        [16,  60],
        [17,  30],
        [18,  50],
        [19,  20],
        [20,  40],
        [21,  50],
        [22,  90],
        [23,  80],
        [24,  20],
        [25,  90],
        [26,  50],
        [27,  30],
        [28,  60],
        [29,  30]
      ]);

      var options = {
        title: null,
        height: 40,
        legend: {position: 'none'},
        backgroundColor: {
          fill: 'transparent'
        },
        chartArea:{
          left:0,
          top:0,
          right: 0,
          height: 40
        },
        lineWidth: 1,
        colors:['#efc8ea','#f5daf1'],
        hAxis: {
          baselineColor: 'none',
          gridlines: {
            color: '#fff'
          }
        },
        vAxis: {
          baselineColor: 'none',
          maxValue: 115,
          gridlines: {
            color: '#e1e5f0'
          }
        }
      };

      var chart = new google.visualization.AreaChart(document.getElementById('ks-memory-area-chart'));
      chart.draw(data, options);
    });
    google.charts.setOnLoadCallback(function () {
      var data = google.visualization.arrayToDataTable([
        ['CPU', 'Usages'],
        [10,  30],
        [11,  50],
        [12,  10],
        [13,  80],
        [14,  20],
        [15,  90],
        [16,  60],
        [17,  30],
        [18,  50],
        [19,  20],
        [20,  40],
        [21,  50],
        [22,  90],
        [23,  80],
        [24,  20],
        [25,  90],
        [26,  50],
        [27,  30],
        [28,  60],
        [29,  30]
      ]);

      var options = {
        title: null,
        height: 40,
        legend: {position: 'none'},
        backgroundColor: {
          fill: 'transparent'
        },
        chartArea:{
          left:0,
          top:0,
          right: 0,
          height: 40
        },
        lineWidth: 1,
        colors:['#c4cbe1','#ebeef5'],
        hAxis: {
          baselineColor: 'none',
          gridlines: {
            color: '#fff'
          }
        },
        vAxis: {
          baselineColor: 'none',
          maxValue: 115,
          gridlines: {
            color: '#e1e5f0'
          }
        }
      };

      var chart = new google.visualization.AreaChart(document.getElementById('ks-cpu-area-chart'));
      chart.draw(data, options);
    });

    function drawBarChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ]);

      var options = {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      };

      var chart = new google.charts.Bar(document.getElementById('ks-bar-chart'));

      chart.draw(data, options);
    }

    function drawLineChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');
      data.addColumn('number', 'Transformers: Age of Extinction');
      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 69.5, 32.4],
        [3,  25.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  11.9, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
      ]);

      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        }
      };

      var chart = new google.charts.Line(document.getElementById('ks-line-chart'));

      chart.draw(data, options);
    }

    function drawPieChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);

      var options = {
        title: 'My Daily Activities',
        height: 242,
        chartArea: {
          top: 50,
          height: 180
        },
        titleTextStyle: {
          color: '#757575',
          fontSize: 16,
          bold: false
        },
        legend: {
          alignment: 'center'
        }
      };

      var chart = new google.visualization.PieChart(document.getElementById('ks-pie-chart'));
      chart.draw(data, options);
    }

    var barChartBlock = $("#ks-bar-chart-panel .card-block");
    barChartBlock.LoadingOverlay("show", {
      color: 'rgba(255, 255, 255, 0.8)',
      image: '',
      fontawesome : "la la-refresh la-spin"
    });

    var lineChartBlock = $("#ks-line-chart-panel .card-block");
    lineChartBlock.LoadingOverlay("show", {
      color: 'rgba(255, 255, 255, 0.8)',
      image: '',
      fontawesome : "la la-refresh la-spin"
    });

    setTimeout(function () {
      barChartBlock.LoadingOverlay("hide");
      lineChartBlock.LoadingOverlay("hide");
    }, 1000);

    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };

    $('.ks-amount[data-count-up]').each(function() {
      var countUp = parseInt($(this).data('count-up'));
      (new CountUp(this, 0, 6555, 0, 2, options)).start();
    });

    $('[data-dashboard-widget]').KosmoWidgetControls({
      onRefresh: function (element) {
        var zIndex = 1;

        if (element.hasClass($.fn.KosmoWidgetControls.defaults.fullScreenClass)) {
          zIndex = 11;
        }

        element.LoadingOverlay("show", {
          color: 'rgba(255, 255, 255, 0.8)',
          image: '',
          fontawesome : "la la-refresh la-spin",
          zIndex: zIndex
        });

        setTimeout(function () {
          element.LoadingOverlay("hide");
        }, 2000);
      },
      onFullScreen: function (element, isFullScreen) {
        // Disable sortable on full screen mode
        if (isFullScreen) {
          $(".ks-draggable-column").sortable('disable');
        } else {
          $(".ks-draggable-column").sortable('enable');
        }
      },
      onClose: function (element, closeCallback) {
        $.confirm({
          title: 'Danger!',
          content: 'Are you sure you want to remove this widget from dashboard?',
          type: 'danger',
          buttons: {
            confirm: {
              text: 'Yes, remove',
              btnClass: 'btn-danger',
              action: function() {
                closeCallback();
              }
            },
            cancel: function () {}
          }
        });
      }
    });

    $(".ks-draggable-column").sortable({
      containment: ".ks-page > .ks-content > .ks-body > .container-fluid",
      handle: ".card-header",
      cancel: ".card-header .ks-controls",
      placeholder: "ks-dashboard-portlet-placeholder",
      connectWith: ".ks-draggable-column",
      revert: true,
      activate: function(event, ui) {
        $('.ks-dashboard-portlet-placeholder').height(ui.item.height() - 2); // 2 - border-width
      },
      change: function () {
        $('.ks-draggable-column').each(function () {
          if ($(this).find('.ui-sortable-helper').size() && $(this).closest('.row').find('.card').size() == 1) {
            $(this).closest('.row').css({
              margin: 0,
              height: 0
            });
          }
        });

        $('.row').each(function () {
          if ($(this).find('[class*="col-"]').size() == 0) {
            $(this).remove();
          }
        });
      }
    });
  }
}

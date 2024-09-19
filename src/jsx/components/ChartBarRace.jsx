import React, {
  useEffect, useCallback, useRef, memo, useState
} from 'react';
import PropTypes from 'prop-types';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// https://www.highcharts.com/
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';

// https://d3js.org/
import * as d3 from 'd3';

// Load helpers.
import countryCodes from '../helpers/CountryCodes.js';
import formatNr from '../helpers/FormatNr.js';

highchartsAccessibility(Highcharts);
highchartsExporting(Highcharts);
highchartsExportData(Highcharts);

Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    downloadCSV: 'Download CSV data',
    thousandsSep: ' '
  }
});
Highcharts.SVGRenderer.prototype.symbols.download = (x, y, w, h) => {
  const path = [
    // Arrow stem
    'M', x + w * 0.5, y,
    'L', x + w * 0.5, y + h * 0.7,
    // Arrow head
    'M', x + w * 0.3, y + h * 0.5,
    'L', x + w * 0.5, y + h * 0.7,
    'L', x + w * 0.7, y + h * 0.5,
    // Box
    'M', x, y + h * 0.9,
    'L', x, y + h,
    'L', x + w, y + h,
    'L', x + w, y + h * 0.9
  ];
  return path;
};

/*
 * Animate dataLabels functionality
 */
// eslint-disable-next-line
(function (H) {
  const FLOAT = /^-?\d+\.?\d*$/;

  // Add animated textSetter, just like fill/strokeSetters
  // eslint-disable-next-line
  H.Fx.prototype.textSetter = function () {
    try {
      let startValue = this.start.replace(/ /g, '');
      let endValue = this.end.replace(/ /g, '');
      let currentValue = this.end.replace(/ /g, '');

      if ((startValue || '').match(FLOAT)) {
        startValue = parseInt(startValue, 10);
        endValue = parseInt(endValue, 10);

        // No support for float
        currentValue = Highcharts.numberFormat(Math.round(startValue + (endValue - startValue) * this.pos), 0);
      }

      this.elem.endText = this.end;

      this.elem.attr(this.prop, currentValue, null, true);
    } catch (error) {
      console.log(error);
    }
  };

  // Add textGetter, not supported at all at this moment:
  // eslint-disable-next-line
  H.SVGElement.prototype.textGetter = function () {
    const ct = this.text.element.textContent || '';
    return this.endText ? this.endText : ct.substring(0, ct.length / 2);
  };

  // Temporary change label.attr() with label.animate():
  // In core it's simple change attr(...) => animate(...) for text prop
  // eslint-disable-next-line
  H.wrap(H.Series.prototype, 'drawDataLabels', function (proceed) {
    try {
      const { attr } = H.SVGElement.prototype;
      const { chart } = this;

      if (chart.sequenceTimer) {
        this.points.forEach(point => (point.dataLabels || []).forEach(
        // eslint-disable-next-line
          label => (label.attr = function (hash) {
            if (
              hash && hash.text !== undefined && chart.isResizing === 0
            ) {
              const { text } = hash;

              delete hash.text;

              return this.attr(hash).animate({ text });
            }
            // eslint-disable-next-line
            return attr.apply(this, arguments);
          })
        ));
      }

      // eslint-disable-next-line
      const ret = proceed.apply(this, Array.prototype.slice.call(arguments, 1));

      // eslint-disable-next-line
      this.points.forEach(p => (p.dataLabels || []).forEach(d => (d.attr = attr)));

      return ret;
    } catch (error) {
      console.log(error);
    }
  });
}(Highcharts));

function BarRaceChart({
  chart_height, data, idx, note, source, subtitle, title
}) {
  const startYear = 1999;
  const endYear = 2023;
  const nbr = 15;
  const chart = useRef();
  const chartRef = useRef();
  const chartContainerRef = useRef();
  const btn = useRef();
  const input = useRef();
  const [rangeValue, setRangeValue] = useState(0);
  const [chartDone, setChartDone] = useState(false);
  const [once, setOnce] = useState(false);

  const getData = useCallback((year) => {
    year = parseInt(year, 10);
    const output = Object.entries(data).map(country => {
      const countryName = country[1].name;
      const countryData = country[1].data;
      return [countryName, countryData[year - startYear].value];
    }).sort((a, b) => b[1] - a[1]);
    return [output[0], output.slice(1, nbr)];
  }, [data]);

  const getSubtitle = useCallback(() => {
    const total = (getData(input.current.value)[0][1]).toFixed(0);
    return `<div class="year">${input.current.value}</div><br /><div class="total">${formatNr(total, ' ')} tonnes</div>`;
  }, [getData, input]);

  const xScale = d3.scaleLinear()
    .range([0, 170])
    .domain([0, 24]);
  const yScale = d3.scaleLinear()
    .range([40, 2])
    .domain([56000000, 100000000]);

  const updateLineChart = useCallback((year_idx) => {
    const tmp = [];
    for (let i = startYear; i <= (parseInt(year_idx, 10)); i++) {
      tmp.push(data[0].data[i - startYear].value);
    }
    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d));
    d3.select('.line_1').attr('d', line(tmp));
  }, [data, xScale, yScale]);

  const pause = useCallback(() => {
    btn.current.innerHTML = '⏵︎';
    clearTimeout(chart.current.sequenceTimer);
    chart.current.sequenceTimer = undefined;
  }, []);

  const updateChart = useCallback((year_idx) => {
    document.querySelectorAll('.meta_data .values')[0].innerHTML = getSubtitle();

    chart.current.series[0].update({
      data: getData(year_idx)[1],
      name: year_idx
    });
    chart.current.setTitle({
      text: `${title} in ${year_idx}?`
    });
    updateLineChart(year_idx);
  }, [getData, getSubtitle, title, updateLineChart]);

  const togglePlay = useCallback(() => {
    const update = (increment) => {
      if (increment) {
        input.current.value = parseInt(input.current.value, 10) + increment;
      }
      if (input.current.value >= endYear) {
        pause(btn);
      }
      setRangeValue(input.current.value);
      updateChart(input.current.value);
    };
    const play = () => {
      btn.current.innerHTML = '⏸︎';
      chart.current.sequenceTimer = setInterval(() => {
        update(1);
      }, 500);
    };
    if (chart.current.sequenceTimer) {
      pause();
    } else {
      if (input.current.value >= endYear) {
        input.current.value = startYear;
      }
      play();
    }
  }, [pause, updateChart]);

  const changeYear = (event) => {
    pause();
    updateChart(event.currentTarget.value);
    setRangeValue(event.currentTarget.value);
  };

  useEffect(() => {
    if (chartDone === true && once === false) {
      togglePlay();
      setOnce(true);
    }
  }, [chartDone, once, togglePlay]);

  const isVisible = useIsVisible(chartRef, { once: true });
  const createChart = useCallback(() => {
    chart.current = Highcharts.chart(`chartIdx${idx}`, {
      caption: {
        align: 'left',
        margin: 20,
        style: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontSize: '14px'
        },
        text: `<em>Source:</em> ${source} ${note ? (`<br /><em>Note:</em> <span>${note}</span>`) : ''}`,
        useHTML: true,
        verticalAlign: 'bottom',
        x: 0
      },
      chart: {
        animation: {
          duration: 500
        },
        backgroundColor: '#f4f9fd',
        height: chart_height,
        events: {
          load() {
            const chart_this = this;
            chart_this.renderer.image('https://static.dwcdn.net/custom/themes/unctad-2024-rebrand/Blue%20arrow.svg', 20, 20, 44, 43.88).add();
          }
        },
        marginLeft: 60,
        marginRight: 170,
        resetZoomButton: {
          theme: {
            fill: '#fff',
            r: 0,
            states: {
              hover: {
                fill: '#0077b8',
                stroke: 'transparent',
                style: {
                  color: '#fff'
                }
              }
            },
            stroke: '#7c7067',
            style: {
              fontFamily: 'Inter',
              fontSize: '13px',
              fontWeight: 400
            }
          }
        },
        style: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontFamily: 'Inter',
          fontWeight: 400
        },
        type: 'bar'
      },
      colors: ['#009edb'],
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
        buttons: {
          contextButton: {
            menuItems: ['viewFullscreen', 'separator', 'downloadPNG', 'downloadPDF', 'separator', 'downloadCSV'],
            symbol: 'download',
            symbolFill: '#000'
          }
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        bar: {
          animation: false,
          borderWidth: 0,
          colorByPoint: true,
          cursor: 'default',
          dataSorting: {
            enabled: true,
            matchByName: true
          },
          groupPadding: 0,
          pointPadding: 0.075
        },
        series: {
          dataLabels: [{
            enabled: true,
            style: {
              fontSize: 14,
              fontWeight: 600
            },
            y: 8
          }, {
            enabled: true,
            format: '{point.name}',
            style: {
              color: '#222',
              fontSize: 15,
              fontWeight: 'normal',
              opacity: 1
            },
            y: -10
          }]
        }
      },
      responsive: {
        rules: [{
          chartOptions: {
            legend: {
              layout: 'horizontal'
            },
            title: {
              margin: 20,
              style: {
                fontSize: '26px',
                lineHeight: '30px'
              }
            }
          },
          condition: {
            maxWidth: 500
          }
        }]
      },
      series: [{
        data: getData(startYear)[1],
        name: startYear,
        type: 'bar'
      }],
      subtitle: {
        align: 'left',
        enabled: true,
        style: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '18px'
        },
        text: subtitle,
        widthAdjust: -144,
        x: 10
      },
      title: {
        align: 'left',
        margin: 20,
        style: {
          color: '#000',
          fontSize: '30px',
          fontWeight: 700,
          lineHeight: '34px'
        },
        text: `${`${title} in ${input.current.value}`}?`,
        widthAdjust: -144,
        x: 64,
        y: 25
      },
      tooltip: {
        enabled: false
      },
      xAxis: {
        categories: data[0].labels,
        crosshair: {
          color: 'transparent',
          width: 1
        },
        reserveSpace: true,
        labels: {
          formatter: (el) => `<img src="${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2024-tdr_report/' : (window.location.href.includes('localhost:80')) ? './' : 'https://unctad-infovis.github.io/2024-tdr_report/'}assets/img/flags/${countryCodes(el.value)}.png" class="flag" />`,
          distance: 10,
          padding: 0,
          rotation: 0,
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400
          },
          useHTML: true
        },
        lineColor: 'transparent',
        lineWidth: 0,
        opposite: false,
        plotLines: null,
        showFirstLabel: true,
        showLastLabel: true,
        tickWidth: 0,
        title: {
          enabled: false
        },
        type: 'category'
      },
      yAxis: {
        accessibility: {
          description: 'Index'
        },
        allowDecimals: true,
        gridLineColor: 'rgba(124, 112, 103, 0.2)',
        gridLineWidth: 1,
        gridLineDashStyle: 'shortdot',
        labels: {
          rotation: 0,
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400
          }
        },
        endOnTick: false,
        lineColor: 'transparent',
        lineWidth: 0,
        opposite: true,
        startOnTick: false,
        plotLines: [{
          color: 'rgba(124, 112, 103, 0.6)',
          value: 0,
          width: 1
        }],
        showFirstLabel: false,
        showLastLabel: true,
        tickPixelInterval: 75,
        title: {
          enabled: true,
          reserveSpace: true,
          rotation: 0,
          style: {
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 400
          },
          text: '',
          verticalAlign: 'top',
        },
        type: 'linear'
      }
    });
    chartRef.current.querySelector(`#chartIdx${idx}`).style.opacity = 1;
    setChartDone(true);
  }, [chart_height, data, getData, input, idx, note, source, subtitle, title]);

  useEffect(() => {
    if (isVisible === true) {
      btn.current = chartContainerRef.current.querySelector('.play_pause_button');
      input.current = chartContainerRef.current.querySelector('.play_range');
      setTimeout(() => {
        createChart();
        document.querySelectorAll('.meta_data .values')[0].innerHTML = getSubtitle();
        const svg_container = d3.select('.line_chart')
          .append('svg');

        const line_container = svg_container.append('g')
          .attr('class', 'line_container')
          .attr('transform', 'translate(0, 0)');
        // Add the lines.
        line_container.append('path')
          .attr('class', 'line line_1')
          .data([]);
      }, 300);
    }
  }, [createChart, getSubtitle, isVisible]);

  return (
    <div className="chart_container" style={{ minHeight: chart_height, maxWidth: '700px' }} ref={chartContainerRef}>
      <div className="play_controls">
        <button type="button" className="play_pause_button" aria-label="Play Pause" title="play" onClick={(event) => togglePlay(event)}>⏸︎</button>
        <input className="play_range" type="range" aria-label="Range" value={rangeValue} min={startYear} max={endYear} onInput={(event) => changeYear(event)} onChange={(event) => changeYear(event)} />
      </div>
      <div ref={chartRef}>
        {(isVisible) && (<div className="chart" id={`chartIdx${idx}`} />)}
      </div>
      <div className="meta_data">
        <div className="values" />
        <div className="line_chart" />
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

BarRaceChart.propTypes = {
  chart_height: PropTypes.number,
  data: PropTypes.instanceOf(Array).isRequired,
  idx: PropTypes.string.isRequired,
  note: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  source: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

BarRaceChart.defaultProps = {
  chart_height: 800,
  note: false,
  subtitle: ''
};

export default memo(BarRaceChart);

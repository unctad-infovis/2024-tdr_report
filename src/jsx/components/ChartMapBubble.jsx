import React, {
  useEffect, useCallback, useRef, memo, useState
} from 'react';
import PropTypes from 'prop-types';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// https://www.highcharts.com/
import Highcharts from 'highcharts';
import highchartsMap from 'highcharts/modules/map';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';

import map_data_import from '../data/UNWorldmap.js';

// Load helpers.
import countryColors from '../helpers/CountryColors.js';
import countryLocations from '../helpers/CountryLocations.js';

highchartsMap(Highcharts);
highchartsAccessibility(Highcharts);
highchartsExporting(Highcharts);
highchartsExportData(Highcharts);

Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    downloadCSV: 'Download CSV data',
    thousandsSep: ','
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

function MapBarChart({
  data, chart_height, idx, note, source, subtitle, title
}) {
  const btn = useRef();
  const chart = useRef();
  const chartContainerRef = useRef();
  const chartRef = useRef();
  const endYear = 2023;
  const input = useRef();
  const nbr = 15;
  const startYear = 1999;
  const [rangeValue, setRangeValue] = useState(1999);
  const [chartDone, setChartDone] = useState(false);
  const [once, setOnce] = useState(false);

  // 009edb
  // fbaf17
  // eslint-disable-next-line
  const getData = useCallback((year) => {
    year = parseInt(year, 10);
    const output = Object.entries(data).map(country => {
      const countryName = country[1].name;
      const countryData = country[1].data;
      return [countryName, countryData[year - startYear].value];
    }).sort((a, b) => b[1] - a[1]);
    const slice = output.slice(1, nbr);
    return slice.map(el => [el[0], countryLocations(el[0])[0], countryLocations(el[0])[1] - 11.31, countryColors(el[0]), el[1]]);
  }, [data]);

  const pause = useCallback(() => {
    btn.current.innerHTML = '⏵︎';
    clearTimeout(chart.current.sequenceTimer);
    chart.current.sequenceTimer = undefined;
  }, []);

  const updateChart = useCallback((current_year_idx) => {
    current_year_idx = parseInt(current_year_idx, 10);
    setRangeValue(current_year_idx);
    const tmp_data = getData(current_year_idx);
    chart.current.series[1].update({ data: tmp_data });
    chart.current.setTitle({
      text: `${title} in ${current_year_idx}?`
    });
    chart.current.redraw(true);
  }, [getData, title]);

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
      }, 1000);
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
  const createChart = useCallback((map_data) => {
    if (once === false) {
      chart.current = Highcharts.mapChart(`chartIdx${idx}`, {
        caption: {
          align: 'left',
          margin: 15,
          style: {
            color: 'rgba(0, 0.0, 0.0, 0.8)',
            fontSize: '14px'
          },
          text: `<em>Source:</em> ${source} ${note ? (`<br /><em>Note:</em> <span>${note}</span>`) : ''}`,
          useHTML: true,
          verticalAlign: 'bottom',
          x: 0
        },
        chart: {
          animation: false,
          backgroundColor: '#f4f9fd',
          height: chart_height,
          events: {
            load() {
              const chart_this = this;
              chart_this.renderer.image('https://static.dwcdn.net/custom/themes/unctad-2024-rebrand/Blue%20arrow.svg', 20, 20, 44, 43.88).add();
            }
          },
          map: map_data,
          marginRight: 50,
          resetZoomButton: {
            theme: {
              fill: '#fff',
              r: 0.0,
              areas: {
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
            color: 'rgba(0, 0.0, 0.0, 0.8)',
            fontFamily: 'Inter',
            fontWeight: 400
          }
        },
        colors: ['rgba(0, 73, 135, 0.8)'],
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
        mapNavigation: {
          buttonOptions: {
            verticalAlign: 'bottom'
          },
          enabled: true,
          enableDoubleClickZoom: false,
          enableDoubleClickZoomTo: false,
          enableMouseWheelZoom: false
        },
        mapView: {
          center: [20, 10],
          projection: {
            name: 'EqualEarth',
          },
          zoom: 1.5
        },
        plotOptions: {
          series: {
            animation: false,
            borderColor: 'rgba(0, 0.0, 0.0, 0.3)',
            borderRadius: 0.0,
            events: {
              legendItemClick: (e) => {
                e.preventDefault();
              }
            },
            pointWidth: 15,
            states: {
              inactive: {
                opacity: 1
              }
            }
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
          borderColor: 'rgba(0, 0, 0, 0.01)',
          nullColor: '#ded9d5',
          enableMouseTracking: false
        }, {
          type: 'mapbubble',
          name: 'Vehicles',
          keys: [
            'country', 'lat', 'lon', 'color', 'z'
          ],
          data: getData(startYear),
          minSize: 8,
          maxSize: '20%',
          states: {
            hover: {
              halo: {
                opacity: 0,
                size: 0
              }
            }
          },
          tooltip: {
            headerFormat: '',
            pointFormat: '{point.country}<br /><strong>{point.z} vehicles</strong>'
          }
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
          text: `${title} in 1999?`,
          widthAdjust: -144,
          x: 64,
          y: 25
        },
        tooltip: {
          enabled: true
        },
        yAxis: {
          visible: false,
          max: 150
        },
        xAxis: {
          visible: false
        }
      });
      chartRef.current.querySelector(`#chartIdx${idx}`).style.opacity = 1;
      setChartDone(true);
    }
  }, [chart_height, idx, getData, note, once, source, subtitle, title]);

  useEffect(() => {
    btn.current = chartContainerRef.current.querySelector('.play_pause_button');
    input.current = chartContainerRef.current.querySelector('.play_range');
    if (isVisible === true) {
      setTimeout(() => {
        createChart(map_data_import);
      }, 300);
    }
  }, [createChart, isVisible]);

  return (
    <div className="chart_container" style={{ minHeight: chart_height, maxWidth: '700px' }} ref={chartContainerRef}>
      <div className="play_controls">
        <button type="button" className="play_pause_button" aria-label="Play Pause" title="play" onClick={(event) => togglePlay(event)}>⏸︎</button>
        <input className="play_range" type="range" aria-label="Range" value={rangeValue} min={startYear} max={endYear} onInput={(event) => changeYear(event)} onChange={(event) => changeYear(event)} />
      </div>

      <div ref={chartRef}>
        {(isVisible) && (<div className="chart" id={`chartIdx${idx}`} />)}
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

MapBarChart.propTypes = {
  chart_height: PropTypes.number,
  data: PropTypes.instanceOf(Array).isRequired,
  idx: PropTypes.string.isRequired,
  note: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  source: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

MapBarChart.defaultProps = {
  chart_height: 520,
  note: false,
  subtitle: ''
};

export default memo(MapBarChart);

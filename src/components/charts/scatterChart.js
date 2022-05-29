import { defineComponent, h } from 'vue'
import { toFarsiNumber } from '../../stores/data'

import { Scatter } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

export default defineComponent({
  name: 'ScatterChart',
  components: {
    Scatter
  },
  props: {
    chartId: {
      type: String,
      default: 'scatter-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const chartData = {
      datasets: [
        {
          label: 'Scatter Dataset 1',
          fill: false,
          borderColor: '#f5cb5c',
          backgroundColor: '#f5cb5c',
          data: [
            {
              x: -2,
              y: 4
            },
            {
              x: -1,
              y: 1
            },
            {
              x: 0,
              y: 0
            },
            {
              x: 1,
              y: 1
            },
            {
              x: 2,
              y: 4
            }
          ]
        },
        {
          label: 'Scatter Dataset 2',
          fill: false,
          borderColor: '#cfdbd5',
          backgroundColor: '#cfdbd5',
          data: [
            {
              x: -2,
              y: -4
            },
            {
              x: -1,
              y: -5
            },
            {
              x: 0,
              y: 1
            },
            {
              x: 6,
              y: -1
            },
            {
              x: -6,
              y: -4
            }
          ]
        },
        {
          label: 'بازدید امروز کاربرها',
          fill: false,
          borderColor: '#d68c45',
          backgroundColor: '#d68c45',
          data: [
            {
              x: -6,
              y: -4
            },
            {
              x: -1,
              y: 8
            },
            {
              x: 0,
              y: -1
            },
            {
              x: 3,
              y: -8
            },
            {
              x: 2,
              y: -7
            }
          ]
        }
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          ticks: {
            color: 'white',
            callback: (value) => {
              return toFarsiNumber(value)
            },
            font: {
              family: 'IRANSans',
              size: 10
            },
          },
        },
        x: {
          ticks: {
            color: 'white',
            font: {
              family: 'IRANSans',
              size: 10,
            }
          },
        },
      },
      layout: {
        padding: { top: 5, right: 10, left: 5, bottom: 5 }
      }
    }

    return () =>
      h(Scatter, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  }
})

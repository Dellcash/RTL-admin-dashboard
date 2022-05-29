import { defineComponent, h } from 'vue'
import { toFarsiNumber } from '../../stores/data'

import { Bubble } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

export default defineComponent({
  name: 'BubbleChart',
  components: {
    Bubble
  },
  props: {
    chartId: {
      type: String,
      default: 'bubble-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 300
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
          label: 'شش ماه اول',
          backgroundColor: '#132a13',
          data: [
            {
              x: 20,
              y: 25,
              r: 5
            },
            {
              x: 40,
              y: 10,
              r: 10
            },
            {
              x: 30,
              y: 22,
              r: 30
            }
          ]
        },
        {
          label: 'شش ماه دوم',
          backgroundColor: '#90a955',
          data: [
            {
              x: 10,
              y: 30,
              r: 15
            },
            {
              x: 20,
              y: 20,
              r: 10
            },
            {
              x: 15,
              y: 8,
              r: 30
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
              size: 12
            },
          },
        },
        x: {
          ticks: {
            color: 'white',
            callback: (value) => {
              return toFarsiNumber(value)
            },
            font: {
              family: 'IRANSans',
              size: 12
            },
          },
        }
      },
      layout: {
        padding: { top: 0, right: 0, left: 15, bottom: 5 }
      }
    }

    return () =>
      h(Bubble, {
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

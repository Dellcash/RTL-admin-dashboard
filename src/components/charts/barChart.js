import { defineComponent, h } from 'vue'
import { toFarsiNumber } from '../../stores/data'
import IRANSans from '../../fonts/FontsFree-Net-ir_sans.ttf'

import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
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
      labels: [
        'فرودین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند'
      ],
      datasets: [
        {
          label: 'اطلاعات خرید',
          backgroundColor: ['#371B58', '#4C3575', '#5B4B8A', '#7858A6'],
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ],
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          title: {
            display: true,
            text: 'نمودار خرید',
            color: 'white',
            font: {
              position: 'right',
              family: 'IRANSans',
              size: 25,
              style: 'normal',
              lineHeight: 1.2,
            },
            padding: { top: 10 }
          },
          labels: {
            color: '#fff',
            font: {
              family: 'IRANSans',
              size: 12,
            },
          },
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
            family: IRANSans,
            font: {
              family: 'IRANSans',
              size: 10,
            }
          },
        },
      },
      layout: {
        padding: { top: 5, left: 5, right: 10, bottom: 10 }
      }
    }

    return () =>
      h(Bar, {
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



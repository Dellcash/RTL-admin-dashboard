import { defineComponent, h } from 'vue'
import { toFarsiNumber } from '../../stores/data'

import { generateChart } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

class LineWithLineController extends LineController {
  draw() {
    super.draw()

    if (this.chart?.tooltip?.active) {
      const ctx = this.chart.ctx
      const x = this.chart.tooltip.x
      const topY = this.chart.scales['y-axis-0'].top
      const bottomY = this.chart.scales['y-axis-0'].bottom

      // draw line
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(x, topY)
      ctx.lineTo(x, bottomY)
      ctx.lineWidth = 2
      ctx.strokeStyle = '#07C'
      ctx.stroke()
      ctx.restore()
    }
  }
}

const LineWithLine = generateChart(
  'line-with-chart',
  'line',
  LineWithLineController
)

export default defineComponent({
  name: 'CustomChart',
  components: {
    LineWithLine
  },
  props: {
    chartId: {
      type: String,
      default: '-chart'
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
        'اسفند'],
      datasets: [
        {
          label: 'اطلاعات یک',
          backgroundColor: '#5FD068',
          data: [40, 39, 10, 40, 39, 80, 20, 25, 55, 3, 77, 30]
        },
        {
          label: 'اطلاعات دو',
          backgroundColor: '#4B8673',
          data: [10, 19, 15, 50, 39, 30, 20, 15, 5, 3, 47, 10]
        }
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            font: {
              family: 'IRANSans'
            }
          },
        },
        tooltip: {
          rtl: true,
          titleFont: {
            family: 'IRANSans'
          },
          bodyFont: {
            family: 'IRANSans'
          },
          boxPadding: 2
        }
      },
      scales: {
        y: {
          ticks: {
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
            font: {
              family: 'IRANSans',
              size: 10,
            }
          },
        },
      },
    }

    return () =>
      h(LineWithLine, {
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

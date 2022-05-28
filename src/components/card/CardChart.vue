  <!-- <script setup>
  import { Chart, registerables } from 'chart.js';
  import { DoughnutChart, useDoughnutChart, PolarAreaChart, usePolarAreaChart, PieChart, usePieChart } from 'vue-chart-3';
  import { ref } from 'vue';

  Chart.register(...registerables);
  const data = ref([30, 40, 60, 70, 5]);

  const { doughnutChartProps } = useDoughnutChart({
    chartData: {
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    },
    width: 200,
    height: 200
  });
  const { polarAreaChartProps } = usePolarAreaChart({
    chartData: {
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#371B58', '#4C3575', '#5B4B8A', '#7858A6'],
        },
      ],
    },
    width: 200,
    height: 200
  });
  const { pieChartProps } = usePieChart({
    chartData: {
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#809A6F', '#A25B5B', '#CC9C75', '#D5D8B5'],
        },
      ],
    },
    width: 200,
    height: 200
  });
  </script>

  <template>
    <div class="grid gap-2 m-2">
      <div class="bg-#0079AF pb-5">
        <h3 class="text-white p-5">بازدید امروز</h3>
        <DoughnutChart v-bind="doughnutChartProps" />
      </div>
      <div class="bg-#809A6F pb-2.4">

        <PieChart v-bind="pieChartProps" />

      </div>
      <div class="bg-#7858A6 pb-2.4">

        <PolarAreaChart v-bind="polarAreaChartProps" />
      </div>
    </div>
  </template>
  -->

 <script setup>
import BarChart from '../charts/barChart'
import BubbleChart from '../charts/bubbleChart'
import PieChart from '../charts/pieChart'
</script>
  
 <template>
  <div class="grid grid-cols-1 gap-3 mx-2">
    <div class="bg-#5B4B8A rounded">
      <h3 p="l2 t4 r5 b7" text-white>نمودار خرید</h3>
      <BarChart css-classes="rounded shadow-xl" :height="300" />
    </div>
    <BubbleChart :height="300" />
    <PieChart :height="300" />
  </div>
</template>

<style>
@font-face {
  font-family: 'iran-sans';
  src: url('../../fonts/FontsFree-Net-ir_sans.ttf');
}

.iran-sans {
  font-family: 'iransans', sans-serif;
}
</style>
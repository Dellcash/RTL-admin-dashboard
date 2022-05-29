 <script setup>
import BarChart from '../charts/barChart'
import BubbleChart from '../charts/bubbleChart'
import ScatterChart from '../charts/scatterChart'
</script>
  
 <template>
  <div class="grid grid-cols-1 gap-2 mt-2">
    <div class="bg-#31572c rounded">
      <h3 p="l2 t4 r5 b1" text-white>بازدید امروز کاربرها</h3>
      <BubbleChart :height="300" />
    </div>
    <div class="bg-#7858A6 rounded">
      <h3 p="l2 t4 r5 b7" text-white>فروش امروز</h3>
      <BarChart :height="300" />
    </div>
    <div class="bg-#333533 rounded">
      <h3 p="l2 t4 r5 b7" text-white>نمودار خرید</h3>
      <ScatterChart :height="300" />
    </div>
  </div>
</template>

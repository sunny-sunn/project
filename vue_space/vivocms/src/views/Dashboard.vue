<template>
<div>
  <h2>仪表盘页面</h2>
  <line-chart :datas="datas" :options="options"></line-chart>
  <line-chart :datas="datas" :options="options"></line-chart>
</div>
</template>

<script>
import LineChart from '../components/LineChart'
export default {
  components: {
    LineChart
  },
  data () {
    return {
      datas: {
        labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
        datasets: [
          {
            label: '销售额度表',
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 2,
            data: [40, 20, 30, 20, 50, 20, 30]
          },
          {
            label: '订单总数表',
            backgroundColor: '#f87979',
            data: [45, 25, 20, 10, 35, 25, 30]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <el-col :span='8'>
      <div class='mission-panel'>
        <div class='mission-title'>Mission</div>
        <div v-for='item in cardData'>
          <div>
            <bubble-card>
              {{item}}
            </bubble-card>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import BubbleCard from '../customiseComponents/bubbleCard/BubbleCard';
export default {
  name: 'Content',
  components: {
    BubbleCard,
  },
  data: () => ({
    cardData: [1, 2],
  }),
};
</script>

<style lang='scss' scoped>
.test{
  padding: 50px;
}
.mission-panel {
  padding: 20px;
  .mission-title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>

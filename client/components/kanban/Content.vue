<template>
  <div>
    <div v-for='item in cardData'>
      <bubble-card>
        {{item}}
      </bubble-card>
    </div>
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

<style scoped>

</style>

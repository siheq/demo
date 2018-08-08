<template>
  <div i='app'>
    <router-view/>
  </div>
</template>

<script>
import Content from '../../components/kanban/Content';
export default {
  name: 'App',
  components: {
    Content,
  },
};
</script>

<style scoped>

</style>

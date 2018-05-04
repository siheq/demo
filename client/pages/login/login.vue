<template>
    <div id="app">
        <router-view></router-view>
    </div>   
</template>



<script>
import Layout from '../../components/common/Layout';
export default {
  name: 'app',
  components: {
    Layout,
  },
  data () {
    return {
    };
  },
  methods: {
  },
};
</script>


<style scoped>

</style>
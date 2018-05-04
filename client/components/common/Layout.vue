<template>
  <div>
    <headerView></headerView>
     <el-col :span='3'>
      <sidebar></sidebar>
     </el-col>
     <el-col :span='8'>
      <router-view/>
     </el-col>
    <footerView></footerView>
  </div>
</template>

<script>
import footerView from './footerView';
import headerView from './headerView';
import sidebar from './sidebar';
export default {
  components: {
    footerView,
    headerView,
    sidebar,
  },
  data () {
    return {
    };
  },
};
</script>

<style>

</style>


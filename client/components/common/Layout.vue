<template>
  <div class="layout">
    <el-row type="flex" style="height: 100%">
      <el-col :span='24'>
      <headerView></headerView>
        <!-- <sidebar></sidebar> -->
        <div class="layout-content">
          <router-view/>
        </div>
      <footerView></footerView>
      </el-col>
    </el-row>
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
.layout-content {
  margin-bottom: 80px;
}
</style>


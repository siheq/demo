<template>
  <div>
    <headerView></headerView>
      <!-- <sidebar></sidebar> -->
      <router-view/>
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
router-view {
  margin-bottom: 80px;
}
</style>


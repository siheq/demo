<template>
  <div>
    <headerView></headerView>
        <router-view/>
    <footerView></footerView>
  </div>
</template>

<script>
import footerView from './footerView';
import headerView from './headerView';
export default {
  components : {
    footerView,
    headerView,
  },
  data () {
    return {
    };
  },
}
</script>

<style>

</style>


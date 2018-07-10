<script>
export default {
  name: 'Menu',
  render: function (h) {
    return h(
      'ul',
      this.$slots.default,
    );
  },
};
</script>

<style scoped>

</style>

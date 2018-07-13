<script>
export default {
  name: 'Menu',
  render: function (h) {
    return (
      <ul>{this.$slots.default}</ul>
    );
    // return h(
    //   'ul',
    //   this.$slots.default,
    // );
  },
};
</script>

<style scoped>

</style>

<script>
export default {
  name: 'Menu',
  componentName: 'CustomMenu',
  data () {
    return {
      txt: 'msg',
    };
  },
  mounted () {
    this.$on('submenuClick', this.submenuClickMethod);
    this.$on('itemClick', this.itemClickMethod);
  },
  methods: {
    submenuClickMethod () {
      console.log('base parent click handle');
    },
    itemClickMethod () {
      console.log('item click');
    },
  },
  render: function (h) {
    // const data = {
    //   domProps: {
    //     value: this.txt,
    //   },
    //   on: {
    //     input: event => {
    //       this.txt = event.target.value;
    //     },
    //   },
    // };
    return (
      <div>
        <div>This is a Custom menu</div>
        <ul>{this.$slots.default}</ul>
      </div>
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

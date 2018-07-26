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
      <div class='custome-menu-base'>
        <ul class='base-ul'>{this.$slots.default}</ul>
      </div>
    );
    // return h(
    //   'ul',
    //   this.$slots.default,
    // );
  },
};
</script>

<style lang='scss' scoped>
.base-ul {
  /*display: flex;*/
  font-size: 22px;
  color: white;
  li {
    line-height: 60px;
    padding: 0 20px;
    &:hover {
      background: #303133;
    }
  }
}
.custome-menu-base {
  background: rgb(84, 92, 100);
}
</style>

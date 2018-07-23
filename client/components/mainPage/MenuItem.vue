<script>
import emitter from '@/CommonJS/mixin/emitter';
export default {
  name: 'MenuItem',
  mixins: [emitter],
  methods: {
    checkParenName () {
      return this.$parent.$options.componentName === 'CustomMenu';
    },
  },
  render (h) {
    let self = this;
    const data = {
      on: {
        click: event => {
          this.emitParent('CustomMenu', 'itemClick', self);
        },
      },
    };
    return (
      <li {...data} style='cursor: pointer' class={{'menu-item': self.checkParenName()}}>
        {this.$slots.default}
      </li>
    );
  },
};
</script>

<style scoped>
.menu-item {
  display: inline-block;
  padding: 10px;
}
</style>

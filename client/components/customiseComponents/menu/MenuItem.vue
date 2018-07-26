<script>
import emitter from '@/CommonJS/mixin/emitter';
export default {
  name: 'MenuItem',
  mixins: [emitter],
  props: ['index'],
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
      <li {...data} style={!self.checkParenName() ? `animation-delay:0.${2 * (self.index - 1)}s` : ''} class={{'menu-item': self.checkParenName()}}>
        {this.$slots.default}
      </li>
    );
  },
};
</script>

<style lang='scss' scoped>
.menu-item {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
}
</style>

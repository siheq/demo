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
    console.log('mountd');
    this.$on('submenuClick', this.submenuClickMethod);
    this.$on('emittest', () => {
      console.log('self emit on success');
    });
  },
  methods: {
    submenuClickMethod () {
      console.log('base parent click handle');
    },
    emitTest () {
      this.$emit('emittest');
    },
  },
  render: function (h) {
    const data = {
      domProps: {
        value: this.txt,
      },
      on: {
        input: event => {
          this.txt = event.target.value;
        },
      },
    };
    return (
      <div>
        <button onClick={this.emitTest}>button</button>
        <div>This is a Custom menu</div>
        <ul>{this.$slots.default}</ul>
        <input type='text' {...data}></input>
        {this.txt === 'msg' ? <div>div</div> : <p>p</p>}
        <div>{this.txt}</div>
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

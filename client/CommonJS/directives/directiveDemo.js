export default {
  bind: function (el, binding, vnode) {
    console.log('bind');
  },
  inserted: function (el) {
    // 聚焦元素
    console.log('inserted');
    el.focus();
  },
  update: function (el, binding, vnode) {
    console.log('update', el, binding, vnode);
  },
};

import * as $ from 'jquery-slim';

export default {
  inserted (el, binding, vnode) {
    el.style.minHeight = `${window.innerHeight}px`
    $(window).on('resize', () => {
      el.style.minHeight = `${window.innerHeight}px`
    })
  }
}

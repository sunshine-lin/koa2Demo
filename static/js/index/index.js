new Vue({
  el: '#app',
  data: {
    title: '你好，koa2'
  },
  methods: {
    btnClick(from) {
      switch (from) {
        case 'register':
          location.href = '/register'
          break;
        case 'login':
          location.href = '/login'
          break;
        default:
          break;
      }
    }
  }
})
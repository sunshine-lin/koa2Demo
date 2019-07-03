new Vue({
  el: '#app',
  data: {
    title: '你好，koa2'
  },
  methods:{
    btnClick(){
      location.href = '/login'
    }
  }
})
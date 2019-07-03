new Vue({
  el: '#app',
  data: {
    ruleForm: {
      name:'',
      pwd: '',
      rem: false
    },
    rules:{
      name: {}
    }
  },
  methods:{
    btnClick(){
      alert(1)
    }
  }
})
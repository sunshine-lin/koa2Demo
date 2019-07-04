new Vue({
  el: '#app',
  data: {
    ruleForm: {
      name:'',
      pwd: '',
      rem: false
    },
    rules:{
      name: {required: true,message: '请输入',trigger: 'blur'},
      pwd: {required: true,message: '请输入',trigger: 'blur'},
    },
  },
  methods:{
    btnClick(){
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.ruleForm)
      })
    }
  }
})
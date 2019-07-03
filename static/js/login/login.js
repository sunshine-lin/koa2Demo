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
      console.log(fetch)
      
    }
  }
})
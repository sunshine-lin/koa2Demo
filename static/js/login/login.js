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
      }).then(res=>res.json())
      .then(body=>{
        if (body.code === 200) {
          this.$alert('提示','登录成功')
        } else {
          this.$alert('提示',body.error)
        }
      })
    }
  }
})
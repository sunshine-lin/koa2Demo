new Vue({
  el: '#app',
  data: {
    ruleForm: {
      name: '',
      pwd: '',
      phone: '',
      rem: false
    },
    rules: {
      name: { required: true, message: '请输入', trigger: 'blur' },
      pwd: { required: true, message: '请输入', trigger: 'blur' },
      phone: { required: true, message: '请输入', trigger: 'blur' },
    },
  },
  methods: {
    btnClick() {
      fetch('/registeruser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.ruleForm)
      }).then(response=>response.json())
      .then(body  =>{
        if (body.code === 200) {
          this.$alert('提示','注册成功')
        } else {
          this.$alert('提示','该用户已经注册过了')
        }
      })
    }
  }
})
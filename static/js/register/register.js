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
      })
    }
  }
})
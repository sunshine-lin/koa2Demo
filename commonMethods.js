// 获取路由文件
export default {
  getPage ({ path },from) {
    return new Promise((resolve, reject) => {
      if (isLogin) {
        filePath = './pages/login.html'
      } else {
        filePath = `./pages${path}.html`
      }
      fs.readFile('./pages/login.html', 'utf8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}


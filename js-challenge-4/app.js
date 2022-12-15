(() => {
  const delay = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve('Done') }, ms)
    })
  }
  delay(3000).then(() => console.log('Done'))
})()

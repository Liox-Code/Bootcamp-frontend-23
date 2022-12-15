(() => {
  const delay = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(`Done after ${ms / 1000} seconds`) }, ms)
    })
  }
  delay(3000).then((res) => console.log(res))
})()

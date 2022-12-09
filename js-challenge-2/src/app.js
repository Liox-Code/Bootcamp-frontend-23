(() => {
  // Exersice 1
  const ex01Array = [12, 6, 10, 2, 45, 100]

  let smallestNumber = ex01Array[0]
  ex01Array.forEach((item) => {
    if (item < smallestNumber) {
      smallestNumber = item
    }
  })
  console.log(smallestNumber)

  // Exersice 2
  const ex02Array = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9]
  const countElements = {}
  ex02Array.forEach((item) => {
    countElements[item] = (countElements[item] || 0) + 1
  })
  const countElementsArray = Object.entries(countElements)
  let lessRepeatedNumber = countElementsArray[0]
  countElementsArray.forEach((item) => {
    if (item[1] < lessRepeatedNumber[1]) {
      lessRepeatedNumber = item
    }
  })
  console.log(lessRepeatedNumber[0])

  // Exersice 3
  const ex03Array = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd']
  const elementsObject = {}
  ex03Array.forEach((item) => {
    elementsObject[item] = (elementsObject[item] || 0) + 1
  })
  const elementsArray = Object.entries(elementsObject)
  const uniqueElements = elementsArray.filter((item) => {
    return item[1] === 1
  })

  console.log(uniqueElements)

  // Exersice 4
  const ex04Array = [
    ['The', 'little', 'horse'],
    ['Plane', 'over', 'the', 'ocean'],
    ['Chocolate', 'ice', 'cream', 'is', 'awesome'],
    ['this', 'is', 'a', 'long', 'sentence']
  ]
  const arrayOfStrings = ex04Array.map((row) => {
    console.log(row.toString().split(',').join(' '))
    return row.toString().split(',').join(' ')
  })
  console.log(arrayOfStrings)
})()

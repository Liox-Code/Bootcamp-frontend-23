(() => {
  // ****************************** EXERCISE 1 ******************************
 const ex01Array = [12, 6, 10, 2, 45, 100]

 let smallestNumber = ex01Array[0]
 ex01Array.forEach((item) => {
   if (item < smallestNumber) {
     smallestNumber = item
   }
 })
 console.log('****************************** EXERCISE 1 ******************************')
 console.log(smallestNumber)

  // ****************************** EXERCISE 2 ******************************

  const ex02Array = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9]
  const ex02Array_CountedElements = ex02Array.reduce((countedElements, item) => {
    countedElements[item] = (countedElements[item] || 0) + 1
    return countedElements
  }, {})
  const minCount = Math.min(...Object.values(ex02Array_CountedElements))
  const lessFrequent = Object.keys(ex02Array_CountedElements).filter((key) => ex02Array_CountedElements[key] === minCount)

  console.log('****************************** EXERCISE 2 ******************************')
  console.log(lessFrequent)

  // ****************************** EXERCISE 3 ******************************
   const ex03Array = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd']
   const ex03Array_CountedElements = ex03Array.reduce((countedElements, item) => {
    countedElements[item] = (countedElements[item] || 0) + 1
    return countedElements
   }, {})
   const uniqueElements = Object.keys(ex03Array_CountedElements).filter((key) => ex03Array_CountedElements[key] === 1)
  
   console.log('****************************** EXERCISE 3 ******************************')
   console.log(uniqueElements)

   // ****************************** EXERCISE 4 ******************************
   const ex04Array = [
     ['The', 'little', 'horse'],
     ['Plane', 'over', 'the', 'ocean'],
     ['Chocolate', 'ice', 'cream', 'is', 'awesome'],
     ['this', 'is', 'a', 'long', 'sentence']
   ]
   const arrayOfStrings = ex04Array.map((row) => {
     return row.toString().split(',').join(' ')
   })
   console.log('****************************** EXERCISE 4 ******************************')
   console.log(arrayOfStrings)
})()

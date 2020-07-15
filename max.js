function max(arr) {
     const sumList = [];
     arr.reduce((acc, callback) => {
          sumList.push(acc + callback)
          return acc + callback
     })

     sumList.sort((x, y) => x < y)
     console.log(sumList[0])
     return sumList[0]
}

max([4, 6, -3, 5, -2, 1])
function filter(arr, num) {
     let newArr = [];
     arr.forEach(el => {
          if (el < num) {
               newArr.push(el)
          }
     })
     console.log(newArr)
     return newArr
}

filter([1, 2, 3, 6, 7, 10], 5);
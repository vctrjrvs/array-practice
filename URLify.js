function URLify(string) {
     const arr = string.split('');

     const newArr = arr.map(index => {
          if(index === ' ') {
               index = '%20'
          }
          return index;
     })
     console.log(newArr.join(''))
     return newArr.join('')
}

URLify('tauhida parveen');
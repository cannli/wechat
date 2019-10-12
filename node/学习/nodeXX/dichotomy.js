// 二分法\
console.log(process)
function binarySearch (data, dest) {
  var h = data.length - 1,
    l = 0
  while (l <= h) {
    var m = Math.floor((h + l) / 2)
    if (data[m] == dest) {
      return console.log(m, '---二分法---')
    }
    if (dest > data[m]) {
      l = m + 1
    } else {
      h = m - 1
    }
  }

  return false
}

var arr = [12, 18, 24, 35, 47, 50, 62, 83, 90, 115, 134]

binarySearch(arr, 90)

// 冒泡排序
/*
 冒泡排序
 前面的大于后面的，就把小的换给前面的，大的用一个变量保存，再付给后面的，就会变成后面的大于前面的
* */
var elements = [3, 1, 5, 7, 2, 4, 9, 6, 10, 8]

function sort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let a = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = a
      }
    }
  }
}

//sort(elements)
//console.log(' after: ' + elements)

/*
*
* 2.快速排序
* 解析：快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分，一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。
* */
function quickSort (elements) {
  if (elements.length <= 1) { return elements }
  var pivotIndex = Math.floor(elements.length / 2)
  var pivot = elements.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] < pivot) {
      left.push(elements[i])
    } else {
      right.push(elements[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

//var elements1 = [5, 6, 2, 1, 3, 8, 7, 1.2, 5.5, 4.5]
//quickSort(elements1)

/*
* 不借助临时变量，进行两个整数的交换
* */
function swap (a, b) {
  b = b - a
  console.log(b, '111111')
  a = a + b
  console.log(a, '222222')
  b = a - b
  console.log(b, '3333333')
  return [a, b]
}

//swap(3, 1)


function findMaxDuplicateChar(str) {
  if(str.length == 1) {
    return str;
  }
  var charObj = {};
  for(var i = 0; i < str.length; i++) {
    if(!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)] = 1;
    } else {
      charObj[str.charAt(i)] += 1;
    }
  }
  console.log(charObj)
  var maxChar = '',
    maxValue = 1;
  for(var k in charObj) {
  console.log(k)
    if(charObj[k] >= maxValue) {
      maxChar = k;
      maxValue = charObj[k];
    }
  }
  return console.log(maxChar + '：' + maxValue);
}
findMaxDuplicateChar('fgdgdhljtoertuerolfjosetuertu')
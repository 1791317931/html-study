console.log('计算第一步结果开始');
var firstNumberResults = [];
for (var a = 0; a <= 9; a++) {
  var firstNumber = a * 100 + 76;
  for (var b = 0; b <= 9; b++) {
    for (var c = 0; c <= 9; c++) {
      var secondNumber = b * 10 + c;
      for (var d = 0; d <= 9; d++) {
        for (var e = 0; e <= 9; e++) {
          var thirdNumber = 1800 + d * 10 + e;
          if (firstNumber * secondNumber == thirdNumber) {
            console.log(firstNumber + ' 乘以 ' + secondNumber + ' 等于 ' + thirdNumber);
            firstNumberResults.push(thirdNumber);
          }
        }
      }
    }
  }
}
console.log('计算第一步结果结束\r\n\r\n');

console.log('计算第二步结果开始');
var algorithms = ['+', '-', '*', '/'];
for (var i = 0; i < firstNumberResults.length; i++) {
  var firstNumber = firstNumberResults[i];
  for (var m = 0; m < algorithms.length; m++) {
    for (var a = 0; a <= 9; a++) {
      for (var b = 0; b <= 9; b++) {
        for (var c = 0; c <= 9; c++) {
          var secondNumber = a * 100 + b * 10 + c;
          for (var d = 0; d <= 9; d++) {
            for (var e = 0; e <= 9; e++) {
              var thirdNumber = 16000 + d * 100 + e * 10;
              if (m == 0) {
                if (firstNumber + secondNumber == thirdNumber) {
                  console.log(firstNumber + ' 加上 ' + secondNumber + ' 等于 ' + thirdNumber);
                }
              } else if (m == 1) {
                if (firstNumber - secondNumber == thirdNumber) {
                  console.log(firstNumber + ' 减去 ' + secondNumber + ' 等于 ' + thirdNumber);
                }
              } else if (m == 2) {
                if (firstNumber * secondNumber == thirdNumber) {
                  console.log(firstNumber + ' 乘以 ' + secondNumber + ' 等于 ' + thirdNumber);
                }
              } else if (m == 3) {
                if (firstNumber / secondNumber == thirdNumber) {
                  console.log(firstNumber + ' 除以 ' + secondNumber + ' 等于 ' + thirdNumber);
                }
              }
            }
          }
        }
      }
    }
  }
}
console.log('计算第二步结果结束');
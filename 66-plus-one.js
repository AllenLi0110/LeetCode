//Blog:http://52.198.119.162/2022/07/07/leetcode-js-66-plus-one/

// <strong>Solution:</strong>
// 1. 先陣列中的數字取出，由字串轉成數值。
// 2. 將數值 + 1。
// 3. 再將數值 + 1轉成字串陣列。
// (ex.注意當input的陣列大於2 ^ 53時，要使用BigInt(value)，
// 因為JavaScript原生的Number能夠表示的最大值為2 ^ 53。)

var plusOne = function (digits) {
  if (digits.length > 11) {
    let digitsNum = BigInt(digits.join(''))
    digitsNum++
    digitsString = String(digitsNum)
    return digitsString.split('')
  }

  let digitsNum = Number(digits.join(''))
  digitsNum++
  digitsString = String(digitsNum)
  return digitsString.split('')
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
digits = [1,2,3]
digits.length = 3 < 11 //使用Number()
Number(digits.join('')) = 123 //先轉字串合併在一起，再轉數值
Number.(digits)++ = 123 + 1 = 124
String(digitsNum) = '124'
return digitsString.split('') = [1,2,4]
</pre> */
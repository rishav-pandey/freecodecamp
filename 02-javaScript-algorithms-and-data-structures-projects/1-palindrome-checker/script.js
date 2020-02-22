function palindrome(event) {
  // Good luck!
  event.preventDefault();
  let str = document.getElementById("palindrome-input").value;
  let result2 = "";
  if (str == "") {
    alert("Please enter the text to continue");
  } else {
    console.log(str);
    let result = false;
    str = str.toLowerCase();
    let newStr = str.replace(/[^0-9a-z]/gi, "");
    let length = newStr.length;
    // console.log(length);
    let mid = (0 + length) / 2;
    mid = Math.trunc(mid);
    // console.log(mid)

    for (let i = 0; i < mid; i++) {
      // console.log(newStr[i]);
      if (newStr[i] != newStr[length - 1 - i]) {
        result = false;
        result2 = " is not a palindrome";
        break;
      } else {
        result = true;
        result2 = " is a palindrome";
      }
      // console.log(result)
    }
    document.getElementById("result-text").innerHTML = str + result2;
    // console.log(result);
    // return result;
  }
}

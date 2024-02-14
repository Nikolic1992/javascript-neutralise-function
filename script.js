function neutralise(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "+" && str2[i] === "+") {
      result += "+";
    } else if (str1[i] === "-" && str2[i] === "-") {
      result += "-";
    } else {
      result += "0";
    }
  }
  return result;
}

// Test cases
console.log(neutralise("+-+", "+--")); // "+-0"
console.log(neutralise("--++--", "++--++")); // "000000"
console.log(neutralise("-+-+-+", "-+-+-+")); // "-+-+-+"
console.log(neutralise("-++-", "-+-+")); // "-+00"

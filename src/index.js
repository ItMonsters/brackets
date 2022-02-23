module.exports = function check(str, bracketsConfig) {
  let arr = [];
  bracketsConfig.forEach((e) => {
    arr.push(e.join(""));
  });
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (str.indexOf(arr[j]) > -1) {
        str = str.replace(arr[j], "");
        i--;
      }
    }
  }
  return str.length == 0;
};

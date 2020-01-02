/**
 * @param {number} num
 * @return {string}
 */

const THOUSANDS = ["", "Thousand", "Million", "Billion"];
const TENS = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety"
];
const LESS_THAN_TWENTY = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen"
];

const helpers = (str, num) => {
  if (num == 0) return "";
  else if (num < 20) {
    str = LESS_THAN_TWENTY[num] + " ";
    return str;
  } else if (num < 100) {
    str = TENS[Number.parseInt(num / 10)] + " ";
    str += helpers(str, num % 10);
    return str;
  } else {
    str += LESS_THAN_TWENTY[Number.parseInt(num / 100)] + " Hundred ";
    str += helpers(str, num % 100);
    return str;
  }
};

var numberToWords = function(num) {
  if (num == 0) return "Zero";

  let str = "",
    index = 0;

  while (num > 0) {
    if (num % 1000 != 0) {
      let tmp = helpers("", num % 1000);
      str = tmp + THOUSANDS[index] + " " + str;
    }
    index++;
    num = Number.parseInt(num / 1000);
  }
  return str.trim();
};

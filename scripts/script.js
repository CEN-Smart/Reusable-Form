"use strict";
let str = "+7(903)-123-45-67";
console.log(str.match(/\d/g).join(""));
function getMax(arr) {
	return Math.max(...arr);
}
console.log(getMax([1, 2, 3, 12, 1, 23]));

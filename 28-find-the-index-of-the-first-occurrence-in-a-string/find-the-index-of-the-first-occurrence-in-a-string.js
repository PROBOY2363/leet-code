/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
       let haystack1=haystack.toLowerCase();
  return haystack1.indexOf(needle);
};
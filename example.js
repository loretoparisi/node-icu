/**
 * NodeJS ICU tokenizer
 * code ported from https://github.com/chakrit/node-icu-wordsplit
 */
var splitWords = require('./lib');

var results = splitWords('The quick brown fox jumps over the lazy dog.');
console.log(results);

results = splitWords('th_TH', 'แยกคำภาษาไทยก็ทำได้นะจ้ะ');
console.log(results);
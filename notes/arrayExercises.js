
/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum (numbers) {
	// TODO: Add your solution here.
	var sum = numbers.reduce((acc, cur) => acc + cur);
	return sum;
 }

 console.log(sum([1, 4, 5, 6]));

 /**
  * @instruction
  * `doubleNumbers(numbers): Array`
  * Given an array of numbers, return an array where each element is double its original value.
  */
 function doubleNumbers (numbers) {
	// TODO: Add your solution here.
	var doubles = numbers.map((num => num * 2));
	return doubles;
 }

 console.log(doubleNumbers([4,5,6,7,8]));
 
 /**
  * @instruction
  * `doubleCharacters(chars): Array`
  * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
  */
 function doubleCharacters (chars) {
	// TODO: Add your solution here.
	var doubles = chars.map(char => char + char);
	return doubles;
 }

 console.log(doubleCharacters(['a', 'b', 'c', 'd', 'e']));
 
 /**
  * @instruction
  * `backwardsify(array): Array`
  * Reverse or flip the values in the array.
  */
 function backwardsify (array) {
	// TODO: Add your solution here.
	var rev = array.reverse();
	return rev;
 }

 console.log(backwardsify(['a', 'b', 'c', 'd', 'e']));

 
 /**
  * @instruction
  * `interleave(list1, list2): Array`
  * Should return a combined single array, with individual values alternating between list1 & list2.
  */
 function interleave (list1, list2) {
	// TODO: Add your solution here.

	//Input is two separate arrays
	//Must take the first value from list1, then push to the combined array.
	//Must take the first value from list2, then push to the combined array.
	//Output is one single combined array

	// let interleave = []
	// list1.forEach(list1Val => interleave.push(list1Val))
	// list2.forEach(list2Val => interleave.push(list2Val))

	var result = list1.reduce((arr, cur, i) => {
		return arr.concat(cur, list2[i]);
	}, []);

	return result;
}
	

 console.log(interleave(['a', 'b', 'e'], ['c', 'd','l']));
 
 /**
  * @instruction
  * `makeRange(count, fillString): Array`
  * Return array of `count` length where each element is set to `fillString`
  */
 function makeRange (count, fillString) {
	// TODO: Add your solution here.
	var string = fillString.concat(', ');
	return string.repeat(count);
 }

 console.log(makeRange(2, "I can haz?"));
 
 /**
  * @instuction
  * `countByFirstLetter(words): Object`
  * Given an array of words, return an object using *lowercase* letters as keys. The value should be a Number, with the count of words with same starting character.
  *
  * @example
  *
  * const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
  * countByFirstLetter(input)
  * // will return:
  * // {
  * //  c: 2, // cat + catzilla
  * //  k: 1, // kitty
  * //  f: 1  // fluffykins
  * // }
  */
 
 function countByFirstLetter (words) {
	// TODO: Add your solution here.
	var iterator = words.values();
	var firstLetters = []
	var count = []
	for(let letter of iterator){
		firstLetters.push(letter[0]);
	}
	firstLetters.forEach(x => count[x] = (count[x] || 0) + 1);
	return count;
 }

 console.log(countByFirstLetter(['Cat', 'Kitten', 'Kitah', 'Demon', 'Furball', 'Killer', 'Murderer', 'Butthead', 'Sleepy']));
 
 /**
  * @instructions
  * `groupByFirstLetter(words): Object`
  * Given an array of words, return an object using *lowercase* letters as keys.
  * The key value should be an array with only the words sharing a starting character.
  *
  * @example
  *
  * const input = ['Cat', 'Kitty', 'catzilla', 'fluffykins']
  * const result = groupByFirstLetter(input)
  * // result deep equals:
  * // {
  * //  c: ['cat', 'catzilla'],
  * //  k: ['kitty'],
  * //  f: ['fluffykins']
  * // }
  *
  */
 
 function groupByFirstLetter (words) {
	// TODO: Add your solution here.
	let count = []
	words.forEach();
	return count;
 }

 console.log(groupByFirstLetter(['Cat', 'Kitty', 'Catzilla', 'fluffykins', 'Cat']))


 
 /// ////// END OF CHALLENGE /////////
 /// ////// END OF CHALLENGE /////////
 /// ////// END OF CHALLENGE /////////
 
 if (typeof exports !== 'undefined') {
	// IGNORE: Test/Env Detected
	// For Node/Non-browser test env
	module.exports = {
	  sum,
	  doubleCharacters,
	  doubleNumbers,
	  backwardsify,
	  interleave,
	  makeRange,
	  countByFirstLetter,
	  groupByFirstLetter
	}
 }
 
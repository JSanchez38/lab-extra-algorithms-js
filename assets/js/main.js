
/**
 * [1, 2, 3, 4, 5] => [1, 5]
 * [1, 1, 1, 1] => [1, 1]
 * [1] => [1, 1]
 * [] => Error('Empty array, unable to obtain min and max numbers')
 * @param {[number]} numbers 
 * @returns {[number]}  
 */
function minMax(numbers) {
  let min;
  let max;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (min === undefined && max === undefined) {
      min = number;
      max = number;
    } else {
      if (number > max) {
        max = number;
      }
      if (number < min) {
        min = number;
      }
    }
  }
  const result = [min, max];
  return result;
}

/**
 * Kubernetes => k8s
 * Internationalization => i18n
 * Localization => l10n
 * Human resources => HR
 * General Data          Protection Regulation => GDPR
 * General Data Protection Regulation            
 * a => a
 * abc => abc
 * abcd => abcd
 * @param {string} word 
 * @returns {string}  
 */
function abbreviate(word) {
  if (word.includes(' ')) {
    let abbreviatedWord = '';
    const words = word.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word !== '') {
        abbreviatedWord += word[0].toUpperCase();
      }
    }
    return abbreviatedWord;
  } else if (word.length > 4) {
    const begin = word[0].toLowerCase();
    const between = word.length - 2;
    const end = word[word.length - 1].toLowerCase();
    return `${begin}${between}${end}`;
  } else {
    return word;
  }
}

/**
 * [1, 2, 3] - 2 => 1
 * [1, 2, 3] - 5 => -1
 * ['a', 'b'] - 'c' => -1
 * ['1', '2'] - 1 => -1
 * @param {[number | string]} elements 
 * @param {number | string} element 
 * @returns {number} index of the element or -1 if not exists
 */
function indexOf(elements, element) {
  let result = -1;
  let i = 0;
  while (i < elements.length && result === -1) {
    const iElement = elements[i];
    if (iElement === element) {
      result = i;
    }
    i++;
  }
  return result;
}

/**
 * [1, 2, 3, 4] - 2 => true
 * [1, 2, 3, 4] - 5 => false
 * [1, 2, 3, 4] - '1' => false
 * ['a', 'b', 'c'] - 'c' => true
 * ['a', 'b'] - 'd' => false
 * @param {[number | string]} elements 
 * @param {number | string} element 
 * @returns {boolean}
 */
  function exists(elements, element) {
  let result = false;
  let i = 0;
  while (i < element.length && !result) {
    const iElement = elements[i];
    if (iElement === element) {
      result = true;
    }
    i++;
  }
  return result;
}


/**
 * [1, 2, 3, 4] - 2 => false
 * [1, 1, 1, 1] - 1 => true
 * ['a', 'a'] - 'a' => true
 * ['a', 'b'] - 'a' => false
 * @param {[number | string]} elements 
 * @param {number | string} element
 * @returns {boolean}
 */
function every(elements, element) {

  let result = true;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== element) {
      result = false;
    }
  }
  return result;
}

/**
 * abcd - [0,3,1,2] => acdb
 * ab - [1,0] => ba
 * abc - [1] => Error('Word and array length mismatch')
 * @param {string} word 
 * @param {[number]} positions 
 * @returns {string}  
 */
function scrambleIt(word, positions) {
  const scramble = [];
  for (let i = 0; i < word.length; i++) {
    const position = positions[i];
    const char = word[i];
    scramble[position] = char;
  }
  return scramble.join('');
}

/**
 * 12345 => 54321
 * 34 => 43
 * @param {number} number 
 * @returns {number}  
 */
function reverseNumber(number) {

  let result = ""
  
  for (let i = number.length - 1; i >= 0 ; i--) {
    result += number[i]
    
  }
  return result
}


/**
 * 
 * versed - xersed => true
 * versed - applb => false
 * versed - v5rsed => true
 * 1versed - versed => true
 * versed1 - versed => true
 * versed - veersed => false
 * versed - versed => true
 * 
 * @param {string} original 
 * @param {string} sample 
 * @returns {boolean}  
 * function isMisspelled(word1, word2) {
  let result = false
  for (let i = 0; i < word1; i++) {
    const letter1 = word1[i].toLowerCase()
      for (let j = 0; j < word2; i++) {
        const letter2 = word2[i].toLowerCase()
        
        if (letter1 === letter2) {
          result = true
        } else if (letter1 !== letter2 && letter1.length === letter2.length) {
          result = true
        } else if (letter1[0] !== letter2[0] || letter2[0] !== letter1[0] && letter1.length === letter2.length) {
          result = true
        } else if (letter1[letter1.length - 1] !== letter2[letter2.length - 1] && letter1.length === letter2.length) {
          result = true
        } else {
          result = false
        }
  }
 }
  return result
}
 */
function isMisspelled(original, sample) {

  const result = false
  const word1Len = word1.length
  const word2Len = word2.length

  let difference = Math.abs(word1Len - word2Len)

  if (word1 === word2) {
    return true
  } else if (difference > 1) {
    return false
  } else {

    let countMisses = 0

    for (let i = 0; i < word1Len; i++) {
      for (let j = 0; j < word2Len; i++) {
        
        }
      }
      if (countMisses > 1) {
        result = false
      }

    }
  }




/**
 * hello world => Hello World
 * this is a sentence => This is a Sentence
 * @param {*} sentence 
 * @returns {string}  
 */

function capitalize(sentence) {
  let noSpaces = sentence.split(" ")
  let result = ""
  
  for (let i = 0; i < noSpaces.length; i++) {
    const word = noSpaces[i]
    
    if (word.length < 4) {
      result += word + " "
    } else if (word.length >= 4) {
      result += word[0].toUpperCase() + word.slice(1) + " "
    }
  }
  return result.trim()
 }


//si una palabra contiene toda las vocales

function containsAllVowels(words) {
  const vowels = ["a", "e", "i", "o", "u"]

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    if (!vowels.includes(word)) {
      return false
    } else {
      return true
    }
  }
}
console.log(containsAllVowels("ealliuo"))

/**
 * Count how many sheep there are in array (ignoring cases).
 * If there are a wolf in the array then a poor sheep will die, but if there are a dog then the wolf can't kill a sheep.
 * ['sheep', 'wolf', 'dog', 'ShEep'] => 2
 * ['sheep', 'wolf', 'wolf', 'dog'] => 1
 * ['wolf', 'dog'] => 0
 * [] => 0
 * ['shep'] => 0
 * ['SHEEP', 'sheep', 'dog'] => 2
 * @param {[string]} animals 
 * @returns {number}
 */
function countSheep(animals) {
  
  let count = 0

  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i]

    if (animal === "sheep") {
      count++
    } else if (animal === "wolf") {
      count--
    } else if (animal === "dog" && animal === "wolf") {
      return count
    } else {
      return count
    }
  }
  return count
}
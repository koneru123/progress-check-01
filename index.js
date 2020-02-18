const sumFirstAndLastArray = function(arr) {
  // Instructions:
  // return the value of the first element and last element summed
  // your code here
};

const sumKeyOneAndKeyTwoObject = function(obj, keyOne, keyTwo)  {
  // Instructions:
  // return the value at keyOne and keyTwo summed
  // your code here
};

const sumArrayValues = function(arr) {
  // Instructions:
  // fix the following code so it returns the values in the given array summed
  // your code here
  let arraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    arraySum += i;
  }
  return arraySum;
};

const returnTeamObject = function() {
  // Instructions:
  // fix the following code so it returns a correctly formatted object
  const obj = {};
  obj[0] = "Ash";
  obj["1"] = "Lydia";
  obj[x] = "Nathan";
  obj.you = FILL_ME_IN;
  return obj;
};

// fix the following code
const returnTheGivenValue = function val {
  // Help me! I am broken; I need to return the value that is passed in as an argument
  val;
};

const addTwoNums = function(numOne) {
  // Instructions:
  // This is working code, describe how would you use it?
  return function(numTwo) {
    return numOne + numTwo;
  };
};

// Invoke the addTwoNums function to make the following pass.
console.assert(FILL_ME_IN === 7, 'Should Return 7');

const concatTwoStrings = function (stringOne, stringTwo)  {
  // Instructions:
  // fix the code so that it returns stringOne and stringTwo
  // concatenated together with a space in between them
  // your code here
  stringOne + stringTwo;
};

const setPlayerScore = (player, score) => {
  // Instructions:
  // make this function able to take in a player object and a number
  // and set the key of 'currentScore' to the given score argument
  // your code here
};

const countOccurences = (arr, val) => {
  // Instructions:
  // make this function able to look through a given array and count
  // the number of times it contains the given value
  // return an object with the count as the number of occurrences
  // i.e. if given ["cookie"], "cookie" you would return { "cookie": 1 }
  // your code here
};

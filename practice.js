// function reverseWordsInString(string) {
//   let words = [];
//   // let whiteSpacePositions = []
//   let strLen = string.length;
//   let resultStr = '';
//   while (string.length > 0) {
//     let whiteSpacePosition = string.indexOf(' ');
//     if(whiteSpacePosition === 0) 
//     {
//     	// whiteSpacePositions.push(whiteSpacePosition);
//       words.push(' ');
//       string = string.replace(' ', '');
//     } else if(whiteSpacePosition > 0) 
//     {
//       let word = string.substring(0, whiteSpacePosition)
//       words.push(word);
//       words.push(' ');
//       // whiteSpacePositions.push(whiteSpacePosition);
//       string = string.replace(word + ' ', '').trimStart();
//     }else if(whiteSpacePosition === -1) {
//     	let word = string.substring(0, string.length)
//       string = string.replace(word, '').trimStart();
//       words.push(word);
//     }
//     // strLen = string.length;
//   }
//   // console.log(words);
//   for (let i = words.length - 1; i >= 0; i--){
//     resultStr += words[i];
//   }
//   return resultStr;
// }


// console.log(reverseWordsInString('   hi hello nilesh'));

// function caesarCipherEncryptor(string, key) {
//   let min = 'a'.charCodeAt(0);
//   let max = 'z'.charCodeAt(0);
//   let result = ''
//   string.split('').forEach(element => {
//     let code = element.charCodeAt(0);
//     let newCode = code + key;
//     while (newCode > max) {
//       newCode = min + (newCode - max - 1);
//     }
//     result += String.fromCharCode(newCode);
//   });
//   return result;
// }
// console.log(caesarCipherEncryptor('abc', 52));

// function runLengthEncoding(string) {
//   let result = '';
//   let runs = 1;
//   for(let i = 1; i <= string.length ; i++) {
//     let char = string[i];
//     let preChar = string[ i - 1];
//     if (char !== preChar || runs === 9) {
//       result += `${runs}${preChar}`
//       runs = 0;
//     }
//     runs++;
//   }
//   return result;
// }
// console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'));

// function generateDocument(characters, document) {
//   // Write your code here.
//   let uniqueOfChars = [];
//   let uniqueOfDoc = [];
//   return characters.split('').sort().join('').split(' ').join('');
// }
// console.log(generateDocument('hi how are you'))

// function groupAnagrams(words) {
//   let hash = {};
//   for (let word of words) {
//     let key = word.split('').sort().join('');
//     if (key in hash) {
//       hash[key].push(word);
//     } else {
//       hash[key] = [word];
//     }
//   }
//   let result = [];
//   for (let key in hash) {
//     result.push(hash[key]);
//   }
//   return result;
// }

// console.log(groupAnagrams(['mary', 'army', 'ad', 'da']))

// function reverseWordsInString(string) {
//   let words = [];
//   let word = '';
//   for(let i = 0; i < string.length; i++) {
//     if (string[i] !== ' '){
//       word += string[i];
//       if (i === string.length - 1) {
//         words.push(word);
//       }
//     } else if (string[i] === ' ') {
//       words.push(word);
//       words.push(' ');
//       word = ''
//     }
//   }
//   let resultStr = '';
//   for (let i = words.length - 1; i >= 0; i--) {
//     resultStr += words[i];
//   }
//   return resultStr;
// }
// console.log(reverseWordsInString('hi how  are you'))

// function sortedSquaredArray(array) {
//   // Write your code here.
//   let result = [];
//   let start = 0;
//   let end = array.length - 1;
//   while (start <= end) {
//     if (Math.abs(array[start]) <= Math.abs(array[end])) {
//       result.unshift(array[end] * array[end])
//       end--;
//     } else {
//       result.unshift(array[start] * array[start])
//       start++
//     }
//   }
//   return result;
// }

// console.log(sortedSquaredArray([1,2,3,4,5]))

// function tournamentWinner(competitions, results) {
//   let matchScores = {};
//   let highestScorer = { team: '', score: '' }
//   for (let i = 0; i < competitions.length; i++) {
//     let homeTeam = competitions[i][0];
//     let awayTeam = competitions[i][1];
//     if (!matchScores[homeTeam]) matchScores[homeTeam] = 0;
//     if (!matchScores[awayTeam]) matchScores[awayTeam] = 0;
//     if (results[i] === 0) {
//       matchScores[awayTeam] += 3;
//       if (highestScorer.score < matchScores[awayTeam]) {
//         highestScorer.team = awayTeam;
//         highestScorer.score= matchScores[awayTeam];
//       }
//     } else {
//       matchScores[homeTeam] += 3;
//       if (highestScorer.score < matchScores[homeTeam]) {
//         highestScorer.team = homeTeam;
//         highestScorer.score = matchScores[homeTeam];
//       }
//     }
//   }
//   return highestScorer.team;
// }

// function tournamentWinner(competitions, results) {
//   let matchScores = {};
//   let highestScorer = { team: '', score: '' }
//   for (let i = 0; i < competitions.length; i++) {
//     let homeTeam = competitions[i][0];
//     let awayTeam = competitions[i][1];
//     let winnerTeam = results[i] === 0 ? awayTeam : homeTeam;
//     if (!matchScores[winnerTeam]) matchScores[winnerTeam] = 0;
//     matchScores[winnerTeam] += 3;
//     if (highestScorer.score < matchScores[winnerTeam]) {
//       highestScorer.team = winnerTeam;
//       highestScorer.score = matchScores[winnerTeam];
//     }
//   }
//   return highestScorer.team;
// }

// console.log(tournamentWinner([['HTML', 'C#'], ['C#', 'Python'], ['Python', 'HTML']], [0,0,1]))


// function sortedArray(array) {
//   // Write your code here.
//   let result = [];
//   let start = 0;
//   let end = array.length - 1;
//   while (start <= end) {
//     console.log('start', start, 'end', end, 'start val', array[start], 'end val', array[end])
//     if (array[start] < array[end]) {
//       result.unshift(array[end])
//       end--;
//     } else {
//       result.unshift(array[start])
//       start++
//     }
//   }
//   return result;
// }
// function swap(arr, i , j){
//  let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function sortedArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     let smallest = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[smallest]) {
//         smallest = j
//       }
//     }
//     swap(array, i, smallest)
//   }
//   return array;
// }

// function nonConstructibleChange(coins) {
//   let sortedCoins = sortedArray(coins);
//   let change = 0;
//   for (let coin of sortedCoins) {
//     if (change + 1 >= coin) {
//       change += coin
//     } else {
//       return change + 1;
//     }
//   }
//   return change === 0 ? 1 : change + 1;
// }
// console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
// function generateDocument(characters, document) {
//   // Write your code here.
//   let charIdx = 0;
//   let docIdx = 0;
//   let uniqueOfChars = {};
//   let uniqueOfDoc = {};
//   while (charIdx < characters.length || docIdx < document.length) {
//     if (!uniqueOfChars[characters[charIdx]]) uniqueOfChars[characters[charIdx]] = 1;
//     else uniqueOfChars[characters[charIdx]]++;
//     if (document[docIdx]) {
//       if (!uniqueOfDoc[document[docIdx]]) uniqueOfDoc[document[docIdx]] = 1;
//       else uniqueOfDoc[document[docIdx]]++;
//     }
//     charIdx++;
//     docIdx++;
//   }
//   let result = true;
//   for (let char of document) {
//     if (!uniqueOfChars[char] || uniqueOfDoc[char] > uniqueOfChars[char] ) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }

// console.log(generateDocument('Bste!hetsi ogEAxpelrt x ','AlgoExpert is the Best!'));

// function minimumCharactersForWords(words) {
//   // Write your code here.
//   let obj = {}
//   for (let word of words) {
//     let availableChars = Object.assign({}, obj);
//     for (let char of word) {
//       if (char in obj && char in availableChars) {
//         availableChars[char]--;
//         if (availableChars[char] < 0) {
//           obj[char]++;
//         }
//       } else {
//         obj[char] = 1;
//         availableChars[char] = 1;
//       }
//     }
//   }
//   let result = []
//   for (let key in obj){
//     for (let i = 0; i < obj[key]; i++){
//       result.push(key);
//     }
//   }
//   return result;
// }
// console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]));
// "!!!2", "234", "222", "432"


// function moveElementToEnd(array, toMove) {
//   let pos = 0;
//   let c = 0;
//   while (c < array.length) {
//     if (array[pos] === toMove) {
//       array.push(array[pos]);
//       array.splice(pos, 1);
//     } else {
//       pos++
//     }
//     c++;
//   }
//   return array;
// }
// console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

// function smallestDifference(arrayOne, arrayTwo) {
//   let smallestDiff = null;
//   let result = [];
//   for (let i = 0; i < arrayOne.length; i++) {
//     for (let j = 0; j < arrayTwo.length; j++) {
//       let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
//       if (smallestDiff > diff || smallestDiff === null) {
//         smallestDiff = diff
//         result = [arrayOne[i], arrayTwo[j]];
//       }
//     }
//   }
//   return result;
// }

// console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
// console.log(smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8]));

// function isMonotonic(array) {
//   let isAscDsc = null;
//   for (let i = 1; i < array.length; i++) {
//     if (array[i - 1] ===  array[i]) continue;
//     let flag = array[i - 1] < array[i] ? 0 : 1
//     if (isAscDsc === null) isAscDsc = flag;
//     if (isAscDsc !== flag) return false;
//   }
//   return true;
// }
// // console.log(isMonotonic([-100 ,-1, -5, -10, -20, -28]));
// // console.log(isMonotonic([1, 2]));
// // console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]));
// console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
// function spiralTraverse(array) {
//   let sr = 0;
//   let er = array.length - 1;
//   let sc = 0;
//   let ec = array[0].length - 1;
//   let result = [];
//   while (sr <= ec && er >= 0 && sr <= er)
//   {
//     traverse(array, sr, er, sc, ec, result);
//     sr++;
//     er--;
//     sc++;
//     ec--;
//   }
//   return result;
// }
// function traverse(array, sr, er, sc, ec, result) {
//   for (let i = sc; i <= ec; i++) {
//     result.push(array[sr][i]);
//   }
//   if(sr != er) {
//     for (let i = sr + 1; i <= er; i++) {
//       result.push(array[i][ec]);
//     }
//     for (let i = ec - 1; i >= sc; i--) {
//       result.push(array[er][i]);
//     }
//     if (sc != sr) {
//       for (let i = er - 1; i > sr; i--) {
//         result.push(array[i][sc]);
//       }
//     }
//   }
// }
// console.log(spiralTraverse([
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7],
// ]));

// console.log(spiralTraverse([
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]));
// console.log(spiralTraverse([
//   [1],
//   [3],
//   [2],
//   [5],
//   [4],
//   [7],
//   [6]
// ]));

// console.log(spiralTraverse([[1, 3, 2, 5, 4, 7, 6]]))


// console.log(spiralTraverse([[4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
//   [12, 19, 15, 16, 20, 18, 13, 17, 11, 14]]))

// function threeNumberSum(array, targetSum) {
//   // Write your code here.
//   let sortedArr = array.sort((a, b) => a - b);
//   let result = [];
//   for (let i = 0; i < sortedArr.length; i++)
//   {
//     for (let j = i + 1; j < sortedArr.length; j++) {
//       let a = sortedArr[i];
//       let b = sortedArr[j];
//       let x = targetSum - (a + b);
//       if ((a + b + x) === targetSum && sortedArr.includes(x) && b < x) {
//         result.push([a, b, x]);
//       }
//     }
//   }
//   return result;
// }
// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))

// console.log(threeNumberSum([8, 10, -2, 49, 14] , 57))

// function longestPeak(array) {
//   let lastRun = 0;
//   let run = 1;
//   let peakFound = false;
//   for(let i = 1; i < array.length; i++) {
//     let pre = array[i - 1];
//     let current = array[i];
//     let next = array[i + 1];
//     // run++;
//     if (!peakFound) {
//       if (pre < current) run++;
//       else run = 1
//       if (pre < current  && next != undefined && current > next) {
//       peakFound = true;
//       }
//     } else if (peakFound) {
//       if (pre > current) run++;
//       if ((pre >= current && next != undefined && current <= next) || next == undefined) {
//         peakFound = false;
//         if (lastRun < run) lastRun = run;
//         run = 1;
//       }
//     }
//   }
//   return lastRun;
// }
//   function longestPeak(array) {
//     let lastRun = 0;
//     let run = 1;
//     let peakFound = false;
//     for (let i = 1; i <= array.length - 1; i++) {
//       let pre = array[i - 1];
//       let current = array[i];
//       let next = array[i + 1];
//       if ((!peakFound && pre < current) || (peakFound && pre > current)) run++;
//       else run = 1;
//       if (pre < current && current > next) {
//         peakFound = true;
//       }
//       if (peakFound && (current <= next || i + 1 == array.length)) {
//         peakFound = false;
//         if (lastRun < run) lastRun = run;
//         run = 1;
//       }
//     }
//     return lastRun;
//   }
//   // console.log(longestPeak([]))
//   console.log(longestPeak([1, 2, 3, 3, 4, 0, 10]))
// console.log(longestPeak([5, 4, 3, 2, 1, 2, 10, 12]))
// console.log(longestPeak([1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]))
// console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
// console.log(longestPeak([1, 2, 3, 4, 5, 1]));
// console.log(longestPeak([5, 4, 3, 2, 1, 2, 1]));

function checkValidateParts(parts) {
  var blocks = parts.split(".");
  return blocks.every(checkValidatePart);
}
function checkValidatePart(part) {
  if (part.length > 1) return part[0] !== '0' && (parseInt(part, 10) >= 0 && parseInt(part, 10) <= 255)
  return true;
}
function getParts(string, existingParts, partNo) {
  let result = [];
  for (let part of existingParts) {
    let len = part.length - (partNo - 1);
    let i = len + 1;
    let stop = string.length - len >= 3 ? len + 3 : len + (string.length - len);
    while (i <= stop) {
      let nextPart = string.substring(len, i)
      let blocks = `${part}.${nextPart}`;
      if (partNo == 4) {
        if (checkValidateParts(blocks) && blocks.length - 3 === string.length){
          result.push(blocks);
        }
      } else {
        if(checkValidateParts(blocks)) {
          result.push(blocks)
        }
      }
      i++;
    }
  }
  return result;
}
// function validIPAddresses(string) {
//   let firstValidParts = [];
//   for (let i = 1; i <= 3; i++) {
//     let block = string.substring(0, i);
//     if (checkValidatePart(block)) {
//       firstValidParts.push(block)
//     }
//   }
//   let secondValidParts = getParts(string, firstValidParts, 2);
//   let thirdValidParts = getParts(string, secondValidParts, 3);
//   let fourthValidParts = getParts(string, thirdValidParts, 4);
//   // for (let thirdPart of thirdValidParts) {
//   //   let len = thirdPart.length - 2;
//   //   let i = len + 1;
//   //   let stop = string.length - len >= 3 ? len + 3 : len + (string.length - len);
//   //   while (i <= stop) {
//   //     let blocks = `${thirdPart}.${string.substring(len, i)}`;
//   //     if (checkValidateParts(blocks) && blocks.length - 3 === string.length) {
//   //       fourthValidParts.push(blocks)
//   //     }
//   //     i++;
//   //   }
//   // }
//   return fourthValidParts;
// }
// console.log(validIPAddresses('1921680'))
// console.log(checkValidatePart('1921680'))
// console.log(checkValidatePart('1921680'))


// function test(rungs, dist) {
//   let index = 0;
//   let iamAt  = 0;
//   let c = 0;
//   while (index <= rungs.length-1) {
//     let diff = rungs[index] - iamAt;
//     if (diff <= dist){
//       iamAt = rungs[index];
//       index++;
//       continue;
//     }
//     iamAt += dist;
//     c++;
//   }
//   return c;
// }


// arr.splice(2, 0, "Lene");
// function binarySearch(array, key) {
//   let l = 0;
//   let h = array.length - 1;
//   let mid = Math.floor((l+h)/2)
//   while(l<=h) {
//     if (array[mid] == key) return true;
//     if (array[mid] > h) h = h -1;
//     if (array[mid] < h) l = h + 1
//   }
//   return false;
// }

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let trend = redShirtHeights[0] < blueShirtHeights[0] ? 'one' : 'two';
  for (let i = 1; i < redShirtHeights.length; i++) {
    if ((trend === 'one' && redShirtHeights[i] >= blueShirtHeights[i]) || (trend === 'two' && redShirtHeights[i] <= blueShirtHeights[i])) {
      return false;
    }
  }
  return true;
}
// console.log(classPhotos([6, 9, 2, 4, 5], [5, 8, 1, 3, 4]))
// console.log(checkValidatePart('1921680'))
// console.log(checkValidatePart('1921680'))

// function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
//   // Write your code here.
//   let sorted = [...redShirtSpeeds, ...blueShirtSpeeds].sort((a, b) => a - b);
//   let maximum = 0;
//   let minimum = 0;
//   for (let i = 0; i < redShirtSpeeds.length; i++) {
//     minimum += sorted[i];
//   }
//   for (let i = redShirtSpeeds.length; i < sorted.length; i++) {
//     maximum += sorted[i];
//   }
//   return fastest ? maximum : minimum;
// }

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  let maximum = 0;
  let minimum = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let pair1 = [redShirtSpeeds[i], blueShirtSpeeds[((blueShirtSpeeds.length - 1) - i)]]
    let pair2 = [redShirtSpeeds[i], blueShirtSpeeds[i]]
    maximum += Math.max(...pair1)
    minimum += Math.max(...pair2)
  }
  return fastest ? maximum : minimum;
}

// console.log(tandemBicycle([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], true))
// console.log(tandemBicycle([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], false))


function taskAssignment(k, tasks) {
  let sorted = [...tasks].sort((a, b) => a - b);
  let start = 0;
  let end = sorted.length - 1;
  let result = [];
  while (start <= k && end >= k) {
    let a = tasks.indexOf(sorted[start]);
    tasks.splice(a, 1, 'x');
    let b = tasks.indexOf(sorted[end]);
    tasks.splice(b, 1, 'x');
    let pair = [a, b]
    result.push(pair);
    start++;
    end--;
  }
  return result;
}


// console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]))

function validStartingCity(distances, fuel, mpg) {
  let myFuel = 0;
  let run = 0;
  let position = 0;
  let iamAt = 0;
  while (run <= distances.length - 1) {
    myFuel += (mpg * fuel[position]) - distances[position];
    if (myFuel >= 0) {
      run++;
      position++;
      if (position > distances.length - 1) position = 0;
      continue;
    }
    iamAt++;
    if (iamAt > distances.length - 1) iamAt = 0;
    position = iamAt;
    run = 0;
    myFuel = 0;
	}
  return iamAt;
}
// console.log(validStartingCity([5, 25, 15, 10, 15], [1, 2, 1, 0, 3], 10))


function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);
  let sum = 0;
  let acc = 0
  for (let i = 0; i < queries.length - 1; i++) {
    sum += queries[i];
    acc += sum;
  }
  return acc;
}
// console.log(minimumWaitingTime([3, 2, 1, 2, 6]))

// function binarySearch(array, target) {
//   let l = 0;
//   let h = array.length - 1;
//   while (l <= h) {
//     let mid = Math.floor((l + h) / 2)
//     if (array[mid] == target) return mid;
//     if (array[mid] > target) h = mid - 1;
//     if (array[mid] < target) l = mid + 1
//   }
//   return -1;
// }

function binarySearch(array = [], l = 0 , h = 0, target = 0) {
  while (l <= h) {
    let mid = Math.floor((l + h) / 2)
    if (array[mid] === target) return mid;
    if (array[mid] > target) return binarySearch(array, l, mid - 1, target);
    return binarySearch(array, mid + 1, h, target);
  }
  return -1;
}

function findThreeLargestNumbers(array) {
  let result = [null, null, null];
  for (let num of array ) {
    makeShifting(result, num);
  }
  return result;
}
function makeShifting(array, num) {
  if (array[2] === null || array[2] <= num) updatePosition(array, 2, num);
  else if (array[1] === null || array[1] <= num) updatePosition(array, 1, num)
  else if (array[0] === null || array[0] <= num) array[0] = num;
}
function updatePosition(array, position, value) {
  let copy = [...array];
  for (let i = position - 1; i >= 0; i--) {
    array[i] = copy[i + 1];
   }
  array[position] = value;
}
function shiftLargestToEnd(array, start, end) {
  for (let i = start; i <= end; i++) {
    let a = array[i - 1];
    let b = array[i];
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    array[i - 1] = min;
    array[i] = max;
  }
}


// console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
// 141, -7, 541 8

// function searchBST(node, target, previousNode = {}) {
//   if (node === null) return previousNode.value;
//   else if (node.value === target) return node.value;
//   else if (target > node.value) return searchBST(node.right, target, node);
//   else if (target < node.value) return searchBST(node.left, target, node);
// }

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return searchBST(tree.nodes, getNode(tree.nodes, tree.root), target, tree.root);
  // return closest;
}
function getNode(nodes, key) {
  let node = nodes.find(n => n.id == key);
  return node ? node : null;
}

function buildBST(nodes, root) {
  let bst = new BST(root);
  for (let node of nodes) {
    bst.left = new BST(node.left);
    bst.right = new BST(node.right);
  }
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function searchBST(nodes, node, target, closest) {
  if (node === null) {
    return closest;
  }
  else if (node.value === target) {
    return node.value;
  }
  else if (target > node.value) {
    if (Math.abs(closest - target) > Math.abs(node.value - target)) closest = node.value;
    return searchBST(nodes, getNode(nodes, node.right), target, closest);
  } else if (target < node.value) {
    if (Math.abs(closest - target) > Math.abs(node.value - target)) closest = node.value;
    return searchBST(nodes, getNode(nodes, node.left), target, closest);
  }
}

let input1 = {
  "nodes": [
    { "id": "10", "left": "5", "right": "15", "value": 10 },
    { "id": "15", "left": "13", "right": "22", "value": 15 },
    { "id": "22", "left": null, "right": null, "value": 22 },
    { "id": "13", "left": null, "right": "14", "value": 13 },
    { "id": "14", "left": null, "right": null, "value": 14 },
    { "id": "5", "left": "2", "right": "5-2", "value": 5 },
    { "id": "5-2", "left": null, "right": null, "value": 5 },
    { "id": "2", "left": "1", "right": null, "value": 2 },
    { "id": "1", "left": null, "right": null, "value": 1 }
  ],
    "root": "10"
}
let input = {
    "nodes": [
      { "id": "100", "left": "5", "right": "502", "value": 100 },
      { "id": "502", "left": "204", "right": "55000", "value": 502 },
      { "id": "55000", "left": "1001", "right": null, "value": 55000 },
      { "id": "1001", "left": null, "right": "4500", "value": 1001 },
      { "id": "4500", "left": null, "right": null, "value": 4500 },
      { "id": "204", "left": "203", "right": "205", "value": 204 },
      { "id": "205", "left": null, "right": "207", "value": 205 },
      { "id": "207", "left": "206", "right": "208", "value": 207 },
      { "id": "208", "left": null, "right": null, "value": 208 },
      { "id": "206", "left": null, "right": null, "value": 206 },
      { "id": "203", "left": null, "right": null, "value": 203 },
      { "id": "5", "left": "2", "right": "15", "value": 5 },
      { "id": "15", "left": "5-2", "right": "22", "value": 15 },
      { "id": "22", "left": null, "right": "57", "value": 22 },
      { "id": "57", "left": null, "right": "60", "value": 57 },
      { "id": "60", "left": null, "right": null, "value": 60 },
      { "id": "5-2", "left": null, "right": null, "value": 5 },
      { "id": "2", "left": "1", "right": "3", "value": 2 },
      { "id": "3", "left": null, "right": null, "value": 3 },
      { "id": "1", "left": "-51", "right": "1-2", "value": 1 },
      { "id": "1-2", "left": null, "right": "1-3", "value": 1 },
      { "id": "1-3", "left": null, "right": "1-4", "value": 1 },
      { "id": "1-4", "left": null, "right": "1-5", "value": 1 },
      { "id": "1-5", "left": null, "right": null, "value": 1 },
      { "id": "-51", "left": "-403", "right": null, "value": -51 },
      { "id": "-403", "left": null, "right": null, "value": -403 }
    ],
      "root": "100"
}
// console.log(buildBST(input.nodes, input.root))
// console.log(findClosestValueInBst(input, 2000))


var areOccurrencesEqual = function (s) {
  let obj = {}
  for (let c of s) {
    if (!(c in obj)) {
      obj[c] = 1;
    } else {
      obj[c]++;
    }
  }
  let x = null;
  for(let k in obj) {
    if (x === null) x = obj[k];
    else if (x !== obj[k]) return false;
  }
  return true;
}
console.log(areOccurrencesEqual('aaabb'))
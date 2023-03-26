/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const sSet = new Set(s.split(""));
    for(let i in t) {
        if(!sSet.has(t[i])) return false;
    }
    return true;
};


function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const result = {};
    for (let i=0;i<str1.length;i++) {
        let char = str1[i];
        result[char] = result[char] ? result[char] += 1 : result[char] = 1;
    }

    for (let i=0;i<str2.length;i++) {
        let char = str2[i];
        if (!result[char]) {
            return false;
        }
        else {
            result[char] = -1;
        }
    }
    return true;
}
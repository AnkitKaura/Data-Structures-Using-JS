/*
    Q1. Binary Search
    Given an array of integers nums which is sorted in ascending order, and an 
    integer target, write a function to search target in nums. If target exists, then 
    return its index. Otherwise, return -1.
    You must write an algorithm with O(log n) runtime complexity.
*/
/**
 * 
 * @param {number} arr sorted elements 
 * @param {number} searchVal value to find
 */
const BinarySearch = (arr, searchVal) => {
    let startIndex = 0, endIndex = arr.length-1;
    let midIndex;
    while (endIndex >= startIndex) {
        midIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
        console.log(`StartIndex = ${startIndex}, MidIndex = ${midIndex}, EndIndex = ${endIndex}`)
        if (arr[midIndex] === searchVal) {
            return midIndex
        } 
        if (arr[midIndex] > searchVal) {
            endIndex = midIndex - 1
        } else {
            startIndex = midIndex + 1
        }

    }
    return -1
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
const searchItem = 12
const ans = BinarySearch(arr,searchItem)
if(ans === -1) {
    console.log(`Value not found at any index`)
} else {
    console.log(`Value ${searchItem} found at index = ${ans} `)
}
# JavaScript Coding Problems

## 1. Find the Largest Number in an Array

### Problem

Given an array of numbers, find the largest number.

### Example

```javascript
Input: [1, 2, 4, 5, 9]
Output: 9
```

### Solution

```javascript
function largest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(largest([1, 2, 4, 5, 9]));
```

### Output

```text
9
```

### Time Complexity

```text
O(n)
```

### Space Complexity

```text
O(1)
```

### Interview Explanation

1. Assume the first element is the largest.
2. Traverse the array.
3. If the current element is greater than `max`, update `max`.
4. Return `max` after the loop completes.

### Alternative Solution

```javascript
const largest = (arr) => Math.max(...arr);
```

### Follow-up Questions

* Find the second largest number.
* Find the largest number without using built-in methods.
* Find the largest number in a nested array.

---

## 2. Find the Second Largest Number in an Array

### Problem

Find the second largest unique number in an array.

### Example

```javascript
Input: [1, 2, 4, 5, 9]
Output: 5
```

### Solution

```javascript
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (const num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }

    return second;
}

console.log(secondLargest([1, 2, 4, 5, 9]));
```

### Output

```text
5
```

### Time Complexity

```text
O(n)
```

### Space Complexity

```text
O(1)
```
# Sorting Algorithms for Interviews

---

## 1. Bubble Sort

### Answer

Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.

### Code

```javascript
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5, 3, 8, 1, 2]));
```

### Time Complexity

```text
Best: O(n)
Average: O(n²)
Worst: O(n²)
```

### Space Complexity

```text
O(1)
```

### Interview Definition

Bubble Sort compares adjacent elements and swaps them until the array becomes sorted.

---

## 2. Selection Sort

### Answer

Selection Sort repeatedly finds the smallest element and places it at the beginning.

### Code

```javascript
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        or 
        let temp= arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]= temp;
    }

    return arr;
}

console.log(selectionSort([5, 3, 8, 1, 2]));
```

### Time Complexity

```text
O(n²)
```

### Space Complexity

```text
O(1)
```

### Interview Definition

Selection Sort repeatedly selects the minimum element and places it in its correct position.

---

## 3. Insertion Sort

### Answer

Insertion Sort builds a sorted array one element at a time.

### Code

```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

console.log(insertionSort([5, 3, 8, 1, 2]));
```

### Time Complexity

```text
Best: O(n)
Average: O(n²)
Worst: O(n²)
```

### Space Complexity

```text
O(1)
```

### Interview Definition

Insertion Sort inserts each element into its proper position within the already sorted portion of the array.

---

## 4. Merge Sort

### Answer

Merge Sort uses the divide-and-conquer approach by splitting the array and merging sorted halves.

### Code

```javascript
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([5, 3, 8, 1, 2]));
```

### Time Complexity

```text
O(n log n)
```

### Space Complexity

```text
O(n)
```

### Interview Definition

Merge Sort recursively divides the array and merges sorted halves into a final sorted array.

---

## 5. Quick Sort

### Answer

Quick Sort selects a pivot element and partitions the array around it.

### Code

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
}

console.log(quickSort([5, 3, 8, 1, 2]));
```

### Time Complexity

```text
Best: O(n log n)
Average: O(n log n)
Worst: O(n²)
```

### Space Complexity

```text
O(log n)
```

### Interview Definition

Quick Sort chooses a pivot and recursively sorts the elements smaller and larger than the pivot.

---

## Interview Comparison Table

| Algorithm      | Best       | Average    | Worst      | Space    |
| -------------- | ---------- | ---------- | ---------- | -------- |
| Bubble Sort    | O(n)       | O(n²)      | O(n²)      | O(1)     |
| Selection Sort | O(n²)      | O(n²)      | O(n²)      | O(1)     |
| Insertion Sort | O(n)       | O(n²)      | O(n²)      | O(1)     |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) | O(n)     |
| Quick Sort     | O(n log n) | O(n log n) | O(n²)      | O(log n) |

## What is an Anagram?

Two strings are anagrams if they contain the same characters with the same frequency, regardless of order.

### Example

```javascript
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let map = {};

    for (let char of str1) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!map[char]) return false;
        map[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));

```

## Palindrome Check

A palindrome is a string that reads the same forward and backward.

### Example

```javascript
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam"));

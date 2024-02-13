function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let firstZeroIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0) {
            firstZeroIndex = mid; // Found a zero, might not be the first.
            right = mid - 1; // Move left to find the first occurrence.
        } else {
            left = mid + 1; // Move right since we're still in the ones.
        }
    }

    // If firstZeroIndex is still -1, no zeroes were found.
    return firstZeroIndex !== -1 ? arr.length - firstZeroIndex : 0;
}


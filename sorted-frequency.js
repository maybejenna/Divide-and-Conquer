function sortedFrequency(arr, num) {
    let firstNumIndex = findFirst(arr, num);
    let lastNumIndex = findLast(arr, num);

    if (firstNumIndex === -1) return -1; // If the number is not found, return -1

    return lastNumIndex - firstNumIndex + 1;
}

// Helper function to find the first occurrence of num
function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let index = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        if (arr[mid] === num) index = mid;
    }
    return index;
}

// Helper function to find the last occurrence of num
function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let index = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        if (arr[mid] === num) index = mid;
    }
    return index;
}
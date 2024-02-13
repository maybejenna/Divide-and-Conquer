function findFloor(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstFloor = -1
  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= num) {
            firstFloor = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

// module.exports = findFloor
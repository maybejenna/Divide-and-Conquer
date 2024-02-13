function findRotationCount(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // If the array is not rotated
        if (arr[low] <= arr[high]) {
            return low;
        }

        let mid = Math.floor((low + high) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid - 1 + arr.length) % arr.length;

        // Check if the mid element is the minimum
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        // Decide the direction to move: left or right half
        if (arr[mid] <= arr[high]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return 0;
}
// module.exports = findRotationCount
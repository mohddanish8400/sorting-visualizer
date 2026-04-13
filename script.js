function bubbleSort(arr) {
  // n is the length of the array
  let n = arr.length;

  // We need to make several passes through the array
  for (let i = 0; i < n - 1; i++) {
    // This flag helps us stop early if the array is already sorted
    let swapped = false;

    // In each pass, we compare each pair until the unsorted part ends
    // After each pass, the biggest number of the unsorted part moves to the end
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare current number and the next one
      if (arr[j] > arr[j + 1]) {
        // Swap them – let the bigger bubble float right
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // We made a swap, so mark it
        swapped = true;
      }
    }

    // If no swaps happened, the array is already sorted – we're done!
    if (!swapped) break;
  }

  return arr;
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted:", bubbleSort(numbers));
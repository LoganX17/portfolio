/*const unsortedArray = [100, 41, 92, 36, 15, 86, 64, 35, 88, 26, 23, 43, 75, 63, 52, 14, 1, 24, 73, 5, 74, 50, 81, 87, 17, 8, 72, 70, 31, 10, 91, 39, 99, 48, 94, 80, 37, 53, 66, 25, 56, 12, 4, 69, 27, 3, 83, 78, 55, 97]


function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}




// Optimized selection sort algorithm
function selectionSortOptimized(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    // Check if array is already sorted
    let isSorted = true;
    for (let k = 0; k < arr.length - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        isSorted = false;
        break;
      }
    }
    if (isSorted) {
      break;
    }
  }

  return arr;
}



console.log('SELECTION SORT:\n\n')

console.log('Unordered array: '+ unsortedArray)

const start1 = Date.now();
const result = selectionSort(unsortedArray)
const end1 = Date.now();
console.log('Result: ', result)
time1= end1 - start1;
console.log('Time to run: '+ time1 +' ms')

const start2 = Date.now();
selectionSortOptimized(unsortedArray)
const end2 = Date.now();
time2= end2 - start2;
console.log('Time to run: '+ time2 +' ms')

console.log(selectionSort([3, 2, 1])); // [1, 2, 3]
console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
console.log(selectionSort([1])); // [1]
console.log(selectionSort([])); // [] */

// input field, submit button, sort button, item list from the HTML document
const inputItem = document.getElementById('inputItem');
const submitButton = document.getElementById('submitButton');
const sortButton = document.getElementById('sortButton');
const itemList = document.getElementById('itemList');
const deleteButton = document.getElementById('deleteButton');

// Event listeners to the submit and sort buttons when clicked
submitButton.addEventListener('click', addItem);
sortButton.addEventListener('click', sortList);


// Function
function addItem() {
  // Value of input field
  const itemValue = inputItem.value.trim();
  
  // Checks if empty
  if (itemValue.length > 0) {
    // New list item element 
    const li = document.createElement('li');
    li.textContent = itemValue;
    // Add list item to the list
    itemList.appendChild(li);
    // Clear the field
    inputItem.value = '';
  }
}

// Function sort list clicked
function sortList() {
  // Convert list item elements
  const itemsArray = Array.from(itemList.children);
  // Sort list item elements by text 
  itemsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));

  // Remove list item 
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Sorted list
  itemsArray.forEach(item => {
    itemList.appendChild(item);
  });
}
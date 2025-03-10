function debounce(func, delay, immediate = false) {
  let timer;

  function debounced(...args) {
    const callNow = immediate && !timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) func.apply(this, args);
    }, delay);

    if (callNow) func.apply(this, args);
  }

  // Cancel method to clear debounce
  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}

// Usage example: Debounced search input
const searchInput = document.getElementById("search");

const debouncedSearch = debounce((event) => {
  console.log("Searching for:", event.target.value);
}, 500);

// Attach event listener
searchInput.addEventListener("input", debouncedSearch);

// Cancel debounce on button click
document.getElementById("cancel").addEventListener("click", () => {
  debouncedSearch.cancel();
  console.log("Debounce canceled");
});

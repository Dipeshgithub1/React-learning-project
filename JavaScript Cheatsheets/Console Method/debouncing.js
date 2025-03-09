function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Usage example: Debounced search input
  const searchInput = document.getElementById("search");
  searchInput.addEventListener(
    "input",
    debounce((event) => {
      console.log("Searching for:", event.target.value);
    }, 500)
  );
  
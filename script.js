const fruits = [
    { name: 'Apple', logo: 'apple.png', rating: 4.5, price: 1.55 },
    { name: 'Banana', logo: 'banana.png', rating: 4.0, price: .80 },
    { name: 'Orange', logo: 'orange.png', rating: 4.2, price: 1 },
    { name: 'Onion', logo: 'onion.png', rating: 3.9, price: .30 },
    { name: 'Cabbage', logo: 'cabbage.png', rating: 4.1, price: .40 },
    { name: 'Tomato', logo: 'tomato.png', rating: 4.3, price: .60},
        // Add more fruits as needed
      ];
  
  // Conversion rate from USD to INR
  const conversionRate = 75;
  
  // Function to create the fruit list
  function createFruitList() {
    const fruitsList = document.getElementById('fruitsList');
  
    fruits.forEach((fruit) => {
      const listItem = document.createElement('li');
      listItem.classList.add('fruit-item');
  
      const fruitDetails = document.createElement('div');
      fruitDetails.classList.add('fruit-details');
  
      const leftSection = document.createElement('div');
      leftSection.classList.add('left-section');
  
      const img = document.createElement('img');
      img.src = fruit.logo;
      img.alt = `${fruit.name} Logo`;
  
      const nameSpan = document.createElement('span');
      nameSpan.classList.add('fruit-name');
      nameSpan.textContent = fruit.name;
  
      leftSection.appendChild(img);
      leftSection.appendChild(nameSpan);
  
      const rightSection = document.createElement('div');
      rightSection.classList.add('right-section');
  
      const ratingDiv = document.createElement('div');
      ratingDiv.classList.add('rating-div');
      const ratingSpan = document.createElement('span');
      ratingSpan.classList.add('fruit-rating');
      ratingSpan.textContent = `Rating: ${fruit.rating}`;
      ratingDiv.appendChild(ratingSpan);
  
      const priceDiv = document.createElement('div');
      priceDiv.classList.add('price-div');
      const priceSpan = document.createElement('span');
      priceSpan.classList.add('fruit-price');
      priceSpan.textContent = `Price: ₹${(fruit.price * conversionRate).toFixed(2)}`;
      priceDiv.appendChild(priceSpan);
  
      const btnSection = document.createElement('div');
      btnSection.classList.add('btn-section');
  
      const buyNowBtn = document.createElement('button');
      buyNowBtn.classList.add('buy-now-btn');
      buyNowBtn.textContent = 'Buy Now';
  
      const addToCartBtn = document.createElement('button');
      addToCartBtn.classList.add('add-to-cart-btn');
      addToCartBtn.textContent = 'Add to Cart';
  
      btnSection.appendChild(ratingDiv);
      btnSection.appendChild(priceDiv);
      btnSection.appendChild(buyNowBtn);
      btnSection.appendChild(addToCartBtn);
  
      rightSection.appendChild(btnSection);
  
      fruitDetails.appendChild(leftSection);
      fruitDetails.appendChild(rightSection);
  
      listItem.appendChild(fruitDetails);
      fruitsList.appendChild(listItem);
    });
  }
  
  // Call the function to create the fruit list
  createFruitList();
  
  // Fuzzy search options
  const options = {
    keys: ['name'],
    includeScore: true,
    threshold: 0.4,
  };
  
  // Initialize Fuse.js for fuzzy searching with the fruits array
  const fuse = new Fuse(fruits, options);
  
  // Get the search input and fruits list elements
  const searchInput = document.getElementById('searchInput');
  const fruitsList = document.getElementById('fruitsList');
  
  // Function to render the fruits list
  function renderFruitsList() {
    fruitsList.innerHTML = '';
    fruits.forEach((fruit) => {
      const listItem = document.createElement('li');
      const fruitDetails = document.createElement('div');
      const leftSection = document.createElement('div');
      const img = document.createElement('img');
      const nameSpan = document.createElement('span');
      const rightSection = document.createElement('div');
      const ratingDiv = document.createElement('div');
      const ratingSpan = document.createElement('span');
      const priceDiv = document.createElement('div');
      const priceSpan = document.createElement('span');
      const btnSection = document.createElement('div');
      const buyNowBtn = document.createElement('button');
      const addToCartBtn = document.createElement('button');
  
      listItem.classList.add('fruit-item');
      fruitDetails.classList.add('fruit-details');
      leftSection.classList.add('left-section');
      rightSection.classList.add('right-section');
      ratingDiv.classList.add('rating-div');
      priceDiv.classList.add('price-div');
      btnSection.classList.add('btn-section');
      buyNowBtn.classList.add('buy-now-btn');
      addToCartBtn.classList.add('add-to-cart-btn');
  
      img.src = fruit.logo;
      img.alt = `${fruit.name} Logo`;
      nameSpan.textContent = fruit.name;
      ratingSpan.textContent = `Rating: ${fruit.rating}`;
      priceSpan.textContent = `Price: ₹${(fruit.price * conversionRate).toFixed(2)}`;
      buyNowBtn.textContent = 'Buy Now';
      addToCartBtn.textContent = 'Add to Cart';
  
      leftSection.appendChild(img);
      leftSection.appendChild(nameSpan);
      ratingDiv.appendChild(ratingSpan);
      priceDiv.appendChild(priceSpan);
      btnSection.appendChild(buyNowBtn);
      btnSection.appendChild(addToCartBtn);
      rightSection.appendChild(ratingDiv);
      rightSection.appendChild(priceDiv);
      rightSection.appendChild(btnSection);
      fruitDetails.appendChild(leftSection);
      fruitDetails.appendChild(rightSection);
      listItem.appendChild(fruitDetails);
      fruitsList.appendChild(listItem);
    });
  }
  
  // Function to perform the search
  function performSearch() {
    const query = searchInput.value.trim();
  
    // Clear the list if the search query is empty
    if (query === '') {
      renderFruitsList();
      return;
    }
  
    // Search for matching items based on the query
    const result = fuse.search(query);
  
    // Clear the list and render only the matching items
    fruitsList.innerHTML = '';
    result.forEach(({ item }) => {
      const listItem = document.createElement('li');
      const fruitDetails = document.createElement('div');
      const leftSection = document.createElement('div');
      const img = document.createElement('img');
      const nameSpan = document.createElement('span');
      const rightSection = document.createElement('div');
      const ratingDiv = document.createElement('div');
      const ratingSpan = document.createElement('span');
      const priceDiv = document.createElement('div');
      const priceSpan = document.createElement('span');
      const btnSection = document.createElement('div');
      const buyNowBtn = document.createElement('button');
      const addToCartBtn = document.createElement('button');
  
      listItem.classList.add('fruit-item');
      fruitDetails.classList.add('fruit-details');
      leftSection.classList.add('left-section');
      rightSection.classList.add('right-section');
      ratingDiv.classList.add('rating-div');
      priceDiv.classList.add('price-div');
      btnSection.classList.add('btn-section');
      buyNowBtn.classList.add('buy-now-btn');
      addToCartBtn.classList.add('add-to-cart-btn');
  
      img.src = item.logo;
      img.alt = `${item.name} Logo`;
      nameSpan.textContent = item.name;
      ratingSpan.textContent = `Rating: ${item.rating}`;
      priceSpan.textContent = `Price: ₹${(item.price * conversionRate).toFixed(2)}`;
      buyNowBtn.textContent = 'Buy Now';
      addToCartBtn.textContent = 'Add to Cart';
  
      leftSection.appendChild(img);
      leftSection.appendChild(nameSpan);
      ratingDiv.appendChild(ratingSpan);
      priceDiv.appendChild(priceSpan);
      btnSection.appendChild(buyNowBtn);
      btnSection.appendChild(addToCartBtn);
      rightSection.appendChild(ratingDiv);
      rightSection.appendChild(priceDiv);
      rightSection.appendChild(btnSection);
      fruitDetails.appendChild(leftSection);
      fruitDetails.appendChild(rightSection);
      listItem.appendChild(fruitDetails);
      fruitsList.appendChild(listItem);
    });
  }
  
  // Hide the search results on page load
  renderFruitsList();
  
  // Event listener for input changes in the search field
  searchInput.addEventListener('input', performSearch);
  
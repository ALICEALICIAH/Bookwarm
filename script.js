        // jQuery test
        // $(function(){
        //     console.log('jQuery is working');
        // });
    

//signing in
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    if (email && password) {
        alert('Successfully signed in!');
        // Here you would typically send the data to the server
        document.getElementById('signin-form').reset();
        var signinModal = new bootstrap.Modal(document.getElementById('signin-modal'));
        signinModal.hide();
    } else {
        alert('Please fill out both fields.');
    }
});




const books = [
    {
        title: "Unlock it",
        author: "Dan Lok",
        genre: "Business",
        rating: 4.5,
        price: 14.99,
        image: "assets/unlock-it.jpg"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        rating: 4.3,
        price: 10.99,
        image: "assets/gatsby.jpg"
    },
    {
        title: "Bitcoin Billionaires",
        author: "Ben Mezrich",
        genre: "Bussiness",
        rating: 4.5,
        price: 14.99,
        image: "assets/gatsby.jpg"
    },
    {
        title: "8Rules of love",
        author: "Jay Shetty",
        genre: "Romance",
        rating: 4.5,
        price: 14.99,
        image: "assets/8rules-of-love.jpg"
    },
    {
        title: "7 Habits Of Successful Teens",
        author: "Sean Covey",
        genre: "Business",
        rating: 4.5,
        price: 18.99,
        image: "assets/7-habits-of-successive-teens.jpg"
    },
    {
        title: "The Monk Who Sold His Ferari",
        author: "Robin Sharma",
        genre: "Self-Development",
        rating: 4.6,
        price: 19.99,
        image: "assets/the-monk-who-sold-his-ferari.jpg"
    },
    {
        title: "Think Like A MAn",
        author: "Steve Harvey",
        genre: "Self-Development",
        rating: 4.6,
        price: 19.99,
        image: "assets/Think-like-a-man.jpg"
    },
    {
        title: "The Science Of Getting Rich",
        author: "Wallace D Wattles",
        genre: "Business",
        rating: 4.7,
        price: 18.99,
        image: "assets/the-science-of-getting-rich.jpg"
    },
    {
        title: "Thinking Fast And Slow",
        author: "Daniel Khaneman",
        genre: "Self-Development",
        rating: 4.4,
        price: 12.99,
        image: "assets/Thinking-fast-and-slow.jpg"
    },
    {
        title: "The Veggie Burger",
        author: "Susan Evans",
        genre: "Educational",
        rating: 4.5,
        price: 19.99,
        image: "assets/the-veggie-burger.jpg"
    },
    {
        title: "The Money Bible",
        author: "David Allen",
        genre: "Business",
        rating: 4.9,
        price: 14.99,
        image: "assets/the-money-bible.jpg"
    },
    {
        title: "Why We Sleep",
        author: "Matthew Walker",
        genre: "Self-Development",
        rating: 4.5,
        price: 14.00,
        image: "assets/why-we-sleep.jpg"
    },
    {
        title: "You Are A Badass",
        author: "Jen Sincero",
        genre: "fiction",
        rating: 4.5,
        price: 10.99,
        image: "assets/you-are-a-badass.jpg"
    },
    {
        title: "12 Rules for Life",
        author: "Jordan P Peterson",
        genre: "Self-Development",
        rating: 4.5,
        price: 24.99,
        image: "assets/12-rules-4-life.jpg"
    },
    {
        title: "A Brief Story",
        author: "Richard Dawkins",
        genre: "Educational",
        rating: 4.0,
        price: 13.99,
        image: "assets/A-brief-history-of-everyone-who-ever-lived.jpg"
    },
    {
        title: "A Man Called Ove",
        author: "Fredrik Backman",
        genre: "Mystry",
        rating: 3.5,
        price: 11.99,
        image: "assets/a-man-called-ove.jpg"
    },
    {
        title: "All Things Added",
        author: "James Allen",
        genre: "fiction",
        rating: 3.5,
        price: 12.55,
        image: "assets/all-things-added.jpg"
    },
    {
        title: "Bitcoin Billionaires",
        author: " Ben Mezrich",
        genre: "Business",
        rating: 4.5,
        price: 14.99,
        image: "assets/bitcoin-billionaires.jpg"
    },
    {
        title: "The Linux Command Line",
        author: "William Shots",
        genre: "Educational",
        rating: 4.1,
        price: 14.99,
        image: "assets/the-linux-command-line.jpg"
    },
    {
        title: "The Joys Of Motherhood",
        author: "Buchi Emecheta",
        genre: "Educational",
        rating: 4.5,
        price: 14.99,
        image: "assets/the-joys-of-motherhood.jpg"
    },
    {
        title: "Moby Dick Or The Whale",
        author: "Helman Melville",
        genre: "Fantasy",
        rating: 3.5,
        price: 11.99,
        image: "assets/whale.jpg"
    },
    {
        title: "The Body Keeps The Score",
        author: "Bessel Van Der",
        genre: "Self-development",
        rating: 4.0,
        price: 16.99,
        image: "assets/the-body-keeps-the-score.jpg"
    },
    {
        title: "Song for Achilles",
        author: "Madeline Miller",
        genre: "Fiction",
        rating: 3.5,
        price: 16.99,
        image: "assets/song-for-achilles.jpg"
    },
    {
        title: "We Should All Be Millionaires",
        author: "Rachael Rodgers",
        genre: "Business",
        rating: 4.5,
        price: 23.99,
        image: "assets/we-should-all-be-millionaires.jpg"
    },
    {
        title: "You Made A Fool Of Death",
        author: "Akwaeke Amanzi",
        genre: "Fantasy",
        rating: 4.5,
        price: 14.99,
        image: "assets/you-made-a-fool-of-death.jpg"
    },
    {
        title: "The Mistborn Saga",
        author: "Jane Doe",
        genre: "fiction",
        rating: 4.5,
        price: 11.99,
        image: "assets/the-mistborn-match.jpg"
    },
    {
        title: "The Terminal List",
        author: "Jack Carr<",
        genre: "Romance",
        rating: 4.5,
        price: 18.9,
        image: "assets/The-terminal-list.jpg"
    },
    {
        title: "The Miracle Morning",
        author: "Hal Elrod",
        genre: "Self-Developement",
        rating: 4.5,
        price: 16.00,
        image: "assets/the-miracle-morning.jpg"
    },
    {
        title: "Rules Of Love",
        author: "Jay Shetty",
        genre: "Romance",
        rating: 4.5,
        price: 19.99,
        image: "assets/8rules-of-love.jpg"
    },
    {
        title: "Cannabis Cookbook",
        author: "Penny Bubas",
        genre: "Educational",
        rating: 5,
        price: 25.99,
        image: "assets/cannabis-cookbook.jpg"
    },
    {
        title: "The Miracle Morning",
        author: "Hal Elrod",
        genre: "Self-Developement",
        rating: 4.5,
        price: 16.00,
        image: "assets/the-miracle-morning.jpg"
    },

    {
        title: "The Mistborn Saga",
        author: "Jane Doe",
        genre: "Fiction",
        rating: 4.5,
        price: 11.99,
        image: "assets/the-mistborn-match.jpg"
    },
    {
        title: "The Terminal List",
        author: "Jack Carr",
        genre: "Romance",
        rating: 4.5,
        price: 18.69,
        image: "assets/The-terminal-list.jpg"
    },
    {
        title: "Game Of Thrones",
        author: "George Martin",
        genre: "Mystry",
        rating: 4.5,
        price: 17.99,
        image: "assets/game-of-thrones.jpg"
    },
    {
        title: "Beyond Order",
        author: "Jordan p Peterson",
        genre: "Self-Developement",
        rating: 4.1,
        price: 16.00,
        image: "assets/beyond-order.jpg"
    },
    {
        title: "Blue Ocean Strategy",
        author: "Chan Kim",
        genre: "Business",
        rating: 4.2,
        price: 18.99,
        image: "assets/blue-ocean.jpg"
    },

    // we can add more book objects here
];


function renderBooks() {
    const bookContainer = document.getElementById('bookContainer');

    // Clear existing books
    bookContainer.innerHTML = '';

    // Loop through books array
    books.forEach(book => {
        // Create elements for each book
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${book.author}`;

        const genreElement = document.createElement('p');
        genreElement.textContent = `Genre: ${book.genre}`;

        const ratingElement = document.createElement('p');
        ratingElement.textContent = `Rating: ${book.rating}`;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${book.price}`;

        const imageElement = document.createElement('img');
        imageElement.src = book.image;
        imageElement.alt = `${book.title} Cover`;

        // Append elements to book container
        bookElement.appendChild(imageElement);
        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorElement);
        bookElement.appendChild(genreElement);
        bookElement.appendChild(ratingElement);
        bookElement.appendChild(priceElement);

        bookContainer.appendChild(bookElement);
    });
}

// Calling the function to render books
renderBooks();

const bestSellers = [
    {
        title: "Think Like A Man",
        author: "Steve Harvey",
        genre: "Educational",
        rating: 4.5,
        price: 14.99,
        image: "assets/Think-like-a-man.jpg"
    },
    {
        title: "The Science Of Getting Rich",
        author: "Wallace D Wattles",
        genre: "Business",
        rating: 4.7,
        price: 18.99,
        image: "assets/the-science-of-getting-rich.jpg"
    },
    {
        title: "7 Habits Of Successful Teens",
        author: "Sean Covey",
        genre: "Business",
        rating: 4.5,
        price: 18.99,
        image: "assets/7-habits-of-successive-teens.jpg"
    },
    {
        title: "The Monk Who Sold His Ferari",
        author: "Robin Sharma",
        genre: "Self-Development",
        rating: 4.6,
        price: 19.99,
        image: "assets/the-monk-who-sold-his-ferari.jpg"
    },
    {
        title: "The Money Bible",
        author: "David Allen",
        genre: "Business",
        rating: 4.9,
        price: 14.99,
        image: "assets/the-money-bible.jpg"
    },
    {
        title: "Why We Sleep",
        author: "Matthew Walker",
        genre: "Self-Development",
        rating: 4.5,
        price: 14.00,
        image: "assets/why-we-sleep.jpg"
    },
    {
        title: "You Are A Badass",
        author: "Jen Sincero",
        genre: "fiction",
        rating: 4.5,
        price: 10.99,
        image: "assets/you-are-a-badass.jpg"
    },
    {
        title: "A Man Called Ove",
        author: "Fredrik Backman",
        genre: "Mystry",
        rating: 3.5,
        price: 11.99,
        image: "assets/a-man-called-ove.jpg"
    },
    {
        title: "All Things Added",
        author: "James Allen",
        genre: "fiction",
        rating: 3.5,
        price: 12.55,
        image: "assets/all-things-added.jpg"
    },
    {
        title: "Bitcoin Billionaires",
        author: " Ben Mezrich",
        genre: "Business",
        rating: 4.5,
        price: 14.99,
        image: "assets/bitcoin-billionaires.jpg"
    },
    // we can addd more here
];

/**
 * Renders the books row
 * @description Renders the books row with filtered results
 * @param {Object} [filterCriteria] - filter criteria
 * @param {string} [filterCriteria.author] - author name
 * @param {number} [filterCriteria.price] - price
 * @param {string} [filterCriteria.genre] - genre
 */
function renderBooks(filterCriteria = {}) {
    const bookRow = document.getElementById('bookRow');
    if (!bookRow) {
        console.error('Element with id "bookRow" not found.');
        return;
    }

    bookRow.innerHTML = '';
    const filteredBooks = books.filter(book => {
        let matches = true;
        if (filterCriteria.author) {
            matches = matches && book.author.toLowerCase().includes(filterCriteria.author.toLowerCase());
        }
        if (filterCriteria.price) {
            matches = matches && book.price <= filterCriteria.price;
        }
        if (filterCriteria.genre) {
            matches = matches && book.genre.toLowerCase().includes(filterCriteria.genre.toLowerCase());
        }
        return matches;
    });

    filteredBooks.forEach(book => {
        const bookCard = `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card h-100">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                        <p class="card-text">Genre: ${book.genre}</p>
                        <p class="card-text">Rating: ${book.rating}/5</p>
                        <p class="card-text">$${book.price.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="addToCart('${book.title}')">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        bookRow.innerHTML += bookCard;
    });
}

/**
 * Renders the best sellers carousel
 * @description Renders the best sellers carousel
 * @param {undefined} None
 */
function renderBestSellers() {
    const bestSellersCarouselInner = document.getElementById('bestSellersCarouselInner');
    if (!bestSellersCarouselInner) {
        console.error('Element with id "bestSellersCarouselInner" not found.');
        return;
    }

    bestSellersCarouselInner.innerHTML = '';
    for (let i = 0; i < bestSellers.length; i += 4) {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item' + (i === 0 ? ' active' : '');

        const row = document.createElement('div');
        row.className = 'row';

        const chunk = bestSellers.slice(i, i + 4);
        chunk.forEach(book => {
            const bookCard = `
                <div class="col-md-3 col-sm-6 mb-4">
                    <div class="card h-100">
                        <img src="${book.image}" class="card-img-top" alt="${book.title}">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">Author: ${book.author}</p>
                            <p class="card-text">Genre: ${book.genre}</p>
                            <p class="card-text">Rating: ${book.rating}/5</p>
                            <p class="card-text">$${book.price.toFixed(2)}</p>
                            <button class="btn btn-primary" onclick=" addToCart('${book.title}')">Buy Now</button>
                        </div>
                    </div>
                </div>
            `;
            row.innerHTML += bookCard;
        });

        carouselItem.appendChild(row);
        bestSellersCarouselInner.appendChild(carouselItem);
    }
}

/**
 * Adds a book to the shopping cart
 * @param {string} bookTitle - The title of the book to add to the cart
 */
function addToCart(bookTitle) {
    const book = books.find(b => b.title === bookTitle) || bestSellers.find(b => b.title === bookTitle);
    if (book) {
        cart.push(book);
        updateCartUI();
        alert(`${book.title} has been added to your cart.`);
    } else {
        alert('Book not found.');
    }
}

/**
 * Updates the UI of the shopping cart
 * @description Updates the list of items in the cart and the subtotal
 * @param {undefined} None
 */
function updateCartUI() {
    const cartItemsElement = document.querySelector('.cart-items');
    const subtotalElement = document.getElementById('subtotal');

    if (!cartItemsElement || !subtotalElement) {
        console.error('Cart elements not found.');
        return;
    }

    cartItemsElement.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.title}: $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(cartItem);
        subtotal += item.price;
    });

    subtotalElement.textContent = subtotal.toFixed(2);
}

/**
 * Add an event listener to the submit event of the signin form to handle signing in
 * @description Handles the submission of the signin form
 * @param {Event} event The submit event of the signin form
 */
/**
 * Event listeners for filtering books
 * @description Add event listeners for the filter inputs to update the list of books
 */
// Event listener for author filter
document.getElementById('authorFilter').addEventListener('input', function() {
    renderBooks({ author: this.value });
});

// Event listener for price filter
document.getElementById('priceFilter').addEventListener('input', function() {
    renderBooks({ price: this.value });
});

// Event listener for genre filter
document.getElementById('genreFilter').addEventListener('input', function() {
    renderBooks({ genre: this.value });
});
//our story
// Getting references to elements
const storyText = document.getElementById('story-text');
const moreText = document.getElementById('more-text');
const readMoreBtn = document.getElementById('read-more-btn');

// Event listener for "Read More" button click
readMoreBtn.addEventListener('click', function(event) {
    // Toggle the display of additional text
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }

    // Prevent default link behavior
    event.preventDefault();
});

// Initial rendering of books and best sellers
renderBooks();
renderBestSellers();

// all of our quotes
const quotes = [
    'You will never be happy if you continue to search for what happiness consist of.',
    'You will never live if you are looking for the meaning of life.',
    'In the depth of winter, I finally learned what within me there lay an invisible summer.',
    'Man is the only creature who refuse to be what he is.',
    'Nobody realizes that some people expends trenmendous energy merely to be normal.',
    'There is but one truly serious philosophical problem, and that is suicide.'
];

// store the list of words and the index of word the player currently typing
let words = [];
let wordIndex = 0;

// the starting time
let startTime = Date.now();

// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typeValueElement = document.getElementById('typed-value');

// addEventListener
document.getElementById('startButton').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split();
    wordIndex = 0;

    // UI updates 
    // Create an array of span elements so we can set a class

    // Convert into string and set as innerHTML on quote display

    // Highlight the first word

    // Clear any prior messages

    // Setup the textbox
    // Clear the textbox

    // Set focus

    // Set the event handler

    // Start the timer
    startTime = new Date().getTime();
})
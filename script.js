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

// addEventListener for start button
document.getElementById('startButton').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;

    // UI updates 
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) {
        return `<span>${word} </span>`
    });

    // Convert into string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join(' ');

    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';

    // Clear any prior messages
    messageElement.innerText = '';

    // Setup the textbox
    // Clear the textbox
    typeValueElement.value = '';

    // Set focus
    typeValueElement.focus();

    // Set the event handler

    // Start the timer
    startTime = new Date().getTime();
})

// addEventListener for typing box
typeValueElement.addEventListener('input', () => {
    // Get the current word
    const currentWord = words[wordIndex];

    // Get the current value
    const typedValue = typeValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1){
        // End of the sentense, display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `Congratulaitons! You finished in ${elapsedTime / 1000} seconds!`;
        messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        // End of the word but not the sentense, clear the typedValueElement for the new word
        typeValueElement.value = '';
        // Move to the next word
        wordIndex++;
        // Reset the class name for all elements in quote
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        // Highlight the new word
        quoteElement.childNodes[wordIndex * 2].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        // Currently correct, highlight the next word
        typeValueElement.className = '';
    } else {
        // Cuurently wrong
        typeValueElement.className = 'error';
    }
})
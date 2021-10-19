/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
const quotes = [
    {
        quote: 'There is no relationship between Allah and anyone except through obedience to Him.',
        source: "Umar Ibn Al Khattab",
        citation: "Hadith"
    },
    {
        quote: 'Suffering is a gift. In it is hidden mercy.',
        source: "Rumi",
        citation: "Twitter"
    },
    {
        quote: 'We were the most humiliated people on earth & Allah gave us honour through Islam.',
        source: "Umar Ibn Al Khattab",
        citation: "Hadith"
    },
    {
        quote: 'Sell this life for the next and you win both of them. Sell the next life for this and you lose both of them.',
        source: "Hasan al-Basri",
        citation: "Hadith"
    },
    {
        quote: 'Taking pains to remove the pains of others is the true essence of generosity.',
        source: "Abu Bakr (R.A)",
        citation: "Hadith"
    },
    {
        quote: 'The richest of the rich is the one who is not a prisoner to greed.',
        source: "Ali Ibn Abi Talib (R.A)",
        citation: "Google"
    },
    {
        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        source: "Martin Fowler",
        citation: "Twitter"
    },
    {
        quote: 'Make it work, make it right, make it fast.',
        source: "Kent Beck",
        citation: "Facebook"
    },
    {
        quote: 'Code is like humor. When you have to explain it, it’s bad.',
        source: "Cory House",
        citation: "Twitter"
    },
    {
        quote: 'Java is to JavaScript what car is to Carpet.',
        source: "Chris Heilmann",
        citation: "Facebook"
    },
    {
        quote: 'Experience is the name everyone gives to their mistakes.',
        source: "Oscar Wilde",
        citation: "LinkedIn"
    },
    {
        quote: 'First, solve the problem. Then, write the code.',
        source: "John Johnson",
        citation: "Twitter"
    },
    {
        quote: 'Fix the cause, not the symptom.',
        source: "Steve Maguire",
        citation: "Facebook"
    },
    {
        quote: "Programming isn't about what you know; it's about what you can figure out.",
        source: "Chris Pine",
        citation: "Twitter"
    },
    {
        quote: 'Testing leads to failure, and failure leads to understanding.',
        source: "Burt Rutan",
        citation: "LinkedIn"
    },
    {
        quote: "Don't write better error messages, write code that doesn't need them.",
        source: "Jason C. McDonald",
        citation: "Twitter"
    },
    {
        quote: 'To write is human, to edit is divine.',
        source: "Stephen King",
        citation: "Facebook"
    }
]

const quoteBtn = document.getElementById('load-quote');
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');
const span = document.querySelector('.citation');
const quoteDiv = document.querySelector('.container')


quoteBtn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    source.innerHTML = quotes[random].source;
    span.textContent = quotes[random].citation;
});

setInterval(function() {    
    quoteBtn.click();    
},
1500)

function changeColor() {
    const color = '#' +Math.floor(Math.random() * 123456).toString(16);
    quoteDiv.style.background = color;
}
quoteBtn.onclick = changeColor;
/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 ***/

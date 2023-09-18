const quotes = [
    {
        quote: "Success follows doing what you want to do. There is no other way to be successful.",
        author: "Malcolm Forbes",
    },
    {
        quote: "Passion is the genesis of genius.",
        author: "Tony Robbins",
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "Always do your best. What you plant now, you will harvest later.",
        author: "Og Mandino",
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",
    },
    {
        quote: "I can't go back to yesterday because I was a different person then.",
        author: "Lewis Carroll",
    },
    {
        quote: "Although the world is full of suffering, it is full also of the overcoming of it.",
        author: "Helen Keller",
    },
    {
        quote: "I am not afraid of storms for i am learning how to sail my ship.",
        author: "Helen Keller",
    },
    {
        quote: "Energy and persistence conquer all things.",
        author: "Benjamin Franklin",
    },
    {
        quote: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todaysQuote);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

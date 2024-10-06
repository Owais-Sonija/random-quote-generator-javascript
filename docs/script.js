// Getting Elements
const quoteEle = document.querySelector(".quote");
const authorEle = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new_quote_btn")
const shareBtn = document.querySelector(".twitter_share_button");

// Creating Functions

async function getQuote() {
    const url = "https://quotes-api-self.vercel.app/quote"
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);

    quoteEle.textContent = '"' + data.quote+'"' ;
    authorEle.textContent = data.author;

}

function shareTweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quoteEle.textContent + "-----by " + authorEle.textContent, "Tweet Window", "width= 600, height=300", "")
}

// Calling Functions
newQuoteBtn.addEventListener("click", getQuote)
shareBtn.addEventListener("click", shareTweet)
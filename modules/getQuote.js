import {quoteOfDay, authorOfDay} from '/modules/variable.js';

const  quotesUrl = `https://favqs.com/api/qotd`;

     async function getQuote() {
    const response = await fetch(quotesUrl);
    const quotesData = await response.json();
    quoteOfDay.innerHTML = quotesData.quote.body
    authorOfDay.innerHTML = quotesData.quote.author
  }
  export default getQuote
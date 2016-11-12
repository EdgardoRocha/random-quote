window.onload = init;

function init() {
buttonHandle();
}


function buttonHandle(){
	var newQuote = document.getElementById("newQuote");
	newQuote.onclick = quotePicker;
}

// find a way to not repeat the same quote.
function quotePicker() {
		
	var listPick = Math.floor(Math.random() * quotes.length);
	
	var quote = document.getElementById("quote");
	quote.innerHTML = quotes[listPick].quote+ " ---- " +quotes[listPick].author;
}

// array of quotes
var quotes = [
	{quote: 'Skip this', 				author: 'Larry'},
	{quote: 'Live long and prosper.', 	author: 'George'},
	{quote: 'Die hard', 				author: 'Jerry'},
	{quote: 'Freedom!', 				author: 'Todd'},
	{quote: 'Say what?', 				author: 'Happy'},
	{quote: 'That is okay.', 			author: 'Jack'},
	{quote: 'Collections', 				author: 'Tim'},
	{quote: 'Hello', 					author: 'Dale'},
	{quote: 'Good', 					author: 'Kelly'},
	{quote: 'Bye', 						author: 'Bob'}
]


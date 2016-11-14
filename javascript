var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

$(document).ready(function() {
        $.getJSON(url, function(data){
            var randomQuote = data.quoteText + "--" + data.quoteAuthor;
            $('#quote').text(randomQuote);
      });  
    $('#newQuote').click(function(){
        $.getJSON(url, function(data){
            var randomQuote = data.quoteText + "--" + data.quoteAuthor;
            $('#quote').text(randomQuote);
      });  
    });
});

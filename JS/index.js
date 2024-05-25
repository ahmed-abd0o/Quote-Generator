var quote = document.getElementById("quote");
var quoteOwner = document.getElementById("quoteOwner");
var quotes = [
    {
        quote : ' "Be yourself; everyone else is already taken." ',
        owner : '― Oscar Wilde'
    },
    {
        quote : ' "So many books, so little time." ' ,
        owner : '― Frank Zappa '
    },
    {
        quote : '  "A room without books is like a body without a soul."  ',
        owner : '― Marcus Tullius Cicero '
    },
    {
        quote : ' "Be the change that you wish to see in the world."  ',
        owner : '― Mahatma Gandhi '
    },
    {
        quote : '  "A friend is someone who knows all about you and still loves you."  ',
        owner : '― Elbert Hubbard '
    },

];

var checkList = [];
function generate() {

    let min = 0;
    let max = 4;
    
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if(checkList.includes(randomNumber)){
        generate()
        return;
    }
    else{
        checkList.push(randomNumber);
    }


    if (checkList.length == 5){
        checkList = [randomNumber]
    }

    console.log(randomNumber)

    quote.innerHTML = quotes[randomNumber].quote;
    quoteOwner.innerHTML = quotes[randomNumber].owner;
    

}

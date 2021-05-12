( () =>{// Run the code in an isolated function so we dont define any global variables. (global variables could make the cheat detectable)
    // ok first we need the questions and answers, we can do that by using blooket's api
  
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
} // yes, this is stolen from stackoverflow
var id = prompt("What is the game pin?");
var answers = httpGet(`https://api.blooket.com/api/games?gameId=${id}`);
alert("Got answers, press the V key at any time to see the correct answer to the current question.");
  
}
)()

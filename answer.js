(() => {
var idinput = document.querySelector(".styles__idInput___1zWUq-camelCase");
if(!idinput){
    return alert("Please only run this script on the start screen (where you input id)");
}
var form = document.querySelector(".styles__mainBox___16RUM-camelCase");
form.onsubmit = function(...args){
    alert(`Starting bot with game code ${idinput.value}. If you incorrectly entered the game code, please refresh the page.`);
    start(idinput.value);
}
var joinButton = document.querySelector(".styles__joinButton___xSaJN-camelCase");
joinButton.onclick = function(...args){
    form.onsubmit()
}
async function start(gameid){
    var answers = {};
    var mode = "";
    fetch("https://fb.blooket.com/c/firebase/join", {
    "body": `{\"id\":\"${gameid}\",\"name\":\"answerdotjs\"}`,
    "method": "PUT",
    "mode": "cors"
    }).then( async (res) => {
        var json = await res.json();
        console.log(`Set id is ${json.host.set}`);
        console.log(`Game pin is ${gameid}`)
        console.log(`Game mode is ${json.host.s.t}`);
        mode = json.host.s.t;
        console.log("Getting game answers...");
        var gameinfo = await fetch(`https://api.blooket.com/api/games?gameId=${json.host.set}`);
        var gamejson = await gameinfo.json();
        var questions = gamejson.questions;
        questions.forEach( (q) => {
            q.question=q.question.replace(/ +(?= )/g,'');
            console.log(q.question + ":" + q.correctAnswers)
            q.correctAnswers[0] = q.correctAnswers[0].trim().replace(/ +(?= )/g,'');
            // note to self: rewrite this to support image matching
            answers[q.question] = {
                num:q.number,
                text:q.question,
                possibleAnswers:q.answers,
                correctAnswers:q.correctAnswers
            }
        })
    })
    setInterval( () => {
        var questionText = document.querySelector(".styles__questionText___2MlSZ-camelCase")
        var feedback = document.querySelector(".styles__feedbackContainer___1fuws-camelCase > div");
        if(feedback) feedback.click();
        switch(mode){ // mode-specific stuff
            case "Gold": // auto-click a chest
            var chests = document.querySelectorAll("div[class^=\"styles__choice\"");
            if(chests.length == 3) chests[Math.floor(Math.random()*3)].click();
            var header = document.querySelector(".styles__headerInside___x--63-camelCase");
            if(header && header.innerText) document.querySelector(".arts__regularBody___1TM6E-camelCase").click()
            var noPlayersNext = document.querySelector(".styles__noPlayers___1Wz34-camelCase > div");
            if(noPlayersNext) noPlayersNext.click();
            var firstPlayerToSteal = document.querySelector(".styles__playerContainer___3zoyU-camelCase");
            if(firstPlayerToSteal) firstPlayerToSteal.click(); // might swap with lower player if its a swap
            break;
        }
        if(questionText && questionText.innerText); else return; // why does this work
        var question = answers[questionText.innerText];
        
        var answered = false;
        for(var i = 0; i < 4 && answered == false; i++){
            var button = document.querySelectorAll(".styles__answerContainer___3WS-k-camelCase")[i];
            if(button.innerText && question.correctAnswers.includes(button.innerText)){
                button.click();
                answered = true;
            }
        }
    }, 250)
}
})()
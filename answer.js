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
            // questions can have the same text, but different images
            answers[q.question] = {
                num:q.number,
                text:q.question,
                possibleAnswers:q.answers,
                correctAnswers:q.correctAnswers
            }
        })
    })
    var cryptoPasswords = {};
    setInterval( () => {
        var questionText = document.querySelector(".styles__questionText___2MlSZ-camelCase")
        var feedback = document.querySelector(".styles__feedbackContainer___1fuws-camelCase > div");
        if(feedback) feedback.click();
        switch(mode){ // mode-specific stuff
            case "Gold": // automatic play for gold quest
            var chests = document.querySelectorAll("div[class^=\"styles__choice\"");
            if(chests.length == 3) chests[Math.floor(Math.random()*3)].click();
            // click a random chest

            var header = document.querySelector(".styles__headerInside___x--63-camelCase");
            if(header && header.innerText) document.querySelector(".arts__regularBody___1TM6E-camelCase").click()
            // after you select a chest, go to the next screen
            
            var noPlayersNext = document.querySelector(".styles__noPlayers___1Wz34-camelCase > div");
            if(noPlayersNext) noPlayersNext.click();
            // if theres no players to swap with or steal from, hit the button to go to the next screen

            var firstPlayerToSteal = document.querySelector(".styles__playerContainer___3zoyU-camelCase");
            if(firstPlayerToSteal) firstPlayerToSteal.click(); // might swap with lower player if its a swap
            // steal from players
            
            break;
            case "Hack": // crypto hack auto-play
            var passwords = document.querySelectorAll(".styles__button___2OOoS-camelCase");
            var introHeader = document.querySelector(".styles__introHeader___Dzfym-camelCase")
            if(passwords.length && introHeader.innerText && !introHeader.innerText.includes("HACKING")) passwords[Math.floor(Math.random()*passwords.length)].click();
            // choose a randomized password

            var feedbackText = document.querySelector(".styles__nextText___2QnHA-camelCase");
            if(feedbackText) feedbackText.parentElement.click();   
            // automatically click next after getting question correct
            
            var outputs = document.querySelectorAll("div[class^=\"styles__choice__\"");
            if(outputs.length == 3) outputs[Math.floor(Math.random()*outputs.length)].click();
            // auto choose a random output

            var output = document.querySelector(".styles__choiceContainer___3HD01-camelCase");
            if(output) output.click();
            // auto continue after choosing output

            // password memorization for hacking
            // its a little messy but does the job how its supposed to
            if(passwords.length && introHeader && introHeader.innerText.includes("HACKING")){
                var name = document.querySelector(".styles__introHeader___Dzfym-camelCase > span").innerText;
                var chosen;
                var possibleChosen = document.querySelectorAll(".styles__buttonDeactivated___12OK6-camelCase")
                possibleChosen.forEach( (e) => {
                    if(!e.classList.contains("styles__buttonNotChosen___ppkxb-camelCase")) chosen = e.innerText;
                })
                if(!cryptoPasswords[name]){
                    passwords[Math.floor(Math.random()*passwords.length)].click();
                } else {
                    var correct;
                    passwords.forEach( (e) => {
                        if(e.innerText == cryptoPasswords[name]){
                            correct = e;
                        }
                    })
                    if(correct) correct.click()
                }
                
                var status = "";
                var result = document.querySelectorAll(".styles__introHeader___Dzfym-camelCase").forEach( (e) => {
                    if(e.innerText == "CORRECT"){
                        status = "CORRECT"
                    } else if(e.innerText == "INCORRECT"){
                        status = "INCORRECT"
                    }
                });
                if(status == "CORRECT"){
                    cryptoPasswords[name] = chosen;
                }
            }
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
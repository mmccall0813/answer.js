// answer.js
// v1.0.0
// Made by mmccall0813 on github
// https://www.github.com/mmccall0813/answer.js
// dont steal pls!

/*
notes for wildcards with query selector
thanks to: https://stackoverflow.com/a/8714421

[class^='someClass'] will match all classes starting with someClass.

[class$='someClass'] will match all classes ending with someClass.

[class*='someClass'] will match all classes containing someClass.
*/
(() => {
var idinput = document.querySelector("[class^='styles__idInput___']");
if(!idinput){
    var frame = document.body.appendChild(document.createElement("iframe"))
    var contentWindow = frame.contentWindow
    contentWindow.alert("Please only run this script on the start screen (where you input id)");
    document.body.removeChild(frame);
    return;
}
var form = document.querySelector("[class^='styles__mainBox___']");
form.onsubmit = function(...args){
    var frame = document.body.appendChild(document.createElement("iframe"))
    var contentWindow = frame.contentWindow
    contentWindow.alert(`Starting bot with game code ${idinput.value}. If you incorrectly entered the game code, please refresh the page.`);
    document.body.removeChild(frame);
    start(idinput.value);
}
var joinButton = document.querySelector("[class^='styles__joinButton___']");
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
            q.question=q.question.replace(/ +(?= )/g,'').trim();
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
    var possiblePasswords = {};
    var loop = setInterval( () => {
        switch(mode){ // mode-specific stuff
            case "Gold": // automatic play for gold quest
            var chests = document.querySelectorAll("[class^=\"styles__choice\"");
            if(chests.length == 3) chests[Math.floor(Math.random()*3)].click();
            // click a random chest

            var header = document.querySelector("[class^='styles__headerInside___']");
            if(header && header.innerText) document.querySelector("[class^='arts__regularBody___']").click()
            // after you select a chest, go to the next screen
            
            var noPlayersNext = document.querySelector("[class^='styles__noPlayers___'] > div");
            if(noPlayersNext) noPlayersNext.click();
            // if theres no players to swap with or steal from, hit the button to go to the next screen

            var firstPlayerToSteal = document.querySelector("[class^='styles__playerContainer___']");
            if(firstPlayerToSteal) firstPlayerToSteal.click(); // might swap with lower player if its a swap
            // steal from players
            
            break;
            case "Hack": // crypto hack auto-play
            var passwords = document.querySelectorAll("[class^='styles__button___']");
            var introHeader = document.querySelector("[class^='styles__introHeader___']")
            if(passwords.length && introHeader.innerText && !introHeader.innerText.includes("HACKING")) passwords[Math.floor(Math.random()*passwords.length)].click();
            // choose a randomized password

            var feedbackText = document.querySelector("[class^='styles__nextText___']");
            if(feedbackText) feedbackText.parentElement.click();   
            // automatically click next after getting question correct
            
            var outputs = document.querySelectorAll("[class^=\"styles__choice__\"]");
            if(outputs.length == 3) outputs[Math.floor(Math.random()*outputs.length)].click();
            // auto choose a random output

            var output = document.querySelector("[class^='styles__choiceContainer___']");
            if(output) output.click();
            // auto continue after choosing output

            // password memorization for hacking
            // its a little messy but does the job how its supposed to
            if(passwords.length && introHeader && introHeader.innerText.includes("HACKING")){
                var name = document.querySelector("[class^='styles__introHeader___'] > span").innerText;
                var chosen;
                var possibleChosen = document.querySelectorAll("[class^='styles__buttonDeactivated___']")
                possibleChosen.forEach( (e) => {
                    if(!e.classList.contains("[class^='styles__buttonNotChosen___']")) chosen = e.innerText;
                })
                if(!cryptoPasswords[name] && !possiblePasswords[name]){
                    passwords[Math.floor(Math.random()*passwords.length)].click();
                } else if(!cryptoPasswords[name] && possiblePasswords[name]){
                    possiblePasswords[name].forEach( (pass) => {
                        passwords.forEach( (button) => {
                            if(button.innerText == pass){
                                button.click()
                            }
                        })
                    })
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
                var result = document.querySelectorAll("[class^='styles__introHeader___']").forEach( (e) => {
                    if(e.innerText == "CORRECT"){
                        status = "CORRECT"
                    } else if(e.innerText == "INCORRECT"){
                        status = "INCORRECT"
                    }
                });
                if(status == "CORRECT"){
                    cryptoPasswords[name] = chosen;
                } else if(status == "INCORRECT" && !possibleChosen[name]){
                    var possible = [];
                    passwords.forEach( (pass) => {
                        possible.push(pass.innerText);
                    })
                    possiblePasswords[name] = possible;
                }
            }
            break;
            case "Royale": // clear current loop and start a new, shorter one, that only answers questions;
                clearInterval(loop);
                setInterval( () => {
                    var questionText = document.querySelector("[class^='styles__questionText___']")
                    if(questionText && questionText.innerText); else return;
                    var question = answers[questionText.innerText];
        
                    var answered = false;
                    for(var i = 0; i < 4 && answered == false; i++){
                        var button = document.querySelectorAll("[class^='styles__answerContainer___']")[i];
                        if(button.innerText && question.correctAnswers.includes(button.innerText)){
                        button.click();
                        answered = true;
                    }
                    }
                }, 50)
            break;
            case "Fish": // catch them fishies
                var pagebutton = document.querySelector("[class^='styles__pageButton___']");
                if(pagebutton) pagebutton.click();
                var fishModalButton = document.querySelector("[class^='arts__modal___']");
                if(fishModalButton) fishModalButton.click();
            break;
        }
        var questionText = document.querySelector("[class^='styles__questionText___']")
        var feedback = document.querySelector("[class^='styles__feedbackContainer___'] > div");
        if(feedback) feedback.click();
        if(questionText && questionText.innerText); else return;
        var question = answers[questionText.innerText];
        
        var answered = false;
        for(var i = 0; i < 4 && answered == false; i++){
            var button = document.querySelectorAll("[class^='styles__answerContainer___']")[i];
            if(button.innerText && question.correctAnswers.includes(button.innerText)){
                button.click();
                answered = true;
            }
        }
    }, 250)
}
})()
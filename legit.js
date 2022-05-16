// legit.js
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
        contentWindow.alert(`Starting answer.js (legit mode) with game code ${idinput.value}. If you incorrectly entered the game code, please refresh the page.`);
        document.body.removeChild(frame);
        start(idinput.value);
    }
    var joinButton = document.querySelector("[class^='styles__joinButton___']");
    joinButton.onclick = function(...args){
        form.onsubmit()
    }
    async function start(gameid){
        var answers = [];
        var mode = "";
        fetch("https://fb.blooket.com/c/firebase/join", {
        "body": `{\"id\":\"${gameid}\",\"name\":\"answerdotjs\"}`,
        "method": "PUT",
        "mode": "cors"
        }).then( async (res) => {
            var json = await res.json();
            console.info(`Set id is ${json.host.set}`);
            console.info(`Game pin is ${gameid}`);
            console.info(`Game mode is ${json.host.s.t}`);
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
                var hasImage = false;
                if(typeof q.image == "object") hasImage = true;
                answers.push({
                    num:q.number,
                    text:q.question,
                    possibleAnswers:q.answers,
                    correctAnswers:q.correctAnswers,
                    hasImage: hasImage,
                    image: q.image
                });
            })
        })
        document.body.addEventListener("keydown", (e) => {
            if(e.key !== "`") return;
            var questionText = document.querySelector("[class^='styles__questionText___']");
            var img = document.querySelector("[class^='styles__image___']");
            var hasImage = img !== null;
            var imgID = hasImage ? img.src.split("/")[img.src.split("/").length-1].split(".")[0] : undefined;
            if(questionText && questionText.innerText); else return;
    
            var questions = answers.filter( (ques, index) => {       
                if(hasImage){
                    return ques.hasImage == true && ques.image.id == imgID && ques.text == questionText.innerText;
                } else {
                    return ques.text == questionText.innerText
                }
            });
            
            questions.forEach( (question) => {
            var answered = false;
            for(var i = 0; i < 4 && answered == false; i++){
                var button = document.querySelectorAll("[class^='styles__answerContainer___']")[i];
                if(button.innerText && question.correctAnswers.includes(button.innerText)){
                    // make the button text green
                    button.children[0].children[0].style.color = "green";
                    answered = true;
                }
            }
        })
        });
    }})()
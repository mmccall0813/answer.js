# answer.js
A bookmarklet-based blooket auto-player that uses the offical blooket api to get question answers.

Execute on the PIN screen, then enter pin as you normally would. It will auto-play the game for you, and get all questions correct.

Currently working on:
Gold Quest

Untested on other gamemodes right now

Bookmarklet:
```
(()=>{async function a(a){var b={},c="";fetch("https://api.blooket.com/api/firebase/join",{body:`{\"id\":\"${a}\",\"name\":\"answerdotjs\"}`,method:"PUT",mode:"cors"}).then(async a=>{var d=await a.json();console.log("Game id is "+d.host.set),console.log("Game mode is "+d.host.s.t),c=d.host.s.t,console.log("Getting game answers...");var e=await fetch(`https://api.blooket.com/api/games?gameId=${d.host.set}`),f=await e.json(),g=f.questions;g.forEach(a=>{a.question=a.question.replace(/ +(?= )/g,""),console.log(a.question+":"+a.correctAnswers),a.correctAnswers[0]=a.correctAnswers[0].trim().replace(/ +(?= )/g,""),b[a.question]={num:a.number,text:a.question,possibleAnswers:a.answers,correctAnswers:a.correctAnswers}})}),setInterval(()=>{var a=Math.floor,d=document.querySelector(".styles__questionText___10zyP-camelCase"),e=document.querySelector(".styles__feedbackContainer___2UC04-camelCase > div");switch(e&&e.click(),c){case"Gold":var f=document.querySelectorAll("div[class^=\"styles__choice\"");3==f.length&&f[a(3*Math.random())].click();var g=document.querySelector(".styles__headerInside___1fSu9-camelCase");g&&g.innerText&&document.querySelector(".arts__regularBody___1st6G-camelCase").click();var h=document.querySelector(".styles__noPlayers___3J6Gz-camelCase > div");h&&h.click();var j=document.querySelector(".styles__playerContainer___2pb9Q-camelCase");j&&j.click();}if(d)d=d.innerText;else return;for(var k,l=b[d],m=!1,n=0;4>n&&!1==m;n++)k=document.querySelectorAll(".styles__answerContainer___qj_oZ-camelCase")[n],k.innerText&&l.correctAnswers.includes(k.innerText)&&(k.click(),m=!0)},250)}var b=document.querySelector(".styles__idInput___3PMeH-camelCase");if(!b)return alert("Please only run this script on the start screen (where you input id)");var c=document.querySelector(".styles__mainBox___2YQWX-camelCase");c.onsubmit=function(...c){alert(`Starting bot with game code ${b.value}. If you incorrectly entered the game code, please refresh the page.`),a(b.value)};var d=document.querySelector(".styles__joinButton___1wofq-camelCase");d.originalOnClick=d.onclick,d.onclick=function(...a){c.onsubmit()}})();
```
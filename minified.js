(()=>{async function a(a){var b={},c="";fetch("https://fb.blooket.com/c/firebase/join",{body:`{\"id\":\"${a}\",\"name\":\"answerdotjs\"}`,method:"PUT",mode:"cors"}).then(async d=>{var e=await d.json();console.log(`Set id is ${e.host.set}`),console.log(`Game pin is ${a}`),console.log(`Game mode is ${e.host.s.t}`),c=e.host.s.t,console.log("Getting game answers...");var f=await fetch(`https://api.blooket.com/api/games?gameId=${e.host.set}`),g=await f.json(),h=g.questions;h.forEach(a=>{a.question=a.question.replace(/ +(?= )/g,""),console.log(a.question+":"+a.correctAnswers),a.correctAnswers[0]=a.correctAnswers[0].trim().replace(/ +(?= )/g,""),b[a.question]={num:a.number,text:a.question,possibleAnswers:a.answers,correctAnswers:a.correctAnswers}})});var d={};setInterval(()=>{var a=Math.floor,e=document.querySelector(".styles__questionText___2MlSZ-camelCase"),f=document.querySelector(".styles__feedbackContainer___1fuws-camelCase > div");switch(f&&f.click(),c){case"Gold":var g=document.querySelectorAll("div[class^=\"styles__choice\"");3==g.length&&g[a(3*Math.random())].click();var h=document.querySelector(".styles__headerInside___x--63-camelCase");h&&h.innerText&&document.querySelector(".arts__regularBody___1TM6E-camelCase").click();var j=document.querySelector(".styles__noPlayers___1Wz34-camelCase > div");j&&j.click();var k=document.querySelector(".styles__playerContainer___3zoyU-camelCase");k&&k.click();break;case"Hack":var l=document.querySelectorAll(".styles__button___2OOoS-camelCase"),m=document.querySelector(".styles__introHeader___Dzfym-camelCase");l.length&&m.innerText&&!m.innerText.includes("HACKING")&&l[a(Math.random()*l.length)].click();var n=document.querySelector(".styles__nextText___2QnHA-camelCase");n&&n.parentElement.click();var o=document.querySelectorAll("div[class^=\"styles__choice__\"");3==o.length&&o[a(Math.random()*o.length)].click();var p=document.querySelector(".styles__choiceContainer___3HD01-camelCase");if(p&&p.click(),l.length&&m&&m.innerText.includes("HACKING")){var q,r=document.querySelector(".styles__introHeader___Dzfym-camelCase > span").innerText,s=document.querySelectorAll(".styles__buttonDeactivated___12OK6-camelCase");if(s.forEach(a=>{a.classList.contains("styles__buttonNotChosen___ppkxb-camelCase")||(q=a.innerText)}),!d[r])l[a(Math.random()*l.length)].click();else{var t;l.forEach(a=>{a.innerText==d[r]&&(t=a)}),t&&t.click()}var u="",v=document.querySelectorAll(".styles__introHeader___Dzfym-camelCase").forEach(a=>{"CORRECT"==a.innerText?u="CORRECT":"INCORRECT"==a.innerText&&(u="INCORRECT")});"CORRECT"==u&&(d[r]=q)}}if(e&&e.innerText);else return;for(var w,x=b[e.innerText],y=!1,z=0;4>z&&!1==y;z++)w=document.querySelectorAll(".styles__answerContainer___3WS-k-camelCase")[z],w.innerText&&x.correctAnswers.includes(w.innerText)&&(w.click(),y=!0)},250)}var b=document.querySelector(".styles__idInput___1zWUq-camelCase");if(!b)return alert("Please only run this script on the start screen (where you input id)");var c=document.querySelector(".styles__mainBox___16RUM-camelCase");c.onsubmit=function(...c){alert(`Starting bot with game code ${b.value}. If you incorrectly entered the game code, please refresh the page.`),a(b.value)};var d=document.querySelector(".styles__joinButton___xSaJN-camelCase");d.onclick=function(...a){c.onsubmit()}})();
(()=>{async function a(a){var b=[],c="";fetch("https://fb.blooket.com/c/firebase/join",{body:`{\"id\":\"${a}\",\"name\":\"answerdotjs\"}`,method:"PUT",mode:"cors"}).then(async d=>{var e=await d.json();console.info(`Set id is ${e.host.set}`),console.info(`Game pin is ${a}`),console.info(`Game mode is ${e.host.s.t}`),c=e.host.s.t,console.log("Getting game answers...");var f=await fetch(`https://api.blooket.com/api/games?gameId=${e.host.set}`),g=await f.json(),h=g.questions;h.forEach(a=>{a.question=a.question.replace(/ +(?= )/g,"").trim(),console.log(a.question+":"+a.correctAnswers),a.correctAnswers[0]=a.correctAnswers[0].trim().replace(/ +(?= )/g,"");var c=!1;"object"==typeof a.image&&(c=!0),b.push({num:a.number,text:a.question,possibleAnswers:a.answers,correctAnswers:a.correctAnswers,hasImage:c,image:a.image})})}),document.body.addEventListener("keydown",a=>{if("`"===a.key){var c=document.querySelector("[class^='styles__questionText___']"),d=document.querySelector("[class^='styles__image___']"),e=null!==d,f=e?d.src.split("/")[d.src.split("/").length-1].split(".")[0]:void 0;if(c&&c.innerText);else return;var g=b.filter(a=>e?!0==a.hasImage&&a.image.id==f&&a.text==c.innerText:a.text==c.innerText);g.forEach(a=>{for(var b,c=!1,d=0;4>d&&!1==c;d++)b=document.querySelectorAll("[class^='styles__answerContainer___']")[d],b.innerText&&a.correctAnswers.includes(b.innerText)&&(b.children[0].children[0].style.color="green",c=!0)})}})}var b=document.querySelector("[class^='styles__idInput___']");if(!b){var c=document.body.appendChild(document.createElement("iframe")),d=c.contentWindow;return d.alert("Please only run this script on the start screen (where you input id)"),void document.body.removeChild(c)}var e=document.querySelector("[class^='styles__mainBox___']");e.onsubmit=function(...c){var d=document.body.appendChild(document.createElement("iframe")),e=d.contentWindow;e.alert(`Starting answer.js (legit mode) with game code ${b.value}. If you incorrectly entered the game code, please refresh the page.`),document.body.removeChild(d),a(b.value)};var f=document.querySelector("[class^='styles__joinButton___']");f.onclick=function(...a){e.onsubmit()}})();
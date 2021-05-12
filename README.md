# answer.js
A bookmarklet-based blooket cheat that uses the offical blooket api to get question answers.

Bookmarklet: 
```
javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3Bvar%20script%20%3D%20document.createElement(%22SCRIPT%22)%3Bscript.src%20%3D%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fmmccall0813%2Fanswer.js%2Fmain%2Fanswer.js%22%3Bdocument.body.appendChilld(script)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.11.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()"
```

# answer.js

v1.1.0 - The images update

A bookmarklet-based blooket auto-player that uses the offical blooket api to get question answers.

## How to use?

First get the bookmarklet (bookmark script) from [here](https://mmccall0813.github.io/answer.js/loader.html) by dragging the link on the page to your bookmarks bar. 

Execute (click on bookmark) on the PIN screen, then enter pin as you normally would. It will auto-play the game for you, and get all questions correct.

## What modes does it work on?

Auto-play supported on:

- Gold Quest
- Crypto Hack
- Fishing Frenzy
- Battle Royale (beware, very blatant)
- Classic (beware, very blatant)

Running the cheat on unsupported modes will still auto-answer questions, but will not auto-play the game for you.

Bookmarklet:
```
javascript:(()%3D%3E%7Basync%20function%20a(a)%7Bvar%20b%3D%5B%5D%2Cc%3D%22%22%3Bfetch(%22https%3A%2F%2Ffb.blooket.com%2Fc%2Ffirebase%2Fjoin%22%2C%7Bbody%3A%60%7B%5C%22id%5C%22%3A%5C%22%24%7Ba%7D%5C%22%2C%5C%22name%5C%22%3A%5C%22answerdotjs%5C%22%7D%60%2Cmethod%3A%22PUT%22%2Cmode%3A%22cors%22%7D).then(async%20d%3D%3E%7Bvar%20e%3Dawait%20d.json()%3Bconsole.info(%60Set%20id%20is%20%24%7Be.host.set%7D%60)%2Cconsole.info(%60Game%20pin%20is%20%24%7Ba%7D%60)%2Cconsole.info(%60Game%20mode%20is%20%24%7Be.host.s.t%7D%60)%2Cc%3De.host.s.t%2Cconsole.log(%22Getting%20game%20answers...%22)%3Bvar%20f%3Dawait%20fetch(%60https%3A%2F%2Fapi.blooket.com%2Fapi%2Fgames%3FgameId%3D%24%7Be.host.set%7D%60)%2Cg%3Dawait%20f.json()%2Ch%3Dg.questions%3Bh.forEach(a%3D%3E%7Ba.question%3Da.question.replace(%2F%20%2B(%3F%3D%20)%2Fg%2C%22%22).trim()%2Cconsole.log(a.question%2B%22%3A%22%2Ba.correctAnswers)%2Ca.correctAnswers%5B0%5D%3Da.correctAnswers%5B0%5D.trim().replace(%2F%20%2B(%3F%3D%20)%2Fg%2C%22%22)%3Bvar%20c%3D!1%3B%22object%22%3D%3Dtypeof%20a.image%26%26(c%3D!0)%2Cb.push(%7Bnum%3Aa.number%2Ctext%3Aa.question%2CpossibleAnswers%3Aa.answers%2CcorrectAnswers%3Aa.correctAnswers%2ChasImage%3Ac%2Cimage%3Aa.image%7D)%7D)%7D)%3Bvar%20d%3D%7B%7D%2Ce%3D%7B%7D%2Cf%3DsetInterval(()%3D%3E%7Bvar%20a%3DMath.floor%3Bswitch(c)%7Bcase%22Gold%22%3Avar%20g%3Ddocument.querySelectorAll(%22%5Bclass%5E%3D%5C%22styles__choice%5C%22%22)%3B3%3D%3Dg.length%26%26g%5Ba(3*Math.random())%5D.click()%3Bvar%20h%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__headerInside___'%5D%22)%3Bh%26%26h.innerText%26%26document.querySelector(%22%5Bclass%5E%3D'arts__regularBody___'%5D%22).click()%3Bvar%20j%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__noPlayers___'%5D%20%3E%20div%22)%3Bj%26%26j.click()%3Bvar%20k%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__playerContainer___'%5D%22)%3Bk%26%26k.click()%3Bbreak%3Bcase%22Hack%22%3Avar%20l%3Ddocument.querySelectorAll(%22%5Bclass%5E%3D'styles__button___'%5D%22)%2Cm%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__introHeader___'%5D%22)%3Bl.length%26%26m.innerText%26%26!m.innerText.includes(%22HACKING%22)%26%26l%5Ba(Math.random()*l.length)%5D.click()%3Bvar%20n%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__nextText___'%5D%22)%3Bn%26%26n.parentElement.click()%3Bvar%20o%3Ddocument.querySelectorAll(%22%5Bclass%5E%3D%5C%22styles__choice__%5C%22%5D%22)%3B3%3D%3Do.length%26%26o%5Ba(Math.random()*o.length)%5D.click()%3Bvar%20p%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__choiceContainer___'%5D%22)%3Bif(p%26%26p.click()%2Cl.length%26%26m%26%26m.innerText.includes(%22HACKING%22))%7Bvar%20q%2Cr%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__introHeader___'%5D%20%3E%20span%22).innerText%2Cs%3Ddocument.querySelectorAll(%22%5Bclass%5E%3D'styles__buttonDeactivated___'%5D%22)%3Bif(s.forEach(a%3D%3E%7Ba.classList.contains(%22%5Bclass%5E%3D'styles__buttonNotChosen___'%5D%22)%7C%7C(q%3Da.innerText)%7D)%2C!d%5Br%5D%26%26!e%5Br%5D)l%5Ba(Math.random()*l.length)%5D.click()%3Belse%20if(!d%5Br%5D%26%26e%5Br%5D)e%5Br%5D.forEach(a%3D%3E%7Bl.forEach(b%3D%3E%7Bb.innerText%3D%3Da%26%26b.click()%7D)%7D)%3Belse%7Bvar%20t%3Bl.forEach(a%3D%3E%7Ba.innerText%3D%3Dd%5Br%5D%26%26(t%3Da)%7D)%2Ct%26%26t.click()%7Dvar%20u%3D%22%22%2Cv%3Ddocument.querySelectorAll(%22%5Bclass%5E%3D'styles__introHeader___'%5D%22).forEach(a%3D%3E%7B%22CORRECT%22%3D%3Da.innerText%3Fu%3D%22CORRECT%22%3A%22INCORRECT%22%3D%3Da.innerText%26%26(u%3D%22INCORRECT%22)%7D)%3Bif(%22CORRECT%22%3D%3Du)d%5Br%5D%3Dq%3Belse%20if(%22INCORRECT%22%3D%3Du%26%26!s%5Br%5D)%7Bvar%20w%3D%5B%5D%3Bl.forEach(a%3D%3E%7Bw.push(a.innerText)%7D)%2Ce%5Br%5D%3Dw%7D%7Dbreak%3Bcase%22Royale%22%3AclearInterval(f)%2CsetInterval(()%3D%3E%7Bvar%20a%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__questionText___'%5D%22)%3Bif(a%26%26a.innerText)%3Belse%20return%3Bfor(var%20c%2Cd%3Db%5Ba.innerText%5D%2Ce%3D!1%2Cf%3D0%3B4%3Ef%26%26!1%3D%3De%3Bf%2B%2B)c%3Ddocument.querySelectorAll(%22%5Bclass%5E%3D'styles__answerContainer___'%5D%22)%5Bf%5D%2Cc.innerText%26%26d.correctAnswers.includes(c.innerText)%26%26(c.click()%2Ce%3D!0)%7D%2C50)%3Bbreak%3Bcase%22Fish%22%3Avar%20x%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__pageButton___'%5D%22)%3Bx%26%26x.click()%3Bvar%20y%3Ddocument.querySelector(%22%5Bclass%5E%3D'arts__modal___'%5D%22)%3By%26%26y.click()%3B%7Dvar%20z%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__questionText___'%5D%22)%2CA%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__feedbackContainer___'%5D%20%3E%20div%22)%2CB%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__image___'%5D%22)%2CC%3Dnull!%3D%3DB%2CD%3DC%3FB.src.split(%22%2F%22)%5BB.src.split(%22%2F%22).length-1%5D.split(%22.%22)%5B0%5D%3Avoid%200%3Bif(A%26%26A.click()%2Cz%26%26z.innerText)%3Belse%20return%3Bfor(var%20E%2CF%3Db.filter(a%3D%3EC%3F!0%3D%3Da.hasImage%26%26a.image.id%3D%3DD%26%26a.text%3D%3Dz.innerText%3Aa.text%3D%3Dz.innerText)%5B0%5D%2CG%3D!1%2CH%3D0%3B4%3EH%26%26!1%3D%3DG%3BH%2B%2B)E%3Ddocument.querySelectorAll(%22%5Bclass%5E%3D'styles__answerContainer___'%5D%22)%5BH%5D%2CE.innerText%26%26F.correctAnswers.includes(E.innerText)%26%26(E.click()%2CG%3D!0)%7D%2C250)%7Dvar%20b%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__idInput___'%5D%22)%3Bif(!b)%7Bvar%20c%3Ddocument.body.appendChild(document.createElement(%22iframe%22))%2Cd%3Dc.contentWindow%3Breturn%20d.alert(%22Please%20only%20run%20this%20script%20on%20the%20start%20screen%20(where%20you%20input%20id)%22)%2Cvoid%20document.body.removeChild(c)%7Dvar%20e%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__mainBox___'%5D%22)%3Be.onsubmit%3Dfunction(...c)%7Bvar%20d%3Ddocument.body.appendChild(document.createElement(%22iframe%22))%2Ce%3Dd.contentWindow%3Be.alert(%60Starting%20bot%20with%20game%20code%20%24%7Bb.value%7D.%20If%20you%20incorrectly%20entered%20the%20game%20code%2C%20please%20refresh%20the%20page.%60)%2Cdocument.body.removeChild(d)%2Ca(b.value)%7D%3Bvar%20f%3Ddocument.querySelector(%22%5Bclass%5E%3D'styles__joinButton___'%5D%22)%3Bf.onclick%3Dfunction(...a)%7Be.onsubmit()%7D%7D)()%3B
```

/*Jag har valt att friskt använda mig utav bra google sökande inom JS. Kollat en hel del videor och W3school sidor inom JS samt jämfört denna koden med andras kod i förhållande till uppgiftens ändamål. Detta var den bästa lösningen till uppgiften.
provade alerts för att se ifall saker fungerade. Har kollat igenom sourcecode i google chrome hittade inga buggar endast något problem med cookies och gifen jag använt.   */

document.addEventListener("DOMContentLoaded", loadPage); // här körs koden i samband med ett event. Det läggs till ett event som lyssnar/används när en användare klickar med musen
// som accepterar både en function samt object med ett handleEvent, i detta fallet är det LoadPage som fungerar mer som ett callback istället för ett handleEvent.

function loadPage() {
  let inputBox = document.querySelector("#input-number");

  inputBox.oninput = function() {
    tabortAllaSektioner();
    SkapaSektion(parseInt(inputBox.value));
  };
}

function SkapaSektion(count){
  for (var i = 0; i < count; i++) {
    var parent = document.querySelector("main"); // här selectas parenten 

    var child = document.createElement("section"); // här skapas en sektion child
    var title = document.createElement("h3"); //här skapas en title med H3 
    var blurb = document.createElement("p"); // här skapas en blurb paragraf

    title.innerText = "Inlägg " + i;
    blurb.innerText = `Over there, over there send the word send the word over there, that the yanks are coming the drums rum tumming everywhere.
    So prepare, say a prayer, send the word send the word to beware, We'll be over we're coming over and we wont come back till it's over
    over there.`;

    redigerare(title);
    redigerare(blurb);

    child.append(title); // här är en child inuti boxens eller rutans append i detta fallet titeln "Inlägg"
    child.append(blurb); // här händer samma sak fast med rutans text istället.
    parent.append(child); // här läggs dem till på parent.
  }
}

function tabortAllaSektioner(){
  var test_sections = document.querySelectorAll("section");// här är en dom som selectar allting sedan loopar igenom och då tar bort allt.
  for (var i = 0; i < test_sections.length; i++) {
    test_sections[i].remove();
  }
}

function redigerare(elem){
  elem.onclick = function(e) {
    elem.contentEditable = true;
    elem.focus();
  };
  elem.onblur = function(e) {
    elem.contentEditable = false;
  };
}

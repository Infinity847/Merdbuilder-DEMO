document.onkeydown=function(e)
{
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
return false;
    }
}
var editallow = true;
var SP = window.webkitSpeechRecognition;
var recognition = new window.webkitSpeechRecognition;
var itemcount = 1;
var content = "";
var footer = false;
var FOCUSID = 0;
var page = document.getElementById("//Page.Content.Main");
var outerpage = document.getElementById("MerdbuilderPageContentContentheader");
var pagecontent = page.innerHTML;
var itemname = "";
var ITEMTITLE = document.getElementById("merdbuilderitemtitle");
var ITEMDESC = document.getElementById("merdbuildereditspace");
var systemprompt=0;
//Remove inspect and view sources
function Editor$Input(placeholder,id) {
ITEMDESC.innerHTML = ITEMDESC.innerHTML + "<p><p>"+placeholder+" : </p>"+"<input id = " + id + "></p><br>";
document.getElementById(id).placeholder = placeholder;
}
function Editor$Clear() {
    ITEMDESC.innerHTML = "";
}
function Editor$Submit() {
    ITEMDESC.innerHTML = ITEMDESC.innerHTML + "<br><button class = 'submitbtn' id = 'MERDBUILDERSUBMITBUTTON'>Submit Changes</button>";
}
//recognition.start() - Start recognition
function RobotSay(text) 
{
  const sound = new SpeechSynthesisUtterance(text);
  sound.rate = 1;
  sound.volume = 1;
  speechSynthesis.speak(sound);
}
function UpdatePageContent() {
    pagecontent=page.innerHTML;
}
recognition.onresult = function(event)
{
 console.log(event); 
content = event.results[0][0].transcript;
if (content.includes("delete")) {
    RobotSay("Type in the id of the element you want to delete in the input.");
    systemprompt = prompt("Type in the id of the element you want to delete in the input.","");
document.getElementById(systemprompt).remove();
}else if(content.includes("button")) {
    makeBtn();
    RobotSay("Added button element.");
}else if(content.includes("italic")) {
    makeItalic();
    RobotSay("Added italic label.");
}else if(content.includes("label")) {
    makelabel();
    RobotSay("Added label.");
}else if(content.includes("textarea")) {
    makeTxtArea();
    RobotSay("Added textarea element.");
}else if(content.includes("header")) {
    makeHeader();
    RobotSay("Added header element.");
}else if(content.includes("footer")) {
    makeFooter();
    RobotSay("Added footer element.");
}else if(content.includes("title")) {
    makeTitle();
    RobotSay("Added title element.");
}
}
function assist() {
    recognition.start();
}
function ShowInputs(id,type) {
    Editor$Clear();
    if (editallow) {
        FOCUSID = id;
        console.log(id);
        console.log(type);
        ITEMTITLE.innerHTML = id;
if (type == "p") {
Editor$Input("Text","MERDBUILDER$TEXT");
Editor$Input("Color","MERDBUILDER$COLOR");
Editor$Input("Id","MERDBUILDER$ID");
Editor$Submit();
document.getElementById("MERDBUILDERSUBMITBUTTON").onclick = function() {
    document.getElementById(id).innerHTML = document.getElementById("MERDBUILDER$TEXT").value;
    document.getElementById(id).style.color = document.getElementById("MERDBUILDER$COLOR").value;
    document.getElementById(id).id = document.getElementById("MERDBUILDER$ID").value;
    Editor$Clear()
    ITEMTITLE.innerHTML = "";
}
document.getElementById("MERDBUILDER$TEXT").value = document.getElementById(id).innerHTML;
document.getElementById("MERDBUILDER$COLOR").value = document.getElementById(id).style.color;
document.getElementById("MERDBUILDER$ID").value = id;
}else if(type == "h1") {
    Editor$Input("Text","MERDBUILDER$TEXT");
Editor$Input("Color","MERDBUILDER$COLOR");
Editor$Input("Id","MERDBUILDER$ID");
Editor$Submit();
document.getElementById("MERDBUILDERSUBMITBUTTON").onclick = function() {
    document.getElementById(id).innerHTML = document.getElementById("MERDBUILDER$TEXT").value;
    document.getElementById(id).style.color = document.getElementById("MERDBUILDER$COLOR").value;
    document.getElementById(id).id = document.getElementById("MERDBUILDER$ID").value;
    Editor$Clear()
    ITEMTITLE.innerHTML = "";
}
document.getElementById("MERDBUILDER$TEXT").value = document.getElementById(id).innerHTML;
document.getElementById("MERDBUILDER$ID").value = id;
document.getElementById("MERDBUILDER$COLOR").value = document.getElementById(id).style.color;
}else if(type == "i") {
    Editor$Input("Text","MERDBUILDER$TEXT");
    Editor$Input("Color","MERDBUILDER$COLOR");
    Editor$Input("Id","MERDBUILDER$ID"); 
    Editor$Submit();
    document.getElementById("MERDBUILDERSUBMITBUTTON").onclick = function() {
        document.getElementById(id).innerHTML = document.getElementById("MERDBUILDER$TEXT").value;
        document.getElementById(id).style.color = document.getElementById("MERDBUILDER$COLOR").value;
        document.getElementById(id).id = document.getElementById("MERDBUILDER$ID").value;
        Editor$Clear()
    ITEMTITLE.innerHTML = "";
    }
    document.getElementById("MERDBUILDER$TEXT").value = document.getElementById(id).innerHTML;
    document.getElementById("MERDBUILDER$ID").value = id;
    document.getElementById("MERDBUILDER$COLOR").value = document.getElementById(id).style.color;
}else if(type=="img") {
    Editor$Input("Error Message","MERDBUILDER$ErrorMSG");
    Editor$Input("Image Source","MERDBUILDER$ImgSrc"); 
    Editor$Input("Id","MERDBUILDER$ID");   
    Editor$Submit();
    document.getElementById("MERDBUILDERSUBMITBUTTON").onclick = function() {
        document.getElementById(id).src = document.getElementById("MERDBUILDER$ImgSrc").value;
        document.getElementById(id).alt = document.getElementById("MERDBUILDER$ErrorMSG").value;
        document.getElementById(id).id = document.getElementById("MERDBUILDER$ID").value;
        Editor$Clear()
    ITEMTITLE.innerHTML = "";
    }
    document.getElementById("MERDBUILDER$ID").value = id;
    document.getElementById("MERDBUILDER$ErrorMSG").value = document.getElementById(id).alt;
    document.getElementById("MERDBUILDER$ImgSrc").value = document.getElementById(id).src;
}else if(type == "button") {
    Editor$Input("Text","MERDBUILDER$TEXT");
    Editor$Input("Background Color","MERDBUILDER$BackgroundColor"); 
    Editor$Input("Text Color","MERDBUILDER$TextColor"); 
    Editor$Input("Id","MERDBUILDER$ID");
    Editor$Submit();
    document.getElementById("MERDBUILDERSUBMITBUTTON").onclick = function() {
        document.getElementById(id).innerHTML = document.getElementById("MERDBUILDER$TEXT").value;
        document.getElementById(id).style.backgroundColor = document.getElementById("MERDBUILDER$BackgroundColor").value;
        document.getElementById(id).style.color = document.getElementById("MERDBUILDER$TextColor").value;
        document.getElementById(id).id = document.getElementById("MERDBUILDER$ID").value;
        Editor$Clear()
    ITEMTITLE.innerHTML = "";
    }
    document.getElementById("MERDBUILDER$ID").value = id;
    document.getElementById("MERDBUILDER$TEXT").value = document.getElementById(id).innerHTML;
    document.getElementById("MERDBUILDER$BackgroundColor").value = document.getElementById(id).style.backgroundColor;
    document.getElementById("MERDBUILDER$TextColor").value = document.getElementById(id).style.backgroundColor;
}else if(type == "textarea") {
    Editor$Input("Text","MERDBUILDER$TEXT");
    Editor$Input("Background Color","MERDBUILDER$BackgroundColor"); 
    Editor$Input("Text Color","MERDBUILDER$TextColor"); 
    Editor$Input("Placeholder","MERDBUILDER$Placeholder"); 
    Editor$Input("Id","MERDBUILDER$ID");
    Editor$Submit();
    document.getElementById("MERDBUILDERSUBMITBUTTON").onclick = function() {
        document.getElementById(id).innerHTML = document.getElementById("MERDBUILDER$TEXT").value;
        document.getElementById(id).style.backgroundColor = document.getElementById("MERDBUILDER$BackgroundColor").value;
        document.getElementById(id).style.color = document.getElementById("MERDBUILDER$TextColor").value;
        document.getElementById(id).placeholder = document.getElementById("MERDBUILDER$Placeholder").value;
        document.getElementById(id).id = document.getElementById("MERDBUILDER$ID").value;
        Editor$Clear()
    ITEMTITLE.innerHTML = "";
    }
    document.getElementById("MERDBUILDER$TEXT").value = document.getElementById(id).innerHTML;
    document.getElementById("MERDBUILDER$Placeholder").value = document.getElementById(id).placeholder;
    document.getElementById("MERDBUILDER$ID").value = id;
    document.getElementById("MERDBUILDER$TextColor").value = document.getElementById(id).style.color;
    document.getElementById("MERDBUILDER$BackgroundColor").value = document.getElementById(id).style.backgroundColor;
}else if(type=="header") {
    Editor$Input("Text","MERDBUILDER$TEXT");
    Editor$Input("Background Color","MERDBUILDER$BackgroundColor"); 
    Editor$Input("Text Color","MERDBUILDER$TextColor"); 
    Editor$Input("Id","MERDBUILDER$ID");
    Editor$Submit();
    document.getElementById("MERDBUILDERSUBMITBUTTON").onclick = function() {
        document.getElementById(id).innerHTML = document.getElementById("MERDBUILDER$TEXT").value;
        document.getElementById(id).style.backgroundColor = document.getElementById("MERDBUILDER$BackgroundColor").value;
        document.getElementById(id).style.color = document.getElementById("MERDBUILDER$TextColor").value;
        document.getElementById(id).id = document.getElementById("MERDBUILDER$ID").value;
        Editor$Clear()
    ITEMTITLE.innerHTML = "";
    }
    document.getElementById("MERDBUILDER$ID").value = id;
    document.getElementById("MERDBUILDER$TEXT").value = document.getElementById(id).innerHTML;
    document.getElementById("MERDBUILDER$TextColor").value = document.getElementById(id).style.color;
    document.getElementById("MERDBUILDER$BackgroundColor").value = document.getElementById(id).style.backgroundColor;
}else if(type=="footer") {
    Editor$Input("Text","MERDBUILDER$TEXT");
    Editor$Input("Background Color","MERDBUILDER$BackgroundColor"); 
    Editor$Input("Text Color","MERDBUILDER$TextColor"); 
    Editor$Input("Id","MERDBUILDER$ID");
    Editor$Submit();
    document.getElementById("MERDBUILDERSUBMITBUTTON").onclick = function() {
        document.getElementById(id).innerHTML = document.getElementById("MERDBUILDER$TEXT").value;
        document.getElementById(id).style.backgroundColor = document.getElementById("MERDBUILDER$BackgroundColor").value;
        document.getElementById(id).style.color = document.getElementById("MERDBUILDER$TextColor").value;
        document.getElementById(id).id = document.getElementById("MERDBUILDER$ID").value;
        Editor$Clear()
    ITEMTITLE.innerHTML = "";
    }
    document.getElementById("MERDBUILDER$ID").value = id;
    document.getElementById("MERDBUILDER$TextColor").value = document.getElementById(id).style.color;
    document.getElementById("MERDBUILDER$BackgroundColor").value = document.getElementById(id).style.backgroundColor;
    document.getElementById("MERDBUILDER$TEXT").value = document.getElementById(id).innerHTML;
}
    }
}
function detect(event,id,type) {
console.log(event.button);
if (event.button == 2) {
    ShowInputs(id,type);
}
}
function makelabel() {
if (editallow) {
UpdatePageContent();
itemname = "label" + itemcount;
page.innerHTML = pagecontent + "<p id = '" + itemname + "' onmousedown = "+'"detect(event,'+"'"+itemname+"','p')" + '">Label</p>';
itemcount++;
}
}
function makeTitle() {
    if (editallow) {
    UpdatePageContent();
    itemname = "title" + itemcount;
    page.innerHTML = pagecontent + "<h1 id = '" + itemname + "' onmousedown = "+'"detect(event,'+"'"+itemname+"','h1')" + '">Title</h1>';
    itemcount++;
    }
    }
    function makeItalic() {
            if (editallow) {
        UpdatePageContent();
        itemname = "italiclabel" + itemcount;
        page.innerHTML = pagecontent + "<i id = '" + itemname + "' onmousedown = "+'"detect(event,'+"'"+itemname+"','i')" + '">Italic Label</i>';
        itemcount++;
        }
    }
    function makeImg() {
        if (editallow) {
    UpdatePageContent();
    itemname = "image" + itemcount;
    page.innerHTML = pagecontent + "<img src = 'https://www.bing.com/th?id=OIP.R86rcfrxaCb-exKICpRY9gHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' id = '" + itemname + "' onmousedown = "+'"detect(event,'+"'"+itemname+"','img')" + '">';
    itemcount++;
    }
}
function makeBtn() {
    if (editallow) {
    UpdatePageContent();
    itemname = "button" + itemcount;
    page.innerHTML = pagecontent + "<button id = '" + itemname + "' onmousedown = "+'"detect(event,'+"'"+itemname+"','button')" + '">Button</button>';
    itemcount++;
    }
    }
    //Edit Onclicks by using document.getElementById("examplebtn").onclick = myfunction();
    function makeTxtArea() {
        if (editallow) {
        UpdatePageContent();
        itemname = "textarea" + itemcount;
        page.innerHTML = pagecontent + "<textarea id = '" + itemname + "' onmousedown = "+'"detect(event,'+"'"+itemname+"','textarea')" + '"></textarea>';
        itemcount++;
        }
        }
        function makeHeader() {
            if (editallow) {
            UpdatePageContent();
            itemname = "header" + itemcount;
            page.innerHTML = pagecontent + "<div id = '" + itemname + "' onmousedown = "+'"detect(event,'+"'"+itemname+"','header')" + '">Header</div>';
            document.getElementById(itemname).style = "color:white;font-size:30px;background-color:orange;width:"+page.clientWidth+"px;";
            itemcount++;
            }
            }
            function makeFooter() {
                if (!footer) {
                if (editallow) {
                UpdatePageContent();
                itemname = "footer" + itemcount;
                page.innerHTML = pagecontent + "<div id = '" + itemname + "' onmousedown = "+'"detect(event,'+"'"+itemname+"','footer')" + '">Footer</div>';
                document.getElementById(itemname).style = "color:white;font-size:30px;background-color:orange;width:"+page.clientWidth+"px;bottom:0;position:fixed;";
                itemcount++;
                footer = true;
                }
            }else {
window.alert("You already have a footer.");
            }
                }
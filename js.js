const body = document.querySelector(".body")
const input = document.querySelector(".input");

let whiteline=document.createElement("div")
let searchboxdiv = document.querySelector(".searchboxdiv")
let inputpopup= document.createElement("div")
input.addEventListener("click",function(){  
    body.append(inputpopup)
    inputpopup.setAttribute("class","inputpopup")
    searchboxdiv.style.borderRadius = "0px"; 
    body.append(whiteline)
    whiteline.setAttribute("class","whiteline")  
})

let shortcutbackground= document.querySelector("div")
let shortcutdiv = document.querySelector(".shortcutdiv");
let addshortcut = document.createElement("div")
shortcutdiv.addEventListener("click",function(){
    body.append(addshortcut)
    addshortcut.setAttribute("class","addshortcut")
    body.append(shortcutbackground)
    shortcutbackground.setAttribute("class","shortcutbackground")
})

let bottombtn= document.querySelector(".bottombtn");
let custompage=document.createElement("div")
bottombtn.addEventListener("click",function(){
    body.append(custompage)
    custompage.setAttribute("click","custompage")
})
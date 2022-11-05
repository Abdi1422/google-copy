const body = document.querySelector(".body")
const input = document.querySelector(".input");

let inputbackground = document.createElement("div")
let whiteline=document.createElement("div")
let searchboxdiv = document.querySelector(".searchboxdiv")
let inputpopup= document.createElement("div")
input.addEventListener("click",function(){
    body.append(inputbackground)
    inputbackground.setAttribute("class","inputbackground")  
    body.append(inputpopup)
    inputpopup.setAttribute("class","inputpopup")
    searchboxdiv.style.borderRadius = "0px"; 
    body.append(whiteline)
    whiteline.setAttribute("class","whiteline")  
})
inputbackground.addEventListener("click",function(){
    inputpopup.remove()
    inputbackground.remove()
    searchboxdiv.style.borderRadius="100px"
    whiteline.remove()
    
})

let urlp =document.createElement("p")
let urlinput = document.createElement("input")
let namep =document.createElement("p")
let nameinput = document.createElement("input")
let namediv = document.createElement("div")
let urldiv = document.createElement("div")
let shortcutp = document.createElement("p")
let donebtn=document.createElement("button")
let cancelbtn= document.createElement("button")
let shortcutbackground= document.createElement("div")
let shortcutdiv = document.querySelector(".shortcutdiv");
let addshortcut = document.createElement("div")
let donebtndiv = document.createElement("donebtndiv")
let shortcutwrapper=document.createElement("div")
shortcutdiv.addEventListener("click",function(){
    body.append(addshortcut)
    addshortcut.setAttribute("class","addshortcut")
    body.append(shortcutbackground)
    shortcutbackground.setAttribute("class","shortcutbackground")
    shortcutwrapper.append(shortcutp) 
    shortcutp.setAttribute("class","shortcutp")
    shortcutp.innerText="Add shortcut"
    addshortcut.append(shortcutwrapper)
    shortcutwrapper.setAttribute("class","shortcutwrapper")
    shortcutwrapper.append(namediv) 
    namediv.setAttribute("class","namediv")
    namediv.append(namep)
    namep.setAttribute("class","ps ")
    namep.innerText="Name"
    namediv.append(nameinput)
    nameinput.setAttribute("class","inputs nameinput")
    shortcutwrapper.append(urldiv) 
    urldiv.setAttribute("class","urldiv")
    urldiv.append(urlp)
    urlp.setAttribute("class","ps")
    urlp.innerText="URL"
    urldiv.append(urlinput)
    urlinput.setAttribute("class","inputs urlinput")
    addshortcut.append(donebtndiv)
    donebtndiv.setAttribute("class","donebtndiv")
    donebtndiv.append(cancelbtn)
    cancelbtn.setAttribute("class","cancelbtn")
    cancelbtn.innerText="Cancel"
    donebtndiv.append(donebtn) 
    donebtn.setAttribute("class","donebtn")
    donebtn.innerText="Done"
})

cancelbtn.addEventListener("click",function(){
   addshortcut.remove()
   shortcutbackground.remove()
})

/*<ion-icon name="cloud-upload"></ion-icon>*/

let uploadp=document.createElement("p")
let uploadicon= document.createElement("ion-icon")
let navupload= document.createElement("div")
let upload = document.createElement("div")
let navbtn1p = document.createElement("p")
let imageicon = document.createElement("ion-icon")
let navbtn2p = document.createElement("p")
let shortsicon = document.createElement("ion-icon")
let navbtn3p = document.createElement("p")
let coloricon = document.createElement("ion-icon")
let customdivtop = document.createElement("div")
let custombtndiv=document.createElement("div")
let navbtn3 = document.createElement("button")
let navbtn2 = document.createElement("button")
let navbtn1 = document.createElement("button")
let customnav = document.createElement("div")
let customdone = document.createElement("button")
let customdelete = document.createElement("button")
let custombackground=document.createElement("div")
let bottombtn= document.querySelector(".bottombtn");
let custompage=document.createElement("div")
bottombtn.addEventListener("click",function(){
    body.append(custombackground)
    custombackground.setAttribute("class","custombackground")
    body.append(custompage)
    custompage.setAttribute("class","custompage")
    custompage.append(customdivtop)
    customdivtop.setAttribute("class","customdivtop")
    customdivtop.innerText="Customise this page"
    custompage.append(navupload)
    navupload.setAttribute("class","navupload")
    navupload.append(customnav)
    customnav.setAttribute("class","customnav")
    customnav.append(navbtn1)
    navbtn1.setAttribute("class","navbtn navbtn1 ")
    navbtn1.append(imageicon)
    imageicon.setAttribute("name","image-outline")
    imageicon.setAttribute("class","imageicon")
    navbtn1.append(navbtn1p)
    navbtn1p.innerText="Background"
    customnav.append(navbtn2)
    navbtn2.setAttribute("class","navbtn navbtn2")
    navbtn2.append(shortsicon)
    shortsicon.setAttribute("name","attach")
    shortsicon.setAttribute("class","shortsicon")
    navbtn2.append(navbtn2p)
    navbtn2p.innerText="Shortcuts"
    customnav.append(navbtn3)
    navbtn3.setAttribute("class","navbtn navbtn3")
    navbtn3.append(coloricon)
    coloricon.setAttribute("name","color-palette")
    coloricon.setAttribute("class","coloricon")
    navbtn3.append(navbtn3p)
    navbtn3p.setAttribute("class","navbtn3p")
    navbtn3p.innerText="Colour and theme"
    navupload.append(upload)
    upload.setAttribute("class","upload")
    upload.append(uploadicon)
    uploadicon.setAttribute("name","cloud-upload")
    uploadicon.setAttribute("class","uploadicon")
    upload.append(uploadp)
    uploadp.innerText="Upload from device"
    custompage.append(custombtndiv)
    custombtndiv.setAttribute("class","custombtndiv")
    custombtndiv.append(customdelete)
    customdelete.setAttribute("class","customdelete")
    customdelete.innerText="Cancel"
    custombtndiv.append(customdone)
    customdone.setAttribute("class","customdone")
    customdone.innerText="Done"
})

customdelete.addEventListener("click",function(){
    custompage.remove()
    custombackground.remove()
})

let ps = document.querySelectorAll(".ps")
let inputs = document.querySelectorAll(".inputs")
inputs.forEach(p=>{
    p.addEventListener("click",function(){
        inputs.forEach(p1 => p1.classlist.remove("active"))
        this.classlist.add("active") 
    })
})


let strings="abcdefghijklmnopqrstuvwxyz"
let upStrings=strings.toUpperCase()
let nums="0123456789"
let otherChars="!@#$%^&*()_+~`|}{[]\:;?><,./-="
let allChars=strings+upStrings+nums+otherChars

let firtsPass=document.getElementById("first-pass")
let secondPass=document.getElementById("second-pass")
let thirdPass=document.getElementById("third-pass")
let fourthPass=document.getElementById("fourth-pass")
let passwordLength=document.getElementById("passlength")



function getRandomChar(){
    let generatedNum=Math.floor(Math.random()*allChars.length)
    return generatedNum
}

function generatePass(){
    let password=""
    passwordLength.select()
    for(let i=1; i<=passwordLength.value; i++){
        let newChar=allChars[getRandomChar()]
        password+=newChar
    }
    console.log(password);
    return password
}

function writePass(){
    firtsPass.textContent=generatePass()
    secondPass.textContent=generatePass()
    thirdPass.textContent=generatePass()
    fourthPass.textContent=generatePass()
}


let save = document.querySelector('.save');
let codeSnip = document.querySelector('.codeSnip');
let edit = document.querySelector('.edit');
let copy = document.querySelector('.copy');
let hamburger = document.querySelector('.hamburger');
let hamburgerLine = document.querySelectorAll('.hamburgerLine');
let side = document.querySelector('.side');
let codeBlock = document.querySelector('.codeBlock');
let codeLine = document.querySelector('.codeLine');



hamburger.addEventListener('mouseover', ()=>{

    hamburger.style.backgroundColor = '#F1F2F6';
    for (let i = 0; i < hamburgerLine.length; i++) {
        hamburgerLine[i].style.backgroundColor = '#717171';
      }
    
});

hamburger.addEventListener('mouseout', ()=>{

    hamburger.style.backgroundColor = '#717171';
    for (let i = 0; i < hamburgerLine.length; i++) {
        hamburgerLine[i].style.backgroundColor = '#F1F2F6';
      }
    
});



save.addEventListener('click', ()=> {
codeSnip.readOnly = true;
console.log(codeSnip.readOnly);
});


edit.addEventListener('click', ()=>{
    codeSnip.readOnly = false
    console.log(codeSnip.readOnly);
});

copy.addEventListener('click', ()=>{
    codeSnip.select();
    
    navigator.clipboard.writeText(codeSnip.value);

    alert("Copied the text: " + codeSnip.value);
})

codeSnip.addEventListener('input', ()=>{

    let temp = calcLines();
    

})

   
let codeSnipLineHeight = 20; // This should match the line-height in the CSS


function calcLines(height, numlines){

    let codeSnipHeight = codeSnip.scrollHeight; // Get the scroll height of the textarea
    let numberOfLines = Math.floor(codeSnipHeight/codeSnipLineHeight);

    let newLine = document.createElement('p');
    newLine.className = 'codeLine';
    newLine.textContent = '2';
    side.appendChild(newLine);
    codeBlock.style.height = `${codeSnipHeight}px`;

    let codeHeight = codeSnipHeight/numberOfLines;

    codeLine.style.height = `${codeHeight}px`;



}
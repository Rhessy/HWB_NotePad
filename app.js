let save = document.querySelector('.save');
let codeSnip = document.querySelector('.codeSnip');
let edit = document.querySelector('.edit');
let copy = document.querySelector('.copy');
let hamburger = document.querySelector('.hamburger');
let hamburgerLine = document.querySelectorAll('.hamburgerLine');

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
    codeSnip.readOnly = false;
    console.log(codeSnip.readOnly);
});

copy.addEventListener('click', ()=>{
    codeSnip.select();
    
    navigator.clipboard.writeText(codeSnip.value);

    alert("Copied the text: " + codeSnip.value);
})


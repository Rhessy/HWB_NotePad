let save = document.querySelector('.save');
let codeSnip = document.querySelector('.codeSnip');
let edit = document.querySelector('.edit');
let copy = document.querySelector('.copy');




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


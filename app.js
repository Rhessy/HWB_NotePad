let save = document.querySelector('.save');
let codeSnip = document.querySelector('.codeSnip');
let edit = document.querySelector('.edit');
let copy = document.querySelector('.copy');
let hamburger = document.querySelector('.hamburger');
let hamburgerLine = document.querySelectorAll('.hamburgerLine');
let side = document.querySelector('.side');
let codeBlock = document.querySelector('.codeBlock');
let codeLine = document.querySelector('.codeLine');
let charCount = document.querySelector('.characterCount');
let LinCount = document.querySelector('.lineCount');
let pElements = [];




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


/* Adding in code for text area */

let charactersPerLine = 30;
let maxLines = 6;
let widthPerCharacter = 10;
let numOfRow;

function formatTextAsRequired(){
    //get the current value of codeSnip
    let textInput = document.querySelector('.codeSnip').value;

    //create rows using the new line string
    let inputAsRows = textInput.split("\n");

    //removes all line breaks 
    let inputAsOneLine = textInput.replace(/(\r\n\t|\n|\r\t)/gm,"");

    //read current cursor position 
    cursorPositionOnInput=document.querySelector(".codeSnip").selectionStart;

    //set default value for cursor offset. cursor offset is needed when re-posiotioning the cursor after WRITE DATA
    var cursorOffsetAfterOutput=0;

//number of visible characters per line before text breaks without a line-break. 
//Depends on width of textarea and width of characters entered.
    var visibleCharactersPerLine=Math.floor((document.querySelector(".codeSnip").offsetWidth)/9);
    




  let additionalTextAreaRows=0; //additional rows needed due to the text breaking
  let totalRows=inputAsRows.length; //don't put inputAsRows.length in the for statement, as the array is growing in the loop which results in an infinite loop
  let row;
  let lineBreakCount=0;
  let characterCount=0;
  for (row = 1; row < totalRows; ++row) {
    if(inputAsRows[row].length>charactersPerLine){ //1b DETECT IF TEXT PER LINE IS TOO LONG 
      if (inputAsRows[row+1] === undefined) {
        inputAsRows[row+1]="";// the row did not exist
        totalRows++;
        }
      //1c PUSH OVERFLOWING TEXT: move text that is too long for this row to the next row:
      inputAsRows[row+1]=inputAsRows[row].substring(charactersPerLine)+inputAsRows[row+1];
      inputAsRows[row]=inputAsRows[row].substring(0,charactersPerLine);
      //determine, if cursor was at the end of the line that got a line-break:
      var newOutput=inputAsRows.join("\n");
      if(newOutput.substr(cursorPositionOnInput-1,1)=="\n"){
        cursorOffsetAfterOutput=1; }
      }
    if(inputAsRows[row].length>visibleCharactersPerLine){ //1b DETECT IF TEXT PER LINE IS TOO LONG 
      additionalTextAreaRows=additionalTextAreaRows+Math.floor(inputAsRows[row].length/visibleCharactersPerLine);
      }
    
    }

  if(inputAsRows.length<=maxLines && inputAsOneLine.length<=(maxLines*charactersPerLine)){//data is within max number of rows and max total digits
    textOutput=inputAsRows.join("\n");
    document.querySelector(".codeSnip").rows=inputAsRows.length+additionalTextAreaRows;//resize textarea    
    //document.getElementById("errors").innerHTML="";//remove error message
    //document.getElementById("count").innerHTML=inputAsOneLine.length+"/"+(maxLines*charactersPerLine);//show digits count
   /* if(onPaste){
      cursorOffsetAfterOutput=cursorOffsetOnPaste(textInput,cursorPositionOnInput,totalRows)
      }*/
    }
    else //data would be too long 
    {
    //document.getElementById("errors").innerHTML="This field can only have "+maxLines+" lines with "+charactersPerLine+" characters per line.";//display error message
    //document.getElementById("count").innerHTML="";//remove digits count
    cursorOffsetAfterOutput=-1;
  }
  document.querySelector(".codeSnip").value=textOutput;//1d: WRITE VALUE
  document.querySelector(".codeSnip").selectionStart=cursorPositionOnInput+cursorOffsetAfterOutput; //2b: POSITION CURSOR
  document.querySelector(".codeSnip").selectionEnd=cursorPositionOnInput+cursorOffsetAfterOutput; //set a single cursor, not a selection
  onPaste=false;
  //showOutput();
  //toggleLabel();

 

/*
function showOutput(){
    var outputHTMLtable="<table>";
    var textInput=document.querySelector(".codeSnip").value;//READ DATA
    var inputAsRows=textInput.split("\n");// create array from input => each element contains one row of the textarea
    for(row=0;row<inputAsRows.length;row++)
      {
        outputHTMLtable=outputHTMLtable+"<tr><td>field "+row+":</td><td>"+inputAsRows[row]+"</td></tr>";
      }
    outputHTMLtable=outputHTMLtable+"</table>";
    document.getElementById("output").innerHTML=outputHTMLtable;
  }

*/

/*codeSnip.addEventListener('input', ()=>{

    let temp = calcLines();
    

});
*/


numOfRow = totalRows;
createPElements();
}


function createPElements(){

if (side.childElementCount < numOfRow)
{
 
  alert("We made it before 3!!  number of rows =" +numOfRow);
        let p = document.createElement('p');
        p.className = `codeLine p${side.childElementCount+1}`;
        p.textContent = `${side.childElementCount+1}`;
        side.appendChild(p);
        console.log("This is p[i]" + pElements[numOfRow]);
        codeBlock.style.height = `${20+numOfRow*20}px`;
    
    console.log("p is this long"+side.childElementCount);
}
else if(side.childElementCount > numOfRow){
  console.log("we made it to else if");
  for (i=side.childElementCount; i > numOfRow; i--)
    {
        document.querySelector(`.p${i}`).remove();
        
    }
}
else{
  return;
}

}
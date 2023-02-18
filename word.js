let list= document.querySelector("#Police"); 

let testText=document.querySelector("p");
 


let l=document.querySelector("#taille"); 



let lCol= document.querySelector("#color"); 

  
/**
 * when called , this function changes the propreties of the text
 * the propreties are chosen by the user 
 * @param none 
 */ 

function changePropreties()
{
    let choice=list.value; 
    let lChoice=l.value; 
    let lColChoice=lCol.value; 



    testText.style.fontFamily=choice;
    testText.style.fontSize=lChoice;
    testText.style.color=lColChoice;

} 


list.addEventListener("change",changePropreties);
l.addEventListener("input",changePropreties); 
lCol.addEventListener("input",changePropreties);









function mrx(){

    note=document.getElementById("note1").value;

    if(note>10 && note<12.9){
        alert("passabl");
    }
    else if(note>12 && note<13.9){
        alert("assez bien");
    }
    
    else if(note>13.9 && note<15.9){
        alert(" bien");
    }
    else if(note>15.9 && note<20){
        alert(" t.bien");
    }
    
    else if(note>20){
        alert(" erreur");
    }
    
    
}

/*vb="221";
alert(vb);
a=150;
a+=2;
b=150;
c=a+b;

if(a==b){ 
    alert("oui")
}
else{

    alert("no")
}
*/

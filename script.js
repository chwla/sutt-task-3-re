function generateresume(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;
    document.getElementById("linkT").innerHTML=document.getElementById("linkField").value;
    document.getElementById("aqT").innerHTML=document.getElementById("aqField").value;
    document.getElementById("skillT").innerHTML=document.getElementById("skillField").value;

    let file=document.getElementById('imgField').files[0];

    console.log(file);

    let reader=new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend=function(){
        document.getElementById('imgTemplate').src=reader.result;
    }

    document.getElementById('resume-form').style.display='none'
    document.getElementById('resume-template').style.display='block';
}

function printresume(){
    window.print()
}
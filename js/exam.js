function termschange(checkbox){
    if(checkbox.checked){
        
        document.getElementById("submit").disabled = false;
    } else{
        //Otherwise, disable the submit button.
        document.getElementById("submit").disabled = true;
    }
}

function examvalidation(){
    var x=document.getElementById("collegeid").value.length;
    console.log(x)
    if(x!=10)
    {
        alert("enter a valid register number");
        return false;
    }
    else{
    alert("successfully registered");
    return true;
    }
    
}
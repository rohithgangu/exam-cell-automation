function studentvalidation(){
    var x =document.getElementById("uname").value;
    console.log(x);
    const name =document.getElementById("uname").value;
    if(x=="rohith" || x=="phani" || x=="aravind"){
     
        localStorage.setItem("user",name);
        window.location.href="home.html";
    } 
    else{
      alert("not a valid user");
    }
  }
  function studentregistration()
  {
    const name=document.getElementById("ruser").value;
    localStorage.setItem("user",name);
    window.location.href="home.html";
  
  }
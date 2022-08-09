console.log("connected");
function contactus()
{
    var name=document.getElementById("name").value;
    var name=document.getElementById("email").value;
    var name=document.getElementById("subject").value;
    var name=document.getElementById("message").value;


   

    if(name!=""){
        for(var i=name.length;i>0;i--)
        {
            if(isNaN(name[i]))
            {

            }
            else{
                alert("Name contains Numbers");
                return false;
            }
        }
    }
    else{
        alert("Please Enter your Name!!!");
        return false;
    }

    if(email!=""){
        
    }
    else{
        alert("Please Enter your email!!!");
        return false;
    }


    if(subject!=""){
    
}
else{
    alert("Please Enter your subject!!!");
    return false;
}

}



console.log("connected");

function signin()
{

var email=document.getElementById("exampleInputEmail1").value;
var pass=document.getElementById("exampleInputPassword1").value;
var check=document.getElementById("exampleCheck1");



if(email!=""){

}
else{
alert("Please Enter your email properly!!!");
return false;
}


// signin

if(pass!=""){

}
else{
alert("Please Enter your password properly!!!");
return false;
}

if(exampleCheck1.checked!=""){

}
else{
alert("Please Check the ckeckbox!!!");
return false;
}

}





console.log("connected");

function register()
{

var email=document.getElementById("inputEmail4").value;
var pass=document.getElementById("inputPassword4").value;
var check=document.getElementById("inputAddress");
var check=document.getElementById("inputAddress2");
var check=document.getElementById("inputCity");
var check=document.getElementById("inputState");
var check=document.getElementById("inputZip");
var check=document.getElementById("gridCheck");



if(inputEmail4!=""){

}
else{
alert("Please Enter your email properly!!!");
return false;
}


// signin

if(inputPassword4!=""){

}
else{
alert("Please Enter your password properly!!!");
return false;
}

if(inputAddress2=""){

}
else{
alert("Please Check the address!!!");
return false;
}

if(inputCity!=""){

}
else{
alert("Please Enter your city properly!!!");
return false;
}


// signin

if(inputState!=""){

}
else{
alert("Please Enter your state properly!!!");
return false;
}

if(inputZip=""){

}
else{
alert("Please Check the zip number!!!");
return false;
}

if(gridCheck=""){

}
else{
alert("Please Check the box!!!");
return false;
}


}
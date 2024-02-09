function emailcheck(inputText)
{
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailFormat))
{
return true;
}
else
{
alert("Invalid Email address !!")
inputText.focus();
return false;
}
}

function numbercheck(inputText)
{
var phoneno=/^\d{10}$/;
if(inputText.value.match(phoneno))
{
return true
}
else
{
    alert("Invalid Phone number !!")
    inputText.focus();
    return false;
}
}
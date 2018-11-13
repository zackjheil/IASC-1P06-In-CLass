

var todayDate = new Date();

console.log("The Full Date is:");
  console.log(todayDate);

document.getElementById("Date").innerHTML=Date();

var month = todayDate.getMonth() + 1;

var date = todayDate.getDate();

var year= todayDate.getFullYear();

var FullDate = todayDate.getDate() + "/" + todayDate.getMonth() + "/" + todayDate.getFullYear();

console.log("The Date is:");
  console.log(date,month,year);

document.write(date,month, year);

document.getElementById("Date").innerHTML=FullDate;

//Alert Types

//alert("Danger, Your Site Is Compromised! \nContact Microsoft Hotline at 289-696-9437 to Arrange to Pay for Virus Removal");

//var myConfirm= confirm("Why Are Cats Wrong");

//var CCN = prompt("What is Your Credit Card Number and CV?");

//console.log("CCN In Here");
  //console.log(CCN);
    //console.log("Cats are Bad");
      //console.log(myConfirm);

function addWords(){
  var words = document.getElementById("Stuff").value;
}

console.log(addWords);

// Forms

                           //input fields go in here


//<input type="text" name="lastname" id="lastname" value=" Name Here" />

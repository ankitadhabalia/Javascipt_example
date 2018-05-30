

var myObj = { "Name": "ANKITA", "Email": "ankitadhabalia@gmail.com", "Phone": "8149214150", "Address" : "Telephone Exchange Sqaure" };

var myJSON = JSON.stringify(myObj);

localStorage.setItem("testJSON", "myJSON");

var text = localStorage.getItem("testJSON");

var obj = JSON.parse(text);
document.getElementById("result").innerHTML = obj.Name;

/*
localStorage.setItem("Email", "ankitadhabalia@gmail.com");
document.getElementById("result").innerHTML = localStorage.getItem("Email");

localStorage.setItem("Phone", "8149214150");
document.getElementById("result").innerHTML = localStorage.getItem("8149214150");

localStorage.setItem("Address", "Telephone Exchange Sqaure");
document.getElementById("result").innerHTML = localStorage.getItem("Telephone Exchange Sqaure");
*/
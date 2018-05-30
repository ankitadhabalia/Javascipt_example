
/*page 1*/

function login_successful_or_not() {
    var entered_value1, entered_value2;
    entered_value1 = document.getElementById("Text1").value;
    entered_value2 = document.getElementById("Password1").value;

    if (entered_value1 == "ankitadhabalia@gmail.com" && entered_value2 == "ankita@3") {
        alert("Login Successful");
        return true;
    } else {
        alert("Login Unsuccessful");
        return false;
    }
}

/*page 2*/

function confirmLogout() {
    if (confirm("Are you sure you wish to logout?")) {
        window.location = "login_form1.html";
    } else {
        return false;
    }
}

/*page 3*/

var obj1 = { "Name": "ANKITA", "Email": "ankitadhabalia@gmail.com", "Phone": "8149214150", "Address": "Telephone Exchange Sqaure" };
var text1 = JSON.stringify(obj1);
localStorage.setItem("key", text1);

var text2 = localStorage.getItem('key');
var obj2 = JSON.parse(text2);
document.getElementById("name").value = obj2.Name;
document.getElementById("email").value = obj2.Email;
document.getElementById("phone").value = obj2.Phone;
document.getElementById("address").value = obj2.Address;

/* Page 4 */

/*
function entry_submit() {
    document.getElementById("text1").innerHTML = document.getElementById("n").value;
    document.getElementById("text2").innerHTML = document.getElementById("n").value;
    document.getElementById("text3").innerHTML = document.getElementById("n.").value;
    document.getElementById("text4").innerHTML = document.getElementById("n").value;

}
 */

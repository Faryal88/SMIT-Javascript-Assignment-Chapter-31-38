// QUESTION # 1:
var rightNow = new Date();
console.log(rightNow);


// QUESTION # 2:
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[new Date().getMonth()];
alert(currentMonth);
document.write(currentMonth);
console.log(currentMonth);



// QUESTION # 3:
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);
document.write(nameOfToday);


// QUESTION # 4:
var today = new Date().getDay();
// Check if it's Saturday (6) or Sunday (0)
if (today === 0 || today === 6) {
    console.log("It’s Fun day");
} else {
    console.log("It's not Fun day");
}


// QUESTION # 5:
var today1 = new Date();
var dayOfMonth = today1.getDate();
if (dayOfMonth < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}



// QUESTION # 6:  
var currentTimeInMilliseconds = new Date().getTime();
var minutesSince1970 = currentTimeInMilliseconds / (1000 * 60);
console.log("Minutes since midnight, Jan 1, 1970:", minutesSince1970);


// QUESTION # 7:
var now1 = new Date();
var currentHour = now1.getHours();
if (currentHour < 12) {
	console.log("It's AM");
} else {
    console.log("It's PM");
}


// QUESTION # 8:
var laterDate = new Date(2020, 11, 31); 
console.log(laterDate);


// QUESTION # 9:
var ramadanStartDate = new Date(2015, 5, 18); 
var currentDate2 = new Date();
var timeDifference = currentDate2 - ramadanStartDate;
var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Days past since 1st Ramadan: " + daysPast);


// QUESTION # 10:
var referenceDate = new Date('Sat Dec 05 2015 22:50:16 GMT+0500');
var startOfYear = new Date('Jan 01 2015 00:00:00 GMT+0500');
var differenceInMillis = referenceDate - startOfYear;
var differenceInSeconds = Math.floor(differenceInMillis / 1000);
console.log("On reference date", referenceDate.toString(), ",", differenceInSeconds, "seconds had passed since the beginning of 2015.");


// QUESTION # 11:
var currentDate1 = new Date();
var currentHours = currentDate.getHours();
currentDate1.setHours(currentHours + 1);
console.log("Current date:", new Date().toString()); 
console.log("1 hour ahead:", currentDate1.toString());





// QUESTION # 12:
var currentDate = new Date();
console.log("Current date:", currentDate.toString());
currentDate.setFullYear(currentDate.getFullYear() - 100);
console.log("100 years back, it was " + currentDate.toString());




// QUESTION # 13:
var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.getElementById("result").innerText = `You were born in the year ${birthYear}.`;



// QUESTION # 14:
var customerName = prompt("Enter the customer name:");
var currentMonth = prompt("Enter the current month:");
var numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter the late payment surcharge:"));
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
 document.getElementById("bill").innerHTML = `
	 <strong>Customer Name:</strong> ${customerName} <br>
	 <strong>Current Month:</strong> ${currentMonth} <br>
	 <strong>Number of Units:</strong> ${numberOfUnits} <br>
	 <strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)} <br>
	 <strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable} <br>
	 <strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)} <br>
	 <strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable}`;
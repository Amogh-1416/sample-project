/*
Form Number --> Must start at 100
Date --> By default should be today's date
Mobile Number --> Must be unique
Email --> Can be duplicate
All Fields are required
None must be empty
*/


    const d = new Date()
    document.getElementById('date').innerHTML = "Date: " + d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear()

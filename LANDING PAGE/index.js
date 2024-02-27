// JavaScript code goes here
// You can add interactivity or any other functionality using JavaScript

// For example, if you want to display an alert when the "Get ExpressVPN" button is clicked:

//document.addEventListener('DOMContentLoaded', function() {
//    var expressBtn = document.querySelector('.express-btn');
//
//    expressBtn.addEventListener('click', function() {
//        alert('ExpressVPN button clicked!');
//    });
//});
// JavaScript code

// This script will change the background color of the header when the mouse hovers over it

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');

    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#ccc';
    });

    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '#f2f2f2';
    });
});

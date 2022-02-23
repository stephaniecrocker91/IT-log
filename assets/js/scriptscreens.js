/* --------------------------------------------------------- IMACS.HTML PAGE  ---------------------------------------------------------*/

/* Global variables*/
let londonOfficeScreens = document.getElementsByClassName("ldn-office-screens");
let homeOfficeScreens = document.getElementsByClassName("home-office-screens");


/* get Screen Buttons */
let allScreenButton = document.getElementById("screen-button-all");
let londonOfficeScreenButton = document.getElementById("screen-button-londonoffice");
let homeOfficeScreenButton = document.getElementById("screen-button-homeoffice");


/* Event listeners*/
allScreenButton.addEventListener('click',displayAllScreens);
londonOfficeScreenButton.addEventListener('click',displayLondonOfficeScreens);
homeOfficeScreenButton.addEventListener('click',displayHomeOfficeScreens);


/** 
 * Function to display all Screens
 * */
 function displayAllScreens(e) {
    for (let i of londonOfficeScreens) {
        i.style.display="table-row";
    }  
    for (let i of homeOfficeScreens) {
        i.style.display="table-row";
    }  
}
/** 
 * Function to display only London Office Screens
 * */
function displayLondonOfficeScreens(e) {
    for (let i of homeOfficeScreens) {
        i.style.display="none";
    }  
    for (let i of londonOfficeScreens) {
        i.style.display="table-row";
    }  
}
/** 
 * Function to display only Home Office Screens
 * */
 function displayHomeOfficeScreens(e) {
    for (let i of homeOfficeScreens) {
        i.style.display="table-row";
    } 
    for (let i of londonOfficeScreens) {
        i.style.display="none";
    }
}

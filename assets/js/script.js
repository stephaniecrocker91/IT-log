/* Global variables*/
let allImacs = document.getElementById("all-imacs");
let portoImacs = document.getElementsByClassName("porto-imacs");
let londonImacs = document.getElementsByClassName("london-imacs");
let leasedImacs = document.getElementsByClassName("leased-imacs");
let ownedImacs = document.getElementsByClassName("owned-imacs");
let homeOfficeImacs = document.getElementsByClassName("homeoffice-imacs");
/* get London imac Button*/
let allImacButton = document.getElementById("imac-button-all");
let londonImacButton = document.getElementById("imac-button-london");
let portoImacButton = document.getElementById("imac-button-porto");
let leasedImacButton = document.getElementById("imac-button-leased");



/* Event listeners*/
allImacButton.addEventListener('click',displayAllImacs)
londonImacButton.addEventListener('click', displayLondonImacs);
portoImacButton.addEventListener('click', displayPortoImacs);
leasedImacButton.addEventListener('click', displayLeasedImacs);


/** 
 * Function to display all iMacs
 * */
 function displayAllImacs(e) {

}
/** 
 * Function to display only London iMacs
 * */
function displayLondonImacs(e) {
    for (let i of portoImacs) {
        i.style.display="none";
    }  
}
/** 
 * Function to display only Porto iMacs
 * */
 function displayPortoImacs(e) {
 
    for (let i of londonImacs) {
        i.style.display="none";
    }
}
/** 
 * Function to display only Leased iMacs
 * */
 function displayLeasedImacs(e) {
 
    for (let i of ownedImacs) {
        i.style.display="none";
    }
}


    

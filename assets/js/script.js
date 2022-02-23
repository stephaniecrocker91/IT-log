/* --------------------------------------------------------- IMACS.HTML PAGE  ---------------------------------------------------------*/

/* Global variables*/
let portoImacs = document.getElementsByClassName("porto-imacs");
let londonImacs = document.getElementsByClassName("london-imacs");
let leasedImacs = document.getElementsByClassName("leased-imacs");
let ownedImacs = document.getElementsByClassName("owned-imacs");
let homeOfficeImacs = document.getElementsByClassName("home-imacs");
let officeImacs = document.getElementsByClassName("office-imacs");

/* get London imac Button*/
let allImacButton = document.getElementById("imac-button-all");
let londonImacButton = document.getElementById("imac-button-london");
let portoImacButton = document.getElementById("imac-button-porto");
let leasedImacButton = document.getElementById("imac-button-leased");
let homeOfficeImacButton = document.getElementById("imac-button-homeoffice");



/* Event listeners*/
allImacButton.addEventListener('click',displayAllImacs)
londonImacButton.addEventListener('click', displayLondonImacs);
portoImacButton.addEventListener('click', displayPortoImacs);
leasedImacButton.addEventListener('click', displayLeasedImacs);
homeOfficeImacButton.addEventListener('click', displayHomeOfficeImacs);


/** 
 * Function to display all iMacs
 * */
 function displayAllImacs(e) {
    for (let i of portoImacs) {
        i.style.display="table-row";
    }  
    for (let i of londonImacs) {
        i.style.display="table-row";
    }  
}
/** 
 * Function to display only London iMacs
 * */
function displayLondonImacs(e) {
    for (let i of portoImacs) {
        i.style.display="none";
    }  
    for (let i of londonImacs) {
        i.style.display="table-row";
    }  
}
/** 
 * Function to display only Porto iMacs
 * */
 function displayPortoImacs(e) {
    for (let i of portoImacs) {
        i.style.display="table-row";
    } 
    for (let i of londonImacs) {
        i.style.display="none";
    }
}
/** 
 * Function to display only Leased iMacs
 * */
 function displayLeasedImacs(e) {
    for (let i of leasedImacs) {
        i.style.display="table-row";
    }
    for (let i of ownedImacs) {
        i.style.display="none";
    }
}
/** 
 * Function to display only Home Office iMacs
 * */
 function displayHomeOfficeImacs(e) {
    for (let i of homeOfficeImacs) {
        i.style.display="table-row";
    }
    for (let i of officeImacs) {
        i.style.display="none";
    }
}

/* --------------------------------------------------------- LAPTOPS.HTML PAGE  ---------------------------------------------------------*/

    /* Global variables*/
let portoLaptops = document.getElementsByClassName("porto-laptops");
let londonLaptops = document.getElementsByClassName("london-laptops");
let leasedLaptops = document.getElementsByClassName("leased-laptops");
let ownedLaptops = document.getElementsByClassName("owned-laptops");
let spareLaptops = document.getElementsByClassName("spare-laptops");

/* get London laptop Button*/
let allLaptopButton = document.getElementById("laptop-button-all");
let londonLaptopButton = document.getElementById("laptop-button-london");
let portoLaptopButton = document.getElementById("laptop-button-porto");
let leasedLaptopButton = document.getElementById("laptop-button-leased");
let spareLaptopButton = document.getElementById("laptop-button-spare");



/* Event listeners*/
allLaptopButton.addEventListener('click',displayAllLaptops)
londonLaptopButton.addEventListener('click',displayLondonLaptops);
portoLaptopButton.addEventListener('click',displayPortoLaptops);
leasedLaptopButton.addEventListener('click',displayLeasedLaptops);
spareLaptopButton.addEventListener('click',displaySpareLaptops);


/** 
 * Function to display all laptops
 * */
 function displayAllLaptops(e) {
    for (let i of portoLaptops) {
        i.style.display="table-row";
    }  
    for (let i of londonLaptops) {
        i.style.display="table-row";
    }  
}
/** 
 * Function to display only London laptops
 * */
 function displayLondonLaptops(e) {
    for (let i of portoLaptops) {
        i.style.display="none";
    }  
    for (let i of londonLaptops) {
        i.style.display="table-row";
    }  
}
/** 
 * Function to display only Porto Laptops
 * */
 function displayPortoLaptops(e) {
    for (let i of portoLaptops) {
        i.style.display="table-row";
    } 
    for (let i of londonLaptops) {
        i.style.display="none";
    }
}
/** 
 * Function to display only Leased Laptops
 * */
 function displayLeasedLaptops(e) {
    for (let i of leasedLaptops) {
        i.style.display="table-row";
    }
    for (let i of ownedLaptops) {
        i.style.display="none";
    }
}
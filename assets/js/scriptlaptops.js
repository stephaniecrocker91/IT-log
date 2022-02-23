
/* --------------------------------------------------------- LAPTOPS.HTML PAGE  ---------------------------------------------------------*/

    /* Global variables*/
    let portoLaptops = document.getElementsByClassName("porto-laptops");
    let londonLaptops = document.getElementsByClassName("london-laptops");
    let leasedLaptops = document.getElementsByClassName("leased-laptops");
    let ownedLaptops = document.getElementsByClassName("owned-laptops");
    let spareLaptops = document.getElementsByClassName("spare-laptops");
    let usedLaptops = document.getElementsByClassName("used-laptops");

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
    /** 
     * Function to display only Spare Laptops
     * */
     function displaySpareLaptops(e) {
        for (let i of spareLaptops) {
            i.style.display="table-row";
        }
        for (let i of usedLaptops) {
            i.style.display="none";
        }
    }
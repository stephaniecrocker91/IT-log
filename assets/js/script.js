/* get London imac Button*/

let londonImacButton = document.getElementById("imac-button-london");

londonImacButton.addEventListener('click', displayNone);

function displayNone(e) {
    let portoImacs = document.getElementsByClassName("porto")
    for (let i of portoImacs) {
        i.style.display="none";
    }
}
    

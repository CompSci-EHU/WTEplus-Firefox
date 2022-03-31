console.log("WTE+ accepted URL")

// Adds UTF-8 lightbulb to menu + tooltip information.
// Inserts lightbulb near helper icon
function load_lightbulb() {
    var li_el = document.createElement("li");
    var a_el = document.createElement("a");
    a_el.setAttribute("title", "WTE+ enabled");
    a_el.innerHTML = "💡";
    a_el.onclick = function() {
        click_lightbulb();
    }
    li_el.appendChild(a_el);
    document
        .getElementById("toggle-help")
        .parentElement.parentElement.prepend(li_el);
    console.log("WTE+ icon added");
}

//  Remove all no-select classes.
//  Enables users to select and copy text from exercises.
function click_lightbulb() {
    Array.from(document.querySelectorAll(".no-select")).forEach(function(el) {
        el.classList.remove("no-select");
        console.log("Removed no-select");
    })
}

//  WIP - trying to ensure window is ready to accept DOM elements,
//  standard methods are inconsistent.
window.addEventListener("load", function() {
    console.log("WTE+ loading functions");
    load_lightbulb();
    console.log("WTE+ loaded");
});
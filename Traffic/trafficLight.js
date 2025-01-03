// function readyButtonLight() {
//     document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
//     document.getElementById("stopLight").style.backgroundColor = "#4b5069";

//     document.getElementById("readyButton").style.backgroundColor = "#f7c948";
//     document.getElementById("readyLight").style.backgroundColor = "#f7c948";

//     document.getElementById("goButton").style.backgroundColor = "#1f1d41";
//     document.getElementById("goLight").style.backgroundColor = "#4b5069";
// }

// function goButtonLight() {
//     document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
//     document.getElementById("stopLight").style.backgroundColor = "#4b5069";

//     document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
//     document.getElementById("readyLight").style.backgroundColor = "#4b5069";

//     document.getElementById("goButton").style.backgroundColor = "#199473";
//     document.getElementById("goLight").style.backgroundColor = "#199473";
// }

// function stopButtonLight() {
//     document.getElementById("stopButton").style.backgroundColor = "#cf1124";
//     document.getElementById("stopLight").style.backgroundColor = "#cf1124";

//     document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
//     document.getElementById("readyLight").style.backgroundColor = "#4b5069";

//     document.getElementById("goButton").style.backgroundColor = "#1f1d41";
//     document.getElementById("goLight").style.backgroundColor = "#4b5069";
// }







// Function to set "Ready" state
function readyButtonLight() {
    resetLights();
    document.getElementById("readyButton").style.backgroundColor = "#f7c948";
    document.getElementById("readyLight").style.backgroundColor = "#f7c948";
}

// Function to set "Go" state
function goButtonLight() {
    resetLights();
    document.getElementById("goButton").style.backgroundColor = "#199473";
    document.getElementById("goLight").style.backgroundColor = "#199473";
}

// Function to set "Stop" state
function stopButtonLight() {
    resetLights();
    document.getElementById("stopButton").style.backgroundColor = "#cf1124";
    document.getElementById("stopLight").style.backgroundColor = "#cf1124";
}

// Function to reset all lights and buttons
function resetLights() {
    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    document.getElementById("goButton").style.backgroundColor = "#1f1d41";

    document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

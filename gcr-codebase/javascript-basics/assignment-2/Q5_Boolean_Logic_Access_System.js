// Assignment 2 - Q5: Boolean Logic Access System
// Student: Gaurav Sandilya | GLA University
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
    console.log(isSecure && !false ? "Secure" : "Unsafe");
}

checkSecurity();
isWindowClosed = false; // Test an unsafe outcome
checkSecurity();

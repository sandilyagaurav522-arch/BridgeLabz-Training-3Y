// Gaurav Sandilya | GLA University | Assignment 4 Q2
"use strict";
const form=document.querySelector("#studentForm");
const fields={name:document.querySelector("#name"),email:document.querySelector("#email"),phone:document.querySelector("#phone"),password:document.querySelector("#password")};
const rules={name:/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,phone:/^\d{10}$/,password:/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/};
const messages={name:"Enter a valid name using letters.",email:"Enter a valid email.",phone:"Phone must be exactly 10 digits.",password:"Password needs uppercase, number, and special character."};
function validate(key){const ok=rules[key].test(fields[key].value.trim());fields[key].classList.toggle("valid",ok);fields[key].classList.toggle("invalid",!ok);document.querySelector(`#${key}Error`).textContent=ok?"":messages[key];return ok;}
Object.keys(fields).forEach(k=>fields[k].addEventListener("input",()=>validate(k)));
form.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#result").textContent=Object.keys(fields).map(validate).every(Boolean)?"Registration details are valid.":"Correct the highlighted fields.";});

// Gaurav Sandilya | GLA University | Assignment 4 Q8
"use strict";
const user={name:"John",email:"john@mail.com",age:21},form=document.querySelector("#userForm");
function render(){document.querySelector("#userDetails").textContent=JSON.stringify(user,null,2);}
document.querySelector("#name").value=user.name;document.querySelector("#email").value=user.email;document.querySelector("#age").value=user.age;render();
form.addEventListener("submit",e=>{e.preventDefault();const name=document.querySelector("#name").value.trim(),email=document.querySelector("#email").value.trim(),age=Number(document.querySelector("#age").value);if(!name||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||!Number.isInteger(age)||age<0){document.querySelector("#message").textContent="Enter a valid name, email, and non-negative whole-number age.";return;}Object.assign(user,{name,email,age});document.querySelector("#message").textContent="User object updated.";render();console.log(user);});

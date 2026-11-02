// Gaurav Sandilya | GLA University | Assignment 4 Q1
"use strict";
class Product {
  constructor(id,name,price,category){Object.assign(this,{id,name,price,category});}
  applyDiscount(percent){if(percent<0||percent>100) throw new RangeError("Discount must be 0-100"); this.price*=1-percent/100;}
  getDetails(){return `ID: ${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`;}
}
const products=[new Product(1,"Keyboard",1500,"Electronics"),new Product(2,"Notebook",120,"Stationery"),new Product(3,"Headphones",2200,"Electronics")];
products[0].applyDiscount(10);
products.forEach(p=>console.log(p.getDetails()));
console.log("Products above ₹1000:");
products.filter(p=>p.price>1000).forEach(p=>console.log(p.getDetails()));

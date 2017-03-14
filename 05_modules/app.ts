import { productReporter as pr, productEmailSender } from "./products";
import * as userManager from "./users";
import _m from "./ezMath";

let testThings = function () {

    console.log(`Number of products: ${pr.remainedProductsNumber()}`); 
    productEmailSender.emailTheBigBoss(); 

    let users = userManager.userHelper.getAll();
    for (let user of users) {
        console.log(user.name);
    } 

    console.log(`10 Times 2: ${_m.operators.times(10, 2)}`); 
    console.log(`10 Power 2: ${_m.functions.power(10, 2)}`);  
}

document.getElementById("testBtn").addEventListener("click", testThings); 
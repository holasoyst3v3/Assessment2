///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const reducer = (previousValue, currentValue) => previousValue + currentValue;

var z = cart.reduce((sum, li) => sum + li.price, 0);
console.log(z)

// const summedPrice = cart.reduce(callback(sum, price){
//     cart.forEach((x,i) => {
//         //console.log(x)
//         for (const [k , v] of Object.entries(x)){
//             //console.log(k , v);
//             if (k == 'price'){
//                 console.log(v);
//                 price == v
//             }
    
//         }
//     }
    
//     );
//     return (sum + price)
// }
// )



// cart.forEach((x,i) => {
//     //console.log(x)
//     for (const [k , v] of Object.entries(x)){
//         //console.log(k , v);
//         if (k == 'price'){
//             console.log(v);
//             price == v
//         }

//     }
// }

// );
// return (sum + price)


// let summedPrice = cart.price.reduce(previousPrice + currentPrice);




// const summedPrice = cart.reduce(function(price, price){
//     return price + price;
// });
// console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE


// function cartTotal(items){
//     var total = items.reduce((sum, li) => sum + li.price, 0);
//     return total;
// }

function calcFinalPrice(items, couponValue, tax){
    subTotal = items.reduce((sum, li) => sum + li.price, 0);
    taxAdded = subTotal * tax
    taxTotal = taxAdded + subTotal
    couponTotal = taxTotal - couponValue
    return couponTotal.toFixed(2)
}
var d = calcFinalPrice(cart, 1, .05)
console.log(d)


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer name: The restaurant needs to know who ordered.
    STRING - will be letters

    Address: The restaurant might need to know where to deliver.
    STRING - Mix of numbers and letters
    
    Contact number: The restaurant will need to contact the customer for various reasons.
    STRING - Will have characters that won't be read correctly ie. "-" "+" "()"
    
    Birthday: The restaurant might need to know their age if buying alcohol or birthday special
    DATE - Dates are it's own data type 


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObj = {
    customerName:'',
    address:'',
    contactNumber:'',
    birthday: Date,
}
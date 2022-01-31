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

const summedPrice = cart.reduce((x, y)=>{
    return x + y.price
}, 0)

console.log(summedPrice)

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

// const calcFinalPrice = (cartTotal, couponValue, tax) => {
//     let finalTotal = (carTotal * (1 + tax)) - coupon
//         return finalTotal
// }        

// calcFinalPrice(10, 5, .06)



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
    TEXT ANSWER HERE
    i am going to create a customer object that has these keys for a cart page for a resturant:

    category: this would determine the type of meal the customer is ordering in their cart
    it will be a string because it will come in as breakfast, lunch, dinner, etc
    drink: this would determine the drink they want
    it will be a string because it will be the name of a drink typed out
    cost: this will be the cost of the meal
    this will be a number because it is a number value that would need to be added/subtracted if changes wanted to be made
    delivery fee: this will be an added fee due to them checking out online and needing delivery
    this will be a number because it will need to be in addition to the cost 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE // 

const customer = {
    catergory: 'dinner',
    drink: 'sprite',
    cost: 10,
    deliveryFee: 3
}





///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    name: 'Pepparoni Za',
    price: 14,
    category: 'Full Pies',
    popularity: 8,
    rating: 8,
    tags: ['pizza', 'brick oven', 'yummy', 'gluten-full'],
};

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[3])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

let {price:pizzaPrice} = pizza
pizzaPrice = 16
console.log(pizzaPrice)
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
const {category: pizzaCategory} = pizza
console.log(pizzaCategory)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

let foodArr = [
    {   
        name: "Slip 'n Sliders",
        price: '10',
        category: 'Burgers',
        popularity: 10,
        rating: 10,
        tags: ['burgers', 'sliders', 'bacon'],
    },
    {
        name: "Over the Easy top",
        price: '12',
        category: 'Sandwhich',
        popularity: 10,
        rating: 10,
        tags: ['bacon', 'sandwhich', 'eggs'],
    },
    {
        name: "Personal Pie",
        price: '10',
        category: 'Pizza',
        popularity: 7,
        rating: 7,
        tags: ['burgers', 'sliders', 'bacon'],
    },
    {
        name: "Boozy Bourbon Sliders",
        price: '14',
        category: 'Burgers',
        popularity: 10,
        rating: 10,
        tags: ['burgers', 'sliders', 'cheese'],
    }, 
    {
        name: "Maccin Mac",
        price: '7',
        category: 'Entree',
        popularity: 5,
        rating: 5,
        tags: ['cheese', 'pasta', 'bacon'],
    }

]
//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE



const filteredFood = foodArr.filter(function(foodObj){
    //console.log(foodObj.tags[0])
    //return foodObj.tags.includes('bacon')
    let toSave = false;

    for (let i = 0; i < foodObj.tags.length; i++) {
        if (foodObj.tags[i] === 'bacon') toSave = true;
    }

    return toSave;
})

console.log(filteredFood);

//**did not work */
// return foodArr.filteredFood.filter(function(sliders) {
//     return foodArr.tags === 'sliders';
//   }).length;
// });

// const filteredFood = function(tag){
//     foodArr.filter(tag => tag === foodArr['tags'])
// }
// console.log(foodArr['tags'])
//console.log('sliders', filteredFood);
// console.log(filteredFood(pizza, 'sliders'));


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

const filterByProperty = foodArr.filter(function(propertyObj, numberObj, typeObj){
   
    let toSave = false;

    for (let i = 0; i < propertyObj.price.length; i++) {
        if (propertyObj.price[i] >= 11) toSave = true;
    }
    for (let j = 0; j < numberObj.price.length; j++) {
        if (numberObj.price[j] <= 11) toSave = true;
    }
    for (let z = 0; z < typeObj.price.length; z++) {
        if (typeObj.price[z] === 11) toSave = true;
    }
    return toSave;
})

console.log(filterByProperty);

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty(propertyObj, numberObj, typeObj))
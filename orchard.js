///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
let sum = 0;

for(i = 0; i < fujiAcres.length; i++){
sum += fujiAcres[i];
}

let sum1 = 0
for(i = 0; i < galaAcres.length; i++){
    sum1 += galaAcres[i];
}


let sum2 = 0
for(i = 0; i < pinkAcres.length; i++){
    sum2 += pinkAcres[i];
}

let totalAcres = (sum + sum1 + sum2)

// console.log(sum)
// console.log(sum1)
// console.log(sum2)

// console.log(totalAcres)


//COMMENT: On this problem i used for loops to add up all the numbers individually and then i created a variable to give me the grand total after using new variables for each of the individual totals



// PROBLEM 2


/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

const averageDailyAcres = (totalAcres / 7)
// console.log(averageDailyAcres)




//COMMENT: on this problem i used the constant of the average daily acres and divided it by each day of the week





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0){
    acresLeft -= 9
    days += 1
}

// console.log(`${days} days to clear the remaining acres`)




//COMMENT: i used some simple math, 2 variables and a while loop to simply subtract 9 and add 1




// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

let fujiAcres2 = fujiAcres.slice(0, 7)
let galaAcres2 = galaAcres.slice(0, 7)
let pinkAcres2 = pinkAcres.slice(0, 7)



for(i = 0; i < fujiAcres2.length; i++){
    fujiAcres2[i] *= 6.5

}


for(i = 0; i < galaAcres2.length; i++){
    galaAcres2[i] *= 6.5

}


for(i = 0; i < pinkAcres2.length; i++){
    pinkAcres2[i] *= 6.5

}



let fujiTons = fujiAcres2
let galaTons = galaAcres2
let pinkTons = pinkAcres2

// console.log(fujiTons)
// console.log(galaTons)
// console.log(pinkTons)
// console.log(fujiTons)



//COMMENT: this problem took me quite a while but i was able to create new variables to do the math without interfereing with my other variables. from there it was just math syntax 




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
let fujiTons2 = fujiTons.slice(0, 7)
let galaTons2 = galaTons.slice(0, 7)
let pinkTons2 = pinkTons.slice(0, 7)

let ton1 = 0
for(i = 0; i < fujiAcres.length; i++){
    ton1 += fujiAcres[i];
    }
    
    let ton2 = 0
    for(i = 0; i < galaAcres.length; i++){
        ton2 += galaAcres[i];
    }
    
    
    let ton3 = 0
    for(i = 0; i < pinkAcres.length; i++){
        ton3 += pinkAcres[i];
    }
    


let fujiPounds = (ton1 * 2000)
let galaPounds = (ton2 * 2000)
let pinkPounds = (ton3 * 2000)


// console.log(fujiPounds)
// console.log(galaPounds)
// console.log(pinkPounds)




//COMMENT: fairly similar to the last problems combined i had to create some new variables and do math step by step within the code


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = (fujiPounds * fujiPrice)
let galaProfit = (galaPounds * galaPrice)
let pinkProfit = (pinkPounds * pinkPrice)

// console.log(`$${fujiProfit}`)
// console.log(`$${galaProfit}`)
// console.log(`$${pinkProfit}`)

//COMMENT: just did some simple multiplication of variables


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = (fujiProfit + galaProfit + pinkProfit)

// console.log(`$${totalProfit}`)



//COMMENT: a little bit of addition and for a small challenge i added a price tag
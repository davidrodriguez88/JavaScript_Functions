console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0){
            console.log(i)
        }
    }
}
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age){
    if (age < 16){
        console.log(`Sorry ${name}, but you need to wait until you're 16.`);
    } else {
        console.log(`Congrats ${name}, you can drive!`)
    }
}

checkAge("David", 37);
checkAge("Armando", 7);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function coordinates(x, y){
    if (x > 0 && y > 0){
        return "Quadrant 1";
    } else if (x < 0 && y > 0){
        return "Quadrant 2";
    } else if (x < 0 && y < 0){
        return "Quadrant 3";
    } else if (x > 0 && y < 0){
        return "Quadrant 4";
    } else if (x != 0 && y== 0){
        return "X Axis"
    } else if (x == 0 && y != 0){
        return "Y Axis"
    } else {
        return "Origin";
    }
}

console.log(coordinates(1, 1));
console.log(coordinates(-1, 1));
console.log(coordinates(-1, -1));
console.log(coordinates(1, -1));
console.log(coordinates(1, 0));
console.log(coordinates(0, 1));
console.log(coordinates(0,0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isTriangle(a, b, c){
    return (a + b > c && a + c > b && b + c > a)
}

function triType(a, b, c){
    if (isTriangle){
        if (a == b && b == c){
        return "Equilateral Triangle!";
        } else if (a == b || a == c || b == c){
        return "Isoceles Triangle!";
    } else {
        return "Scalene Triangle!";
    } 
    } else {
    return "Not a Triangle!"
    }
}

console.log(triType(2, 2, 2));
console.log(triType(1, 2, 2));
console.log(triType(2, 3, 4));
console.log(triType(1, 1, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlan(planLimit, day, usage){
    let period = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / period;
    let remainingData = planLimit - usage;
    let remainingDays = period - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

     if (currentAvg > projectedAvg){
        statusMsg = "EXCEEDING"
    } else if (currentAvg < projectedAvg){
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT"
    }

    console.log(`${day} days used, ${remainingDays} days remaining`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day. You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day) continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit. To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`); 
}

dataPlan(100, 15, 56);
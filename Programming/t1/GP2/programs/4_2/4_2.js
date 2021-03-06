
 // * Program:  4_2.js -  Exersise 4.2

 // * purpose:  Output: The first 20 Fibonacci numbers, which are defined as in the
//sequence
//1, 1, 2, 3, . . .
//where each number in the sequence after the second is the sum of the
//two previous numbers. You must use document.write to produce
//the output. 


 // * Objectives: 1) Comments; 2) tags ; 3)elements ; 4)documentation 

  //* Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

 // * Instructor: Dr. Fazelpour - Copyright © 2020  

 // * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (DD)   

 // * Date: 10/01/2020  


// 4.2 Output: The first 20 Fibonacci numbers, which are defined as in the
// sequence
// 1, 1, 2, 3, . . .
// where each number in the sequence after the second is the sum of the
// two previous numbers. You must use document.write to produce
// the output.
// This is a function that will write the first 20 fibonacci numbers in the series
function yeaOkThatWorks(stringThing) {
    document.open();
    document.write(`
    <nav>
        <div class="dropdown">
            <p>Programs</p>
            <div class="dropdown-cont">
                <a href="../../indexProject2.html">Home</a>
                <a href="../4_1/index.html">4.1 Index</a>
                <a href="../4_4/index.html">4.4 Index</a>
                <a href="../4_6/index.html">4.6 Index</a>
                <a href="../4_7/index.html">4.7 Index</a>
                <a href="../4_9/index.html">4.9 Index</a>
                <a href="../4_14/index.html">4.14 Index</a>
            </div>
        </div>
        <div class="names">
            <p>Jaggan Ragoonanan - Zach Rumancik</p>
        </div>
        <div class="other">
            <p>Palm Beach Atlantic University - School of Arts and Sciences</p>
            <p>Computer Science - Web Programming</p>
        </div>
    </nav>`)
    document.write(`<h1>${stringThing}</h1>`);
    document.close();
}

// This function will carry out the fibonacci sequence
function Fib2(intNumber) {
    let fibArr = []
    for (let i = 0; i <= intNumber; i++){
        if (i === 0){
            fibArr[0] = 0
        }else if (i === 1){
            fibArr[1] = 1
        }else{
            fibArr[i] = fibArr[i-1] +  fibArr[i-2]
        }
    }
    return fibArr
}
let toPrint = ""
const fib2Arr = Fib2(20)
fib2Arr.map(index => {
    if (index !== 0){
        if (fib2Arr.indexOf(index) === (fib2Arr.length -1)){
            toPrint += `${index}`
        }else{
            toPrint += `${index}, `
        }
    }
})
yeaOkThatWorks(toPrint)
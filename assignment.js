// kilometerToMeter
function kilometerToMeter(kilometer){
    return kilometer * 1000;
}
var result = kilometerToMeter(10);
// console.log(result);
/* -------------------------------------   kilometerToMeter  --------------------------------------- */

// budgetCalculator
function budgetCalculator(watch,phone,loptop){
    var total = (watch * 50) + (phone * 100) + (loptop * 500);
    return total;
}
var result = budgetCalculator(2,2,2);
// console.log(result);
/* ------------------------------------   budgetCalculator  ---------------------------------------- */

// hotelCost
function hotelCost(day){
    if(day <= 10){
        var bill = day * 100;
    }else if(day < 20){
        var day10 = 10 * 100;
        var remainDay = day - 10;
        var secondbill = remainDay * 80;
        bill = day10 + secondbill;
    }else{
        day10 = 10 * 100;
        var day19 = (19 - 10) * 80;
        var remainDay = day - 20;
        var third = remainDay * 50;
        bill = day10 + day19 + third;
    }
    return bill;
}
var result = hotelCost(20);
console.log(result);
/* --------------------------------------   hotelCost  ----------------------------------------- */

// megaFriend
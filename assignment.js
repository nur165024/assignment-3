// https://github.com/nur165024/assignment-3

/* -------------------------------------   assignment-3 github link  --------------------------------------- */
// kilometerToMeter
function kilometerToMeter(kilometer){
    if (kilometer > 0) {
        return kilometer * 1000;
    }else{
        return 'Please Enter your Right Number ' + kilometer;
    }
}
var result = kilometerToMeter(10);
// console.log(result);
/* -------------------------------------   kilometerToMeter  --------------------------------------- */

// budgetCalculator
function budgetCalculator(watch,phone,loptop){
    if ((watch > 0) && (phone > 0) && (loptop > 0)) {
        var total = (watch * 50) + (phone * 100) + (loptop * 500);
        return total;    
    }else{
        return 'Please Enter your Right Number ' + watch+','+phone+','+loptop;
    }
    
}
var result = budgetCalculator(2,2,2);
// console.log(result);
/* ------------------------------------   budgetCalculator  ---------------------------------------- */

// hotelCost
function hotelCost(day){
    if (day > 0) {
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
    }else{
        return 'Please Enter your Right Number ' + day;
    }
}
var result = hotelCost(20);
// console.log(result);
/* --------------------------------------   hotelCost  ----------------------------------------- */

// megaFriend

function megaFriend(friend){
    var legth = 0;
    var longest;

    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length > legth) {
            var legth = friend[i].length;
            longest = friend[i];
        }
    }
    return longest;
}
var friend = ['nure alam','alam','kamal','alam','hello','hello world','my name is nure alam'];
var result =megaFriend(friend);
// console.log(result);
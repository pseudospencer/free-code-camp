function checkCashRegister(price, cash, cid) {
    let denominationVals = {"PENNY": .01, "NICKEL": .05, "DIME": .1, "QUARTER": .25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};

    let outcome = { "status": "", "change": [] };

    let totalCID = cid.map(el => el[1]).reduce((accumulator, item) => accumulator + item);
    let changeDue = cash - price;

    // console.log( totalCID );

    cid.reverse(); // flip the array to go from biggest to smallest denomination. Required for calculating change

    if (changeDue > totalCID) {
        // cid less than change due
        outcome.status = "INSUFFICIENT_FUNDS";
    } else if (changeDue == totalCID) {
        // change is everything in drawer
        outcome.status = "CLOSED";
        outcome.change = cid;
    } else {
        // is change possible?
        for (let i = 0; i <= cid.length; i++) {
            // console.log(changeDue, cid[i]);

            if (i == cid.length && changeDue != 0) {
                // after going through the whole drawer, exact change not possible
                outcome.status = "INSUFFICIENT_FUNDS";
                outcome.change = []; // reset change to empty array

            } else if (changeDue == 0) {
                // exact change has been given
                outcome.status = "OPEN";
                break;

            } else if (changeDue >= cid[i][1]) {
                // change due is greater than or equal to quantity of the denomination
                changeDue = Number((changeDue - cid[i][1]).toFixed(2)); // remaining change due = changeDue - denomination value
                outcome.change.push(cid[i]); // whole denomination given as change
                // console.log("full denomination as change, " + outcome.change);
            } else {
                // change due is less than denomination total
                if (changeDue < denominationVals[ cid[i][0] ]) {
                    // changeDue is less than denomination value
                    // do nothing - change cannot be given in this denomination
                    // console.log(changeDue + " <  denomination value " + denominationVals[ cid[i][0] ]);
                } else if (changeDue % denominationVals[ cid[i][0] ] == 0) {
                    // change due is less than denomination total and exact change can be given with the denomination
                    let changeGiven = [cid[i][0], changeDue]; // denomination label, value of change given in that denomination
                    changeDue = 0; // full change has been given
                    outcome.change.push(changeGiven);
                    // console.log(changeGiven + " as change, " + outcome.change);
                } else if (changeDue % denominationVals[ cid[i][0] ] != 0) {
                    // change due is less than the denomination total and exact change cannot be given with the denomination
                    // ex: nickels = $.10, change due $.09 should not result in .09 worth of nickels as change
                    let carryover = Number((changeDue % denominationVals[ cid[i][0] ]).toFixed(2));
                    let changeGiven = [cid[i][0], Number( (changeDue - carryover).toFixed(2))]; // change due less carryover
                    outcome.change.push(changeGiven);
                    changeDue = carryover;
                    // console.log(changeGiven + " as change, carryover " + carryover + " change, " + outcome.change);
                }
            }
        }
    }
    outcome.change = outcome.change.reverse().sort( (a, b) => a[1] < b[1] );
    // console.log(outcome);
    return outcome;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]); // should return {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]); // should return {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

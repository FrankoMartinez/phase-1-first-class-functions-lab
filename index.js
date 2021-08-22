// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
   return function(fare = 4) {
        return fare * integer;
    }
}

function fareDoubler(fare) {
   const double = createFareMultiplier(2)
   return double(fare);
}

function fareTripler(fare) {
    const triple = createFareMultiplier(3)
    return triple(fare);
 }

function selectDifferentDrivers(drivers, task) {
     if(task === returnFirstTwoDrivers) {
         return drivers.slice(0,2);
     } else if(task === returnLastTwoDrivers) {
         return drivers.slice(2);
     }
     return selectDifferentDrivers();
 }
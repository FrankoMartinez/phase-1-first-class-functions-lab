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

function createFareMultiplier() {
    const double = function fareDoubler(fare) {
        return fare ** 2;
    }
    return double;
}
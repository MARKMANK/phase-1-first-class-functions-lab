const returnFirstTwoDrivers = function(arrayOfDrivers){
    return [arrayOfDrivers[0],arrayOfDrivers[1]];
};

const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(arrayOfDrivers.length-2)
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
 

function createFareMultiplier(integer){
    return function(fare){
      return fare * integer;
    }
};

const fareDoubler = function(fare) {
    const funtionMultiplier = createFareMultiplier(2);
    return funtionMultiplier(fare)
};

const fareTripler = function(fare){
    return createFareMultiplier(fare)(3)
};

function selectDifferentDrivers (arrayOfDrivers,whichDrivers){
    return whichDrivers(arrayOfDrivers);
}
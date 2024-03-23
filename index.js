function distanceFromHqInBlocks(pickup) {
    const headquarters = 42;
    const blocks = (pickup - headquarters);
    return blocks;  
}
function distanceFromHqInFeet(pickup) {
    distanceFromHqInBlocks(pickup);
    const blocks = distanceFromHqInBlocks(pickup);
    const distanceInFeet = blocks * 264;
    return distanceInFeet;
}
function distanceTravelledInFeet(pickup) {
    distanceFromHqInBlocks(pickup);
    const blocks = distanceFromHqInBlocks(pickup);
    const distanceInFeet = blocks * 264;
    return distanceInFeet;  
}
function calculatesFarePrice(pickup) {
    const distanceInFeet =  distanceTravelledInFeet(pickup);
    if (distanceInFeet <= 400) {
     return 0;   
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02 
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
       return 25; 
    } else {
        return 'cannot travel that far';  
    } 
}

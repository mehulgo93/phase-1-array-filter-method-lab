// Code your solution here
function findMatching(drivers, searchString) {
     const searchLower = searchString.toLowerCase()
     const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === searchLower)
     return matchingDrivers;
}





function fuzzyMatch(drivers, searchCharacter) {
     const matchingPairs = drivers.filter(driver =>driver.charAt() === searchCharacter.charAt())
     return matchingPairs;
 }

 function matchName(drivers, properties) {
     const matchingTowns = drivers.filter(driver => driver.name === properties)
     return matchingTowns
 } 
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  module.exports = {
    matchName
  };
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (driver) {
      return driver.startsWith(letters);
    });
  }
  
  module.exports = {
    fuzzyMatch,
  };
  
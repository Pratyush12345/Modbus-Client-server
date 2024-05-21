const _ = require('lodash');

const jsonData = { /* Your JSON data here */ };
const targetLocation = "DAF";

const devicesWithLocation = _.flatMap(jsonData, (devicesInCategory, category) => {
  return _.filter(devicesInCategory, (device) => device.Location === targetLocation)
    .map((device, deviceId) => ({ category, deviceId, device }));
});

console.log(`Devices with location "${targetLocation}":`, devicesWithLocation);

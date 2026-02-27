import liberiaZipCodes from "../data/liberiaZipCodes";

export function getLocationName(zip){

if(!zip) return "";

const location =
liberiaZipCodes[zip];

if(!location)
return zip;

return `${location.city}, ${location.county}`;

}
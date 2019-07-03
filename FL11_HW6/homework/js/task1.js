let xA = +prompt('Enter x value of point A');
let yA = +prompt('Enter y value of point A');
let xB = +prompt('Enter x value of point B');
let yB = +prompt('Enter y value of point B');
let xC = +prompt('Enter x value of point C');
let yC = +prompt('Enter y value of point C');
let mediumCx=(xA + xB)/(1+1);
let mediumCy=(yA + yB)/(1+1);
console.log(mediumCx === xC && mediumCy === yC);
let percentNumber = document.querySelector('#percent-number');
let actualValue = document.querySelector('#actual-value').innerHTML;
let neededValue = document.querySelector('#needed-value').innerHTML;
let progressbar = document.querySelector('#progressbar-percent');
actualValue = actualValue.replace(/\s/g, '');
neededValue = neededValue.replace(/\s/g, '');
let numberActual = parseInt(actualValue);
let numberNeeded = parseInt(neededValue);
let percent;

function percentDone(needed, actual) {
  let percentFunc = (needed * 100) / actual;
  return percentFunc;
}

percent = percentDone(numberActual, numberNeeded);

progressbar.style.width = percent + '%';

percentNumber.innerHTML = Math.round(percent) + '%';

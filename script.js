let percentNumber = document.querySelector('#percent-number');
let actualValue = document.querySelector('#actual-value').innerHTML;
let neededValue = document.querySelector('#needed-value').innerHTML;
let progressbar = document.querySelector('#progressbar-percent');
let progressbarMobile = document.querySelector('#progressbar-mobile');
let percentNumberMobile = document.querySelector('#percent-number-mobile');

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

progressbarMobile.style.width = percent + '%';
percentNumberMobile.innerHTML = Math.round(percent) + '%';

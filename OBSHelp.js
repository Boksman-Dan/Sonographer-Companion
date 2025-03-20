// GET THE HTML ELEMENTS
const btnOpenEl = document.querySelector('.btn-open');
const btnCloseEl = document.querySelector('.btn-close');
const asideContentEl = document.querySelector('.aside-content');
const overlayEl = document.querySelector('.overlay');

const calcFormsID = [
  'calc-GA-from-LMP',
  'calc-EDD-from-LMP',
  'calc-EDD-from-Report',
  'calc-EDD-from-GivenDate'
]

// FUNCTION TO OPEN AND CLOSE SIDE CONTENT
const openSideContent = function () {
  asideContentEl.classList.add('right-nav');
  overlayEl.classList.remove('hidden');
};

const closeSideContent = function () {
  asideContentEl.classList.remove('right-nav');
  //mainContentEl.style.marginLeft = '0rem';
  overlayEl.classList.add('hidden');
};

btnOpenEl.addEventListener('click', openSideContent);
overlayEl.addEventListener('click', closeSideContent);
btnCloseEl.addEventListener('click', closeSideContent);


// FUNCTION TO HIDE OR DROP CALCULATOR SECTION
function toggleCalc(CALCULATOR){
    const upButton = document.getElementById(`calc-${CALCULATOR}-Up`);
    const downButton = document.getElementById(`calc-${CALCULATOR}-Down`);
    const hiddenCalc = document.getElementById(`calc-${CALCULATOR}`)

    if (hiddenCalc.classList.contains('hidden')) {
        upButton.classList.toggle('hidden')
        downButton.classList.toggle('hidden')
      /*
        for (let calcFormID = 0; calcFormID < calcFormsID.length; calcFormID++) {
          const element = document.getElementById(calcFormsID[calcFormID]);
          element.classList.add('hidden')
        }
      */
        hiddenCalc.classList.remove('hidden')
    } else {
        upButton.classList.toggle('hidden')
        downButton.classList.toggle('hidden')
        hiddenCalc.classList.add('hidden')
    }
}

//FUNCTION TO TOGGLE ABOUT TEXT
function openAbout2() {
  document.getElementById("About-text").classList.remove("hidden");
}
function openAbout() {
  document.getElementById("About-text").classList.remove("hidden");
  asideContentEl.classList.remove('right-nav');
  overlayEl.classList.add('hidden');}
function closeAbout(){
  document.getElementById("About-text").classList.add("hidden")
}
document.getElementById("open-about2").addEventListener("click", openAbout2);
document.getElementById("open-about").addEventListener("click", openAbout);
document.getElementById("close-about").addEventListener("click", closeAbout);

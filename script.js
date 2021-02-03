let giftsetSectionFlexHeight = document.querySelector("#giftset__section__flex__grid");
let giftsetSectionPagesHeight = document.querySelector("#giftset__section__flex__pages");
giftsetSectionPagesHeight.style.height = giftsetSectionFlexHeight.offsetHeight + 1 + "px";
giftsetSectionFlexHeight.style.height = giftsetSectionFlexHeight.offsetHeight + 1 + "px";

function changeSize() {
    if(screen.width < 1300) {
        giftsetSectionPagesHeight.style.height = giftsetSectionFlexHeight.offsetHeight + 31 + "px";
        giftsetSectionFlexHeight.style.height = giftsetSectionFlexHeight.offsetHeight + 31 + "px";
    }
    if(screen.width < 650) {
        giftsetSectionPagesHeight.style.height = giftsetSectionFlexHeight.offsetHeight + 51 + "px";
        giftsetSectionFlexHeight.style.height = giftsetSectionFlexHeight.offsetHeight + 51 + "px";
    }
    giftsetSectionPagesHeight.style.height = giftsetSectionFlexHeight.offsetHeight + 1 + "px";
    giftsetSectionFlexHeight.style.height = giftsetSectionFlexHeight.offsetHeight + 1 + "px";
}

let priceSection11 = document.querySelector("#price__section__item1_1");
let priceSection12 = document.querySelector("#price__section__item1_2");
let priceSection21 = document.querySelector("#price__section__item2_1");
let priceSection22 = document.querySelector("#price__section__item2_2");

function priceSectionChanger() {
    if(priceSection11.offsetHeight > priceSection21.offsetHeight) {
        priceSection21.style.height = priceSection11.offsetHeight + 1 + "px";
        priceSection11.style.height = "auto";
    } else if(priceSection21.offsetHeight > priceSection11.offsetHeight) {
        priceSection11.style.height = priceSection21.offsetHeight + 1 + "px";
        priceSection21.style.height = "auto";
    }
    if(priceSection12.offsetHeight > priceSection22.offsetHeight) {
        priceSection22.style.height = priceSection12.offsetHeight + 1 + "px";
        priceSection12.style.height = "auto";
    } else if(priceSection22.offsetHeight > priceSection12.offsetHeight) {
        priceSection12.style.height = priceSection22.offsetHeight + 1 + "px";
        priceSection22.style.height = "auto";
    }
}

let arrowBtn = document.querySelector("#price__section__arrow");

function btnJump() {
    arrowBtn.style.animation = "btnJump 0.3s";
    setTimeout(() => arrowBtn.style.animation = "none" , 300);
    sliderOneRight();
}

let arrowBtn2 = document.querySelector("#personalized__section__arrow");

function btnJump2() {
    arrowBtn2.style.animation = "btnJump 0.3s";
    setTimeout(() => arrowBtn2.style.animation = "none" , 300);
    sliderTwoRight();
}



let sliderTwo = document.querySelector("#personalized__section__items");

let slide1 = 1;
let slide2 = 2;
let slide3 = 3;
let slide4 = 4;

let isItMoves = false;

function sliderTwoRight() {
    if(!isItMoves) {
        sliderTwo.style.transition = "all 1s";
        sliderTwo.style.transform = "translateX(-23.15%)";
        setTimeout(sliderTwoRightAfter , 1000);
        isItMoves = true;
    }
}
function sliderTwoRightAfter(){
    slide1++;
    slide2++;
    slide3++;
    slide4++;
    if(slide1 === 5) {
        slide1 = 1;
    }
    if(slide2 === 5) {
        slide2 = 1;
    }
    if(slide3 === 5) {
        slide3 = 1;
    }
    if(slide4 === 5) {
        slide4 = 1;
    }
    sliderTwo.style.transition = "none";
    sliderTwo.style.gridTemplateAreas = "'slider2_" + slide1 + " slider2_" + slide2 + " slider2_" + slide3 + " slider2_" + slide4 + "'";
    sliderTwo.style.transform = "none";
    isItMoves = false;
}


let sliderOne = document.querySelector("#price__section__items");

let slide11 = 1;
let slide22 = 2;
let slide33 = 3;

let isItMoves2 = false;

function sliderOneRight() {
    if(!isItMoves2) {
        sliderOne.style.transition = "all 1s";
        sliderOne.style.transform = "translateX(-32.2%)";
        setTimeout(sliderOneRightAfter , 1000);
        isItMoves2 = true;
    }
}
function sliderOneRightAfter(){
    slide11++;
    slide22++;
    slide33++;
    if(slide11 === 4) {
        slide11 = 1;
    }
    if(slide22 === 4) {
        slide22 = 1;
    }
    if(slide33 === 4) {
        slide33 = 1;
    }
    sliderOne.style.transition = "none";
    sliderOne.style.gridTemplateAreas = "'price" + slide11 + " price" + slide22 + " price" + slide33 + "'";
    sliderOne.style.transform = "none";
    isItMoves2 = false;
}

let text1 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ex temporibus minima harum tempora, nemo similique sequi enim veniam deleniti dolorum natus! Soluta necessitatibus, corrupti dolor aspernatur quam quaerat minus, sequi velit cumque accusamus commodi sed similique ratione atque aliquam. Facilis nemo corrupti odio laboriosam iure officiis. Hic, placeat minima, odit assumenda dolores consectetur harum eos tempore, cupiditate voluptate modi!";
let text2 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ex temporibus minima harum tempora, nemo similique sequi enim veniam deleniti dolorum natus! Soluta necessitatibus, corrupti dolor aspernatur quam quaerat minus, sequi velit cumque accusamus commodi sed similique ratione atque aliquam. Facilis nemo corrupti odio laboriosam iure officiis. Hic, placeat minima, odit assumenda dolores consectetur harum eos tempore, cupiditate voluptate modi!";
let text3 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ex temporibus minima harum tempora, nemo similique sequi enim veniam deleniti dolorum natus! Soluta necessitatibus, corrupti dolor aspernatur quam quaerat minus, sequi velit cumque accusamus commodi sed similique ratione atque aliquam. Facilis nemo corrupti odio laboriosam iure officiis. Hic, placeat minima, odit assumenda dolores consectetur harum eos tempore, cupiditate voluptate modi!";

let giftsetPage1 = document.querySelector("#giftset__section__flex__page1");
let giftsetPage2 = document.querySelector("#giftset__section__flex__page2");
let giftsetPage3 = document.querySelector("#giftset__section__flex__page3");

let giftsetSection = document.querySelector("#giftset__section__flex__grid");

let activebtn = 1;
function changeText1() {
    giftsetPage1.style.backgroundColor = "white";
    giftsetPage2.style.backgroundColor = "#f5f8fc";
    giftsetPage3.style.backgroundColor = "#f5f8fc";
    giftsetPage1.style.zIndex = "4";
    giftsetPage2.style.zIndex = "0";
    giftsetPage3.style.zIndex = "0";
    giftsetPage1.style.boxShadow = "0 5px 10px -3px lightgray";
    giftsetPage2.style.boxShadow = "none";
    giftsetPage3.style.boxShadow = "none";
    giftsetPage1.style.color = "#415167";
    giftsetPage2.style.color = "#bfc6cf";
    giftsetPage3.style.color = "#bfc6cf";
    activebtn = 1
    giftsetSection.classList.add("fakeBg1");
    setTimeout(() => {
        giftsetSection.classList.remove("fakeBg1");
        giftsetSection.classList.add("fakeBg2");
    }, 300);
    setTimeout(() => {
        giftsetSection.classList.remove("fakeBg2");
    }, 300);
}

function changeText2() {
    giftsetPage1.style.backgroundColor = "#f5f8fc";
    giftsetPage2.style.backgroundColor = "white";
    giftsetPage3.style.backgroundColor = "#f5f8fc";
    giftsetPage1.style.zIndex = "0";
    giftsetPage2.style.zIndex = "4";
    giftsetPage3.style.zIndex = "0";
    giftsetPage1.style.boxShadow = "none";
    giftsetPage2.style.boxShadow = "0 0 10px 1px lightgray";
    giftsetPage3.style.boxShadow = "none";
    giftsetPage1.style.color = "#bfc6cf";
    giftsetPage2.style.color = "#415167";
    giftsetPage3.style.color = "#bfc6cf";
    activebtn = 2;
    giftsetSection.classList.add("fakeBg1");
    setTimeout(() => {
        giftsetSection.classList.remove("fakeBg1");
        giftsetSection.classList.add("fakeBg2");
    }, 300);
    setTimeout(() => {
        giftsetSection.classList.remove("fakeBg2");
    }, 300);
}

function changeText3() {
    giftsetPage1.style.backgroundColor = "#f5f8fc";
    giftsetPage2.style.backgroundColor = "#f5f8fc";
    giftsetPage3.style.backgroundColor = "white";
    giftsetPage1.style.zIndex = "0";
    giftsetPage2.style.zIndex = "0";
    giftsetPage3.style.zIndex = "4";
    giftsetPage1.style.boxShadow = "none";
    giftsetPage2.style.boxShadow = "none";
    giftsetPage3.style.boxShadow = "0 -5px 10px -3px lightgray";
    giftsetPage1.style.color = "#bfc6cf";
    giftsetPage2.style.color = "#bfc6cf";
    giftsetPage3.style.color = "#415167";
    activebtn = 3;
    giftsetSection.classList.add("fakeBg1");
    setTimeout(() => {
        giftsetSection.classList.remove("fakeBg1");
        giftsetSection.classList.add("fakeBg2");
    }, 300);
    setTimeout(() => {
        giftsetSection.classList.remove("fakeBg2");
    }, 300);
}

giftsetPage1.onmouseover = function() {
    if(activebtn !== 1) {
        this.style.backgroundColor = "#e2e7ee";
    }
}
giftsetPage1.onmouseout = function() {
    if(activebtn !== 1)
    this.style.backgroundColor = "#f5f8fc";
}
giftsetPage2.onmouseover = function() {
    if(activebtn !== 2) {
        this.style.backgroundColor = "#e2e7ee";
    }
}
giftsetPage2.onmouseout = function() {
    if(activebtn !== 2)
    this.style.backgroundColor = "#f5f8fc";
}
giftsetPage3.onmouseover = function() {
    if(activebtn !== 3) {
        this.style.backgroundColor = "#e2e7ee";
    }
}
giftsetPage3.onmouseout = function() {
    if(activebtn !== 3)
    this.style.backgroundColor = "#f5f8fc";
}
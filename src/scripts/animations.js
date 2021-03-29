// Кроссбраузерность SVG спрайта
// svg4everybody();

// anim crosshair

const sectionPurpose = document.querySelector('.purpose');
const sectionFooter = document.querySelector('.footer');

// elements
const crosshair = document.getElementById('crosshair');
const line = document.querySelector('.down-line');

sectionPurpose.onmousemove = startedAnimation;
sectionFooter.onmousemove = startedAnimation;

window.innerWidth < 1243 ? sectionPurpose.onmousemove = null : false



function startedAnimation(e) {
    moveAnimation(e.pageX, e.pageY, crosshair, 20, 40, 80);
    moveAnimation(e.pageX, 0, line, 60, 0, 0);

}

function moveAnimation(x, y, obj, speed, transX, transY) {
    let curPosX = -Math.floor((x) / speed) + transX + 'px';
    let curPosY = -Math.floor((y) / speed) + transY + 'px';
    obj.style.transform = `translate(${curPosX}, ${curPosY})`;
}

// anim arrow 

const arrow = document.getElementById('arrow');

;

window.innerWidth < 978 ? arrow.style = '' : window.onscroll = startedScroll

function startedScroll() {
        changeScroll(arrow, 3220, 'arrowFly 1s linear forwards', 'arrowFlyBack 1s linear forwards');
    }
    

function changeScroll(obj, minTop, startAnim, backAnim) {
    let currentPos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body).scrollTop;
    if (currentPos >= minTop) {
        obj.style.animation = startAnim;
    } else {
        obj.style.animation = backAnim;
    }
    
}

// settings WOW

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null
});
wow.init();
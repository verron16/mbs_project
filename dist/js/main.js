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
const burger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');
const menuLogo = document.querySelector('.menu-logo');


burger.addEventListener('click', openMenu);

function openMenu() {
    burger.classList.toggle('opened');
    menu.classList.add('menu-sm');
    if (burger.classList.contains('opened')) {
        menuLogo.style.display = 'block';
    } else {
        closeMenu();
    }
}

function closeMenu() {
    menu.classList.remove('menu-sm');
}
const controlField = document.querySelectorAll('.modal-form-control');
const controlText = document.querySelector('.modal-form-control-placeholder');
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.contacts-btn-feedback');
const modalOverlay = document.querySelector('.modal-wrapper');
const btnCloseModal = document.querySelector('.modal-close-icon');


let lastClickedFeild = controlField[0];

controlField.forEach(node => node.addEventListener('click', addOffsetForm));

function addOffsetForm() {
    lastClickedFeild.firstChild.classList.remove('control-active');
    this.firstChild.classList.add('control-active');
    lastClickedFeild = this;
}


btnOpenModal.addEventListener('click', modalsWindow)

function modalsWindow() {
    openModal(modal, modalOverlay);
}


function openModal(modalWindow, overlay) {
    modalWindow.style.display = 'block';
    overlay.classList.add('active');
    if (isVisibleModal(modal)) {
        document.body.style.overflow = 'hidden';
        document.onclick = (e) => {
            if (e.target == modalOverlay || e.target == btnCloseModal) {
                closeModal(modal, modalOverlay)
            }
        }
    }
}

function closeModal(modalWindow, overlay) {
    modalWindow.style.display = 'none';
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function isVisibleModal(modal) { 
   return !!modal && !!( modal.offsetWidth || modal.offsetHeight || modal.getClientRects().length );
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMuanMiLCJtZW51LmpzIiwibW9kYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0JrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3QvtGB0YLRjCBTVkcg0YHQv9GA0LDQudGC0LBcbi8vIHN2ZzRldmVyeWJvZHkoKTtcblxuLy8gYW5pbSBjcm9zc2hhaXJcblxuY29uc3Qgc2VjdGlvblB1cnBvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHVycG9zZScpO1xuY29uc3Qgc2VjdGlvbkZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcblxuLy8gZWxlbWVudHNcbmNvbnN0IGNyb3NzaGFpciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcm9zc2hhaXInKTtcbmNvbnN0IGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bi1saW5lJyk7XG5cbnNlY3Rpb25QdXJwb3NlLm9ubW91c2Vtb3ZlID0gc3RhcnRlZEFuaW1hdGlvbjtcbnNlY3Rpb25Gb290ZXIub25tb3VzZW1vdmUgPSBzdGFydGVkQW5pbWF0aW9uO1xuXG53aW5kb3cuaW5uZXJXaWR0aCA8IDEyNDMgPyBzZWN0aW9uUHVycG9zZS5vbm1vdXNlbW92ZSA9IG51bGwgOiBmYWxzZVxuXG5cblxuZnVuY3Rpb24gc3RhcnRlZEFuaW1hdGlvbihlKSB7XG4gICAgbW92ZUFuaW1hdGlvbihlLnBhZ2VYLCBlLnBhZ2VZLCBjcm9zc2hhaXIsIDIwLCA0MCwgODApO1xuICAgIG1vdmVBbmltYXRpb24oZS5wYWdlWCwgMCwgbGluZSwgNjAsIDAsIDApO1xuXG59XG5cbmZ1bmN0aW9uIG1vdmVBbmltYXRpb24oeCwgeSwgb2JqLCBzcGVlZCwgdHJhbnNYLCB0cmFuc1kpIHtcbiAgICBsZXQgY3VyUG9zWCA9IC1NYXRoLmZsb29yKCh4KSAvIHNwZWVkKSArIHRyYW5zWCArICdweCc7XG4gICAgbGV0IGN1clBvc1kgPSAtTWF0aC5mbG9vcigoeSkgLyBzcGVlZCkgKyB0cmFuc1kgKyAncHgnO1xuICAgIG9iai5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7Y3VyUG9zWH0sICR7Y3VyUG9zWX0pYDtcbn1cblxuLy8gYW5pbSBhcnJvdyBcblxuY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3cnKTtcblxuO1xuXG53aW5kb3cuaW5uZXJXaWR0aCA8IDk3OCA/IGFycm93LnN0eWxlID0gJycgOiB3aW5kb3cub25zY3JvbGwgPSBzdGFydGVkU2Nyb2xsXG5cbmZ1bmN0aW9uIHN0YXJ0ZWRTY3JvbGwoKSB7XG4gICAgICAgIGNoYW5nZVNjcm9sbChhcnJvdywgMzIyMCwgJ2Fycm93Rmx5IDFzIGxpbmVhciBmb3J3YXJkcycsICdhcnJvd0ZseUJhY2sgMXMgbGluZWFyIGZvcndhcmRzJyk7XG4gICAgfVxuICAgIFxuXG5mdW5jdGlvbiBjaGFuZ2VTY3JvbGwob2JqLCBtaW5Ub3AsIHN0YXJ0QW5pbSwgYmFja0FuaW0pIHtcbiAgICBsZXQgY3VycmVudFBvcyA9ICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcbiAgICBpZiAoY3VycmVudFBvcyA+PSBtaW5Ub3ApIHtcbiAgICAgICAgb2JqLnN0eWxlLmFuaW1hdGlvbiA9IHN0YXJ0QW5pbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmouc3R5bGUuYW5pbWF0aW9uID0gYmFja0FuaW07XG4gICAgfVxuICAgIFxufVxuXG4vLyBzZXR0aW5ncyBXT1dcblxudmFyIHdvdyA9IG5ldyBXT1coe1xuICAgIGJveENsYXNzOiAnd293JyxcbiAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIG1vYmlsZTogdHJ1ZSxcbiAgICBsaXZlOiB0cnVlLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoYm94KSB7fSxcbiAgICBzY3JvbGxDb250YWluZXI6IG51bGxcbn0pO1xud293LmluaXQoKTsiLCJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWJhci1idXJnZXInKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1sb2dvJyk7XG5cblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xuXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LXNtJyk7XG4gICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5lZCcpKSB7XG4gICAgICAgIG1lbnVMb2dvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlTWVudSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zbScpO1xufSIsImNvbnN0IGNvbnRyb2xGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1mb3JtLWNvbnRyb2wnKTtcbmNvbnN0IGNvbnRyb2xUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm0tY29udHJvbC1wbGFjZWhvbGRlcicpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IGJ0bk9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cy1idG4tZmVlZGJhY2snKTtcbmNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJyk7XG5jb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlLWljb24nKTtcblxuXG5sZXQgbGFzdENsaWNrZWRGZWlsZCA9IGNvbnRyb2xGaWVsZFswXTtcblxuY29udHJvbEZpZWxkLmZvckVhY2gobm9kZSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkT2Zmc2V0Rm9ybSkpO1xuXG5mdW5jdGlvbiBhZGRPZmZzZXRGb3JtKCkge1xuICAgIGxhc3RDbGlja2VkRmVpbGQuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjb250cm9sLWFjdGl2ZScpO1xuICAgIHRoaXMuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb250cm9sLWFjdGl2ZScpO1xuICAgIGxhc3RDbGlja2VkRmVpbGQgPSB0aGlzO1xufVxuXG5cbmJ0bk9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsc1dpbmRvdylcblxuZnVuY3Rpb24gbW9kYWxzV2luZG93KCkge1xuICAgIG9wZW5Nb2RhbChtb2RhbCwgbW9kYWxPdmVybGF5KTtcbn1cblxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWxXaW5kb3csIG92ZXJsYXkpIHtcbiAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGlmIChpc1Zpc2libGVNb2RhbChtb2RhbCkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBkb2N1bWVudC5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbE92ZXJsYXkgfHwgZS50YXJnZXQgPT0gYnRuQ2xvc2VNb2RhbCkge1xuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwsIG1vZGFsT3ZlcmxheSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbFdpbmRvdywgb3ZlcmxheSkge1xuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xufVxuXG5mdW5jdGlvbiBpc1Zpc2libGVNb2RhbChtb2RhbCkgeyBcbiAgIHJldHVybiAhIW1vZGFsICYmICEhKCBtb2RhbC5vZmZzZXRXaWR0aCB8fCBtb2RhbC5vZmZzZXRIZWlnaHQgfHwgbW9kYWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcbn0iXX0=

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
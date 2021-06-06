const openModalsBtns = document.querySelectorAll('[data-modal-open]');
const closeModalsBtns = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay');

openModalsBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalOpen);
        openModal(modal);
    });
});

closeModalsBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
};

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
};


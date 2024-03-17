const modalButtons = document.querySelectorAll('[data-modal-button]');
console.log(modalButtons);

modalButtons.forEach(function(item){
    item.addEventListener('click',function(){
        const ModalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + ModalId);
        modal.classList.remove('hidden');

        const stProp = modal.querySelector('.modal-window');
        stProp.addEventListener('click', function (eventt){
            eventt.stopPropagation();
        })
    })
})

const modalClBut = document.querySelectorAll('[data-modal-close]');


modalClBut.forEach(function(item){
    item.addEventListener('click',function(){
        const itsModal = this.closest('[data-modal]');
        // this как раз будет кнопка по котороой событие клик
        // console.log('cliclOn Close')
        itsModal.classList.add('hidden');
    })
})

const modalFade = document.querySelectorAll('[data-modal]');

modalFade.forEach(function(item){
    item.addEventListener('click',function(){

        this.classList.add('hidden');
    })
})

// modal.querySelector('.modal-window').addEventListener('click', function(event){
//     // console.log(event);
//     event.stopPropagation();
// })
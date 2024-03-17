// console.log("modal!!!")

const button = document.querySelector( '  [data-modal-button] '   );
// console.log(button);
const modal = document.querySelector( '  [data-modal] '   );
const buttonClose= document.querySelector( '[data-modal-close]' );
// все элем найдены



// открываем прослушивая клик
button.addEventListener('click', function(){
    console.log('click1111');
    modal.classList.remove('hidden');
} )
// закрываем прослушивая клик на кн. закрытия
buttonClose.addEventListener('click',function(){
    console.log('click on close baton');
    modal.classList.add('hidden');
})


modal.addEventListener('click', function(){
    console.log('click on modal blur');
    modal.classList.add('hidden');

})

modal.querySelector('.modal-window').addEventListener('click', function(event){
    // console.log(event);
    event.stopPropagation();
})
// console.log('helo');
const button = document.querySelector('#button');
// console.log(button);

const content = document.querySelector('#content');


button.addEventListener('click', function(){


    console.log('click!!!')
    // content.classList.toggle('content-hidden')

    if (content.classList.toggle('content-hidden')){
        button.textContent = 'open block'
    } else{
        button.textContent = 'close block'
    }

    // if (content.classList.contains('content-hidden')){
    //     button.textContent = 'open block'
    // } else{
    //     button.textContent = 'close block'
    // }


});
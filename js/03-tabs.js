const tabHeaders = document.querySelectorAll(' [data-tab] ');
// все заголовки по дата атрибуту

// найти вске контент боксы
const contentBoxes = document.querySelectorAll('  [data-tab-content]  ')

// console.log(contentBoxes);

tabHeaders.forEach(function(item){
    item.addEventListener('click', function(){
        // console.log('tabClickkd');
        // console.log(this);
        

        //  КОНТЕНТ БОХ и скрыть
        contentBoxes.forEach(function(item){
            item.classList.add('hidden')
        })
        // выбрать нужный и показать
        // с дата дефис
        // this.dataset.tab;
        const contentBox = document.querySelector('#' + this.dataset.tab);
        console.log(contentBox);
        contentBox.classList.toggle('hidden');
        // remove
    })
})


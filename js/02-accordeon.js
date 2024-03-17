console.log('bubs');
const headers = document.querySelectorAll('[data-name="accordeon-title"]');
console.log(headers);

let i = 0;
headers.forEach(function(item){
    item.addEventListener('click', showContent);
    // no ()
    // console.log(`item detected${i}`)
    // i++;
});

function showContent(){
    this.nextElementSibling.classList.toggle('hidden');
}
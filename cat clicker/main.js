const count = document.querySelector('#count');
const image = document.querySelector('.cat');


image.onclick = function(){
    count.textContent++;
}
document.querySelector('.reset').onclick = function(){
    count.textContent = 0;
}
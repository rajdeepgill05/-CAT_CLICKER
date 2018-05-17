const count1 = document.querySelector('#count1');
const image1 = document.querySelector('.img1');
const count2 = document.querySelector('#count2');
const image2 = document.querySelector('.img2');

document.querySelector('.cat1n').textContent = "ABC";
document.querySelector('.cat2n').textContent = "XYZ";

image1.onclick = function(){
    count1.textContent++;
}
image2.onclick = function(){
    count2.textContent++;
}
document.querySelector('.reset1').onclick = function(){
    count1.textContent = 0;
}
document.querySelector('.reset2').onclick = function(){
    count2.textContent = 0;
}
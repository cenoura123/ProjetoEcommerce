var div = document.getElementById('img1');
var div2 = document.getElementById('img2');
var div3 = document.getElementById('img3');
var btn1 = document.getElementById('btn-id');
var btn2 = document.getElementById('btn-id2');
var btn3 = document.getElementById('btn-id3');

function Fone(){
    div2.style.display='none';
    div3.style.display='none';
    div.style.display='block';
};

function Fone2(){
    div.style.display='none';
    div3.style.display='none';
    div2.style.display='block';
};

function Fone3(){
    div.style.display='none';
    div2.style.display='none';
    div3.style.display='block';
};

btn1.addEventListener('click', Fone);
btn2.addEventListener('click', Fone2);
btn3.addEventListener('click', Fone3);
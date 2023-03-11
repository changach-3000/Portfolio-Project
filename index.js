let hover = document.getElementById('p2');

let hiddenDiv = document.getElementById('hide');

hover.addEventListener('mouseover',function handleMouseOver(){
    hiddenDiv.style.visibility= 'visible';
});

hover.addEventListener('mouseout',function handleMouseOut(){
    hiddenDiv.style.visibility= 'hidden';
});